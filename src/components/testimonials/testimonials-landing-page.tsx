"use client";

import { FeaturedTestimonial } from "@/components/revamp/featured-testimonial";
import { Navigation } from "@/components/revamp/navigation";
import { ProfileAvatar } from "@/components/revamp/profile-avatar";
import { Button, Container } from "@/components/revamp/primitives";
import { FooterRev } from "@/components/revamp/sections-3";
import { DISCOVERY_CALL_URL } from "@/lib/site-data";
import {
  FEATURED_SITE_TESTIMONIAL,
  SITE_TESTIMONIALS,
  TESTIMONIALS_HERO,
} from "@/lib/testimonials-content";

export function TestimonialsLandingPage() {
  const wall = SITE_TESTIMONIALS.filter((t) => t.name !== FEATURED_SITE_TESTIMONIAL.name);

  return (
    <div className="min-h-full bg-paper">
      <Navigation />
      <main>
        <section className="border-b border-charcoal/10 pt-3 pb-16 sm:pb-20">
          <Container>
            <h1
              className="font-display font-semibold text-charcoal"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.05, textWrap: "balance" }}
            >
              {TESTIMONIALS_HERO.title}
            </h1>
          </Container>
        </section>

        <FeaturedTestimonial
          quote={FEATURED_SITE_TESTIMONIAL.quote}
          name={FEATURED_SITE_TESTIMONIAL.name}
          role={FEATURED_SITE_TESTIMONIAL.role}
        />

        <section className="py-14 sm:py-16">
          <Container>
            <div className="grid gap-6 md:grid-cols-2">
              {wall.map((t, i) => (
                <figure key={`${t.name}-${i}`} className="rounded-lg bg-paper-soft p-6 ring-1 ring-charcoal/10">
                  <blockquote className="font-reading text-[16px] italic leading-relaxed text-charcoal">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    <ProfileAvatar name={t.name} size={48} />
                    <div className="font-sans text-sm text-warm-700">
                      <strong className="text-charcoal">{t.name}</strong>
                      {t.role ? (
                        <>
                          <br />
                          {t.role}
                        </>
                      ) : null}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-charcoal/10 bg-paper-soft py-14 sm:py-16">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
                Ready to level up your career?
              </h2>
              <p className="mt-4 font-reading text-[17px] leading-relaxed text-warm-700">
                Book a free 45-minute discovery call. You don&rsquo;t need to pretend to be someone else, you
                don&rsquo;t need to change who you are. You just need tiny habits that work for you.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button href={DISCOVERY_CALL_URL} variant="primary" size="lg">
                  Book a discovery call
                </Button>
                <Button href="/coaching" variant="secondary" size="lg">
                  Explore coaching
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <FooterRev cta={{ label: "Work with me", href: "/#work-with-me" }} ctaAsButton showDiscoveryCta={false} />
    </div>
  );
}
