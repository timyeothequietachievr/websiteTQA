export type BioAttributionPayload = {
  phid?: string;
  link_id?: string;
  link_text?: string;
  destination_kind?: string;
  ts?: number;
};

export function readBioAttributionCookie(): BioAttributionPayload | null {
  if (typeof document === "undefined") {
    return null;
  }

  const match = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("tqa_attribution="));

  if (!match) {
    return null;
  }

  try {
    return JSON.parse(
      decodeURIComponent(match.slice("tqa_attribution=".length)),
    ) as BioAttributionPayload;
  } catch {
    return null;
  }
}

export function clearBioAttributionCookie(): void {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie =
    "tqa_attribution=; Domain=.thequietachievr.com; Path=/; Max-Age=0; SameSite=Lax; Secure";
}

export function readBioUrlParams(search: string): {
  bioDistinctId?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  source?: string;
} {
  const params = new URLSearchParams(search);

  return {
    bioDistinctId: params.get("tqa_phid") ?? undefined,
    utm_source: params.get("utm_source") ?? undefined,
    utm_medium: params.get("utm_medium") ?? undefined,
    utm_campaign: params.get("utm_campaign") ?? undefined,
    source: params.get("source") ?? undefined,
  };
}
