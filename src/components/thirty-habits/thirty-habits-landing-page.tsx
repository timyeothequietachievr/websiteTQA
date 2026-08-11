"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Navigation } from "@/components/revamp/navigation";
import { Container, Button } from "@/components/revamp/primitives";
import { FooterRev } from "@/components/revamp/sections-3";
import {
  PRICING_AUDIOBOOK_CALLOUT,
  PRICING_FEATURES,
  THIRTY_DAYS_TOGETHER,
  THIRTY_HABITS_BUY_URL,
  THIRTY_HABITS_FAQS,
  THIRTY_HABITS_HOW_IT_WORKS_IMAGE,
  THIRTY_HABITS_PRICING_SECTION_ID,
  THIRTY_HABITS_TOASTER_COPY,
  THIRTY_HABITS_VIDEO_EMBED,
  TOPICS,
  WHY_JOIN,
} from "@/lib/thirty-habits-content";

const pricingHref = `#${THIRTY_HABITS_PRICING_SECTION_ID}`;

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-display font-semibold text-charcoal"
      style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.08, textWrap: "balance" }}
    >
      {children}
    </h2>
  );
}

function SplitSection({
  id,
  imageSrc,
  imageAlt,
  imageSide = "left",
  children,
  className = "",
}: {
  id?: string;
  imageSrc: string;
  imageAlt: string;
  imageSide?: "left" | "right";
  children: ReactNode;
  className?: string;
}) {
  const image = (
    <div className={imageSide === "left" ? "lg:col-span-5" : "lg:col-span-5 lg:col-start-8"}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="h-full w-full rounded-lg object-cover ring-1 ring-charcoal/10"
        style={{ minHeight: "280px", maxHeight: "520px" }}
      />
    </div>
  );
  const copy = (
    <div className={imageSide === "left" ? "lg:col-span-7" : "lg:col-span-7 lg:col-start-1 lg:row-start-1"}>
      {children}
    </div>
  );
  return (
    <section id={id} className={className} style={{ padding: "clamp(64px, 8vw, 96px) 0" }}>
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {imageSide === "left" ? (
            <>
              {image}
              {copy}
            </>
          ) : (
            <>
              {copy}
              {image}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

function PromoToasterBar() {
  return (
    <a
      href={pricingHref}
      className="font-sans block py-2.5 text-center text-[13px] font-semibold sm:text-sm"
      style={{
        background: "var(--tqa-ember-deep)",
        color: "var(--tqa-paper)",
        textDecoration: "none",
      }}
    >
      {THIRTY_HABITS_TOASTER_COPY}
      <span aria-hidden className="ml-1">
        →
      </span>
    </a>
  );
}

export function ThirtyHabitsLandingPage() {
  return (
    <div className="bg-paper" data-screen-label="30 Habits in 30 Days">
      <PromoToasterBar />
      <Navigation hideNavLinks ctaLabel="Start practising today" ctaHref={pricingHref} />
      <main>
        <section className="pt-6 pb-16 sm:pb-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">Book Companion</p>
              <h1
                className="font-display mt-4 font-semibold text-charcoal"
                style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 0.98, letterSpacing: "-0.022em" }}
              >
                30 habits in{" "}
                <span className="text-ember">30 days</span>
              </h1>
              <p className="font-reading mx-auto mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-warm-800 sm:text-xl">
                Master people skills with confidence, one tiny habit at a time
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-lg ring-1 ring-charcoal/10">
              <div className="aspect-video w-full">
                <iframe
                  title="30 Habits in 30 Days — course overview"
                  src={THIRTY_HABITS_VIDEO_EMBED}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="mx-auto mt-10 flex max-w-3xl justify-center">
              <Button variant="primary" size="lg" href="#how-it-works">
                How it works
                <span aria-hidden>→</span>
              </Button>
            </div>
          </Container>
        </section>

        <SplitSection
          imageSrc="/assets/30habits/bookhero.jpg"
          imageAlt="The Quiet Achiever book on a desk"
          imageSide="right"
          className="bg-paper-soft"
        >
          <h2
            className="font-display font-semibold text-charcoal"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.08, textWrap: "balance" }}
          >
            Real change happens when you practise these habits for real
          </h2>
          <div className="font-reading mt-6 space-y-4 text-[17px] leading-relaxed text-warm-700">
            <p>
              <em>The Quiet Achiever</em> book provides simple, easy to apply tiny habits to have impact at work.
            </p>
            <p>
              But life gets busy. More important things come up; and practising on your own isn&rsquo;t very motivating
              and feels kinda meh.
            </p>
            <p className="font-semibold text-charcoal">Here&rsquo;s a better way to practise.</p>
          </div>
        </SplitSection>

        <SplitSection
          id="how-it-works"
          imageSrc={THIRTY_HABITS_HOW_IT_WORKS_IMAGE}
          imageAlt="30 Habits in 30 Days course"
          imageSide="left"
        >
          <SectionHeading>How it works</SectionHeading>
          <ul className="font-reading mt-6 list-disc space-y-3 pl-5 text-[17px] leading-relaxed text-warm-700">
            {THIRTY_DAYS_TOGETHER.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3
            className="font-display mt-8 font-semibold text-charcoal"
            style={{ fontSize: "clamp(22px, 2.5vw, 32px)", lineHeight: 1.12 }}
          >
            You don&rsquo;t have to do this on your own.
          </h3>
          <div className="mt-6">
            <Button variant="primary" href={pricingHref}>
              Less than $1/day
            </Button>
          </div>
        </SplitSection>

        <section style={{ padding: "clamp(64px, 8vw, 96px) 0" }} className="bg-paper-soft">
          <Container>
            <SectionHeading>Topics covered</SectionHeading>
            <ul className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {TOPICS.map((topic) => (
                <li key={topic.title}>
                  <img
                    src={topic.image}
                    alt=""
                    className="aspect-[3/2] w-full rounded-lg object-cover ring-1 ring-charcoal/10"
                  />
                  <h3 className="font-sans mt-5 text-lg font-semibold text-charcoal">{topic.title}</h3>
                  <p className="font-reading mt-2 text-[16px] leading-relaxed text-warm-700">{topic.copy}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <SplitSection
          imageSrc="/assets/30habits/30habits-whyjoin.jpg"
          imageAlt="Quiet achievers practising together"
          imageSide="right"
        >
          <SectionHeading>Why join?</SectionHeading>
          <ul className="mt-8 space-y-5">
            {WHY_JOIN.map((item) => (
              <li key={item.title}>
                <p className="font-sans text-base font-semibold text-charcoal">{item.title}</p>
                <p className="font-reading mt-1 text-[16px] leading-relaxed text-warm-700">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button variant="primary" href={pricingHref}>
              Start practising today
            </Button>
          </div>
        </SplitSection>

        <section className="bg-paper-soft py-14 sm:py-16">
          <Container>
            <SectionHeading>FAQ</SectionHeading>
            <dl className="mt-8 max-w-3xl divide-y divide-charcoal/10">
              {THIRTY_HABITS_FAQS.map((faq) => (
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
                    {"bookLink" in faq && faq.bookLink ? (
                      <>
                        You can buy it on{" "}
                        <Link href="/book" className="font-semibold text-ember underline underline-offset-4">
                          our website
                        </Link>{" "}
                        or good bookstores everywhere.
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

        <section id={THIRTY_HABITS_PRICING_SECTION_ID} style={{ padding: "clamp(64px, 8vw, 96px) 0" }}>
          <Container>
            <SectionHeading>For less than a dollar a day</SectionHeading>
            <p className="font-reading mt-4 max-w-2xl text-[17px] leading-relaxed text-warm-700">
              Buy once. Get access to the full course. Practise one habit per day at your own pace.
            </p>
            <div className="mt-10 max-w-md rounded-lg border border-paper-200 bg-paper-soft p-8 ring-1 ring-charcoal/10">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">Book Companion</p>
              <h3 className="font-display mt-3 text-2xl font-semibold text-charcoal">30 Habits in 30 Days</h3>
              <p className="font-display mt-2 text-4xl font-semibold text-charcoal">$29.99</p>
              <ul className="font-sans mt-6 space-y-2 text-sm text-warm-700">
                {PRICING_FEATURES.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-ember" aria-hidden>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <p
                className="font-sans mt-5 rounded-md px-4 py-3 text-sm font-semibold leading-snug text-charcoal"
                style={{ background: "var(--tqa-sunrise-soft)" }}
              >
                {PRICING_AUDIOBOOK_CALLOUT}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="primary" size="lg" href={THIRTY_HABITS_BUY_URL} className="flex-1">
                  Buy now
                </Button>
                <Button variant="secondary" size="lg" className="flex-1">
                  Gift it
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <FooterRev showDiscoveryCta={false} />
    </div>
  );
}
