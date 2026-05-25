import type { Playbook, PlaybookSummary } from "./types";
import { beMoreVisibleAtWork } from "./content/be-more-visible-at-work";
import { handlingDifficultConversations } from "./content/handling-difficult-conversations";
import { interviewsForIntroverts } from "./content/interviews-for-introverts";
import { networkingForIntroverts } from "./content/networking-for-introverts";
import { newlyPromotedLeader } from "./content/newly-promoted-leader";
import { publicSpeakingForIntroverts } from "./content/public-speaking-for-introverts";
import { pushBackSayNoToxicBosses } from "./content/push-back-say-no-toxic-bosses";
import { sociallyAwkwardIntroverts } from "./content/socially-awkward-introverts";
import { workingBetterTogether } from "./content/working-better-together";

export const PLAYBOOKS: readonly Playbook[] = [
  networkingForIntroverts,
  newlyPromotedLeader,
  handlingDifficultConversations,
  beMoreVisibleAtWork,
  interviewsForIntroverts,
  publicSpeakingForIntroverts,
  workingBetterTogether,
  sociallyAwkwardIntroverts,
  pushBackSayNoToxicBosses,
] as const;

export const PLAYBOOK_SLUGS: readonly string[] = PLAYBOOKS.map((p) => p.slug);

export function getPlaybookBySlug(slug: string): Playbook | undefined {
  return PLAYBOOKS.find((p) => p.slug === slug);
}

export function getPlaybookSummaries(): readonly PlaybookSummary[] {
  return PLAYBOOKS.map(({ slug, title, shortTitle, tag, description, emoji }) => ({
    slug,
    title,
    shortTitle,
    tag,
    description,
    emoji,
  }));
}

export type { Playbook, PlaybookHabit, PlaybookSection, PlaybookSummary, PlaybookThirtyDayRow } from "./types";
