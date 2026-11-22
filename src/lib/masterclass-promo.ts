/**
 * Monthly masterclass promo — single switch for the sitewide toaster.
 *
 * Modes:
 * - "live"   → weeks before the session: date + title → /masterclass landing
 * - "replay" → after the session: send people to the current replay gate (EO signup)
 *
 * When Tim asks to "post up the replay" → set mode to "replay", point replayPath at the
 * month’s gate (e.g. /masterclassreplay), and refresh the post-signup YouTube URL on that page.
 * When promoting the next live session → set mode to "live", update toaster lines.
 */
export type MasterclassPromoMode = "live" | "replay";

export type MasterclassSession = {
  /** Short label shown as the clickable time link in the toaster (Sep/Oct dual-session layout). */
  label: string;
  /** Prefer /masterclass so the landing page owns RSVP; short links stay for ads. */
  href: string;
};

export const MASTERCLASS_PROMO = {
  /** Flip this when switching between live RSVP and replay signup. */
  mode: "live" as MasterclassPromoMode,

  /** Primary live destination — the /masterclass landing page. */
  liveUrl: "/masterclass",

  /** Replay landing — `watch=1` auto-opens the Email Octopus popup on arrival. */
  replayPath: "/masterclass?watch=1",

  /**
   * Sitewide toaster copy — Aug 2-line layout:
   * line 1 = lead + dates, line 2 = title.
   */
  toasterLine1: "Free Live Masterclass (3 Dec AU | 2 Dec US):",
  toasterLine2:
    "How I went from Overlooked to $300k Principal, Staff & Leadership Roles",

  /**
   * Dual-session labels kept for reference / short links.
   * Not rendered in the current Aug-style toaster.
   */
  sessions: [
    {
      label: "Session 1: 2 Dec 2:55pm PT / 5:55pm ET · 3 Dec 9:55am AEST",
      href: "/masterclass",
    },
    {
      label: "Session 2: 3 Dec 7:55am GMT / 6:55pm AEST",
      href: "/masterclass",
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
