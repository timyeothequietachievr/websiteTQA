const NOTION_API = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

type NotionRichText = { type: "text"; text: { content: string } };

export type CrmContact = {
  pageId: string;
  email: string;
  logNotes: string;
  leadSources: string[];
};

function getNotionConfig() {
  const apiKey = process.env.NOTION_API_KEY?.trim();
  const databaseId = process.env.NOTION_CRM_DATABASE_ID?.trim();
  if (!apiKey || !databaseId) return null;
  return { apiKey, databaseId };
}

export function isNotionCrmConfigured() {
  return getNotionConfig() !== null;
}

async function notionFetch(path: string, init: RequestInit) {
  const config = getNotionConfig();
  if (!config) {
    throw new Error("Notion CRM is not configured.");
  }

  const res = await fetch(`${NOTION_API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });

  const body = await res.json().catch(() => null);
  if (!res.ok) {
    const message =
      body && typeof body === "object" && "message" in body && typeof body.message === "string"
        ? body.message
        : `Notion API error (${res.status})`;
    throw new Error(message);
  }
  return body;
}

function richText(content: string): NotionRichText[] {
  return [{ type: "text", text: { content: content.slice(0, 2000) } }];
}

function readPlainText(prop: unknown): string {
  if (!prop || typeof prop !== "object" || !("type" in prop)) return "";
  const typed = prop as { type: string };
  if (typed.type === "rich_text" && "rich_text" in typed && Array.isArray(typed.rich_text)) {
    return typed.rich_text
      .map((t) => (t && typeof t === "object" && "plain_text" in t ? String(t.plain_text) : ""))
      .join("");
  }
  return "";
}

function readEmail(prop: unknown): string {
  if (!prop || typeof prop !== "object" || !("type" in prop)) return "";
  const typed = prop as { type: string; email?: string | null };
  return typed.type === "email" && typed.email ? typed.email : "";
}

function readMultiSelect(prop: unknown): string[] {
  if (!prop || typeof prop !== "object" || !("type" in prop)) return [];
  const typed = prop as { type: string; multi_select?: { name: string }[] };
  if (typed.type !== "multi_select" || !typed.multi_select) return [];
  return typed.multi_select.map((o) => o.name);
}

function mapPage(page: { id: string; properties: Record<string, unknown> }): CrmContact | null {
  const email = readEmail(page.properties.Email);
  if (!email) return null;
  return {
    pageId: page.id,
    email,
    logNotes: readPlainText(page.properties["Log/Notes"]),
    leadSources: readMultiSelect(page.properties["Lead Source"]),
  };
}

export async function findCrmContactByEmail(email: string): Promise<CrmContact | null> {
  const config = getNotionConfig();
  if (!config) return null;

  const body = await notionFetch(`/databases/${config.databaseId}/query`, {
    method: "POST",
    body: JSON.stringify({
      page_size: 1,
      filter: {
        property: "Email",
        email: { equals: email },
      },
    }),
  });

  const results = body && typeof body === "object" && "results" in body ? body.results : [];
  if (!Array.isArray(results) || results.length === 0) return null;
  const page = results[0];
  if (!page || typeof page !== "object" || !("id" in page) || !("properties" in page)) return null;
  return mapPage(page as { id: string; properties: Record<string, unknown> });
}

export async function createCrmContact(input: {
  email: string;
  displayName: string;
  playbookTagLine: string;
}): Promise<CrmContact> {
  const config = getNotionConfig();
  if (!config) {
    throw new Error("Notion CRM is not configured.");
  }

  const today = new Date().toISOString().slice(0, 10);

  const page = await notionFetch("/pages", {
    method: "POST",
    body: JSON.stringify({
      parent: { database_id: config.databaseId },
      properties: {
        Name: { title: richText(input.displayName) },
        Email: { email: input.email },
        "Log/Notes": { rich_text: richText(input.playbookTagLine) },
        "Lead Source": { multi_select: [{ name: "Email" }] },
        Status: { status: { name: "Contacted" } },
        "Origin date": { date: { start: today } },
      },
    }),
  });

  if (!page || typeof page !== "object" || !("id" in page) || !("properties" in page)) {
    throw new Error("Notion returned an unexpected response when creating a contact.");
  }

  const mapped = mapPage(page as { id: string; properties: Record<string, unknown> });
  if (!mapped) {
    throw new Error("Could not read the new Notion contact.");
  }
  return mapped;
}

export async function appendPlaybookTagToContact(
  contact: CrmContact,
  playbookTagLine: string,
): Promise<void> {
  const tagKey = playbookTagLine.trim();
  if (!tagKey) return;

  const alreadyLogged = contact.logNotes.includes(tagKey);
  const nextNotes = alreadyLogged
    ? contact.logNotes
    : [contact.logNotes, tagKey].filter(Boolean).join("\n");

  await notionFetch(`/pages/${contact.pageId}`, {
    method: "PATCH",
    body: JSON.stringify({
      properties: {
        "Log/Notes": { rich_text: richText(nextNotes) },
      },
    }),
  });
}

export function formatPlaybookCrmTag(slug: string, title: string) {
  return `[playbook] ${title} (${slug})`;
}

export function deriveContactName(email: string) {
  const local = email.split("@")[0]?.replace(/[._+-]+/g, " ").trim();
  if (!local) return email;
  return local.replace(/\b\w/g, (c) => c.toUpperCase());
}
