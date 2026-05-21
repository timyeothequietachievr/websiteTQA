import { Navigation } from "@/components/revamp/navigation";
import { HeroPortraitSplit } from "@/components/revamp/hero";
import {
  Segmenter,
  RodQuote,
  ThesisBand,
  SocialProofStrip,
  SoundFamiliar,
} from "@/components/revamp/sections-1";
import { CoachingSummary, BookBlock, VincentQuote } from "@/components/revamp/sections-2";
import {
  StartHere,
  SchoolBlock,
  SchoolQuotes,
  PlaybooksBand,
  NewsletterBand,
  ElsewhereStrip,
  FooterRev,
} from "@/components/revamp/sections-3";

/** Production homepage — revamp sections only (no visual-library / Tailwind catalog). */
export function MarketingHomepage() {
  return (
    <div data-screen-label="Homepage">
      <Navigation />
      <HeroPortraitSplit />
      <SocialProofStrip />
      <Segmenter />
      <RodQuote />
      <SoundFamiliar />
      <ThesisBand />
      <CoachingSummary />
      <BookBlock />
      <VincentQuote />
      <SchoolBlock />
      <SchoolQuotes />
      <StartHere />
      <PlaybooksBand />
      <NewsletterBand />
      <ElsewhereStrip />
      <FooterRev />
    </div>
  );
}
