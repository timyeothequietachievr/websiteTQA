"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Navigation } from "@/components/revamp/navigation";
import { ThesisBand } from "@/components/revamp/sections-1";
import { FooterRev } from "@/components/revamp/sections-3";
import { Container, Button } from "@/components/revamp/primitives";
import { SectionBlock, QuoteCard, DataTable } from "@/components/speaking/shared";
import { SpeakingHero } from "@/components/speaking/speaking-hero";

import {
  LEADING_DESIGN_2021_WATCH,
  MAIN_TALK_EMBED,
  MAIN_TALK_WATCH,
  SPEAKER_EMAIL,
} from "@/lib/speaking-content";

function ProblemCopy() {
  return (
    <div className="max-w-3xl space-y-4 font-reading text-[17px] leading-relaxed text-warm-700">
      <p>
        We live in a world that desires the extrovert ideal. Most leadership advice works for people who are
        energised by people-ing and for whom being loud comes naturally.
      </p>
      <p>
        But research shows{" "}
        <strong className="font-semibold text-charcoal">30–40% of the world identifies as quiet or introverted</strong>.
        Which means a third to half of your team probably skews introvert.
      </p>
      <p>
        Chances are, you&rsquo;re only hearing the loudest ideas in the room. And{" "}
        <strong className="font-semibold text-charcoal">loud ≠ best</strong>. You&rsquo;re leaving a huge chunk of
        ideas on the table, unheard.
      </p>
      <p>
        Meanwhile,{" "}
        <strong className="font-semibold text-charcoal">your quiet achievers are silently suffering</strong>.
        They&rsquo;re probably blaming themselves for not being good enough; I know, because that was me. If only they
        got the help they needed to level up.
      </p>
      <p>
        I&rsquo;ve watched many leadership speakers and read many leadership books.{" "}
        <strong className="font-semibold text-charcoal">
          Most leave you feeling good; but after, you don&rsquo;t quite know where to start
        </strong>
        .
      </p>
      <p>
        Unlike other talks, I share tiny habits quiet achievers can apply the very next day — no extrovert performance
        required. Your quiet achievers leave feeling seen and empowered, often for the first time. You&rsquo;ll be
        surprised by what they do next.
      </p>
    </div>
  );
}

const BOOKING_STEPS = [
  {
    step: "1",
    text: "Email and tell me about your event — date and time, location, audience, attendee count, format, and the outcomes you want. I'll tell you if I'm the right fit.",
  },
  {
    step: "2",
    text: "Book a discovery call — we talk about your audience, why me, and finalise the topics.",
  },
  {
    step: "3",
    text: "Proposal & contract — I send an invoice with talk topics, logistics, and fee. Once deposit is paid, the date is held (and travel arrangements made).",
  },
  { step: "4", text: "Talk delivered & invoice balance paid." },
] as const;

function BookingStepText({ text }: { text: string }) {
  const dash = text.indexOf(" — ");
  if (dash === -1) {
    return (
      <p className="font-reading text-[17px] leading-relaxed text-warm-700">
        <strong className="text-charcoal">{text}</strong>
      </p>
    );
  }
  return (
    <p className="font-reading text-[17px] leading-relaxed text-warm-700">
      <strong className="text-charcoal">{text.slice(0, dash)}</strong>
      {text.slice(dash)}
    </p>
  );
}

const AUDIENCE_QUOTES = [
  {
    quote:
      "Thanks so much for your awesome preso. Highly positive across the board — participants found the content valuable, engaging, and relevant.",
    attribution: "Event organiser",
  },
  { quote: "The speaker was thoughtful, well spoken and well presented. Great slides. The topic is valuable." },
  {
    quote:
      "The breadth and extent of the content with great examples from Tim's personal experience. Particular take away: that introverts may need more time to reflect.",
  },
  { quote: "Excellent and inspiring presentation by Tim Yeo — and nice time to network all around the world." },
  {
    quote:
      "Some great tips I can share with leaders I coach on how to engage with their introverted team members — plus the reminder that identity doesn't equal skill, and vice versa.",
  },
  {
    quote:
      "Great practical tips to support my clients who are introverts — love the exit script for networking conversations and linking Maslow's hierarchy of needs to small talk.",
  },
  {
    quote:
      "I loved the networking tips and asking introverts how they like to receive praise. Simple, practical and easy to implement.",
  },
  { quote: "Practical things we can do (as an extrovert) to understand others." },
];

const SPEAKING_HISTORY: (string | ReactNode)[][] = [
  ["2025", "Standard Chartered Bank — Quiet leadership for introverts", "Keynote", "—"],
  ["2025", "Ezra Coaching — Global CoachFest", "Keynote", "—"],
  [
    "2024",
    "Design Buddies — Quiet leadership for introverts",
    "Talk",
    <a key="db" href="https://www.youtube.com/watch?v=BOOd2Q83EJA&t=2s" className="text-ember underline">
      Watch
    </a>,
  ],
  [
    "2023",
    "ADPList BeMore Festival — Leadership for quiet achievers",
    "Keynote",
    <a key="ad" href="https://youtu.be/LdxDN2xOrEg" className="text-ember underline">
      Watch
    </a>,
  ],
  [
    "2022",
    "UX Australia — Design leadership for introverts",
    "Keynote",
    <a
      key="ux"
      href="https://uxaustralia.com.au/conferences/ux-australia-2022/presentation/design-leadership-for-introverts/"
      className="text-ember underline"
    >
      Watch
    </a>,
  ],
  [
    "2022",
    "UCD Gathering, London",
    "Keynote",
    <a key="ucd" href="https://www.ucdgathering.net/keynotes/tim-yeo" className="text-ember underline">
      Details
    </a>,
  ],
  [
    "2022",
    "Scaling Design Conference — Scaling impactful design teams",
    "Panel",
    <a key="sd" href="https://www.youtube.com/watch?v=EPACYLMCdxI" className="text-ember underline">
      Watch
    </a>,
  ],
  [
    "2021",
    "Leading Design — Design leadership for introverts",
    "Talk",
    <a key="ld" href={LEADING_DESIGN_2021_WATCH} className="text-ember underline">
      Watch
    </a>,
  ],
  [
    "2021",
    "IxDA Sydney — Design leadership for introverts",
    "Podcast / talk",
    <a key="ixs" href="https://open.spotify.com/episode/2Ds4joYDHHqPyEi53lQFd2" className="text-ember underline">
      Listen
    </a>,
  ],
  [
    "2020",
    "IxDA Milan — Design leadership for introverts",
    "Talk",
    <a key="ixm" href={MAIN_TALK_WATCH} className="text-ember underline">
      Watch
    </a>,
  ],
  [
    "2019",
    "Web Directions — Design leadership for introverts",
    "Talk",
    <a key="wd" href="https://webdirections.org/designleaders/speakers/timothy-yeo.php" className="text-ember underline">
      Details
    </a>,
  ],
];

export function SpeakingLandingPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navigation ctaLabel="Inquire about speaking" ctaHref={SPEAKER_EMAIL} />
      <main>
        <SpeakingHero />

        <SectionBlock eyebrow="Watch" title="Watch Tim speak" subtitle="IxDA Design Conference — Milan 2020">
          <div className="aspect-video w-full max-w-4xl overflow-hidden rounded-lg ring-1 ring-charcoal/10">
            <iframe
              title="Tim Yeo — IxDA Milan 2020"
              src={MAIN_TALK_EMBED}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-4 font-sans text-sm text-warm-600">
            More talks at{" "}
            <a href="https://uxaustralia.com.au/conferences/ux-australia-2022/presentation/design-leadership-for-introverts/" className="text-ember underline">
              UX Australia 2022
            </a>
            ,{" "}
            <a href="https://www.youtube.com/watch?v=BOOd2Q83EJA&t=2s" className="text-ember underline">
              Design Buddies 2024
            </a>
            ,{" "}
            <a href="https://youtu.be/LdxDN2xOrEg" className="text-ember underline">
              ADPList BeMore Festival 2023
            </a>
            , or{" "}
            <a href={LEADING_DESIGN_2021_WATCH} className="text-ember underline">
              Leading Design Conference 2021
            </a>
            . Full list in the{" "}
            <Link href="/podcast" className="text-ember underline">
              podcast &amp; talks page
            </Link>{" "}
            and{" "}
            <Link href="/speakerkit" className="text-ember underline">
              Speaker kit
            </Link>
            .
          </p>
        </SectionBlock>

        <section className="border-y border-charcoal/10 bg-ink py-12">
          <Container>
            <p className="text-center font-display text-5xl font-semibold text-sunrise sm:text-6xl md:text-7xl">
              97%
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-center font-reading text-lg text-paper sm:text-xl">
              Audiences rate the keynote excellent or good
            </p>
          </Container>
        </section>

        <SectionBlock eyebrow="The problem" title="What most leadership speakers miss">
          <ProblemCopy />
        </SectionBlock>

        <SectionBlock eyebrow="Popular demand" title="Who this is for">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-ember">Event types</h3>
              <ul className="mt-4 space-y-2 font-reading text-[17px] leading-relaxed text-warm-700">
                {[
                  "Tech, design, product, and engineering conferences",
                  "Leadership and management offsites",
                  "Company all-hands and team kickoffs",
                  "Diversity, inclusion, and belonging programmes",
                  "Emerging-leader programmes",
                  "Universities, bootcamps, and mentoring summits",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-ember" aria-hidden>
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-ember">Audiences</h3>
              <ul className="mt-4 space-y-2 font-reading text-[17px] leading-relaxed text-warm-700">
                {[
                  "Individual contributors who want to be seen and heard",
                  "People leaders who want their teams to work better together",
                  "Leaders of teams who, more than once, wished \"why don't they speak up more?\"",
                  "Managers of mixed introvert/extrovert teams who want to get the most out of their people",
                  "Mid-career professionals navigating visibility, promotion, and presence",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-ember" aria-hidden>
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock id="signature-keynote" eyebrow="Signature keynote" title="Quiet Leadership for Introverts" accent>
          <p className="max-w-3xl font-reading text-[17px] leading-relaxed text-ink/90">
            Tim shares practical, tiny habits he&rsquo;s used to have impact at work without pretending to be an
            extrovert — plus how leaders can get the best out of quiet people and help quiet + loud teammates work
            better together.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="rounded-lg bg-paper/95 p-6 ring-1 ring-ink/15">
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-ink">Core topics (always included)</h3>
              <ol className="mt-4 list-decimal space-y-3 pl-5 font-reading text-[17px] leading-relaxed text-ink/85">
                <li>
                  <strong className="text-ink">Speaking up in meetings</strong> — being seen and heard in rooms
                  full of strong opinions; tactics that work in-person and remote.
                </li>
                <li>
                  <strong className="text-ink">Team management</strong> — introverts and extroverts working better
                  together: team selection, norms, and behaviours that earn trust.
                </li>
                <li>
                  <strong className="text-ink">Networking</strong> — growing influence by growing who can help you
                  and who you can help, inside and outside your organisation.
                </li>
              </ol>
            </div>
            <div className="rounded-lg bg-paper/95 p-6 ring-1 ring-ink/15">
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-ink">Pick one extra topic</h3>
              <ol className="mt-4 list-decimal space-y-3 pl-5 font-reading text-[17px] leading-relaxed text-ink/85" start={4}>
                <li>Be more visible in your org</li>
                <li>Handling difficult conversations</li>
                <li>How to say no (politely)</li>
                <li>Public speaking — prepare and practise with confidence</li>
              </ol>
              <p className="mt-4 font-reading text-sm italic text-ink/75">
                Tell me your audience and outcome and I&rsquo;ll suggest the right extra topic.
              </p>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock id="formats" title="Popular formats">
          <DataTable
            headers={["Format", "Length", "Q&A", "Best for"]}
            rows={[
              ["Keynote", "45 min talk", "15 min", "Conference openers, all-hands, leadership offsites"],
              ["Fireside / AMA", "20 min talk", "40 min", "Smaller groups, focused audiences, interactive sessions"],
            ]}
          />
        </SectionBlock>

        <ThesisBand quote="Introversion is a superpower." attribution={null} />

        <SectionBlock eyebrow="Feedback" title="What audiences say" className="bg-paper-soft">
          <div className="grid gap-6 sm:grid-cols-2">
            {AUDIENCE_QUOTES.map((q) => (
              <QuoteCard key={q.quote.slice(0, 40)} quote={q.quote} attribution={q.attribution} />
            ))}
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="Inclusive by design" title="Introvert-friendly features for quiet attendees">
          <p className="mb-6 max-w-2xl font-reading text-[17px] text-warm-700">
            Interactive ways to make your event work for quiet and loud attendees.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "QR-code question submission — questions via Slido, Mentimeter, or QuestionWave. Attendees upvote so the best rise to the top.",
              "Anonymity — questions are judged on merit, not who asked.",
              "Bring your own Q&A tool — share the URL at least a day before the event and we'll integrate it.",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-lg bg-paper-soft p-4 font-reading text-[16px] leading-relaxed text-warm-700 ring-1 ring-charcoal/10"
              >
                <span className="text-ember" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock eyebrow="Track record" title="Selected speaking history" className="bg-paper-soft">
          <DataTable headers={["Year", "Event", "Format", "Watch"]} rows={SPEAKING_HISTORY} />
          <p className="mt-6 font-reading text-sm text-warm-600">
            Plus 15+ podcast appearances. Full list in the{" "}
            <Link href="/speakerkit" className="text-ember underline">
              Speaker kit
            </Link>
            .
          </p>
        </SectionBlock>

        <SectionBlock eyebrow="About Tim" title="Chief introvert, The Quiet Achiever">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative">
                <div aria-hidden className="absolute inset-[22px_-24px_-24px_24px] rounded-lg bg-ink" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="/assets/tim-masthead.jpg"
                    alt="Tim Yeo"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "center 22%" }}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4 font-reading text-[17px] leading-relaxed text-warm-700 lg:col-span-7">
              <p>
                Tim Yeo (<em>pronounced Yo, like &ldquo;Yo, what&rsquo;s up?&rdquo;</em>) has coached 1,000+ quiet
                achievers and spent 20+ years as a designer and design leader — most recently Design Director at IBM,
                previously Head of UX and Design at Finder, OFX, and Prospa. Author of{" "}
                <Link href="/book" className="font-semibold text-ember underline">
                  <em>The Quiet Achiever</em>
                </Link>
                .
              </p>
              <Link href="/about" className="inline-flex font-sans text-[15px] font-semibold text-ember underline underline-offset-4">
                Read Tim&rsquo;s full story →
              </Link>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock title="How to book">
          <ol className="max-w-2xl space-y-6">
            {BOOKING_STEPS.map(({ step, text }) => (
              <li key={step} className="flex gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember font-sans text-sm font-bold text-paper"
                  aria-hidden
                >
                  {step}
                </span>
                <div className="pt-1.5">
                  <BookingStepText text={text} />
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl font-reading text-[15px] text-warm-600">
            For event organisers — bios, headshots, speaker requirements (AV, languages), fees, recording terms, and
            bulk book orders are all in the{" "}
            <Link href="/speakerkit" className="font-semibold text-ember underline">
              Speaker kit
            </Link>
            .
          </p>
        </SectionBlock>

        <section className="bg-paper-soft py-14 sm:py-16">
          <Container>
            <div className="rounded-xl bg-ink p-8 sm:p-10">
              <p
                className="max-w-3xl font-display font-semibold text-paper"
                style={{ fontSize: "clamp(22px, 2.8vw, 32px)", lineHeight: 1.15, textWrap: "balance" }}
              >
                I hope your event gives every quiet achiever in the room a moment to be truly seen.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Button href={SPEAKER_EMAIL} variant="cream" size="lg">
                  Inquire about speaking
                  <span aria-hidden>→</span>
                </Button>
                <Link
                  href="#signature-keynote"
                  className="font-sans text-[15px] font-semibold text-sunrise underline underline-offset-4 hover:text-paper"
                >
                  Read signature keynote →
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <FooterRev cta={{ label: "Inquire about speaking", href: SPEAKER_EMAIL }} />
    </div>
  );
}
