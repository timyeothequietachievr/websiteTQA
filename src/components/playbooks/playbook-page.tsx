"use client";

import Link from "next/link";
import { Navigation } from "@/components/revamp/navigation";
import { Container, Button, ContainedBand } from "@/components/revamp/primitives";
import { FooterRev } from "@/components/revamp/sections-3";
import { DISCOVERY_CALL_URL } from "@/lib/site-data";
import type { Playbook } from "@/lib/playbooks/types";
import { PlaybookAccessGate } from "@/components/playbooks/playbook-access-gate";

function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="group border-b border-charcoal/10 py-2"
      open={defaultOpen}
    >
      <summary className="cursor-pointer list-none py-4 font-display text-xl font-semibold text-charcoal marker:content-none sm:text-2xl [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-3">
          <span
            className="text-ember transition-transform group-open:rotate-90"
            aria-hidden
          >
            →
          </span>
          {title}
        </span>
      </summary>
      <div className="pb-6 pl-8">{children}</div>
    </details>
  );
}

function HabitBlock({ habit }: { habit: Playbook["habits"][number] }) {
  return (
    <details className="group mb-4 rounded-lg bg-paper-soft ring-1 ring-charcoal/10">
      <summary className="cursor-pointer list-none px-5 py-4 font-display text-lg font-semibold text-charcoal marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-start gap-3">
          <span className="mt-0.5 text-ember transition-transform group-open:rotate-90" aria-hidden>
            →
          </span>
          {habit.title}
        </span>
      </summary>
      <div className="space-y-4 border-t border-charcoal/10 px-5 py-4 font-reading text-[16px] leading-relaxed text-warm-700">
        <p>
          <strong className="font-sans text-charcoal">The problem:</strong> {habit.problem}
        </p>
        <p>
          <strong className="font-sans text-charcoal">The fix:</strong> {habit.fix}
        </p>
        {habit.highlight ? (
          <p className="rounded-md bg-sunrise/30 px-4 py-3 font-sans text-sm font-semibold text-charcoal">
            {habit.highlight}
          </p>
        ) : null}
        {habit.bullets?.length ? (
          <ul className="list-disc space-y-2 pl-5">
            {habit.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </details>
  );
}

export function PlaybookPage({ playbook }: { playbook: Playbook }) {
  return (
    <PlaybookAccessGate slug={playbook.slug} title={playbook.shortTitle}>
      <PlaybookPageContent playbook={playbook} />
    </PlaybookAccessGate>
  );
}

function PlaybookPageContent({ playbook }: { playbook: Playbook }) {
  return (
    <div className="min-h-full bg-paper">
      <Navigation />
      <main>
        <section className="border-b border-charcoal/10 pt-3 pb-12 sm:pb-16">
          <Container>
            <Link
              href="/playbooks"
              className="font-sans text-sm font-semibold text-ember underline underline-offset-4"
            >
              ← All playbooks
            </Link>
            <p className="mt-8 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">
              {playbook.tag} · Free playbook
            </p>
            <h1
              className="font-display mt-4 font-semibold text-charcoal"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, textWrap: "balance" }}
            >
              <span className="mr-2" aria-hidden>
                {playbook.emoji}
              </span>
              {playbook.title}
            </h1>
            <p className="mt-5 max-w-2xl font-reading text-lg leading-relaxed text-warm-700">{playbook.introLine}</p>
          </Container>
        </section>

        <section className="py-10 sm:py-14">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-lg bg-paper-soft px-6 py-5 ring-1 ring-charcoal/10">
                <p className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-ember">Premise</p>
                <p className="mt-3 font-reading text-[17px] leading-relaxed text-charcoal">{playbook.premise}</p>
              </div>

              <div className="mt-12">
                <CollapsibleSection title={playbook.intro.title} defaultOpen>
                  {playbook.intro.paragraphs?.map((p) => (
                    <p key={p} className="mb-4 font-reading text-[17px] leading-relaxed text-warm-700">
                      {p}
                    </p>
                  ))}
                </CollapsibleSection>

                <CollapsibleSection title="Who this playbook is for">
                  <ul className="list-disc space-y-2 pl-5 font-reading text-[17px] leading-relaxed text-warm-700">
                    {playbook.whoFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CollapsibleSection>

                <CollapsibleSection title="7 tiny habits that will change how you work" defaultOpen>
                  <div className="mt-2">
                    {playbook.habits.map((habit) => (
                      <HabitBlock key={habit.title} habit={habit} />
                    ))}
                  </div>
                </CollapsibleSection>

                <CollapsibleSection title="Pro tips and common mistakes">
                  <p className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-charcoal">Pro tips</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 font-reading text-[16px] leading-relaxed text-warm-700">
                    {playbook.proTips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                  <p className="mt-6 font-sans text-sm font-bold uppercase tracking-[0.12em] text-charcoal">
                    Common mistakes
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 font-reading text-[16px] leading-relaxed text-warm-700">
                    {playbook.commonMistakes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CollapsibleSection>

                <CollapsibleSection title="Known limitations">
                  <ul className="list-disc space-y-2 pl-5 font-reading text-[16px] leading-relaxed text-warm-700">
                    {playbook.limitations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CollapsibleSection>

                {playbook.thirtyDay?.length ? (
                  <CollapsibleSection title="The 30-day challenge">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[480px] border-collapse font-sans text-sm">
                        <thead>
                          <tr className="border-b border-charcoal/15 text-left">
                            <th className="py-2 pr-4 font-bold text-charcoal">Week</th>
                            <th className="py-2 pr-4 font-bold text-charcoal">Focus</th>
                            <th className="py-2 font-bold text-charcoal">Outcome</th>
                          </tr>
                        </thead>
                        <tbody>
                          {playbook.thirtyDay.map((row) => (
                            <tr key={row.week} className="border-b border-charcoal/10 align-top">
                              <td className="py-3 pr-4 font-semibold text-charcoal">{row.week}</td>
                              <td className="py-3 pr-4 text-warm-700">{row.focus}</td>
                              <td className="py-3 text-warm-700">{row.outcome}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CollapsibleSection>
                ) : null}
              </div>
            </div>
          </Container>
        </section>

        <ContainedBand tone="ink" padY="clamp(48px, 5vw, 64px)">
          <div className="mx-auto max-w-2xl space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">Get the book</h2>
              <p className="mt-4 font-reading text-[17px] leading-relaxed text-paper/85">{playbook.bookBlurb}</p>
              <div className="mt-6">
                <Button href="/book" variant="cream">
                  Buy <em>The Quiet Achiever</em>
                </Button>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">Want help applying this?</h2>
              <p className="mt-4 font-reading text-[17px] leading-relaxed text-paper/85">
                1:1 coaching with Tim — book a discovery call and we&apos;ll work through your situation together.
              </p>
              <div className="mt-6">
                <Button href={DISCOVERY_CALL_URL} variant="primary">
                  Book a discovery call
                </Button>
              </div>
            </div>
            {playbook.showSchoolCta ? (
              <div>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">Or go deeper, on your own time</h2>
                <p className="mt-4 font-reading text-[17px] leading-relaxed text-paper/85">
                  The Quiet Leadership School — on-demand video courses on leadership, communication, and more.
                </p>
                <div className="mt-6">
                  <Button href="/#school" variant="cream">
                    Browse courses
                  </Button>
                </div>
              </div>
            ) : null}
            <p className="font-reading text-[16px] italic text-paper/75">{playbook.closingLine}</p>
          </div>
        </ContainedBand>
      </main>
      <FooterRev cta={{ label: "Work with me", href: "/#work-with-me" }} ctaAsButton showDiscoveryCta={false} />
    </div>
  );
}
