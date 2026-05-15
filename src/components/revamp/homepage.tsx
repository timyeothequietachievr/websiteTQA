"use client";

import { Navigation } from "./navigation";
import { HeroPortraitSplit } from "./hero";
import {
  Segmenter,
  ThesisBand,
  SocialProofStrip,
  SoundFamiliar,
} from "./sections-1";
import { CoachingSummary, ToniBlock, BookBlock } from "./sections-2";
import {
  LatestWriting,
  StartHere,
  SchoolBlock,
  PlaybooksBand,
  NewsletterBand,
  ElsewhereStrip,
  FooterRev,
  ToniBubble,
} from "./sections-3";

export function HomepageRevamp() {
  return (
    <div data-screen-label="Homepage">
      <Navigation />
      <HeroPortraitSplit />
      <Segmenter />
      <ThesisBand />
      <SocialProofStrip />
      <SoundFamiliar />
      <CoachingSummary />
      <ToniBlock />
      <BookBlock />
      <LatestWriting />
      <StartHere />
      <SchoolBlock />
      <PlaybooksBand />
      <NewsletterBand />
      <ElsewhereStrip />
      <FooterRev />
      <ToniBubble />
    </div>
  );
}
