const EMAIL_OCTOPUS_API = "https://emailoctopus.com/api/1.6";

export type EmailOctopusContactStatus = "SUBSCRIBED" | "UNSUBSCRIBED" | "PENDING";

export type CreateListContactResult =
  | { ok: true; status: EmailOctopusContactStatus; alreadyExists?: boolean }
  | { ok: false; message: string };

type EmailOctopusErrorBody = {
  error?: { code?: string; message?: string };
};

type EmailOctopusSuccessBody = {
  status?: EmailOctopusContactStatus;
};

async function addListContact(
  config: { apiKey: string; listId: string },
  email: string,
  options?: { tags?: string[]; status?: EmailOctopusContactStatus },
): Promise<CreateListContactResult> {
  const res = await fetch(
    `${EMAIL_OCTOPUS_API}/lists/${encodeURIComponent(config.listId)}/contacts`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: config.apiKey,
        email_address: email,
        ...(options?.tags?.length ? { tags: options.tags } : {}),
        status: options?.status ?? "SUBSCRIBED",
      }),
    },
  );

  const body = (await res.json().catch(() => null)) as
    | EmailOctopusSuccessBody
    | EmailOctopusErrorBody
    | null;

  if (res.ok) {
    return {
      ok: true,
      status: body && "status" in body && body.status ? body.status : "SUBSCRIBED",
    };
  }

  const code = body && "error" in body ? body.error?.code : undefined;
  if (code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
    return { ok: true, status: "SUBSCRIBED", alreadyExists: true };
  }

  const message =
    body && "error" in body && body.error?.message
      ? body.error.message
      : "Could not subscribe right now. Please try again.";
  return { ok: false, message };
}

function getFreeChapterConfig() {
  const apiKey = process.env.EMAILOCTOPUS_API_KEY?.trim();
  const listId = process.env.EMAILOCTOPUS_FREE_CHAPTER_LIST_ID?.trim();
  if (!apiKey || !listId) return null;
  return { apiKey, listId };
}

function getNewsletterConfig() {
  const apiKey = process.env.EMAILOCTOPUS_API_KEY?.trim();
  const listId = process.env.EMAILOCTOPUS_NEWSLETTER_LIST_ID?.trim();
  if (!apiKey || !listId) return null;
  return { apiKey, listId };
}

async function findListContactStatus(
  config: { apiKey: string; listId: string },
  email: string,
): Promise<EmailOctopusContactStatus | null> {
  let page = 1;
  while (page <= 20) {
    const res = await fetch(
      `${EMAIL_OCTOPUS_API}/lists/${encodeURIComponent(config.listId)}/contacts?api_key=${encodeURIComponent(config.apiKey)}&page=${page}`,
    );
    const data = (await res.json().catch(() => null)) as {
      data?: Array<{ email_address: string; status: EmailOctopusContactStatus }>;
      paging?: { next?: string };
    } | null;
    const hit = data?.data?.find((c) => c.email_address === email);
    if (hit) return hit.status;
    if (!data?.paging?.next) break;
    page += 1;
  }
  return null;
}

function getPlaybooksConfig() {
  const apiKey = process.env.EMAILOCTOPUS_API_KEY?.trim();
  const listId =
    process.env.EMAILOCTOPUS_PLAYBOOKS_LIST_ID?.trim() ||
    process.env.EMAILOCTOPUS_FREE_CHAPTER_LIST_ID?.trim();
  if (!apiKey || !listId) return null;
  return { apiKey, listId };
}

export function isEmailOctopusConfigured() {
  return getFreeChapterConfig() !== null;
}

export function isNewsletterEmailOctopusConfigured() {
  return getNewsletterConfig() !== null;
}

/** Subscribe an email to the free-chapter list (triggers your Email Octopus automation). */
export async function createFreeChapterContact(email: string): Promise<CreateListContactResult> {
  const config = getFreeChapterConfig();
  if (!config) {
    return { ok: false, message: "Email signup is not configured yet." };
  }

  const tag = process.env.EMAILOCTOPUS_FREE_CHAPTER_TAG?.trim() || "free-chapter";
  return addListContact(config, email, { tags: [tag] });
}

/** Homepage / site newsletter signup. */
export async function createNewsletterContact(
  email: string,
  name?: string,
): Promise<CreateListContactResult> {
  const config = getNewsletterConfig();
  if (!config) {
    return { ok: false, message: "Newsletter signup is not configured yet." };
  }

  const tag = process.env.EMAILOCTOPUS_NEWSLETTER_TAG?.trim() || "newsletter";
  const fields: Record<string, string> = {};
  if (name?.trim()) {
    fields.FirstName = name.trim();
  }

  const res = await fetch(
    `${EMAIL_OCTOPUS_API}/lists/${encodeURIComponent(config.listId)}/contacts`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: config.apiKey,
        email_address: email,
        tags: [tag],
        // Omit status — EO uses PENDING when double opt-in is on, SUBSCRIBED when off.
        ...(Object.keys(fields).length ? { fields } : {}),
      }),
    },
  );

  const body = (await res.json().catch(() => null)) as
    | EmailOctopusSuccessBody
    | EmailOctopusErrorBody
    | null;

  if (res.ok) {
    return {
      ok: true,
      status: body && "status" in body && body.status ? body.status : "SUBSCRIBED",
    };
  }

  const code = body && "error" in body ? body.error?.code : undefined;
  if (code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
    const existingStatus = await findListContactStatus(config, email);
    return {
      ok: true,
      status: existingStatus ?? "SUBSCRIBED",
      alreadyExists: true,
    };
  }

  const message =
    body && "error" in body && body.error?.message
      ? body.error.message
      : "Could not subscribe right now. Please try again.";
  return { ok: false, message };
}

/** Subscribe + tag for playbook delivery automation (first browser access). */
export async function createPlaybookContact(
  email: string,
  playbookSlug: string,
): Promise<CreateListContactResult> {
  const config = getPlaybooksConfig();
  if (!config) {
    return { ok: false, message: "Playbook email delivery is not configured yet." };
  }

  const baseTag = process.env.EMAILOCTOPUS_PLAYBOOKS_TAG?.trim() || "playbook";
  const tags = [baseTag, `${baseTag}-${playbookSlug}`];
  return addListContact(config, email, { tags });
}

/** List IDs used for global opt-out (newsletter + playbooks + legacy lists). */
export function getEmailOctopusOptOutListIds(): string[] {
  const ids = [
    process.env.EMAILOCTOPUS_NEWSLETTER_LIST_ID?.trim(),
    process.env.EMAILOCTOPUS_FREE_CHAPTER_LIST_ID?.trim(),
    process.env.EMAILOCTOPUS_PLAYBOOKS_LIST_ID?.trim(),
  ].filter(Boolean) as string[];
  return [...new Set(ids)];
}
