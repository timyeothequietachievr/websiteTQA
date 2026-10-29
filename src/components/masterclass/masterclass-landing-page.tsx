"use client";

import { useEffect, type ReactNode } from "react";
import { BookLogoCloudC148 } from "@/components/book/book-logo-cloud-c148";
import { Navigation } from "@/components/revamp/navigation";
import { FooterRev } from "@/components/revamp/sections-3";
import { Button, Container, ContainedBand } from "@/components/revamp/primitives";
import {
  MASTERCLASS_HERO_OPTIONS,
  MASTERCLASS_LANDING,
  activeHeroOption,
} from "@/lib/masterclass-landing-content";
import {
  MASTERCLASS_REPLAY_YOUTUBE_URL,
  bindMasterclassReplayEoSuccessRedirect,
  ensureMasterclassReplayEoReady,
  openMasterclassReplayEoForm,
} from "@/lib/masterclass-replay-eo";

const C = MASTERCLASS_LANDING;
const HERO = MASTERCLASS_HERO_OPTIONS[activeHeroOption];

/** Highlight [TIM TO CONFIRM: …] placeholders — never replace with guesses. */
function RichCopy({ text }: { text: string }) {
  const parts = text.split(/(\[TIM TO CONFIRM:[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[TIM TO CONFIRM:") ? (
          <mark
            key={i}
            className="rounded px-1 py-0.5 font-semibold not-italic"
            style={{ background: "#F5C84B", color: "#1E1E1E" }}
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function SectionTitle({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <h2
      className={`font-display text-2xl font-semibold sm:text-3xl ${onDark ? "text-paper" : "text-ink"}`}
    >
      {children}
    </h2>
  );
}

function openReplayForm() {
  void openMasterclassReplayEoForm();
}

function WatchReplayCta({
  label,
  variant = "primary",
}: {
  label: string;
  variant?: "primary" | "cream" | "ink";
}) {
  return (
    <Button variant={variant} size="lg" className="min-h-11" onClick={openReplayForm}>
      {label}
    </Button>
  );
}

function MasterclassTopBar() {
  return (
    <div
      role="region"
      aria-label="Masterclass replay"
      className="relative"
      style={{
        background: "var(--tqa-ember-deep)",
        color: "var(--tqa-paper)",
        borderBottom: "1px solid rgba(0,0,0,0.18)",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-center px-5 py-2.5 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={openReplayForm}
          className="min-h-11 min-w-0 cursor-pointer border-0 bg-transparent text-center font-sans text-[13px] font-semibold leading-snug sm:text-[14px]"
          style={{ color: "inherit", display: "inline-flex", alignItems: "center" }}
        >
          {C.topBar.label}
        </button>
      </div>
    </div>
  );
}

/** Hero Option 1 — smile teeth (masterclass-alt-smile-teeth). */
const HERO_IMG_W = 360;
const HERO_IMG_H = 840;

/** Meet Tim Option 3 — closed mouth straight. */
const MEET_IMG_W = 338;
const MEET_IMG_H = 760;

function HeroBanner() {
  return (
    <div
      className="grid grid-cols-1 items-stretch overflow-hidden rounded-[10px] lg:grid-cols-12"
      style={{ background: HERO.background, color: HERO.heading }}
    >
      <div
        className="flex flex-col justify-center lg:col-span-7"
        style={{ padding: "clamp(32px, 5vw, 72px)" }}
      >
        <p
          className="font-mono text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: HERO.eyebrow }}
        >
          <RichCopy text={C.hero.eyebrow} />
        </p>
        <h1
          className="mt-5 font-display font-semibold"
          style={{
            color: HERO.heading,
            fontSize: HERO.h1Size,
            lineHeight: 1.05,
            letterSpacing: "-0.022em",
            textWrap: "balance",
          }}
        >
          {C.hero.h1}
        </h1>
        <p
          className="mt-6 max-w-[50ch] font-reading text-[17px] italic leading-relaxed"
          style={{ color: HERO.body }}
        >
          {C.hero.pov}
        </p>
        <p
          className="mt-5 max-w-[50ch] font-reading text-[17px] leading-relaxed"
          style={{ color: HERO.body }}
        >
          {C.hero.sub2}
        </p>
        <p className="mt-6 font-sans text-[15px] font-semibold" style={{ color: HERO.heading }}>
          {C.hero.dateLine}
        </p>
        <div className="mt-6">
          <WatchReplayCta label={C.hero.cta} variant={HERO.ctaVariant} />
        </div>
      </div>

      <div
        className="relative flex items-end justify-center lg:col-span-5"
        style={{ padding: "clamp(12px, 2vw, 28px) clamp(12px, 2vw, 28px) 0" }}
      >
        {/* Mobile: top ~50%. Desktop: 30% bottom crop. Static classes for Tailwind JIT. */}
        <div className="relative aspect-[360/420] w-full max-w-[280px] overflow-hidden sm:max-w-[340px] lg:aspect-[360/588] lg:max-w-[420px]">
          <picture>
            <source srcSet={C.host.heroImageSrc} type="image/webp" />
            {/* eslint-disable-next-line @next/next/no-img-element -- local cutout with webp picture */}
            <img
              src={C.host.heroImageFallbackSrc}
              alt={C.host.imageAlt}
              width={HERO_IMG_W}
              height={HERO_IMG_H}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export function MasterclassLandingPage() {
  useEffect(() => {
    void ensureMasterclassReplayEoReady();
    return bindMasterclassReplayEoSuccessRedirect(MASTERCLASS_REPLAY_YOUTUBE_URL);
  }, []);

  return (
    <div className="min-h-full bg-paper">
      <Navigation
        hideNavLinks
        ctaLabel={C.stickyCta.label}
        ctaHref={C.stickyCta.href}
        onCtaClick={openReplayForm}
        promoBanner={<MasterclassTopBar />}
      />

      <main>
        {/* 1. Hero — Option 1: smile teeth · ember deep */}
        <section className="bg-paper pt-3 pb-10 sm:pb-14">
          <Container wide>
            <HeroBanner />
          </Container>
        </section>

        {/* 2. Logos */}
        <BookLogoCloudC148 heading={C.logosHeading} />

        {/* 4. What you'll get */}
        <ContainedBand tone="sunrise" padY="clamp(56px, 6vw, 80px)">
          <div className="mx-auto max-w-[1200px]">
            <SectionTitle>
              <RichCopy text={C.agenda.title} />
            </SectionTitle>
            <ul className="mt-8 space-y-4">
              {C.agenda.items.map((item) => (
                <li
                  key={item.lead}
                  className="rounded-lg bg-paper/95 p-5 font-reading text-[16px] leading-relaxed text-ink ring-1 ring-ink/15"
                >
                  <span className="font-sans font-bold">{item.lead}</span> {item.body}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <WatchReplayCta label={C.hero.cta} />
            </div>
          </div>
        </ContainedBand>

        {/* 5. Who it's for */}
        <section className="border-t border-charcoal/10 py-14 sm:py-18">
          <Container>
            <div className="mx-auto max-w-[720px]">
              <SectionTitle>{C.whoFor.title}</SectionTitle>
              <ul className="mt-8 space-y-3">
                {C.whoFor.items.map((item) => (
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
            </div>
          </Container>
        </section>

        {/* 7. Results proof wall */}
        <ContainedBand tone="ink" padY="clamp(56px, 6vw, 72px)">
          <div className="mx-auto max-w-[1200px]">
            <SectionTitle onDark>{C.results.title}</SectionTitle>
            <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {C.results.cards.map((card) => (
                <div
                  key={card.headline}
                  className="flex h-full flex-col rounded-lg p-4 ring-1 ring-paper/20"
                  style={{ background: "rgba(245,240,211,0.08)" }}
                >
                  <p className="font-display text-lg font-semibold leading-snug text-sunrise sm:text-xl">
                    {card.headline}
                  </p>
                  <p className="mt-2 font-sans text-[13px] leading-relaxed text-paper/80">
                    {card.subline}
                  </p>
                  <div className="mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-lg bg-ink-deep/40">
                    {card.image ? (
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
                    ) : (
                      <p className="px-4 py-10 text-center font-display text-base font-semibold leading-snug text-paper/70 sm:text-lg">
                        {card.cardText}
                      </p>
                    )}
                  </div>
                </div>
              ))}
              <a
                href="/testimonials"
                className="flex h-full min-h-full flex-col items-center justify-center rounded-lg p-4 text-center ring-1 ring-paper/20 transition hover:bg-paper/10"
                style={{ background: "rgba(245,240,211,0.08)" }}
              >
                <span className="font-sans text-[15px] font-semibold text-paper underline underline-offset-4">
                  Read more reviews →
                </span>
              </a>
            </div>
          </div>
        </ContainedBand>

        {/* 8. Meet Tim — Option 3: closed mouth straight · sunrise */}
        <ContainedBand tone="sunrise" padY="clamp(56px, 6vw, 80px)">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              {/* Mobile: top ~50%. Desktop: 12% bottom crop. */}
              <div className="relative mx-auto aspect-[338/380] w-full max-w-[280px] overflow-hidden sm:max-w-[340px] lg:aspect-[338/669] lg:max-w-[380px]">
                <picture>
                  <source srcSet={C.host.imageSrc} type="image/webp" />
                  {/* eslint-disable-next-line @next/next/no-img-element -- local cutout with webp picture */}
                  <img
                    src={C.host.imageFallbackSrc}
                    alt={C.host.imageAlt}
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
                {C.host.eyebrow}
              </p>
              <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">
                {C.host.title}
              </h2>
              <div className="mt-6 space-y-4">
                {C.host.paragraphs.map((p) => (
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
                <WatchReplayCta label={C.hero.cta} variant="ink" />
              </div>
            </div>
          </div>
        </ContainedBand>

        {/* 10. Cost */}
        <section className="py-14 sm:py-18">
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
                {C.costOfInaction.after.map((p) => (
                  <p key={p.slice(0, 40)} className="font-reading text-[17px] leading-relaxed text-charcoal">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* 11. FAQ */}
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

        {/* 12. Final CTA */}
        <section className="border-t border-charcoal/10 py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-[640px] text-center">
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                {C.closing.title}
              </h2>
              <p className="mt-4 font-reading text-[17px] leading-relaxed text-warm-700">
                {C.closing.copy1}
              </p>
              <p className="mt-4 font-reading text-[17px] leading-relaxed text-warm-700">
                {C.closing.copy2}
              </p>
              <div className="mt-8 flex flex-col items-center">
                <WatchReplayCta label={C.closing.cta} />
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
