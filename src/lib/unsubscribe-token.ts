import { createHmac, timingSafeEqual } from "crypto";

const DEFAULT_TTL_SECONDS = 60 * 60 * 24 * 365;

function getSecret(): string {
  const secret =
    process.env.NEWSLETTER_UNSUBSCRIBE_SECRET?.trim() ||
    process.env.NEWSLETTER_ADMIN_SECRET?.trim();
  if (!secret) {
    throw new Error("NEWSLETTER_UNSUBSCRIBE_SECRET is not configured");
  }
  return secret;
}

function sign(email: string, exp: number): string {
  return createHmac("sha256", getSecret()).update(`${email}.${exp}`).digest("hex");
}

export function verifyUnsubscribeToken(
  email: string,
  exp: string | null,
  sig: string | null,
): boolean {
  if (!email || !exp || !sig) return false;

  const expNum = Number(exp);
  if (!Number.isFinite(expNum) || expNum < Math.floor(Date.now() / 1000)) {
    return false;
  }

  let expected: string;
  try {
    expected = sign(email, expNum);
  } catch {
    return false;
  }

  const a = Buffer.from(sig, "hex");
  const b = Buffer.from(expected, "hex");
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return false;
  }

  return true;
}

export function buildUnsubscribeUrl(email: string, siteUrl: string, ttlSeconds = DEFAULT_TTL_SECONDS): string {
  const base = siteUrl.replace(/\/$/, "");
  const exp = Math.floor(Date.now() / 1000) + ttlSeconds;
  const sig = sign(email, exp);
  const params = new URLSearchParams({
    email,
    exp: String(exp),
    sig,
  });
  return `${base}/api/unsubscribe?${params.toString()}`;
}

export function verifyAdminBearer(request: Request): boolean {
  const secret = process.env.NEWSLETTER_ADMIN_SECRET?.trim();
  if (!secret) return false;
  const auth = request.headers.get("authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  return token.length > 0 && token === secret;
}
