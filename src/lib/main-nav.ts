/** Shared primary site navigation */

import { SITE_FEATURES } from "@/lib/site-features";

export const MAIN_NAV = [
  { name: "Coaching", href: "/coaching" },
  { name: "Book", href: "/book" },
  { name: "Speaking", href: "/speaking" },
  { name: "School", href: "/#school" },
  { name: "Free Resources", href: "/free-resources" },
  { name: "About", href: "/about" },
] as const;

export const FREE_RESOURCES = [
  {
    title: "Podcast",
    description: "Watch and listen to Tim on other people's shows — quiet leadership, introverts at work, and more.",
    href: "/free-resources#podcast",
    cta: "Browse episodes",
    comingSoon: false,
  },
  {
    title: "Playbooks",
    description: "Tiny how-to guides for specific situations. One topic. All action. Free.",
    href: "/free-resources#playbooks",
    cta: SITE_FEATURES.playbooksComingSoon ? "Coming soon" : "See playbooks",
    comingSoon: SITE_FEATURES.playbooksComingSoon,
  },
  {
    title: "Newsletter",
    description: "One short, useful email a week. Tiny habits in your inbox. No fluff.",
    href: "/free-resources#newsletter",
    cta: SITE_FEATURES.newsletterComingSoon ? "Coming soon" : "Subscribe",
    comingSoon: SITE_FEATURES.newsletterComingSoon,
  },
] as const;
