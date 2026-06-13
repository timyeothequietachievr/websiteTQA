/** Flip these when playbooks / newsletter are ready to ship. */
export const SITE_FEATURES = {
  playbooksComingSoon: true,
  newsletterComingSoon: false,
} as const;

/** Local/preview override: set NEXT_PUBLIC_NEWSLETTER_SIGNUP_ENABLED=true in .env.local */
export function isNewsletterSignupEnabled(): boolean {
  if (process.env.NEXT_PUBLIC_NEWSLETTER_SIGNUP_ENABLED === "true") {
    return true;
  }
  return !SITE_FEATURES.newsletterComingSoon;
}
