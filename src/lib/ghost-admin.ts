import { createHmac } from "crypto";

const TOKEN_TTL_SECONDS = 300;

function base64UrlEncode(value: string | Buffer): string {
  const buffer = typeof value === "string" ? Buffer.from(value, "utf8") : value;
  return buffer.toString("base64url");
}

export function createGhostAdminToken(adminApiKey: string): string {
  const [id, secret] = adminApiKey.split(":");
  if (!id || !secret) {
    throw new Error("GHOST_ADMIN_API_KEY must be in id:secret format");
  }

  const header = base64UrlEncode(JSON.stringify({ alg: "HS256", typ: "JWT", kid: id }));
  const now = Math.floor(Date.now() / 1000);
  const payload = base64UrlEncode(
    JSON.stringify({
      iat: now,
      exp: now + TOKEN_TTL_SECONDS,
      aud: "/admin/",
    }),
  );

  const signature = createHmac("sha256", Buffer.from(secret, "hex"))
    .update(`${header}.${payload}`)
    .digest("base64url");

  return `${header}.${payload}.${signature}`;
}

export function getGhostAdminConfig() {
  const url = process.env.GHOST_URL?.replace(/\/$/, "");
  const key = process.env.GHOST_ADMIN_API_KEY;
  if (!url || !key) return null;
  return { url, key };
}

export async function ghostAdminFetch<T>(
  path: string,
  init: RequestInit & { json?: unknown } = {},
): Promise<T> {
  const config = getGhostAdminConfig();
  if (!config) {
    throw new Error("Ghost is not configured");
  }

  const { json, headers: initHeaders, ...rest } = init;
  const headers = new Headers(initHeaders);
  headers.set("Authorization", `Ghost ${createGhostAdminToken(config.key)}`);
  headers.set("Accept-Version", "v6.0");
  if (json !== undefined) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${config.url}/ghost/api/admin${path}`, {
    ...rest,
    headers,
    body: json !== undefined ? JSON.stringify(json) : rest.body,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Ghost API ${response.status}: ${text}`);
  }

  return response.json() as Promise<T>;
}

type GhostNewsletter = { id: string; name?: string };

type GhostMember = {
  id: string;
  email: string;
  name?: string | null;
  newsletters?: GhostNewsletter[];
};

type MembersListResponse = {
  members: GhostMember[];
};

export async function findGhostMemberByEmail(email: string): Promise<GhostMember | null> {
  const data = await ghostAdminFetch<MembersListResponse>(
    `/members/?filter=email:${encodeURIComponent(email)}&limit=1`,
  );
  return data.members[0] ?? null;
}

async function getDefaultNewsletterId(): Promise<string> {
  const data = await ghostAdminFetch<{ newsletters: GhostNewsletter[] }>("/newsletters/");
  const id = data.newsletters[0]?.id;
  if (!id) throw new Error("No Ghost newsletter configured");
  return id;
}

export async function unsubscribeGhostMember(memberId: string): Promise<void> {
  await ghostAdminFetch<MembersListResponse>(`/members/${memberId}/`, {
    method: "PUT",
    json: {
      members: [{ newsletters: [] }],
    },
  });
}

export async function subscribeGhostMember(email: string, name?: string): Promise<GhostMember> {
  const newsletterId = await getDefaultNewsletterId();
  const newsletters = [{ id: newsletterId }];
  const existing = await findGhostMemberByEmail(email);

  if (existing) {
    const data = await ghostAdminFetch<MembersListResponse>(`/members/${existing.id}/`, {
      method: "PUT",
      json: {
        members: [
          {
            newsletters,
            ...(name ? { name } : {}),
          },
        ],
      },
    });
    return data.members[0];
  }

  const data = await ghostAdminFetch<MembersListResponse>("/members/", {
    method: "POST",
    json: {
      members: [
        {
          email,
          newsletters,
          ...(name ? { name } : {}),
        },
      ],
    },
  });
  return data.members[0];
}
