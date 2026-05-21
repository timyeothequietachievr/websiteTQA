"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Navigation } from "@/components/revamp/navigation";
import { FooterRev, NewsletterBand } from "@/components/revamp/sections-3";
import { Container, Button, Eyebrow } from "@/components/revamp/primitives";
import { SectionBlock, CtaBand, QuoteCard, DataTable } from "@/components/speaking/shared";

const SPEAKER_EMAIL = "mailto:speaker@thequietachievr.com?subject=Speaking%20enquiry";
const LINKEDIN = "https://www.linkedin.com/in/timyeo/";
const YOUTUBE_TALK = "https://www.youtube.com/embed/Am-6BhOOIpM";
const YOUTUBE_TALK_WATCH = "https://youtu.be/Am-6BhOOIpM";
import { DISCOVERY_CALL_URL } from "@/lib/site-data";

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
    <a key="ld" href={YOUTUBE_TALK_WATCH} className="text-ember underline">
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
    <a key="ixm" href="https://ixda.org/video/design-leadership-for-introverts/" className="text-ember underline">
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
      <Navigation />
      <main>
        <section className="border-b border-charcoal/10 pt-28 pb-16 sm:pt-32 sm:pb-20">
          <Container>
            <div className="max-w-3xl rounded-lg border-l-4 border-ember bg-paper-soft px-6 py-5 font-reading text-[18px] italic leading-relaxed text-charcoal">
              Just because we are <em className="font-semibold text-ember not-italic">quiet</em> does not mean we have{" "}
              <em className="font-semibold text-ember not-italic">nothing to say</em>.
            </div>
            <h1
              className="font-display mt-8 font-semibold text-charcoal"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1.02, letterSpacing: "-0.02em" }}
            >
              Book Tim Yeo to speak at your event
            </h1>
            <p className="mt-6 max-w-2xl font-reading text-lg leading-relaxed text-warm-700">
              I help quiet achievers have impact at work — without pretending to be extroverts. Keynotes and fireside
              chats for conferences, leadership offsites, and company all-hands. In-person and remote, globally.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={SPEAKER_EMAIL}>Enquire about speaking</Button>
              <Button href={LINKEDIN} variant="secondary">
                LinkedIn
              </Button>
              <Button href={YOUTUBE_TALK_WATCH} variant="secondary">
                Watch the talk
              </Button>
            </div>
            <p className="mt-6 font-sans text-sm text-warm-600">
              Organisers: bios, headshots, AV, fees, and recording terms in the{" "}
              <Link href="/speakerkit" className="font-semibold text-ember underline underline-offset-4">
                Speaker kit
              </Link>
              .
            </p>
          </Container>
        </section>

        <SectionBlock eyebrow="Watch" title="Leading Design 2021 — Design leadership for introverts">
          <div className="aspect-video w-full max-w-4xl overflow-hidden rounded-lg ring-1 ring-charcoal/10">
            <iframe
              title="Tim Yeo — Leading Design keynote"
              src={YOUTUBE_TALK}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-4 font-sans text-sm text-warm-600">
            More talks:{" "}
            <a href="https://uxaustralia.com.au/conferences/ux-australia-2022/presentation/design-leadership-for-introverts/" className="text-ember underline">
              UX Australia 2022
            </a>
            ,{" "}
            <a href="https://www.youtube.com/watch?v=BOOd2Q83EJA&t=2s" className="text-ember underline">
              Design Buddies 2024
            </a>
            ,{" "}
            <a href="https://youtu.be/LdxDN2xOrEg" className="text-ember underline">
              ADPList 2023
            </a>
            ,{" "}
            <a href="https://ixda.org/video/design-leadership-for-introverts/" className="text-ember underline">
              IxDA Milan 2020
            </a>
            . Full list in the{" "}
            <Link href="/speakerkit" className="text-ember underline">
              Speaker kit
            </Link>
            .
          </p>
        </SectionBlock>

        <section className="border-y border-charcoal/10 bg-ink py-12">
          <Container>
            <p className="text-center font-display text-4xl font-semibold text-sunrise sm:text-5xl">97%</p>
            <p className="mx-auto mt-3 max-w-2xl text-center font-reading text-lg text-paper/90">
              of audiences rate the keynote &ldquo;Excellent&rdquo; or &ldquo;Good&rdquo;. 1,000+ quiet achievers
              coached · 20+ years in tech leadership · Spoken globally — Standard Chartered, Ezra Coaching, UX
              Australia, Leading Design, IxDA, ADPList, UCD Gathering, Web Directions.
            </p>
            <div className="mt-8 text-center">
              <Button href={SPEAKER_EMAIL} variant="cream">
                Sound like your audience? Tell me about your event
              </Button>
            </div>
          </Container>
        </section>

        <SectionBlock eyebrow="Who this is for" title="Events where this lands well">
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
                  "Managers of mixed introvert/extrovert teams",
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

        <SectionBlock eyebrow="Signature keynote" title="Quiet Leadership for Introverts" className="bg-paper-soft">
          <p className="max-w-3xl font-reading text-[17px] leading-relaxed text-warm-700">
            Tim shares practical, tiny habits he&rsquo;s used to have impact at work without pretending to be an
            extrovert — plus how leaders can get the best out of quiet people and help quiet + loud teammates work
            better together.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-charcoal">Core topics (always included)</h3>
              <ol className="mt-4 list-decimal space-y-3 pl-5 font-reading text-[17px] leading-relaxed text-warm-700">
                <li>
                  <strong className="text-charcoal">Speaking up in meetings</strong> — being seen and heard in rooms
                  full of strong opinions; tactics that work in-person and remote.
                </li>
                <li>
                  <strong className="text-charcoal">Team management</strong> — introverts and extroverts working better
                  together: team selection, norms, and behaviours that earn trust.
                </li>
                <li>
                  <strong className="text-charcoal">Networking</strong> — growing influence by growing who can help you
                  and who you can help, inside and outside your organisation.
                </li>
              </ol>
            </div>
            <div>
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-charcoal">Pick one extra topic</h3>
              <ol className="mt-4 list-decimal space-y-3 pl-5 font-reading text-[17px] leading-relaxed text-warm-700" start={4}>
                <li>Be more visible in your org</li>
                <li>Handling difficult conversations</li>
                <li>How to say no (politely)</li>
                <li>Public speaking — prepare and practise with confidence</li>
              </ol>
              <p className="mt-4 font-reading text-sm italic text-warm-600">
                Tell me your audience and outcome and I&rsquo;ll suggest the right extra topic.
              </p>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="The problem" title="What most leadership speakers miss">
          <div className="max-w-3xl space-y-4 font-reading text-[17px] leading-relaxed text-warm-700">
            <p>
              We live in a world that desires the extrovert ideal. Most leadership advice works for people energised by
              people-ing and for whom being loud comes naturally.
            </p>
            <p>
              Research shows <strong className="text-charcoal">30–40% of the world identifies as quiet or introverted</strong> —
              which means a third to half of your team probably skews introvert. Chances are you&rsquo;re only hearing the
              loudest ideas in the room. And loud ≠ best.
            </p>
            <p>
              My talks share <strong className="text-charcoal">tiny habits</strong> quiet achievers can apply the very next
              day — no extrovert performance required. Your quiet achievers leave feeling seen and empowered, often for
              the first time.
            </p>
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="Feedback" title="What audiences say">
          <div className="grid gap-6 sm:grid-cols-2">
            {AUDIENCE_QUOTES.map((q) => (
              <QuoteCard key={q.quote.slice(0, 40)} quote={q.quote} attribution={q.attribution} />
            ))}
          </div>
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
              <p>
                Full bio, headshots, and assets in the{" "}
                <Link href="/speakerkit" className="font-semibold text-ember underline">
                  Speaker kit
                </Link>
                .
              </p>
              <Link href="/about" className="inline-flex font-sans text-[15px] font-semibold text-ember underline underline-offset-4">
                Read Tim&rsquo;s full story →
              </Link>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock id="formats" eyebrow="Formats" title="How Tim shows up at your event">
          <DataTable
            headers={["Format", "Length", "Q&A", "Best for"]}
            rows={[
              ["Keynote", "45 min talk", "15 min", "Conference openers, all-hands, leadership offsites"],
              ["Fireside / AMA", "20 min talk", "40 min", "Smaller groups, focused audiences, interactive sessions"],
            ]}
          />
          <p className="mt-6 font-reading text-[16px] text-warm-700">
            Bios, headshots, AV, fees, recording terms, and bulk book orders:{" "}
            <Link href="/speakerkit" className="font-semibold text-ember underline">
              Speaker kit →
            </Link>
          </p>
        </SectionBlock>

        <SectionBlock eyebrow="Inclusive by design" title="Introvert-friendly features for quiet attendees" className="bg-paper-soft">
          <p className="mb-6 max-w-2xl font-reading text-[17px] text-warm-700">
            Simple, low-cost ways to make your event work for everyone. Happy to help you set any of these up.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "QR-code question submission (Slido, Mentimeter, QuestionWave) — upvoted so the best questions rise",
              "Anonymity — questions judged on merit, not who asked",
              "Bring your own Q&A tool — share the URL at least a day before and we'll integrate it",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-lg bg-paper p-4 font-reading text-[16px] leading-relaxed text-warm-700 ring-1 ring-charcoal/10"
              >
                <span className="text-ember" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock eyebrow="Book Tim" title="How to book">
          <ol className="max-w-2xl space-y-6">
            {[
              {
                step: "1",
                text: "Email speaker@thequietachievr.com — date, audience, attendee count, format, and outcomes you want.",
              },
              {
                step: "2",
                text: "Discovery call (30 min) — we make sure I'm the right fit and finalise the topic.",
                link: DISCOVERY_CALL_URL,
                linkLabel: "Book discovery call",
              },
              { step: "3", text: "Proposal & contract — invoice with topic, logistics, and fee. Deposit holds the date." },
              { step: "4", text: "Talk delivered & invoice balance paid." },
            ].map(({ step, text, link, linkLabel }) => (
              <li key={step} className="flex gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember font-sans text-sm font-bold text-paper"
                  aria-hidden
                >
                  {step}
                </span>
                <div className="pt-1.5">
                  <p className="font-reading text-[17px] leading-relaxed text-warm-700">{text}</p>
                  {link ? (
                    <a href={link} className="mt-2 inline-block font-sans text-sm font-semibold text-ember underline">
                      {linkLabel}
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={SPEAKER_EMAIL}>Tell me about your event</Button>
            <Button href="/speakerkit" variant="secondary">
              Speaker kit
            </Button>
          </div>
        </SectionBlock>

        <CtaBand
          title="Ready to give your quiet achievers their moment?"
          body="Whether or not we work together, I hope your event gives every quiet achiever in the room a moment to be truly seen."
          primaryHref={SPEAKER_EMAIL}
          primaryLabel="speaker@thequietachievr.com"
          secondaryHref={DISCOVERY_CALL_URL}
          secondaryLabel="Discovery call"
        />
      </main>
      <NewsletterBand />
      <FooterRev />
    </div>
  );
}
