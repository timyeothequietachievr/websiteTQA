"use client";

import { Navigation } from "@/components/revamp/navigation";
import { Container } from "@/components/revamp/primitives";
import { FooterRev, NewsletterBand } from "@/components/revamp/sections-3";
import { ABOUT_HERO, ABOUT_STORY_SECTIONS } from "@/lib/about-content";

export function AboutLandingPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navigation />
      <main>
        <section className="border-b border-charcoal/10 pt-3 pb-16 sm:pb-20">
          <Container>
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="relative">
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: "22px -24px -24px 24px",
                      background: "var(--tqa-sunrise)",
                      borderRadius: "4px",
                    }}
                  />
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={ABOUT_HERO.imageSrc}
                      alt={ABOUT_HERO.imageAlt}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">
                  {ABOUT_HERO.eyebrow}
                </p>
                <h1
                  className="font-display mt-4 font-semibold text-charcoal"
                  style={{
                    fontSize: "clamp(32px, 4vw, 48px)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {ABOUT_HERO.title}
                </h1>
                <p className="mt-6 font-reading text-lg leading-relaxed text-warm-700">{ABOUT_HERO.bio}</p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-3xl space-y-14">
              {ABOUT_STORY_SECTIONS.map((section) => (
                <article key={section.title}>
                  <h2
                    className="font-display font-semibold italic text-charcoal"
                    style={{ fontSize: "clamp(22px, 2.8vw, 32px)", lineHeight: 1.15, textWrap: "balance" }}
                  >
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 font-reading text-[17px] leading-relaxed text-warm-700">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <NewsletterBand />
      <FooterRev cta={{ label: "Work with me", href: "/#work-with-me" }} ctaAsButton showDiscoveryCta={false} />
    </div>
  );
}
