"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { BookLogoCloudC148 } from "@/components/book/book-logo-cloud-c148";
import { CoachingDifferent } from "@/components/coaching/coaching-different";
import { CoachingFeaturedQuote } from "@/components/coaching/coaching-featured-quote";
import { CoachingHero } from "@/components/coaching/coaching-hero";
import { CoachingClosingSections } from "@/components/coaching/coaching-closing-sections";
import { CoachingStory } from "@/components/coaching/coaching-story";
import { Navigation } from "@/components/revamp/navigation";
import { FooterRev } from "@/components/revamp/sections-3";
import { Container, ContainedBand, Button } from "@/components/revamp/primitives";
import { ProfileAvatar } from "@/components/revamp/profile-avatar";
import { DISCOVERY_CALL_URL } from "@/lib/site-data";
import {
  COACH_TRAITS,
  DISCOVERY_CALL_TOPICS,
  FAQS,
  HELP_WITH,
  HELP_WITH_CLOSING,
  STEPS,
  TESTIMONIALS,
  TOPICS,
  WHAT_YOU_GET_ITEMS,
  WHAT_YOU_GET_PERIOD,
} from "@/lib/coaching-content";
import { getProfilePhoto } from "@/lib/profile-photos";

function AccentSection({
  tone,
  children,
  id,
}: {
  tone: "sunrise" | "ink";
  children: ReactNode;
  id?: string;
}) {
  return (
    <ContainedBand tone={tone} id={id} padY="clamp(56px, 6vw, 80px)">
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </ContainedBand>
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

function DiscoveryCta({
  variant = "primary",
  onDark = false,
  withGuaranteeLabel = false,
}: {
  variant?: "primary" | "cream";
  onDark?: boolean;
  withGuaranteeLabel?: boolean;
}) {
  const noteClass = onDark ? "text-paper/75" : "text-ink/85";
  return (
    <div>
      <Button href={DISCOVERY_CALL_URL} variant={variant} size="lg">
        Book a discovery call
        <span aria-hidden>→</span>
      </Button>
      {withGuaranteeLabel ? (
        <p className={`mt-3 max-w-md font-sans text-sm leading-relaxed ${noteClass}`}>
          100% work-for-free guarantee
        </p>
      ) : null}
    </div>
  );
}

export function CoachingLandingPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navigation hideNavLinks ctaLabel="Book a discovery call" ctaHref="#how-it-works" />
      <main>
        <CoachingHero />

        <BookLogoCloudC148 reviewsHref="#testimonials" />

        <CoachingStory />

        <CoachingFeaturedQuote />

        <AccentSection tone="sunrise">
          <SectionTitle>What can I help you with?</SectionTitle>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {HELP_WITH.map((item) => (
              <div key={item.title} className="rounded-lg bg-paper/95 p-5 ring-1 ring-ink/15">
                <h3 className="font-sans text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 font-reading text-[15px] leading-relaxed text-ink/85">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl font-reading text-[17px] italic leading-relaxed text-ink">
            {HELP_WITH_CLOSING}
          </p>
          <div className="mt-12 border-t border-ink/15 pt-10">
            <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">What we work on</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {TOPICS.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-paper/95 px-4 py-2 font-sans text-sm font-medium text-ink ring-1 ring-ink/15"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </AccentSection>

        <AccentSection tone="ink" id="how-it-works">
          <SectionTitle onDark>How it works</SectionTitle>
          <ol className="mt-8 grid gap-4 lg:grid-cols-3">
            {STEPS.map((s) => (
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

          <div className="mt-10">
            <DiscoveryCta variant="cream" onDark withGuaranteeLabel />
          </div>

          <div className="mt-12 max-w-3xl">
            <h3 className="font-display text-xl font-semibold text-paper sm:text-2xl">
              What do we talk about in the discovery call?
            </h3>
            <p className="mt-4 font-reading text-[17px] leading-relaxed text-paper/85">
              The discovery call is a strategic, serious conversation. It&rsquo;s not chit chat. We&rsquo;ll talk about:
            </p>
            <ul className="mt-4 space-y-2 font-reading text-[17px] leading-relaxed text-paper/85">
              {DISCOVERY_CALL_TOPICS.map((topic) => (
                <li key={topic} className="flex gap-3">
                  <span className="text-sunrise" aria-hidden>
                    →
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-4 font-reading text-[17px] leading-relaxed text-paper/85">
              <p>
                <em className="text-paper">To be clear, this is a decision call.</em> By the end
                of the call, you should have everything you need to help you make a decision if coaching is for you or
                not.
              </p>
              <p>
                <em className="text-paper">Come prepared.</em> Bring any questions you have.
                I&rsquo;m happy to address them. By the end of the call, you should have everything you need to decide if
                this is something you want to progress with or not.
              </p>
            </div>
          </div>

          <div id="what-you-get-with-coaching" className="mt-12 border-t border-paper/15 pt-10 scroll-mt-28">
            <h3 className="font-display text-xl font-semibold text-paper sm:text-2xl">What you get with coaching</h3>
            <ul className="mt-6 max-w-3xl space-y-3 font-reading text-[17px] leading-relaxed text-paper/85">
              {WHAT_YOU_GET_ITEMS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-sunrise" aria-hidden>
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-reading text-[17px] font-semibold text-paper">{WHAT_YOU_GET_PERIOD}</p>
          </div>
        </AccentSection>

        <CoachingDifferent />

        <section className="bg-paper-soft py-14 sm:py-16">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
              What&rsquo;s it like having me as your coach?
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {COACH_TRAITS.map((item) => (
                <div key={item.title} className="rounded-lg bg-paper p-5 ring-1 ring-charcoal/10">
                  <h3 className="font-sans font-bold text-charcoal">{item.title}</h3>
                  <p className="mt-2 font-reading text-[15px] leading-relaxed text-warm-700">{item.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="testimonials" className="py-14 sm:py-16">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
              Testimonials from people I&rsquo;ve coached
            </h2>
            <p className="mt-3 font-sans text-sm text-warm-600">Real people. Named where permitted.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((t, i) => (
                <figure key={`${t.name}-${i}`} className="rounded-lg bg-paper-soft p-6 ring-1 ring-charcoal/10">
                  <blockquote className="font-reading text-[16px] italic leading-relaxed text-charcoal">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    {getProfilePhoto(t.name) ? <ProfileAvatar name={t.name} size={48} /> : null}
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

        <section className="bg-paper-soft py-14 sm:py-16">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">FAQ</h2>
            <dl className="mt-8 max-w-3xl divide-y divide-charcoal/10">
              {FAQS.map((faq) => (
                <Disclosure key={faq.q} as="div" className="py-5">
                  <dt>
                    <DisclosureButton className="group flex w-full items-center justify-between text-left">
                      <span className="font-sans text-base font-semibold text-charcoal">{faq.q}</span>
                      <ChevronDownIcon
                        aria-hidden
                        className="size-5 text-warm-500 group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-3 font-reading text-[16px] leading-relaxed text-warm-700">
                    {"howItWorksAnchor" in faq && faq.howItWorksAnchor ? (
                      <>
                        A strategic conversation — not chit-chat. See the{" "}
                        <Link href="#how-it-works" className="font-semibold text-ember underline underline-offset-4">
                          How it works
                        </Link>{" "}
                        section on this page for what we cover and what to expect by the end of the call.
                      </>
                    ) : (
                      faq.a
                    )}
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </Container>
        </section>

        <CoachingClosingSections />
      </main>
      <FooterRev showDiscoveryCta={false} />
    </div>
  );
}
