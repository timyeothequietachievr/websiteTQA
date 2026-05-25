/** Shared primary site navigation */

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
  },
  {
    title: "Playbooks",
    description: "Tiny how-to guides for specific situations. One topic. All action. Free.",
    href: "/free-resources#playbooks",
    cta: "See playbooks",
  },
  {
    title: "Newsletter",
    description: "One short, useful email a week. Tiny habits in your inbox. No fluff.",
    href: "/free-resources#newsletter",
    cta: "Subscribe",
  },
] as const;
