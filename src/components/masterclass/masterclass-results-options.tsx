"use client";

import type { CSSProperties, ReactNode } from "react";
import { Container } from "@/components/revamp/primitives";
import { MASTERCLASS_LANDING } from "@/lib/masterclass-landing-content";

/** Three-column results wall — five design-system colour styles. */
export type ResultsColorStyle = 1 | 2 | 3 | 4 | 5;

type ResultCard = (typeof MASTERCLASS_LANDING.results.cards)[number];

type ResultsPalette = {
  label: string;
  token: string;
  background: string;
  color: string;
  muted: string;
  headline: string;
  cardBg: string;
  cardRing: string;
  mediaBg: string;
  mediaText: string;
  linkHover: string;
  onDark: boolean;
};

const COLOUR_STYLES: Record<ResultsColorStyle, ResultsPalette> = {
  1: {
    label: "Ink",
    token: "--tqa-ink",
    background: "var(--tqa-ink)",
    color: "var(--tqa-paper)",
    muted: "rgba(245,240,211,0.80)",
    headline: "var(--tqa-sunrise)",
    cardBg: "rgba(245,240,211,0.08)",
    cardRing: "rgba(245,240,211,0.20)",
    mediaBg: "rgba(26,26,58,0.40)",
    mediaText: "rgba(245,240,211,0.70)",
    linkHover: "rgba(245,240,211,0.10)",
    onDark: true,
  },
  2: {
    label: "Ink deep",
    token: "--tqa-ink-deep",
    background: "var(--tqa-ink-deep)",
    color: "var(--tqa-paper)",
    muted: "rgba(245,240,211,0.80)",
    headline: "var(--tqa-sunrise-soft)",
    cardBg: "rgba(245,240,211,0.08)",
    cardRing: "rgba(245,240,211,0.18)",
    mediaBg: "rgba(0,0,0,0.25)",
    mediaText: "rgba(245,240,211,0.70)",
    linkHover: "rgba(245,240,211,0.10)",
    onDark: true,
  },
  3: {
    label: "Sunrise",
    token: "--tqa-sunrise",
    background: "var(--tqa-sunrise)",
    color: "var(--tqa-ink)",
    muted: "rgba(43,43,82,0.85)",
    headline: "var(--tqa-ember-deep)",
    cardBg: "rgba(245,240,211,0.92)",
    cardRing: "rgba(43,43,82,0.15)",
    mediaBg: "rgba(43,43,82,0.08)",
    mediaText: "rgba(43,43,82,0.70)",
    linkHover: "rgba(43,43,82,0.06)",
    onDark: false,
  },
  4: {
    label: "Paper",
    token: "--tqa-paper",
    background: "var(--tqa-paper)",
    color: "var(--tqa-ink)",
    muted: "rgba(30,30,30,0.78)",
    headline: "var(--tqa-ember)",
    cardBg: "var(--tqa-paper-soft)",
    cardRing: "rgba(43,43,82,0.12)",
    mediaBg: "rgba(43,43,82,0.06)",
    mediaText: "rgba(43,43,82,0.65)",
    linkHover: "rgba(43,43,82,0.05)",
    onDark: false,
  },
  5: {
    label: "Deep amber (toaster)",
    token: "--tqa-ember-deep",
    background: "var(--tqa-ember-deep)",
    color: "var(--tqa-paper)",
    muted: "rgba(245,240,211,0.88)",
    headline: "var(--tqa-sunrise-soft)",
    cardBg: "rgba(245,240,211,0.12)",
    cardRing: "rgba(245,240,211,0.28)",
    mediaBg: "rgba(0,0,0,0.22)",
    mediaText: "rgba(245,240,211,0.75)",
    linkHover: "rgba(245,240,211,0.10)",
    onDark: true,
  },
};

function StyleLabel({ n, palette }: { n: ResultsColorStyle; palette: ResultsPalette }) {
  return (
    <p
      className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em]"
      style={{ color: palette.headline }}
    >
      Style {n} — {palette.label} ({palette.token}) · three-column grid
    </p>
  );
}

function CardMedia({ card, palette }: { card: ResultCard; palette: ResultsPalette }) {
  if (card.image) {
    return (
      <div className="overflow-hidden rounded-lg" style={{ background: palette.mediaBg }}>
        <picture>
          <source srcSet={card.image.src} type="image/webp" />
          {/* eslint-disable-next-line @next/next/no-img-element -- local proof screenshots */}
          <img
            src={card.image.fallbackSrc}
            alt={card.image.alt}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-lg object-contain"
          />
        </picture>
      </div>
    );
  }
  return (
    <div
      className="flex items-center justify-center overflow-hidden rounded-lg px-4 py-10"
      style={{ background: palette.mediaBg }}
    >
      <p
        className="text-center font-display text-base font-semibold leading-snug sm:text-lg"
        style={{ color: palette.mediaText }}
      >
        {card.cardText}
      </p>
    </div>
  );
}

function ResultCardBody({ card, palette }: { card: ResultCard; palette: ResultsPalette }) {
  return (
    <div
      className="flex h-full flex-col rounded-lg p-5 sm:p-6"
      style={{
        background: palette.cardBg,
        boxShadow: `inset 0 0 0 1px ${palette.cardRing}`,
      }}
    >
      <div className="min-w-0">
        <p
          className="font-display text-lg font-semibold leading-snug sm:text-xl"
          style={{ color: palette.headline }}
        >
          {card.headline}
        </p>
        <p className="mt-2 font-sans text-[15px] leading-relaxed" style={{ color: palette.muted }}>
          {card.subline}
        </p>
      </div>
      <div className="mt-4 flex-1">
        <CardMedia card={card} palette={palette} />
      </div>
    </div>
  );
}

function MoreReviewsCard({ palette }: { palette: ResultsPalette }) {
  return (
    <a
      href="/testimonials"
      className="flex min-h-[160px] flex-col items-center justify-center rounded-lg p-6 text-center transition"
      style={{
        background: palette.cardBg,
        boxShadow: `inset 0 0 0 1px ${palette.cardRing}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = palette.linkHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = palette.cardBg;
      }}
    >
      <span
        className="font-sans text-[15px] font-semibold underline underline-offset-4"
        style={{ color: palette.color }}
      >
        Read more reviews →
      </span>
    </a>
  );
}

/** Three-column results wall with design-token colour. */
function ThreeColumnResults({
  colorStyle,
  showLabel = false,
  sectionId,
}: {
  colorStyle: ResultsColorStyle;
  showLabel?: boolean;
  sectionId?: string;
}) {
  const { title, cards } = MASTERCLASS_LANDING.results;
  const palette = COLOUR_STYLES[colorStyle];
  const panelStyle: CSSProperties = {
    background: palette.background,
    color: palette.color,
    paddingTop: "clamp(56px, 6vw, 72px)",
    paddingBottom: "clamp(56px, 6vw, 72px)",
    paddingLeft: "clamp(24px, 4vw, 48px)",
    paddingRight: "clamp(24px, 4vw, 48px)",
  };

  return (
    <section id={sectionId} className="scroll-mt-28 bg-paper" style={{ paddingTop: 12, paddingBottom: 12 }}>
      <Container wide>
        <div className="overflow-hidden rounded-[10px]" style={panelStyle}>
          <div className="mx-auto max-w-[1200px]">
            {showLabel ? <StyleLabel n={colorStyle} palette={palette} /> : null}
            <h2
              className="font-display text-2xl font-semibold sm:text-3xl"
              style={{ color: palette.color }}
            >
              {title}
            </h2>
            <div className="mt-8 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((card) => (
                <ResultCardBody key={card.headline} card={card} palette={palette} />
              ))}
              <MoreReviewsCard palette={palette} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Three-column results wall — colour via design tokens (1 ink · 4 paper · 5 deep amber). */
export function MasterclassResultsSection({
  colorStyle = 1,
}: {
  colorStyle?: ResultsColorStyle;
}) {
  return <ThreeColumnResults colorStyle={colorStyle} />;
}

export function MasterclassResultsOptionsGallery() {
  return (
    <div className="space-y-2 bg-paper pb-16">
      <Container>
        <div className="mx-auto max-w-[1200px] py-10">
          <h1 className="font-display text-3xl font-semibold text-ink">
            Masterclass results — colour styles
          </h1>
          <p className="mt-3 max-w-2xl font-reading text-[17px] leading-relaxed text-charcoal">
            Layout locked to the three-column grid. Five colour treatments from the design tokens —
            ink, ink-deep, sunrise, paper, and deep amber (toaster). Reply with Style 1–5 to ship
            that version on /masterclass.
          </p>
        </div>
      </Container>
      {([1, 2, 3, 4, 5] as ResultsColorStyle[]).map((n) => (
        <div key={n} className="border-b border-charcoal/10 pb-2">
          <ThreeColumnResults colorStyle={n} showLabel />
        </div>
      ))}
    </div>
  );
}

/** @deprecated layout option ids — colour styles are the active picker. */
export type ResultsLayoutOptionId = ResultsColorStyle;
