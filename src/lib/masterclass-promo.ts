/**
 * Monthly masterclass promo — single switch for toaster + /masterclass short link.
 *
 * Modes:
 * - "live"   → weeks before the session: send people to the Luma RSVP page
 * - "replay" → after the session: send people to /masterclassreplay (EO signup for replay links)
 *
 * When Tim asks to "post up the replay" → set mode to "replay" (and refresh Luma URL next cycle).
 * When promoting the next live session → set mode to "live" and update liveUrl + toaster lines.
 */
export type MasterclassPromoMode = "live" | "replay";

export const MASTERCLASS_PROMO = {
  /** Flip this when switching between live RSVP and replay signup. */
  mode: "live" as MasterclassPromoMode,

  /** Current Luma event — update each month when a new session is scheduled. */
  liveUrl: "https://luma.com/obd03az7",

  /** Dedicated replay gate (Email Octopus popup). Keep stable across months. */
  replayPath: "/masterclassreplay",

  /**
   * Sitewide toaster copy — line 1 (schedule) then line 2 (title).
   * Arrow is rendered separately after line 2.
   */
  toasterLine1: "Free Live Masterclass (25Aug AU | 24Aug US):",
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
