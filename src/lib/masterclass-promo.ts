/**
 * Monthly masterclass promo — single switch for toaster + /masterclass short link.
 *
 * Modes:
 * - "live"   → weeks before the session: send people to the Luma RSVP page
 * - "replay" → after the session: send people to the current replay gate (EO signup)
 *
 * When Tim asks to "post up the replay" → set mode to "replay", point replayPath at the
 * month’s gate (e.g. /masterclassreplayaug26), and refresh Luma URL next cycle.
 * When promoting the next live session → set mode to "live" and update liveUrl + toaster lines.
 */
export type MasterclassPromoMode = "live" | "replay";

export const MASTERCLASS_PROMO = {
  /** Flip this when switching between live RSVP and replay signup. */
  mode: "replay" as MasterclassPromoMode,

  /** Current Luma event — update each month when a new session is scheduled. */
  liveUrl: "https://luma.com/obd03az7",

  /** Dedicated replay gate (Email Octopus popup). Keep stable across months. */
  replayPath: "/masterclassreplayaug26",

  /**
   * Sitewide toaster copy — line 1 (lead) then line 2 (title).
   * Arrow is rendered separately after line 2.
   */
  toasterLine1: "Watch Masterclass Replay:",
  toasterLine2:
    "How I went from Overlooked to $300k Principal & Leadership Roles in Tech",
} as const;

export function getMasterclassPromoHref(): string {
  return MASTERCLASS_PROMO.mode === "live"
    ? MASTERCLASS_PROMO.liveUrl
    : MASTERCLASS_PROMO.replayPath;
}

export function getMasterclassRedirectDestination(): string {
  return getMasterclassPromoHref();
}
