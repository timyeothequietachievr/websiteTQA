/**
 * Monthly masterclass promo — single switch for toaster + /masterclass short link.
 *
 * Modes:
 * - "live"   → weeks before the session: send people to Luma RSVP (sessions[] drive the toaster)
 * - "replay" → after the session: send people to the current replay gate (EO signup)
 *
 * When Tim asks to "post up the replay" → set mode to "replay", point replayPath at the
 * month’s gate (e.g. /masterclassreplayaug26), and refresh Luma URL next cycle.
 * When promoting the next live session → set mode to "live", update sessions[] + toaster lines.
 */
export type MasterclassPromoMode = "live" | "replay";

export type MasterclassSession = {
  /** Short label shown as the clickable time link in the toaster. */
  label: string;
  /** Prefer site short links (/masterclass01) so destinations stay editable in redirects. */
  href: string;
};

export const MASTERCLASS_PROMO = {
  /** Flip this when switching between live RSVP and replay signup. */
  mode: "live" as MasterclassPromoMode,

  /**
   * Fallback /masterclass destination when mode is "live".
   * Prefer the first session; update if a primary session changes.
   */
  liveUrl: "/masterclass01",

  /** Dedicated replay gate (Email Octopus popup). Keep stable across months. */
  replayPath: "/masterclassreplayaug26",

  /**
   * Sitewide toaster copy — line 1 (lead) then line 2 (title).
   * Live mode also renders sessions[] as signup links under the title.
   */
  toasterLine1: "Free Live Masterclass:",
  toasterLine2:
    "How I went from Overlooked to $300k Principal & Leadership Roles in Tech",

  /** Live RSVP options — one link per time slot. Empty when mode is "replay". */
  sessions: [
    {
      label: "Session 1: 28Sep 5pm PST/8pm ET · 29Sep 10amAEST",
      href: "/masterclass01",
    },
    {
      label: "Session 2: 29 Sep 9am BST / 6pmAEST",
      href: "/masterclass02",
    },
  ] satisfies MasterclassSession[],
} as const;

export function getMasterclassPromoHref(): string {
  return MASTERCLASS_PROMO.mode === "live"
    ? MASTERCLASS_PROMO.liveUrl
    : MASTERCLASS_PROMO.replayPath;
}

export function getMasterclassRedirectDestination(): string {
  return getMasterclassPromoHref();
}
