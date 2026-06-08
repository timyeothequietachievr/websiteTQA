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

function melbourneToday(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Australia/Melbourne" });
}

async function findCrmByEmail(email: string): Promise<NotionPage | null> {
  const data = await notionFetch<{ results: NotionPage[] }>(`/databases/${CRM_DATABASE_ID}/query`, {
    method: "POST",
    json: {
      filter: { property: "Email", email: { equals: email } },
      page_size: 1,
    },
  });
  return data.results[0] ?? null;
}

export function isNotionCrmConfigured(): boolean {
  return Boolean(getNotionToken());
}

/** Mirror Workflow A: create or update CRM when someone subscribes via the site. */
export async function upsertNewsletterSubscriberCrm(options: {
  email: string;
  ghostMemberId: string;
  name?: string;
}): Promise<"created" | "updated"> {
  const email = options.email.trim().toLowerCase();
  const page = await findCrmByEmail(email);
  const today = melbourneToday();

  if (!page) {
    await notionFetch("/pages", {
      method: "POST",
      json: {
        parent: { database_id: CRM_DATABASE_ID },
        properties: {
          Name: {
            title: [{ text: { content: options.name?.trim() || email } }],
          },
          Email: { email },
          "Ghost Member ID": { rich_text: [{ text: { content: options.ghostMemberId } }] },
          "Origin date": { date: { start: today } },
        },
      },
    });
    return "created";
  }

  const tags = readMultiSelect(page.properties["Newsletter tags"]).filter((t) => t !== "unsubscribed");

  await notionFetch(`/pages/${page.id}`, {
    method: "PATCH",
    json: {
      properties: {
        "Ghost Member ID": { rich_text: [{ text: { content: options.ghostMemberId } }] },
        "Newsletter tags": { multi_select: tags.map((name) => ({ name })) },
      },
    },
  });
  return "updated";
}
