"use client";

import Link from "next/link";
import { ContainedBand } from "@/components/revamp/primitives";
import { CoachingAiToolsSection } from "@/components/coaching/coaching-ai-tools-options";
import {
  NewBadge,
  type NewBadgeVariant,
} from "@/components/coaching/coaching-new-badge";
import { COACHING_JOBBIE } from "@/lib/coaching-content";

/** Same optimized hero screenshot as /jobbie (1600×1165). */
const SCREENSHOT_W = 1600;
const SCREENSHOT_H = 1165;

function MacBookScreenshot() {
  const C = COACHING_JOBBIE;
  return (
    <div className="w-full max-w-[560px] lg:max-w-none">
      <div
        className="mx-auto overflow-hidden"
        style={{
          background: "#1a1a1a",
          borderRadius: "12px 12px 0 0",
          padding: "10px 10px 0",
          boxShadow: "0 24px 48px -20px rgba(0,0,0,0.45)",
        }}
      >
        <div
          className="overflow-hidden bg-paper"
          style={{ borderRadius: "6px 6px 0 0", aspectRatio: `${SCREENSHOT_W} / ${SCREENSHOT_H}` }}
        >
          <picture>
            <source srcSet={C.screenshotSrc} type="image/webp" />
            {/* eslint-disable-next-line @next/next/no-img-element -- local Jobbie screenshot with webp picture */}
            <img
              src={C.screenshotFallbackSrc}
              alt={C.screenshotAlt}
              width={SCREENSHOT_W}
              height={SCREENSHOT_H}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </picture>
        </div>
      </div>
      <div
        className="mx-auto"
        style={{
          height: "14px",
          background: "#1a1a1a",
          borderRadius: "0 0 10px 10px",
          maxWidth: "104%",
          marginLeft: "-2%",
          width: "104%",
        }}
        aria-hidden
      />
      <div
        className="mx-auto"
        style={{
          height: "6px",
          width: "28%",
          marginTop: "2px",
          background: "#1a1a1a",
          borderRadius: "0 0 6px 6px",
        }}
        aria-hidden
      />
    </div>
  );
}

function JobbieSection({ newBadge = 4 }: { newBadge?: NewBadgeVariant }) {
  const C = COACHING_JOBBIE;
  return (
    <ContainedBand
      tone="sunrise"
      id="Jobbie"
      className="scroll-mt-28"
      padY="clamp(56px, 6vw, 80px)"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember-deep">
              {C.eyebrow}
            </p>
            <NewBadge variant={newBadge} />
          </div>
          <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">{C.title}</h2>
          <p className="mt-4 max-w-[48ch] font-reading text-[17px] leading-relaxed text-ink/85">
            {C.lede}
          </p>
          <ul className="mt-8 space-y-4">
            {C.points.map((point) => (
              <li
                key={point.lead}
                className="rounded-lg bg-paper/95 p-4 font-reading text-[15px] leading-relaxed text-ink ring-1 ring-ink/15"
              >
                <span className="font-sans font-bold">{point.lead}</span> {point.body}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="mb-3 max-w-md font-sans text-sm leading-relaxed text-ink/85">
              {C.ctaMicrocopy}
            </p>
            <Link
              href={C.ctaHref}
              className="font-sans text-[15px] font-semibold text-ink underline underline-offset-4"
            >
              {C.ctaLabel} →
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:col-span-6">
          <MacBookScreenshot />
        </div>
      </div>
    </ContainedBand>
  );
}

/** Jobbie + AI tools — offering checklist lives in CoachingOfferingSection (after How to apply). */
export function CoachingInclusions({
  newBadge = 4,
}: {
  newBadge?: NewBadgeVariant;
}) {
  return (
    <>
      <JobbieSection newBadge={newBadge} />
      <CoachingAiToolsSection option={3} newBadge={newBadge} />
    </>
  );
}
