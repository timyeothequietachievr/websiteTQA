"use client";

import Link from "next/link";
import { Navigation } from "@/components/revamp/navigation";
import { Container } from "@/components/revamp/primitives";
import { PodcastEpisodesSection } from "@/components/podcast/podcast-episodes-section";
import { PlaybooksSection } from "@/components/playbooks/playbooks-section";
import { FooterRev, NewsletterBand } from "@/components/revamp/sections-3";
import { FREE_RESOURCES } from "@/lib/main-nav";

export function FreeResourcesLandingPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navigation />
      <main>
        <section className="border-b border-charcoal/10 pt-3 pb-16 sm:pb-20">
          <Container>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">Free</p>
            <h1
              className="font-display mt-4 font-semibold text-charcoal"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05, textWrap: "balance" }}
            >
              Free Resources
            </h1>
            <p className="mt-5 max-w-2xl font-reading text-lg leading-relaxed text-warm-700">
              Podcast episodes, playbooks, and the newsletter — all free. Pick what helps you most right now.
            </p>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-6 md:grid-cols-3">
              {FREE_RESOURCES.map(({ title, description, href, cta }) => (
                <article
                  key={title}
                  className="flex flex-col rounded-lg bg-paper-soft p-6 ring-1 ring-charcoal/10"
                >
                  <h2 className="font-display text-2xl font-semibold text-charcoal">{title}</h2>
                  <p className="mt-3 flex-1 font-reading text-[16px] leading-relaxed text-warm-700">
                    {description}
                  </p>
                  <Link
                    href={href}
                    className="mt-6 inline-flex font-sans text-sm font-semibold text-ember underline underline-offset-4"
                  >
                    {cta} →
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section id="podcast" className="scroll-mt-24 border-t border-charcoal/10">
          <div className="border-b border-charcoal/10 py-12 sm:py-14">
            <Container>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">
                Free to watch &amp; listen
              </p>
              <h2
                className="font-display mt-4 font-semibold text-charcoal"
                style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
                Podcasts. Videos. Articles.
              </h2>
              <p className="mt-5 max-w-2xl font-reading text-lg leading-relaxed text-warm-700">
                Watch, listen, and read — all free. Tim on other people&rsquo;s shows, talking quiet leadership,
                introverts at work, and tiny habits that actually stick.
              </p>
            </Container>
          </div>
          <PodcastEpisodesSection />
        </section>

        <PlaybooksSection showViewAll={false} />
      </main>
      <NewsletterBand />
      <FooterRev cta={{ label: "Work with me", href: "/#work-with-me" }} ctaAsButton showDiscoveryCta={false} />
    </div>
  );
}
