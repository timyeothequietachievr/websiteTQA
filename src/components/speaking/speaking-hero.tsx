"use client";

import { Container, Button } from "@/components/revamp/primitives";

const SPEAKER_EMAIL = "mailto:speaker@thequietachievr.com?subject=Speaking%20enquiry";

const HERO_TITLE =
  "Tim Yeo is a regular speaker at international conferences and companies.";

const HERO_CLIENTS =
  "IxDA, Web Directions, Standard Chartered, Ezra Coaching, UX Australia, Leading Design Conference, UCD Gathering London and more.";

const HERO_BODY =
  "Keynotes and fireside chats for conferences, leadership offsites, and company all-hands. In-person and remote, globally.";

/** Full-width hero — stage photo on top, copy below */
export function SpeakingHero() {
  return (
    <section className="border-b border-charcoal/10 pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container>
        <div
          className="relative w-full overflow-hidden rounded-lg ring-1 ring-charcoal/10"
          style={{
            aspectRatio: "21 / 9",
            maxHeight: "min(52vw, 420px)",
            background: "var(--tqa-ink)",
          }}
        >
          <img
            src="/assets/speaker-hero.jpg"
            alt="Tim Yeo speaking on stage at a conference"
            className="block h-full w-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
        </div>

        <h1
          className="mt-8 font-display font-semibold text-charcoal"
          style={{
            fontSize: "clamp(32px, 4.2vw, 56px)",
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            textWrap: "balance",
          }}
        >
          {HERO_TITLE}
        </h1>
        <p
          className="mt-3 max-w-4xl font-sans text-lg leading-relaxed text-warm-700 sm:text-xl"
          style={{ lineHeight: 1.5 }}
        >
          {HERO_CLIENTS}
        </p>
        <p
          className="mt-6 max-w-4xl font-sans text-lg leading-relaxed text-warm-700"
          style={{ lineHeight: 1.55 }}
        >
          {HERO_BODY}
        </p>
        <div className="mt-8">
          <Button href={SPEAKER_EMAIL} size="lg">
            Enquire about speaking
            <span aria-hidden>→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
