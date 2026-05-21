"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  SpeakingPageShell,
  SectionBlock,
  CtaBand,
  DataTable,
  CopyPasteBlock,
} from "@/components/speaking/shared";
import { Button } from "@/components/revamp/primitives";

const TIM_EMAIL = "mailto:tim@thequietachievr.com?subject=Speaker%20kit%20question";
const SPEAKER_EMAIL = "mailto:speaker@thequietachievr.com?subject=Speaking%20enquiry";
const HEADSHOT_HIRES =
  "https://drive.google.com/file/d/1FScOaF8s_iwQMczskka069PjDJmLj_Xf/view?usp=sharing";
const HEADSHOT_WEB =
  "https://drive.google.com/file/d/1s2IJhhH3ksE6dL-eLPyroxd3BX3vu36r/view?usp=sharing";
const SAMPLE_SLIDES =
  "https://drive.google.com/file/d/1GSXgnsR-fxlmutSNtU3YVmwVc0uK5HZz/view?usp=share_link";

const HISTORY_ROWS: (string | ReactNode)[][] = [
  ["2025", "Standard Chartered Bank — Quiet leadership for introverts", "Keynote", "—"],
  ["2025", "Ezra Coaching — Global CoachFest", "Keynote", "—"],
  [
    "2024",
    "Design Buddies",
    "Talk",
    <a key="db" href="https://www.youtube.com/watch?v=BOOd2Q83EJA&t=2s" className="text-ember underline">
      Watch
    </a>,
  ],
  [
    "2023",
    "ADPList BeMore Festival",
    "Keynote",
    <a key="ad" href="https://youtu.be/LdxDN2xOrEg" className="text-ember underline">
      Watch
    </a>,
  ],
  [
    "2022",
    "UX Australia",
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
    "2021",
    "Leading Design",
    "Talk",
    <a key="ld" href="https://youtu.be/Am-6BhOOIpM" className="text-ember underline">
      Watch
    </a>,
  ],
  [
    "2020",
    "IxDA Milan",
    "Talk",
    <a key="ix" href="https://ixda.org/video/design-leadership-for-introverts/" className="text-ember underline">
      Watch
    </a>,
  ],
  [
    "2019",
    "Web Directions",
    "Talk",
    <a key="wd" href="https://webdirections.org/designleaders/speakers/timothy-yeo.php" className="text-ember underline">
      Details
    </a>,
  ],
];

const KIT_SECTIONS: { title: string; content: ReactNode }[] = [
  {
    title: "Quick info",
    content: (
      <DataTable
        headers={["Field", "Details"]}
        rows={[
          ["Name", 'Tim Yeo (pronounced Yo, like "Yo, what\'s up?")'],
          ["Title", "Chief Introvert, The Quiet Achiever"],
          ["Pronouns", "he / him / his"],
          ["Email", <a key="e" href={TIM_EMAIL} className="font-semibold text-ember underline">tim@thequietachievr.com</a>],
          ["Website", <Link key="w" href="/" className="font-semibold text-ember underline">thequietachievr.com</Link>],
          ["Book", <Link key="b" href="/book" className="font-semibold text-ember underline">The Quiet Achiever</Link>],
          [
            "LinkedIn",
            <a key="li" href="https://www.linkedin.com/in/timyeo/" className="font-semibold text-ember underline">
              @timyeo
            </a>,
          ],
          [
            "YouTube",
            <a key="yt" href="https://www.youtube.com/@thequietachievr" className="font-semibold text-ember underline">
              @thequietachievr
            </a>,
          ],
          [
            "All socials",
            <a key="lt" href="https://linktr.ee/thequietachievr" className="font-semibold text-ember underline">
              linktr.ee/thequietachievr
            </a>,
          ],
        ]}
      />
    ),
  },
  {
    title: "Headshots",
    content: (
      <ul className="space-y-3 font-reading text-[17px] leading-relaxed text-warm-700">
        <li>
          <a href={HEADSHOT_HIRES} className="font-semibold text-ember underline" target="_blank" rel="noopener noreferrer">
            Hi-res JPG
          </a>{" "}
          — print, large slides, conference banners
        </li>
        <li>
          <a href={HEADSHOT_WEB} className="font-semibold text-ember underline" target="_blank" rel="noopener noreferrer">
            Web-res JPG (500×500)
          </a>{" "}
          — websites, event apps, email
        </li>
        <li className="text-sm italic">Feel free to crop, recolor, or otherwise edit as needed.</li>
      </ul>
    ),
  },
  {
    title: "Bios — copy and paste",
    content: (
      <div className="space-y-6">
        <CopyPasteBlock label="Tweetable (22 words / 160 characters)">
          @timyeo coaches introverts to have impact and influence without pretending to be extroverts at The Quiet Achiever, most recently IBM, prev fintech @Finder @OFX @Prospa.
        </CopyPasteBlock>
        <CopyPasteBlock label="Short bio (48 words) — recommended default">
          Tim Yeo (@timyeo) coaches introverts to have impact and influence without pretending to be extroverts at The Quiet Achiever. He's also a design leader, speaker, and bookbinder; best known for saying complex things simply. Most recently Design Director @ IBM, formerly Head of Design at fintech startups @Finder, @OFX, @Prospa.
        </CopyPasteBlock>
        <CopyPasteBlock label="Long bio for speaking events (123 words)">
          {`Tim Yeo (pronounced Yo, like "Yo, what's up?") is the chief introvert of The Quiet Achiever. He coaches and runs The Quiet Achiever School to help quiet achievers have impact at work without pretending to be extroverts.

Tim spent 20+ years as a designer and design leader, most recently Design Director at IBM. Previously, Tim was the Head of UX and Design at fintech startups @Finder, @OFX and @Prospa where he hired, established and scaled design teams from scratch.

Best known for saying complex things simply and coining the term "people-ing". He is also a keynote speaker, bookbinder, and published his book, The Quiet Achiever, working remotely from his farm in Adelaide, Australia with his partner and the fluffiest Old English Sheepdog ever.`}
        </CopyPasteBlock>
        <CopyPasteBlock label="Author bio (long, for book and editorial)">
          {`Tim Yeo is dedicated to empowering quiet achievers to make a big impact at work without pretending to be extroverts. With nearly twenty years of experience as a designer and leader in the tech industry, Tim has navigated environments dominated by big personalities with strong opinions and loud voices.

Since 2020, Tim has successfully coached hundreds of quiet achievers. Best known for saying complex things simply, Tim is a sought-after keynote speaker at international conferences. Discover more at thequietachievr.com.`}
        </CopyPasteBlock>
      </div>
    ),
  },
  {
    title: "Talk — Quiet Leadership for Introverts",
    content: (
      <div className="space-y-6">
        <CopyPasteBlock label="Talk description (long)">
          {`Do you squirm in your seat when asked to introduce yourself? Do you find networking awkward? In meetings, do you keep quiet even though you have something to say?

Research shows that ⅓ to ½ of the population identify as quiet or introverted. In this talk, Tim Yeo shares practical, easy-to-apply techniques he's used to have impact at work without pretending to be an extrovert — plus power tips from leading a fully remote global team that play to a quiet achiever's strengths.`}
        </CopyPasteBlock>
        <CopyPasteBlock label="Talk description (short)">
          Tim Yeo will share techniques he's used to manage his own introversion in order to lead as a quiet achiever, plus power tips he's learned leading a fully remote global team that play to a quiet achiever's strengths.
        </CopyPasteBlock>
        <p className="font-reading text-[16px] text-warm-700">
          <a href={SAMPLE_SLIDES} className="font-semibold text-ember underline" target="_blank" rel="noopener noreferrer">
            Sample slides (Google Drive)
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Speaker requirements",
    content: (
      <div className="space-y-4 font-reading text-[17px] leading-relaxed text-warm-700">
        <p>
          <strong className="text-charcoal">Languages:</strong> English (fluent), Mandarin and Teochew (conversational).
        </p>
        <p>
          <strong className="text-charcoal">AV:</strong> Projector/screen (16:9), stand for laptop with speaker notes.
          For virtual: meeting link with screen-share and chat permissions.
        </p>
      </div>
    ),
  },
  {
    title: "Fees",
    content: (
      <div className="rounded-lg bg-paper-soft p-5 ring-1 ring-charcoal/10 font-reading text-[17px] leading-relaxed text-warm-700">
        <p>
          <strong className="text-charcoal">Remote events:</strong> speaker fee only.
        </p>
        <p className="mt-2">
          <strong className="text-charcoal">In-person events:</strong> speaker fee + travel and incidentals (return
          flights, accommodation, ground transport, meals).
        </p>
        <p className="mt-4">
          I work with budgets ranging from non-profit/community rates to enterprise keynotes. Tell me about your event
          via{" "}
          <a href={SPEAKER_EMAIL} className="font-semibold text-ember underline">
            speaker@thequietachievr.com
          </a>{" "}
          and I&rsquo;ll come back with a fee.
        </p>
      </div>
    ),
  },
  {
    title: "Recording rights (plain English)",
    content: (
      <ul className="list-disc space-y-2 pl-5 font-reading text-[17px] leading-relaxed text-warm-700">
        <li>You may record the session — audio, video, and slides as displayed.</li>
        <li>You may share the recording internally with employees for up to 12 months from the event date.</li>
        <li>Tim retains all copyright and IP in talk content, slides, frameworks, stories, and recording.</li>
        <li>
          You may not edit (other than top-and-tail), publish externally, post publicly, use for marketing, or share
          outside your organisation without Tim&rsquo;s prior written consent.
        </li>
        <li>Short clips up to 60 seconds may be used internally indefinitely for training or internal newsletters.</li>
        <li>Public release (YouTube, conference channel, external marketing) requires separate written agreement.</li>
      </ul>
    ),
  },
  {
    title: "Sample reels & talk videos",
    content: (
      <ul className="space-y-2 font-reading text-[17px] leading-relaxed text-warm-700">
        <li>
          <a href="https://uxaustralia.com.au/conferences/ux-australia-2022/presentation/design-leadership-for-introverts/" className="text-ember underline">
            UX Australia 2022 — Keynote
          </a>
        </li>
        <li>
          <a href="https://youtu.be/Am-6BhOOIpM" className="text-ember underline">
            Leading Design 2021
          </a>
        </li>
        <li>
          <a href="https://ixda.org/video/design-leadership-for-introverts/" className="text-ember underline">
            IxDA Milan 2020
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=BOOd2Q83EJA&t=2s" className="text-ember underline">
            Design Buddies 2024
          </a>
        </li>
        <li>
          <a href="https://youtu.be/LdxDN2xOrEg" className="text-ember underline">
            ADPList BeMore Festival 2023
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Selected speaking history",
    content: <DataTable headers={["Year", "Event", "Format", "Watch"]} rows={HISTORY_ROWS} />,
  },
  {
    title: "Bulk book orders for attendees",
    content: (
      <p className="font-reading text-[17px] leading-relaxed text-warm-700">
        Want every attendee to leave with a copy of <em>The Quiet Achiever</em>? Bulk orders available — eBook,
        paperback, hardcover, or audiobook. Email{" "}
        <a href={SPEAKER_EMAIL} className="font-semibold text-ember underline">
          speaker@thequietachievr.com
        </a>{" "}
        with event date, attendee count, and delivery address.
      </p>
    ),
  },
  {
    title: "Book — The Quiet Achiever",
    content: (
      <div className="space-y-6">
        <p className="font-reading text-lg italic text-warm-600">
          Tiny habits to have impact at work without pretending to be an extrovert.
        </p>
        <CopyPasteBlock label="Book description (for programmes)">
          {`Do you squirm when asked to introduce yourself? Find networking awkward? In meetings, do you keep quiet even though you have something to say?

In a world that favours the extrovert ideal, quiet achievers often feel pressured to pretend to be someone they are not. Tim Yeo developed tiny habits to make an impact at work while staying true to himself — and has coached hundreds of quiet achievers to remarkable success.

Just because we are quiet does not mean we have nothing to say. In The Quiet Achiever, Tim shares practical techniques you can implement the very next day.`}
        </CopyPasteBlock>
        <ul className="space-y-2 font-reading text-[16px] text-warm-700">
          <li>
            <Link href="/book" className="text-ember underline">
              thequietachievr.com/book
            </Link>
          </li>
          <li>
            <a href="https://mybook.to/thequietachiever/opt/1?iguid=xN_KmD0QiEGxK5EeEzqvUg" className="text-ember underline">
              Amazon (paperback / hardcover)
            </a>
          </li>
          <li>
            <a href="https://www.amazon.com/dp/B0DDW8NKL9" className="text-ember underline">
              Audible — narrated by Tim
            </a>
          </li>
        </ul>
      </div>
    ),
  },
];

export function SpeakerKitPage() {
  return (
    <SpeakingPageShell ctaLabel="Speaking enquiry" ctaHref={SPEAKER_EMAIL}>
      <main>
        <section className="border-b border-charcoal/10 pt-12 pb-10">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">For event organisers</p>
            <h1
              className="font-display mt-3 font-semibold text-charcoal"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05 }}
            >
              Speaker kit
            </h1>
            <p className="mt-4 max-w-2xl font-reading text-[17px] leading-relaxed text-warm-700">
              Everything you need to introduce Tim, run event marketing, and prep your AV team — in one place. Not in
              the main nav; share this URL with your production team.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/speaking" variant="secondary">
                ← Speaking page
              </Button>
              <Button href={TIM_EMAIL}>tim@thequietachievr.com</Button>
            </div>
          </div>
        </section>

        <SectionBlock title="Downloads & copy">
          <dl className="divide-y divide-charcoal/10">
            {KIT_SECTIONS.map((section) => (
              <Disclosure key={section.title} as="div" className="py-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left">
                    <span className="font-display text-xl font-semibold text-charcoal">{section.title}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDownIcon aria-hidden className="size-5 text-warm-500 group-data-open:rotate-180" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-4 pr-4">
                  {section.content}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </SectionBlock>

        <CtaBand
          title="Need anything not listed here?"
          body="Custom intros, alternate bio lengths, AV requirements, podcast pre-questions, sizzle reels — happy to provide whatever your event needs."
          primaryHref={TIM_EMAIL}
          primaryLabel="tim@thequietachievr.com"
        />
      </main>
    </SpeakingPageShell>
  );
}
