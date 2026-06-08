/**
 * Social profile URLs — sourced from links.thequietachievr.com (May 2026)
 */

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/timyeo/",
  youtube: "https://www.youtube.com/@thequietachievr",
  threads: "https://www.threads.net/@thequietachievr",
  instagram: "https://www.instagram.com/thequietachievr",
  facebook: "https://www.facebook.com/thequietachievr",
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;

export const SOCIAL_LINK_ITEMS: ReadonlyArray<{
  platform: SocialPlatform;
  label: string;
  note: string;
}> = [
  { platform: "linkedin", label: "LinkedIn", note: "Longer essays and updates" },
  { platform: "youtube", label: "YouTube", note: "Talks & long-form" },
  { platform: "threads", label: "Threads", note: "Short thoughts" },
  { platform: "instagram", label: "Instagram", note: "Behind the scenes" },
  { platform: "facebook", label: "Facebook", note: "Follow along" },
];
