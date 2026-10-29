/**
 * Monthly masterclass promo — single switch for the sitewide toaster.
 *
 * Modes:
 * - "live"   → weeks before the session: date + session links → /masterclass landing
 * - "replay" → after the session: send people to the current replay gate (EO signup)
 *
 * When Tim asks to "post up the replay" → set mode to "replay", point replayPath at the
 * month’s gate (e.g. /masterclassreplay), and refresh the post-signup YouTube URL on that page.
 * When promoting the next live session → set mode to "live", update sessions[] + toaster lines.
 */
export type MasterclassPromoMode = "live" | "replay";

export type MasterclassSession = {
  /** Short label shown as the clickable time link in the toaster. */
  label: string;
  /** Prefer /masterclass so the landing page owns RSVP; short links stay for ads. */
  href: string;
};

export const MASTERCLASS_PROMO = {
  /** Flip this when switching between live RSVP and replay signup. */
  mode: "replay" as MasterclassPromoMode,

  /** Primary live destination — the /masterclass landing page. */
  liveUrl: "/masterclass",

  /** Replay landing — `watch=1` auto-opens the Email Octopus popup on arrival. */
  replayPath: "/masterclass?watch=1",

  /**
   * Sitewide toaster copy — line 1 (lead) then line 2 (title).
   * /masterclass uses its own short top bar (“Watch the masterclass replay”).
   */
  toasterLine1: "Watch Masterclass Replay:",
  toasterLine2:
    "How I went from Overlooked to $300k Principal & Leadership Roles in Tech",

  /** Live RSVP options — one link per time slot. Empty when mode is "replay". */
  sessions: [
    {
      label: "Session 1: 28 Oct 4pm PT / 7pm ET · 29 Oct 10am AEST",
      href: "/masterclass",
    },
    {
      label: "Session 2: 29 Oct 8am BST / 7pm AEST",
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
