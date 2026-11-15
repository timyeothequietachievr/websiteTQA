"use client";

import type { ReactNode } from "react";
import { Button, ContainedBand, Container } from "@/components/revamp/primitives";
import { NewBadge, type NewBadgeVariant } from "@/components/coaching/coaching-new-badge";
import { DISCOVERY_CALL_URL } from "@/lib/site-data";
import {
  COACHING_AI_TOOLS,
  COACHING_AI_TOOLS_FEATURED,
} from "@/lib/coaching-content";

export type AiToolsOptionId = 1 | 2 | 3 | 4 | 5;

type Tool = (typeof COACHING_AI_TOOLS_FEATURED)[number];

function toolHeadline(tool: Tool) {
  return `1 year free of ${tool.name}`;
}

function toolValueLabel(tool: Tool) {
  return `${tool.value} value`;
}

function ToolLogo({ tool, size = 40 }: { tool: Tool; size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- local brand marks
    <img
      src={tool.logoSrc}
      alt=""
      width={size}
      height={size}
      className="object-contain"
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
}

function IntroBlock({
  onDark = false,
  newBadge,
}: {
  onDark?: boolean;
  newBadge?: NewBadgeVariant;
}) {
  const C = COACHING_AI_TOOLS;
  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <p
          className={`font-mono text-[11px] font-bold uppercase tracking-[0.18em] ${
            onDark ? "text-sunrise-soft" : "text-ember"
          }`}
        >
          {C.eyebrow}
        </p>
        {newBadge ? <NewBadge variant={newBadge} onDark={onDark} /> : null}
      </div>
      <h2
        className={`font-display mt-3 text-2xl font-semibold sm:text-3xl ${
          onDark ? "text-paper" : "text-ink"
        }`}
      >
        {C.title}
      </h2>
      <div
        className={`mt-4 max-w-[60ch] space-y-4 font-reading text-[17px] leading-relaxed ${
          onDark ? "text-paper/85" : "text-charcoal"
        }`}
      >
        {C.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </>
  );
}

function TotalValue({ onDark = false }: { onDark?: boolean }) {
  const C = COACHING_AI_TOOLS;
  return (
    <div className="mt-10">
      <p
        className={`font-mono text-[11px] font-bold uppercase tracking-[0.16em] ${
          onDark ? "text-paper/70" : "text-warm-700"
        }`}
      >
        {C.totalValueLabel}
      </p>
      <p
        className={`font-display font-bold ${onDark ? "text-paper" : "text-ink"}`}
        style={{ fontSize: "clamp(36px, 5vw, 52px)", letterSpacing: "-0.02em", lineHeight: 1 }}
      >
        {C.totalValue}
      </p>
    </div>
  );
}

function MoreToolsCard({ onDark = false }: { onDark?: boolean }) {
  return (
    <li
      className={`flex items-center rounded-lg px-4 py-4 ${
        onDark ? "bg-paper/15 text-paper ring-1 ring-paper/25" : "bg-ink text-paper"
      }`}
    >
      <p className="font-sans text-sm font-semibold leading-snug">
        Plus Linear, PostHog, n8n, Replit, Runway and more — full list in the FAQ.
      </p>
    </li>
  );
}

function DiscoveryCta({ variant = "primary" }: { variant?: "primary" | "cream" | "ink" }) {
  return (
    <div className="mt-10">
      <Button href={DISCOVERY_CALL_URL} variant={variant} size="lg">
        Book a discovery call
        <span aria-hidden>→</span>
      </Button>
    </div>
  );
}

function OptionLabel({ n, label }: { n: AiToolsOptionId; label: string }) {
  return (
    <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">
      Option {n} — {label}
    </p>
  );
}

/** Option 1 — Logo + name + blurb cards; total value below grid. */
function Option1({ showLabel, sectionId }: { showLabel?: boolean; sectionId?: string }) {
  return (
    <section
      id={sectionId}
      className="scroll-mt-28 border-t border-charcoal/10 bg-paper py-14 sm:py-18"
    >
      <Container>
        <div className="mx-auto max-w-[1200px]">
          {showLabel ? <OptionLabel n={1} label="Logo cards + blurb" /> : null}
          <IntroBlock />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {COACHING_AI_TOOLS_FEATURED.map((tool) => (
              <li
                key={tool.name}
                className="flex flex-col rounded-lg bg-paper-soft p-5 ring-1 ring-ink/15"
              >
                <ToolLogo tool={tool} />
                <p className="mt-4 font-sans text-sm font-bold text-ink">{toolHeadline(tool)}</p>
                <p className="mt-2 flex-1 font-reading text-[14px] leading-relaxed text-charcoal">
                  {tool.blurb}
                </p>
                <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-warm-700">
                  {toolValueLabel(tool)}
                </p>
              </li>
            ))}
            <MoreToolsCard />
          </ul>
          <TotalValue />
          <DiscoveryCta />
        </div>
      </Container>
    </section>
  );
}

/** Option 2 — Horizontal rows with logo left, copy right. */
function Option2({ showLabel, sectionId }: { showLabel?: boolean; sectionId?: string }) {
  return (
    <section
      id={sectionId}
      className="scroll-mt-28 border-t border-charcoal/10 bg-paper-soft py-14 sm:py-18"
    >
      <Container>
        <div className="mx-auto max-w-[1200px]">
          {showLabel ? <OptionLabel n={2} label="Logo rows" /> : null}
          <IntroBlock />
          <ul className="mt-8 max-w-3xl space-y-3">
            {COACHING_AI_TOOLS_FEATURED.map((tool) => (
              <li
                key={tool.name}
                className="flex gap-4 rounded-lg bg-paper p-4 ring-1 ring-ink/10"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-paper-soft ring-1 ring-ink/10">
                  <ToolLogo tool={tool} size={28} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-sans text-sm font-bold text-ink">{toolHeadline(tool)}</p>
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-warm-700">
                      {toolValueLabel(tool)}
                    </p>
                  </div>
                  <p className="mt-1 font-reading text-[15px] leading-relaxed text-charcoal">
                    {tool.blurb}
                  </p>
                </div>
              </li>
            ))}
            <MoreToolsCard />
          </ul>
          <TotalValue />
          <DiscoveryCta />
        </div>
      </Container>
    </section>
  );
}

/** Option 3 — Ink ContainedBand, paper tool tiles. */
function Option3({
  showLabel,
  sectionId,
  newBadge,
}: {
  showLabel?: boolean;
  sectionId?: string;
  newBadge?: NewBadgeVariant;
}) {
  return (
    <ContainedBand tone="ink" id={sectionId} className="scroll-mt-28" padY="clamp(56px, 6vw, 80px)">
      <div className="mx-auto max-w-[1200px]">
        {showLabel ? (
          <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-sunrise">
            Option 3 — Ink band
          </p>
        ) : null}
        <IntroBlock onDark newBadge={newBadge} />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COACHING_AI_TOOLS_FEATURED.map((tool) => (
            <li key={tool.name} className="rounded-lg bg-paper p-5 text-ink">
              <ToolLogo tool={tool} />
              <p className="mt-4 font-sans text-sm font-bold">{toolHeadline(tool)}</p>
              <p className="mt-2 font-reading text-[14px] leading-relaxed text-charcoal">
                {tool.blurb}
              </p>
              <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-warm-700">
                {toolValueLabel(tool)}
              </p>
            </li>
          ))}
          <MoreToolsCard onDark />
        </ul>
        <TotalValue onDark />
        <DiscoveryCta variant="cream" />
      </div>
    </ContainedBand>
  );
}

/** Option 4 — Sunrise band with logo-forward tiles. */
function Option4({ showLabel, sectionId }: { showLabel?: boolean; sectionId?: string }) {
  return (
    <ContainedBand
      tone="sunrise"
      id={sectionId}
      className="scroll-mt-28"
      padY="clamp(56px, 6vw, 80px)"
    >
      <div className="mx-auto max-w-[1200px]">
        {showLabel ? (
          <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember-deep">
            Option 4 — Sunrise band
          </p>
        ) : null}
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember-deep">
          {COACHING_AI_TOOLS.eyebrow}
        </p>
        <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">
          {COACHING_AI_TOOLS.title}
        </h2>
        <div className="mt-4 max-w-[60ch] space-y-4 font-reading text-[17px] leading-relaxed text-ink/85">
          {COACHING_AI_TOOLS.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {COACHING_AI_TOOLS_FEATURED.map((tool) => (
            <li
              key={tool.name}
              className="rounded-lg bg-paper/95 p-5 ring-1 ring-ink/15"
            >
              <div className="flex items-center gap-3">
                <ToolLogo tool={tool} size={32} />
                <p className="font-sans text-sm font-bold text-ink">{toolHeadline(tool)}</p>
              </div>
              <p className="mt-3 font-reading text-[14px] leading-relaxed text-ink/85">
                {tool.blurb}
              </p>
              <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-ember-deep">
                {toolValueLabel(tool)}
              </p>
            </li>
          ))}
          <li className="flex items-center rounded-lg bg-ink px-4 py-4 text-paper">
            <p className="font-sans text-sm font-semibold leading-snug">
              Plus Linear, PostHog, n8n, Replit, Runway and more — full list in the FAQ.
            </p>
          </li>
        </ul>
        <TotalValue />
        <DiscoveryCta variant="ink" />
      </div>
    </ContainedBand>
  );
}

/** Option 5 — Deep amber (toaster) ContainedBand. */
function Option5({ showLabel, sectionId }: { showLabel?: boolean; sectionId?: string }) {
  return (
    <section id={sectionId} className="scroll-mt-28 bg-paper" style={{ paddingTop: 12, paddingBottom: 12 }}>
      <Container wide>
        <div
          className="overflow-hidden rounded-[10px]"
          style={{
            background: "var(--tqa-ember-deep)",
            color: "var(--tqa-paper)",
            padding: "clamp(56px, 6vw, 80px) clamp(24px, 4vw, 48px)",
          }}
        >
          <div className="mx-auto max-w-[1200px]">
            {showLabel ? (
              <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--tqa-sunrise-soft)]">
                Option 5 — Deep amber
              </p>
            ) : null}
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--tqa-sunrise-soft)]">
              {COACHING_AI_TOOLS.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-paper sm:text-3xl">
              {COACHING_AI_TOOLS.title}
            </h2>
            <div className="mt-4 max-w-[60ch] space-y-4 font-reading text-[17px] leading-relaxed text-paper/85">
              {COACHING_AI_TOOLS.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {COACHING_AI_TOOLS_FEATURED.map((tool) => (
                <li
                  key={tool.name}
                  className="rounded-lg p-5"
                  style={{
                    background: "rgba(245,240,211,0.12)",
                    boxShadow: "inset 0 0 0 1px rgba(245,240,211,0.28)",
                  }}
                >
                  <div className="flex size-11 items-center justify-center rounded-md bg-paper">
                    <ToolLogo tool={tool} size={28} />
                  </div>
                  <p className="mt-4 font-sans text-sm font-bold text-paper">{toolHeadline(tool)}</p>
                  <p className="mt-2 font-reading text-[14px] leading-relaxed text-paper/85">
                    {tool.blurb}
                  </p>
                  <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--tqa-sunrise-soft)]">
                    {toolValueLabel(tool)}
                  </p>
                </li>
              ))}
              <MoreToolsCard onDark />
            </ul>
            <TotalValue onDark />
            <DiscoveryCta variant="cream" />
          </div>
        </div>
      </Container>
    </section>
  );
}

const OPTIONS: Record<
  AiToolsOptionId,
  (props: {
    showLabel?: boolean;
    sectionId?: string;
    newBadge?: NewBadgeVariant;
  }) => ReactNode
> = {
  1: Option1,
  2: Option2,
  3: Option3,
  4: Option4,
  5: Option5,
};

/** Live coaching page AI tools — Option 3 (ink band). */
export function CoachingAiToolsSection({
  option = 3,
  newBadge,
}: {
  option?: AiToolsOptionId;
  newBadge?: NewBadgeVariant;
}) {
  const View = OPTIONS[option];
  return <>{View({ sectionId: "PremiumAItools", newBadge })}</>;
}

export function CoachingAiToolsOptionsGallery() {
  return (
    <div className="space-y-2 bg-paper pb-16">
      <Container>
        <div className="mx-auto max-w-[1200px] py-10">
          <h1 className="font-display text-3xl font-semibold text-ink">
            AI tools — layout options
          </h1>
          <p className="mt-3 max-w-2xl font-reading text-[17px] leading-relaxed text-charcoal">
            Five treatments with company logos, short tool blurbs, and total value moved below the
            grid. Reply with Option 1–5 to ship that version on /coaching.
          </p>
        </div>
      </Container>
      {([1, 2, 3, 4, 5] as AiToolsOptionId[]).map((n) => (
        <div key={n} className="border-b border-charcoal/10 pb-2">
          {OPTIONS[n]({ showLabel: true })}
        </div>
      ))}
    </div>
  );
}
