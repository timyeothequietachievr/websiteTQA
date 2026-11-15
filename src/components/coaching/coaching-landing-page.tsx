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
import { CoachingInclusions } from "@/components/coaching/coaching-inclusions";
import { CoachingOfferingSection } from "@/components/coaching/coaching-offering-section";
import { CoachingStory } from "@/components/coaching/coaching-story";
import { MasterclassResultsSection } from "@/components/masterclass/masterclass-results-options";
import { Navigation } from "@/components/revamp/navigation";
import { FooterRev } from "@/components/revamp/sections-3";
import { Container, ContainedBand, Button } from "@/components/revamp/primitives";
import { ProfileAvatar } from "@/components/revamp/profile-avatar";
import { DISCOVERY_CALL_URL } from "@/lib/site-data";
import {
  COACH_TRAITS,
  COACHING_AI_TOOLS,
  COACHING_AI_TOOLS_FULL,
  DISCOVERY_CALL_TOPICS,
  FAQS,
  HELP_WITH,
  HELP_WITH_CLOSING,
  TESTIMONIALS,
  TOPICS,
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

        <BookLogoCloudC148
          heading="Trusted by tech professionals from top companies around the world"
          reviewsHref="#testimonials"
        />

        <CoachingStory />

        <CoachingFeaturedQuote />

        <AccentSection tone="ink" id="how-it-works">
          <SectionTitle onDark>How to apply</SectionTitle>

          <div className="mt-8 max-w-3xl">
            <p className="font-reading text-[17px] leading-relaxed text-paper/85">
              <em className="text-paper">Book a discovery call.</em>
              {" "}
              The discovery call is a strategic, serious conversation; not chit chat. We&rsquo;ll
              talk about:
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
                <em className="text-paper">To be clear, this is a decision call.</em>
                {" "}
                By the end of the call, you should have everything you need to help you make a
                decision if coaching is for you or not.
              </p>
              <p>
                <em className="text-paper">Come prepared.</em>
                {" "}
                Bring any questions you have. I&rsquo;m happy to address them. By the end of the
                call, you should have everything you need to decide if this is something you want
                to progress with or not.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <DiscoveryCta variant="cream" onDark withGuaranteeLabel />
          </div>
        </AccentSection>

        <CoachingOfferingSection colorStyle={5} />

        <CoachingInclusions />

        <MasterclassResultsSection colorStyle={4} />

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
                          How to apply
                        </Link>{" "}
                        section on this page for what we cover and what to expect by the end of the call.
                      </>
                    ) : (
                      faq.a
                    )}
                  </DisclosurePanel>
                </Disclosure>
              ))}
              <Disclosure as="div" className="py-5">
                <dt>
                  <DisclosureButton className="group flex w-full items-center justify-between text-left">
                    <span className="font-sans text-base font-semibold text-charcoal">
                      {COACHING_AI_TOOLS.faqTitle}
                    </span>
                    <ChevronDownIcon
                      aria-hidden
                      className="size-5 shrink-0 text-warm-500 group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-3">
                  <ul className="space-y-3">
                    {COACHING_AI_TOOLS_FULL.map((tool) => (
                      <li
                        key={tool.name}
                        className="flex flex-col gap-0.5 border-t border-charcoal/10 pt-3 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                      >
                        <span className="font-sans text-[15px] font-semibold text-ink">
                          1 year free of {tool.name}
                          <span className="mt-0.5 block font-reading text-[14px] font-normal text-warm-700 sm:mt-0 sm:inline sm:before:content-['_·_']">
                            {tool.blurb}
                          </span>
                        </span>
                        <span className="shrink-0 font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-warm-700">
                          {tool.value} value
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-sans text-sm font-semibold text-ink">
                    Combined value: {COACHING_AI_TOOLS.totalValue}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            </dl>
          </Container>
        </section>

        <CoachingClosingSections />
      </main>
      <FooterRev showDiscoveryCta={false} />
    </div>
  );
}
