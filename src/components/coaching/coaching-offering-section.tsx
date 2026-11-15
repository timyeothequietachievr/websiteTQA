"use client";

import type { CSSProperties, ReactNode } from "react";
import { Container } from "@/components/revamp/primitives";
import {
  COACHING_EVERYTHING_INCLUDED,
  WHAT_YOU_GET_ITEMS,
} from "@/lib/coaching-content";

/** Option 3 split layout — five design-system colour styles. */
export type OfferingColorStyle = 1 | 2 | 3 | 4 | 5;

type ListItem = {
  lead?: string;
  body: string;
  learnMoreHref?: string;
};

type SplitPalette = {
  label: string;
  token: string;
  background: string;
  color: string;
  muted: string;
  eyebrow: string;
  arrow: string;
  cardBg: string;
  cardRing: string;
  leadColor: string;
  onDark: boolean;
};

/** Design tokens from globals.css — Style 5 = toaster / masterclass promo amber. */
const SPLIT_STYLES: Record<OfferingColorStyle, SplitPalette> = {
  1: {
    label: "Ink",
    token: "--tqa-ink",
    background: "var(--tqa-ink)",
    color: "var(--tqa-paper)",
    muted: "rgba(245,240,211,0.80)",
    eyebrow: "var(--tqa-sunrise)",
    arrow: "var(--tqa-sunrise)",
    cardBg: "rgba(245,240,211,0.10)",
    cardRing: "rgba(245,240,211,0.20)",
    leadColor: "var(--tqa-paper)",
    onDark: true,
  },
  2: {
    label: "Ink deep",
    token: "--tqa-ink-deep",
    background: "var(--tqa-ink-deep)",
    color: "var(--tqa-paper)",
    muted: "rgba(245,240,211,0.80)",
    eyebrow: "var(--tqa-sunrise-soft)",
    arrow: "var(--tqa-sunrise-soft)",
    cardBg: "rgba(245,240,211,0.08)",
    cardRing: "rgba(245,240,211,0.18)",
    leadColor: "var(--tqa-paper)",
    onDark: true,
  },
  3: {
    label: "Sunrise",
    token: "--tqa-sunrise",
    background: "var(--tqa-sunrise)",
    color: "var(--tqa-ink)",
    muted: "rgba(43,43,82,0.85)",
    eyebrow: "var(--tqa-ember)",
    arrow: "var(--tqa-ember)",
    cardBg: "rgba(245,240,211,0.92)",
    cardRing: "rgba(43,43,82,0.15)",
    leadColor: "var(--tqa-ink)",
    onDark: false,
  },
  4: {
    label: "Paper",
    token: "--tqa-paper",
    background: "var(--tqa-paper)",
    color: "var(--tqa-ink)",
    muted: "rgba(30,30,30,0.78)",
    eyebrow: "var(--tqa-ember)",
    arrow: "var(--tqa-ember)",
    cardBg: "var(--tqa-paper-soft)",
    cardRing: "rgba(43,43,82,0.12)",
    leadColor: "var(--tqa-ink)",
    onDark: false,
  },
  5: {
    label: "Deep amber (toaster)",
    token: "--tqa-ember-deep",
    background: "var(--tqa-ember-deep)",
    color: "var(--tqa-paper)",
    muted: "rgba(245,240,211,0.88)",
    eyebrow: "var(--tqa-sunrise-soft)",
    arrow: "var(--tqa-sunrise-soft)",
    cardBg: "rgba(245,240,211,0.12)",
    cardRing: "rgba(245,240,211,0.28)",
    leadColor: "var(--tqa-paper)",
    onDark: true,
  },
};

function coreItems(): ListItem[] {
  return WHAT_YOU_GET_ITEMS.map((item) =>
    "lead" in item && item.lead
      ? { lead: item.lead, body: item.body }
      : { body: item.body },
  );
}

function extraItems(): ListItem[] {
  return COACHING_EVERYTHING_INCLUDED.extras.map((e) => ({
    lead: e.lead,
    body: e.body,
    learnMoreHref: e.learnMoreHref,
  }));
}

function ArrowList({ items, palette }: { items: ListItem[]; palette: SplitPalette }) {
  return (
    <ul className="space-y-3 font-reading text-[17px] leading-relaxed" style={{ color: palette.muted }}>
      {items.map((item) => (
        <li
          key={`${item.lead ?? ""}${item.body}`}
          className="flex gap-3 rounded-lg p-4"
          style={{
            background: palette.cardBg,
            boxShadow: `inset 0 0 0 1px ${palette.cardRing}`,
          }}
        >
          <span aria-hidden style={{ color: palette.arrow }}>
            →
          </span>
          <span>
            {item.lead ? (
              <>
                <strong className="font-sans font-bold" style={{ color: palette.leadColor }}>
                  {item.lead}
                </strong>{" "}
              </>
            ) : null}
            {item.body}
            {item.learnMoreHref ? (
              <>
                {" "}
                <a
                  href={item.learnMoreHref}
                  className="font-sans font-semibold underline underline-offset-4"
                  style={{ color: palette.arrow }}
                >
                  Learn more
                </a>
              </>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

function StyleLabel({ n, palette }: { n: OfferingColorStyle; palette: SplitPalette }) {
  return (
    <p
      className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em]"
      style={{ color: palette.onDark ? "var(--tqa-sunrise)" : "var(--tqa-ember)" }}
    >
      Style {n} — {palette.label} ({palette.token})
    </p>
  );
}

/** Option 3 layout: title + CTA left, checklist right — colour via design tokens. */
function SplitOffering({
  style,
  showLabel = false,
  sectionId,
}: {
  style: OfferingColorStyle;
  showLabel?: boolean;
  sectionId?: string;
}) {
  const C = COACHING_EVERYTHING_INCLUDED;
  const palette = SPLIT_STYLES[style];
  const panelStyle: CSSProperties = {
    background: palette.background,
    color: palette.color,
    paddingTop: "clamp(56px, 6vw, 80px)",
    paddingBottom: "clamp(56px, 6vw, 80px)",
    paddingLeft: "clamp(24px, 4vw, 48px)",
    paddingRight: "clamp(24px, 4vw, 48px)",
  };

  return (
    <section id={sectionId} className="scroll-mt-28 bg-paper" style={{ paddingTop: 12, paddingBottom: 12 }}>
      <Container wide>
        <div className="overflow-hidden rounded-[10px]" style={panelStyle}>
          <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              {showLabel ? <StyleLabel n={style} palette={palette} /> : null}
              <p
                className="font-mono text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ color: palette.eyebrow }}
              >
                {C.eyebrow}
              </p>
              <h2
                className="font-display mt-3 text-3xl font-semibold sm:text-4xl"
                style={{ color: palette.color }}
              >
                {C.title}
              </h2>
              <p
                className="mt-4 max-w-[36ch] font-reading text-[17px] leading-relaxed"
                style={{ color: palette.muted }}
              >
                {C.lede}
              </p>
            </div>
            <div className="lg:col-span-7">
              <ArrowList items={coreItems()} palette={palette} />
              <h3
                className="font-display mt-10 text-lg font-semibold sm:text-xl"
                style={{ color: palette.color }}
              >
                {C.alsoGetTitle}
              </h3>
              <div className="mt-5">
                <ArrowList items={extraItems()} palette={palette} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Live coaching page — Style 5 (deep amber / toaster) until you pick another. */
export function CoachingOfferingSection({
  colorStyle = 5,
}: {
  colorStyle?: OfferingColorStyle;
}) {
  return <SplitOffering style={colorStyle} sectionId="what-you-get-with-coaching" />;
}

/** Compare page — Option 3 layout × five colour styles. */
export function CoachingOfferingOptionsGallery() {
  return (
    <div className="space-y-2 bg-paper pb-16">
      <Container>
        <div className="mx-auto max-w-[1200px] py-10">
          <h1 className="font-display text-3xl font-semibold text-ink">
            Offering — Option 3 colour styles
          </h1>
          <p className="mt-3 max-w-2xl font-reading text-[17px] leading-relaxed text-charcoal">
            Same split layout (title + CTA left, checklist right). Five colour treatments from the
            design tokens — ink, ink-deep, sunrise, paper, and deep amber (same as the masterclass
            toaster). Reply with Style 1–5 to ship that version.
          </p>
        </div>
      </Container>
      {([1, 2, 3, 4, 5] as OfferingColorStyle[]).map((n) => (
        <div key={n}>
          <SplitOffering style={n} showLabel />
        </div>
      ))}
    </div>
  );
}

/** @deprecated layout option ids — colour styles are the active picker. */
export type OfferingOptionId = OfferingColorStyle;
