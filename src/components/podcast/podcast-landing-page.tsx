"use client";

import { Navigation } from "@/components/revamp/navigation";
import { FooterRev, NewsletterBand } from "@/components/revamp/sections-3";
import { Container, Eyebrow } from "@/components/revamp/primitives";
import { PodcastEpisodesSection } from "@/components/podcast/podcast-episodes-section";

export function PodcastLandingPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navigation />
      <main>
        <section className="border-b border-charcoal/10 pt-28 pb-16 sm:pt-32 sm:pb-20">
          <Container>
            <Eyebrow>Free to watch &amp; listen</Eyebrow>
            <h1
              className="font-display mt-4 font-semibold text-charcoal"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
            >
              Podcasts. Videos. Articles.
            </h1>
            <p className="mt-6 max-w-2xl font-reading text-lg leading-relaxed text-warm-700">
              Watch, listen, and read — all free. Tim on other people&rsquo;s shows, talking quiet leadership,
              introverts at work, and tiny habits that actually stick.
            </p>
          </Container>
        </section>

        <PodcastEpisodesSection />
      </main>
      <NewsletterBand />
      <FooterRev />
    </div>
  );
}
