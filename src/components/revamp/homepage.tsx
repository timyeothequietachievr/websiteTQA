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
import dynamic from "next/dynamic";
import {
  ComponentLabelBadge,
  LabeledComponent,
} from "@/components/component-label";
import { REVAMP_COMPONENT_CATALOG } from "@/lib/component-catalog";

const TailwindComponentShowcase = dynamic(
  () =>
    import("@/components/tailwind-showcase/showcase").then(
      (m) => m.TailwindComponentShowcase,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="border-t-4 border-ember bg-paper-soft py-24 text-center font-sans text-warm-700">
        Loading Tailwind component library…
      </div>
    ),
  },
);

const R = Object.fromEntries(
  REVAMP_COMPONENT_CATALOG.map((entry) => [entry.slug, entry]),
) as Record<string, (typeof REVAMP_COMPONENT_CATALOG)[number]>;

export function HomepageRevamp() {
  return (
    <div data-screen-label="Homepage">
      <LabeledComponent
        code={R.navigation.code}
        title={R.navigation.title}
        as="nav"
      >
        <Navigation />
      </LabeledComponent>
      <LabeledComponent code={R["hero-portrait-split"].code} title={R["hero-portrait-split"].title}>
        <HeroPortraitSplit />
      </LabeledComponent>
      <LabeledComponent code={R.segmenter.code} title={R.segmenter.title}>
        <Segmenter />
      </LabeledComponent>
      <LabeledComponent code={R["thesis-band"].code} title={R["thesis-band"].title}>
        <ThesisBand />
      </LabeledComponent>
      <LabeledComponent
        code={R["social-proof-strip"].code}
        title={R["social-proof-strip"].title}
      >
        <SocialProofStrip />
      </LabeledComponent>
      <LabeledComponent code={R["sound-familiar"].code} title={R["sound-familiar"].title}>
        <SoundFamiliar />
      </LabeledComponent>
      <LabeledComponent code={R["coaching-summary"].code} title={R["coaching-summary"].title}>
        <CoachingSummary />
      </LabeledComponent>
      <LabeledComponent code={R["toni-block"].code} title={R["toni-block"].title}>
        <ToniBlock />
      </LabeledComponent>
      <LabeledComponent code={R["book-block"].code} title={R["book-block"].title}>
        <BookBlock />
      </LabeledComponent>
      <LabeledComponent code={R["latest-writing"].code} title={R["latest-writing"].title}>
        <LatestWriting />
      </LabeledComponent>
      <LabeledComponent code={R["start-here"].code} title={R["start-here"].title}>
        <StartHere />
      </LabeledComponent>
      <LabeledComponent code={R["school-block"].code} title={R["school-block"].title}>
        <SchoolBlock />
      </LabeledComponent>
      <LabeledComponent code={R["playbooks-band"].code} title={R["playbooks-band"].title}>
        <PlaybooksBand />
      </LabeledComponent>
      <LabeledComponent code={R["newsletter-band"].code} title={R["newsletter-band"].title}>
        <NewsletterBand />
      </LabeledComponent>
      <LabeledComponent code={R["elsewhere-strip"].code} title={R["elsewhere-strip"].title}>
        <ElsewhereStrip />
      </LabeledComponent>
      <LabeledComponent code={R["footer-rev"].code} title={R["footer-rev"].title} as="footer">
        <FooterRev />
      </LabeledComponent>
      <TailwindComponentShowcase />
      <ComponentLabelBadge
        code={R["toni-bubble"].code}
        title={R["toni-bubble"].title}
        className="fixed top-auto bottom-24 left-3"
      />
      <ToniBubble />
    </div>
  );
}
