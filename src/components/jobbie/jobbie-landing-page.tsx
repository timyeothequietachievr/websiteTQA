"use client";

import type { ReactNode } from "react";
import { Navigation } from "@/components/revamp/navigation";
import { FooterRev } from "@/components/revamp/sections-3";
import { SocialProofStrip } from "@/components/revamp/sections-1";
import { Button, Container, ContainedBand } from "@/components/revamp/primitives";
import { DISCOVERY_CALL_URL } from "@/lib/site-data";
import { JOBBIE_LANDING, JOBBIE_LOGIN_URL } from "@/lib/jobbie-landing-content";
import {
  formatAsOfDisplay,
  formatRolesFound,
  type JobbiePublicStats,
} from "@/lib/jobbie-stats";

const C = JOBBIE_LANDING;

/** Optimized hero screenshot (1600×1165 source). */
const SCREENSHOT_W = 1600;
const SCREENSHOT_H = 1165;

const MEET_IMG_W = 338;
const MEET_IMG_H = 760;

function SectionTitle({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <h2
      className={`font-display text-2xl font-semibold sm:text-3xl ${onDark ? "text-paper" : "text-ink"}`}
    >
      {children}
    </h2>
  );
}

function DiscoveryCta({
  variant = "primary",
  note,
  noteClassName = "text-ink/85",
  afterButton,
}: {
  variant?: "primary" | "cream" | "ink";
  note?: string;
  noteClassName?: string;
  /** Rendered under the button at the same width (e.g. roles-found chip). */
  afterButton?: ReactNode;
}) {
  return (
    <div>
      <div className="inline-flex flex-col items-stretch">
        <Button href={DISCOVERY_CALL_URL} variant={variant} size="lg">
          Book a discovery call
          <span aria-hidden>→</span>
        </Button>
        {afterButton}
      </div>
      {note ? (
        <p className={`mt-3 max-w-md font-sans text-sm leading-relaxed ${noteClassName}`}>{note}</p>
      ) : null}
    </div>
  );
}

function MacBookScreenshot() {
  return (
    <div className="w-full max-w-[640px] lg:max-w-none">
      {/* Laptop chassis — sized for a 14" MacBook Pro screenshot (~16:10). */}
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
            <source
              srcSet="/assets/jobbie-hero-screenshot.webp"
              type="image/webp"
            />
            <img
              src="/assets/jobbie-hero-screenshot.jpg"
              alt={C.hero.screenshotAlt}
              width={SCREENSHOT_W}
              height={SCREENSHOT_H}
              fetchPriority="high"
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

function HeroBanner({ stats }: { stats: JobbiePublicStats }) {
  return (
    <div
      className="relative grid grid-cols-1 items-stretch overflow-hidden rounded-[10px] lg:grid-cols-12"
      style={{ background: "var(--tqa-ember-deep)", color: "var(--tqa-paper)" }}
    >
      <div
        className="flex flex-col justify-center lg:col-span-5"
        style={{ padding: "clamp(32px, 5vw, 64px)" }}
      >
        <p
          className="font-mono text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: "var(--tqa-sunrise)" }}
        >
          {C.hero.eyebrow}
        </p>
        <h1
          className="mt-5 font-display font-semibold"
          style={{
            color: "var(--tqa-paper)",
            fontSize: "clamp(34px, 4.6vw, 56px)",
            lineHeight: 1.05,
            letterSpacing: "-0.022em",
            textWrap: "balance",
          }}
        >
          {C.hero.h1}
        </h1>
        <div className="mt-6 max-w-[48ch] space-y-4">
          {C.hero.lede.map((p) => (
            <p
              key={p.slice(0, 32)}
              className="font-reading text-[17px] leading-relaxed"
              style={{ color: "rgba(245,240,211,0.90)" }}
            >
              {p}
            </p>
          ))}
        </div>
        <div className="mt-8">
          <DiscoveryCta
            variant="cream"
            note={C.hero.ctaMicrocopy}
            noteClassName="text-paper/75"
            afterButton={
              <div
                className="mt-10 w-full rounded-md px-5 py-4"
                style={{ background: "rgba(26,26,58,0.45)" }}
              >
                <div
                  className="font-display font-bold"
                  style={{
                    fontSize: "26px",
                    letterSpacing: "-0.02em",
                    color: "var(--tqa-paper)",
                    lineHeight: 1,
                  }}
                >
                  {formatRolesFound(stats.rolesFound)}
                </div>
                <div
                  className="font-mono font-bold uppercase"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    color: "rgba(245,240,211,0.7)",
                    marginTop: "4px",
                  }}
                >
                  Roles found (at {formatAsOfDisplay(stats.asOf)})
                </div>
              </div>
            }
          />
        </div>
      </div>

      <div
        className="relative flex items-center justify-center lg:col-span-7"
        style={{ padding: "clamp(20px, 3vw, 40px)" }}
      >
        <MacBookScreenshot />
      </div>
    </div>
  );
}

export function JobbieLandingPage({ stats }: { stats: JobbiePublicStats }) {
  return (
    <div className="min-h-full bg-paper">
      <Navigation
        hideNavLinks
        hidePromoBanner
        wordmarkTagline="Jobbie"
        ctaLabel="Book a discovery call"
        ctaHref={DISCOVERY_CALL_URL}
        textLinkLabel={C.hero.loginLabel}
        textLinkHref={JOBBIE_LOGIN_URL}
      />

      <main>
        {/* 2. Hero */}
        <section className="bg-paper pt-3 pb-10 sm:pb-14">
          <Container wide>
            <HeroBanner stats={stats} />
          </Container>
        </section>

        {/* 3. Logo wall — SocialProofStrip (no reviews chip) */}
        <SocialProofStrip />

        {/* 4. The pain */}
        <section className="border-t border-charcoal/10 py-14 sm:py-18">
          <Container>
            <div className="mx-auto max-w-[720px]">
              <SectionTitle>{C.pain.title}</SectionTitle>
              <div className="mt-6 space-y-4">
                {C.pain.intro.map((p) => (
                  <p key={p.slice(0, 40)} className="font-reading text-[17px] leading-relaxed text-charcoal">
                    {p}
                  </p>
                ))}
              </div>
              <p className="mt-8 font-sans text-[15px] font-semibold text-ink">{C.pain.listLead}</p>
              <ul className="mt-4 space-y-3">
                {C.pain.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-reading text-[17px] leading-relaxed text-charcoal"
                  >
                    <span aria-hidden className="mt-1 text-ember">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-reading text-[17px] italic leading-relaxed text-charcoal">
                {C.pain.closing}
              </p>
            </div>
          </Container>
        </section>

        {/* 5. Why I built Jobbie — Meet Tim sunrise */}
        <ContainedBand tone="sunrise" padY="clamp(56px, 6vw, 80px)">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[338/380] w-full max-w-[280px] overflow-hidden sm:max-w-[340px] lg:aspect-[338/669] lg:max-w-[380px]">
                <picture>
                  <source srcSet="/assets/masterclass-alt-closed-mouth.webp" type="image/webp" />
                  <img
                    src="/assets/masterclass-alt-closed-mouth.png"
                    alt={C.whyBuilt.imageAlt}
                    width={MEET_IMG_W}
                    height={MEET_IMG_H}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </picture>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember-deep">
                {C.whyBuilt.eyebrow}
              </p>
              <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">
                {C.whyBuilt.title}
              </h2>
              <div className="mt-6 space-y-4">
                {C.whyBuilt.paragraphs.map((p) => (
                  <p
                    key={p.bold}
                    className="font-reading text-[16px] leading-relaxed text-ink/85"
                  >
                    <strong className="font-sans font-bold text-ink">{p.bold}</strong>
                    {p.rest}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <DiscoveryCta variant="ink" />
              </div>
            </div>
          </div>
        </ContainedBand>

        {/* 6. What you get — paper surface */}
        <section className="border-t border-charcoal/10 py-14 sm:py-18">
          <Container>
            <div className="mx-auto max-w-[1200px]">
              <SectionTitle>{C.whatYouGet.title}</SectionTitle>
              <ul className="mt-8 space-y-4">
                {C.whatYouGet.rows.map((row) => (
                  <li
                    key={row.lead}
                    className="rounded-lg bg-paper-soft p-5 font-reading text-[16px] leading-relaxed text-ink ring-1 ring-ink/15"
                  >
                    <span className="font-sans font-bold">{row.lead}</span> {row.body}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {/* 7. How it works — only ink band */}
        <ContainedBand tone="ink" id="how-it-works" padY="clamp(56px, 6vw, 80px)">
          <div className="mx-auto max-w-[1200px]">
            <SectionTitle onDark>{C.howItWorks.title}</SectionTitle>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {C.howItWorks.steps.map((s) => (
                <li key={s.n} className="rounded-lg bg-paper/10 p-6 ring-1 ring-paper/20">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-sunrise">
                    {s.n}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-semibold text-paper">{s.title}</h3>
                  <p className="mt-1 font-sans text-xs font-semibold text-sunrise">{s.meta}</p>
                  <p className="mt-3 font-reading text-sm leading-relaxed text-paper/85">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </ContainedBand>

        {/* 8. Proof — paper */}
        <section className="border-t border-charcoal/10 py-14 sm:py-18">
          <Container>
            <div className="mx-auto max-w-[1200px]">
              <SectionTitle>{C.proof.title}</SectionTitle>
              <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {C.proof.cards.map((card) => (
                  <div
                    key={card.headline}
                    className="flex h-full flex-col rounded-lg bg-paper-soft p-4 ring-1 ring-ink/15"
                  >
                    <p className="font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
                      {card.headline}
                    </p>
                    <p className="mt-2 font-sans text-[13px] leading-relaxed text-warm-700">
                      {card.subline}
                    </p>
                    {card.image || card.cardText ? (
                      <div className="mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-lg bg-paper">
                        {card.image ? (
                          <picture>
                            <source srcSet={card.image.src} type="image/webp" />
                            <img
                              src={card.image.fallbackSrc}
                              alt={card.image.alt}
                              loading="lazy"
                              decoding="async"
                              className="h-auto w-full rounded-lg object-contain"
                            />
                          </picture>
                        ) : (
                          <p className="px-4 py-10 text-center font-display text-base font-semibold leading-snug text-ink/70 sm:text-lg">
                            {card.cardText}
                          </p>
                        )}
                      </div>
                    ) : null}
                  </div>
                ))}
                <a
                  href="/testimonials"
                  className="flex h-full min-h-full flex-col items-center justify-center rounded-lg bg-paper-soft p-4 text-center ring-1 ring-ink/15 transition hover:bg-paper"
                >
                  <span className="font-sans text-[15px] font-semibold text-ink underline underline-offset-4">
                    {C.proof.reviewsLink}
                  </span>
                </a>
              </div>

            </div>
          </Container>
        </section>

        {/* 9. Cost of doing nothing */}
        <section className="border-t border-charcoal/10 py-14 sm:py-18">
          <Container>
            <div className="mx-auto max-w-[720px]">
              <SectionTitle>{C.costOfInaction.title}</SectionTitle>
              <p className="mt-6 font-reading text-[17px] leading-relaxed text-charcoal">
                {C.costOfInaction.intro}
              </p>
              <ul className="mt-4 space-y-3">
                {C.costOfInaction.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-reading text-[17px] leading-relaxed text-charcoal"
                  >
                    <span aria-hidden className="mt-1 text-ember">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-4">
                <p className="font-reading text-[17px] leading-relaxed text-charcoal">
                  {C.costOfInaction.proofLine}
                </p>
                <p className="font-reading text-[17px] leading-relaxed text-charcoal">
                  {C.costOfInaction.riskReversal}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 10. FAQ */}
        <section className="border-t border-charcoal/10 bg-paper-soft py-14 sm:py-18">
          <Container>
            <div className="mx-auto max-w-[720px]">
              <SectionTitle>Frequently asked questions</SectionTitle>
              <div className="mt-8 divide-y divide-charcoal/15 border-y border-charcoal/15">
                {C.faqs.map((faq) => (
                  <details key={faq.q} className="group py-1">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-sans text-[15px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <span aria-hidden className="text-ember transition group-open:rotate-180">
                        ▾
                      </span>
                    </summary>
                    <div className="pb-4 font-reading text-[16px] leading-relaxed text-warm-700">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* 11. Final CTA */}
        <section className="border-t border-charcoal/10 py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-[640px] text-center">
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                {C.closing.title}
              </h2>
              <div className="mt-8 flex flex-col items-center">
                <DiscoveryCta />
              </div>
              <div className="mt-10 rounded-lg bg-ink px-5 py-4 text-left text-paper">
                <p className="font-sans text-base font-bold text-sunrise">{C.closing.rememberLabel}</p>
                <p className="mt-2 font-display text-xl italic leading-snug">{C.closing.remember}</p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <FooterRev showDiscoveryCta={false} />

      <div className="bg-ink-deep px-5 pb-10 sm:px-8 lg:px-12">
        <p className="mx-auto max-w-[720px] text-center font-sans text-[11px] leading-relaxed text-paper/45">
          {C.disclaimer}
        </p>
      </div>
    </div>
  );
}
