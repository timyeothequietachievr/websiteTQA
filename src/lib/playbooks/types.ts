export type PlaybookHabit = {
  title: string;
  problem: string;
  fix: string;
  highlight?: string;
  bullets?: readonly string[];
};

export type PlaybookSection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

export type PlaybookThirtyDayRow = {
  week: string;
  focus: string;
  outcome: string;
};

export type Playbook = {
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  description: string;
  emoji: string;
  premise: string;
  introLine: string;
  intro: PlaybookSection;
  whoFor: readonly string[];
  habits: readonly PlaybookHabit[];
  proTips: readonly string[];
  commonMistakes: readonly string[];
  limitations: readonly string[];
  thirtyDay?: readonly PlaybookThirtyDayRow[];
  bookBlurb: string;
  showSchoolCta?: boolean;
  closingLine: string;
};

export type PlaybookSummary = Pick<
  Playbook,
  "slug" | "title" | "shortTitle" | "tag" | "description" | "emoji"
>;
