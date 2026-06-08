"use client";

import type { ReactNode } from "react";
import { Container } from "@/components/revamp/primitives";
import {
  COACHING_HERO_ACCENT,
  COACHING_HERO_SUBTITLE,
  type CoachingHeroAccent,
} from "@/lib/coaching-content";

const HERO_ACCENT_CLASS: Record<CoachingHeroAccent, string> = {
  sunrise: "text-sunrise",
  "sunrise-soft": "text-sunrise-soft",
  ember: "text-ember",
};

function HeroAccent({ children }: { children: ReactNode }) {
  return <span className={HERO_ACCENT_CLASS[COACHING_HERO_ACCENT]}>{children}</span>;
}

/** Contained masthead — same pattern as homepage HeroPortraitSplit */
export function CoachingHero() {
  return (
    <section className="bg-paper pt-3 pb-8 sm:pb-10">
      <Container wide>
        <div
          className="grid min-h-[520px] grid-cols-1 overflow-hidden rounded-[10px] bg-ink-deep text-paper lg:grid-cols-12 lg:min-h-[600px]"
        >
          <div
            className="flex flex-col justify-center lg:col-span-7"
            style={{ padding: "clamp(32px, 5vw, 72px)" }}
          >
            <div
              className="inline-flex items-center gap-2 self-start font-sans font-bold uppercase"
              style={{
                background: "rgba(213,74,47,0.18)",
                color: "var(--tqa-ember)",
                border: "1px solid rgba(213,74,47,0.45)",
                borderRadius: "999px",
                padding: "6px 14px",
                fontSize: "11px",
                letterSpacing: "0.18em",
              }}
            >
              <span aria-hidden style={{ color: "var(--tqa-ember)" }}>
                ●
              </span>
              1:1 coaching
            </div>

            <h1
              className="mt-6 font-display font-semibold text-paper"
              style={{
                fontSize: "clamp(32px, 4.2vw, 56px)",
                lineHeight: 1.05,
                letterSpacing: "-0.022em",
                textWrap: "balance",
              }}
            >
              I help ambitious Asian men in tech{" "}
              <HeroAccent>break through the bamboo ceiling</HeroAccent>{" "}
              & land $250k&ndash;$350k Principal
              &amp; Leadership roles <HeroAccent>without dirty office politics</HeroAccent>
            </h1>

            <p
              className="mt-5 max-w-[52ch] font-sans text-[15px] italic leading-relaxed"
              style={{ color: "rgba(245,240,211,0.78)" }}
            >
              {COACHING_HERO_SUBTITLE}
            </p>
          </div>

          <div
            className="relative lg:col-span-5"
            style={{ padding: "clamp(16px, 2.5vw, 36px)", minHeight: "360px" }}
          >
            <div
              className="relative h-full min-h-[320px] overflow-hidden rounded-lg lg:min-h-[480px]"
              style={{
                background:
                  "radial-gradient(120% 100% at 50% 30%, #F5C84B 0%, #E5A402 35%, #D54A2F 78%, #8A2A1C 100%)",
              }}
            >
              <img
                src="/assets/coaching-hero.jpg"
                alt="Tim Yeo, career coach"
                className="absolute left-1/2 top-0 h-full w-auto min-w-full -translate-x-1/2 object-cover"
                style={{ objectPosition: "center 22%" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
