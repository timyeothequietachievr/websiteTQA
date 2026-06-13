import { findGhostMemberByEmail, getGhostAdminConfig, unsubscribeGhostMember } from "@/lib/ghost-admin";
import { getEmailOctopusOptOutListIds } from "@/lib/emailoctopus";

const NOTION_API = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";
const CRM_DATABASE_ID =
  process.env.NOTION_CRM_DATABASE_ID?.trim() || "c5441716da28820393c9812a85364740";

type NotionPage = { id: string; properties: Record<string, unknown> };

function getNotionToken(): string | null {
  return process.env.NOTION_API_KEY?.trim() || process.env.NOTION_INTEGRATION_TOKEN?.trim() || null;
}

async function notionFetch<T>(path: string, init: RequestInit & { json?: unknown } = {}): Promise<T> {
  const token = getNotionToken();
  if (!token) throw new Error("Notion is not configured");

  const { json, headers: initHeaders, ...rest } = init;
  const headers = new Headers(initHeaders);
  headers.set("Authorization", `Bearer ${token}`);
  headers.set("Notion-Version", NOTION_VERSION);
  if (json !== undefined) headers.set("Content-Type", "application/json");

  const response = await fetch(`${NOTION_API}${path}`, {
    ...rest,
    headers,
    body: json !== undefined ? JSON.stringify(json) : rest.body,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Notion API ${response.status}: ${text}`);
  }

  return response.json() as Promise<T>;
}

function readMultiSelect(prop: unknown): string[] {
  if (!prop || typeof prop !== "object") return [];
  const p = prop as { multi_select?: Array<{ name?: string }> };
  return (p.multi_select ?? []).map((o) => o.name).filter(Boolean) as string[];
}

async function findAllCrmPagesByEmail(email: string): Promise<NotionPage[]> {
  const results: NotionPage[] = [];
  let cursor: string | undefined;

  do {
    const data = await notionFetch<{ results: NotionPage[]; has_more: boolean; next_cursor: string | null }>(
      `/databases/${CRM_DATABASE_ID}/query`,
      {
        method: "POST",
        json: {
          filter: { property: "Email", email: { equals: email } },
          page_size: 100,
          ...(cursor ? { start_cursor: cursor } : {}),
        },
      },
    );
    results.push(...data.results);
    cursor = data.has_more && data.next_cursor ? data.next_cursor : undefined;
  } while (cursor);

  return results;
}

async function optOutNotionCrm(email: string): Promise<number> {
  const pages = await findAllCrmPagesByEmail(email);
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Australia/Melbourne" });

  for (const page of pages) {
    const tags = readMultiSelect(page.properties["Newsletter tags"]);
    const mergedTags = Array.from(new Set([...tags, "unsubscribed"]));

    await notionFetch(`/pages/${page.id}`, {
      method: "PATCH",
      json: {
        properties: {
          "Sequence stage": { select: { name: "Complete" } },
          "Campaign slug": { rich_text: [] },
          "Campaign step": { number: 0 },
          "Email sequence": { select: { name: "Complete" } },
          "Newsletter tags": { multi_select: mergedTags.map((name) => ({ name })) },
          "Last sequence email": { date: { start: today } },
        },
      },
    });
  }

  return pages.length;
}

async function optOutEmailOctopus(email: string): Promise<boolean> {
  const apiKey = process.env.EMAILOCTOPUS_API_KEY?.trim();
  if (!apiKey) return false;

  const listIds = getEmailOctopusOptOutListIds();
  if (listIds.length === 0) return false;

  let any = false;
  for (const listId of listIds) {
    const res = await fetch(`https://emailoctopus.com/api/1.6/lists/${encodeURIComponent(listId)}/contacts`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        email_address: email,
        status: "UNSUBSCRIBED",
      }),
    });
    if (res.ok) any = true;
  }

  return any;
}

export type OptOutResult = {
  email: string;
  notionPages: number;
  ghost: boolean;
  emailOctopus: boolean;
};

export async function optOutEmail(
  email: string,
  options?: { ghostMemberId?: string },
): Promise<OptOutResult> {
  const normalized = email.trim().toLowerCase();
  if (!normalized) {
    throw new Error("Email is required");
  }

  let ghostUpdated = false;
  if (getGhostAdminConfig()) {
    try {
      const memberId = options?.ghostMemberId ?? (await findGhostMemberByEmail(normalized))?.id;
      if (memberId) {
        await unsubscribeGhostMember(memberId);
        ghostUpdated = true;
      }
    } catch (error) {
      console.error("[opt-out] Ghost update failed:", error);
    }
  }

  const notionPages = getNotionToken() ? await optOutNotionCrm(normalized) : 0;
  const emailOctopus = await optOutEmailOctopus(normalized);

  return {
    email: normalized,
    notionPages,
    ghost: ghostUpdated,
    emailOctopus,
  };
}
