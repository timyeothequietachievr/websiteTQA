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

function getConfig() {
  const apiKey = process.env.EMAILOCTOPUS_API_KEY?.trim();
  const listId = process.env.EMAILOCTOPUS_FREE_CHAPTER_LIST_ID?.trim();
  if (!apiKey || !listId) {
    return null;
  }
  return { apiKey, listId };
}

export function isEmailOctopusConfigured() {
  return getConfig() !== null;
}

/** Subscribe an email to the free-chapter list (triggers your Email Octopus automation). */
export async function createFreeChapterContact(email: string): Promise<CreateListContactResult> {
  const config = getConfig();
  if (!config) {
    return { ok: false, message: "Email signup is not configured yet." };
  }

  const tag = process.env.EMAILOCTOPUS_FREE_CHAPTER_TAG?.trim() || "free-chapter";

  const res = await fetch(
    `${EMAIL_OCTOPUS_API}/lists/${encodeURIComponent(config.listId)}/contacts`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: config.apiKey,
        email_address: email,
        tags: [tag],
        status: "SUBSCRIBED",
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
