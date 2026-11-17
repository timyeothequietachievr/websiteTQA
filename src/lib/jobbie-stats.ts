export type JobbiePublicStats = {
  /** Calendar date in Australia/Sydney as DDMMYYYY, e.g. 15112026 */
  asOf: string;
  rolesFound: number;
};

/** Display helper: 15112026 → 15/11/2026 */
export function formatAsOfDisplay(asOf: string): string {
  const raw = asOf.trim();
  if (/^\d{8}$/.test(raw)) {
    return `${raw.slice(0, 2)}/${raw.slice(2, 4)}/${raw.slice(4)}`;
  }
  return raw;
}

/**
 * Last known live snapshot from Jobbie (js_jobs) when the remote check is unavailable.
 * Keep these in sync: rolesFound + asOf (DDMMYYYY, Australia/Sydney) from the last successful count.
 */
const FALLBACK_STATS: JobbiePublicStats = {
  asOf: "18112026",
  rolesFound: 4098,
};

const PUBLIC_STATS_URL =
  process.env.JOBBIE_STATS_URL ??
  "https://jobbie.thequietachievr.com/api/job-search/public/stats";

export function asOfDdmmyyyy(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Australia/Sydney",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).formatToParts(now);
  const day = parts.find((p) => p.type === "day")?.value ?? "01";
  const month = parts.find((p) => p.type === "month")?.value ?? "01";
  const year = parts.find((p) => p.type === "year")?.value ?? "1970";
  return `${day}${month}${year}`;
}

export function formatRolesFound(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}

async function countFromJobbieSupabase(): Promise<number | null> {
  const url = process.env.JOBBIE_SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.JOBBIE_SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;

  const res = await fetch(`${url}/rest/v1/js_jobs?select=id`, {
    method: "GET",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      Prefer: "count=exact",
      Range: "0-0",
    },
    // Revalidate once per day — marketing page does not need live second-by-second counts.
    next: { revalidate: 86400 },
  });

  if (!res.ok) return null;
  const range = res.headers.get("content-range");
  // content-range: 0-0/3648
  const total = range?.split("/")[1];
  if (!total || total === "*") return null;
  const n = Number(total);
  return Number.isFinite(n) ? n : null;
}

async function countFromPublicApi(): Promise<JobbiePublicStats | null> {
  const res = await fetch(PUBLIC_STATS_URL, {
    headers: { Accept: "application/json" },
    next: { revalidate: 86400 },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { asOf?: string; rolesFound?: number };
  if (typeof data.rolesFound !== "number" || !Number.isFinite(data.rolesFound)) {
    return null;
  }
  return {
    asOf:
      typeof data.asOf === "string" && /^\d{8}$/.test(data.asOf)
        ? data.asOf
        : asOfDdmmyyyy(),
    rolesFound: Math.max(0, Math.floor(data.rolesFound)),
  };
}

/**
 * Roles found for the /jobbie hero.
 * Prefers a direct Jobbie Supabase count (JOBBIE_SUPABASE_*), then the public Jobbie stats URL,
 * then a static fallback. Revalidates once per day.
 */
export async function getJobbiePublicStats(): Promise<JobbiePublicStats> {
  try {
    const fromDb = await countFromJobbieSupabase();
    if (fromDb != null) {
      return { asOf: asOfDdmmyyyy(), rolesFound: fromDb };
    }
  } catch {
    // fall through
  }

  try {
    const fromApi = await countFromPublicApi();
    if (fromApi) return fromApi;
  } catch {
    // fall through
  }

  return FALLBACK_STATS;
}
