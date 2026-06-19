import type { ReactNode } from "react";
import { ContainedBand, Button } from "@/components/revamp/primitives";
import { DISCOVERY_CALL_URL } from "@/lib/site-data";
import { COACHING_CLOSING } from "@/lib/coaching-content";

function ClosingList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-2.5 text-ink/90">
      {items.map((item) => (
        <li key={item} className="flex gap-3 font-reading text-[17px] leading-relaxed">
          <span aria-hidden className="mt-[0.45em] size-[7px] shrink-0 rounded-full bg-ember" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function StepHeadline({ children }: { children: ReactNode }) {
  return (
    <p className="font-reading text-[17px] font-semibold leading-relaxed text-ember-deep">{children}</p>
  );
}

function ClosingParagraph({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-reading text-[17px] leading-relaxed text-ink/90 ${className}`}>{children}</p>
  );
}

function RememberBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-8 rounded-lg bg-ink px-5 py-4 text-paper">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-sunrise">{label}</p>
      <p className="mt-2 font-display text-xl italic leading-snug">{children}</p>
    </div>
  );
}

export function CoachingClosingSections() {
  const copy = COACHING_CLOSING;

  const steps = [
    {
      headline: copy.mostPeopleHeadline,
      lead: copy.mostPeopleBecause,
      items: copy.mostPeopleReasons,
    },
    {
      headline: copy.notForYouHeadline,
      lead: copy.notForYouBecause,
      items: copy.notForYouReasons,
    },
    {
      headline: copy.forYouHeadline,
      lead: null,
      items: copy.forYouReasons,
    },
  ];

  return (
    <ContainedBand tone="sunrise" padY="clamp(48px, 6vw, 72px)">
      <div className="mx-auto max-w-3xl">
        <h2
          className="font-display font-semibold text-ink"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.08, textWrap: "balance" }}
        >
          {copy.title}
        </h2>

        <ol className="relative mt-8 space-y-8 border-l-2 border-ember/25 pl-8">
          {steps.map((step, index) => (
            <li key={step.headline} className="relative">
              <span
                aria-hidden
                className="absolute -left-[41px] top-0 flex size-8 items-center justify-center rounded-full bg-ember font-mono text-[11px] font-bold text-paper"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <StepHeadline>{step.headline}</StepHeadline>
              {step.lead ? <ClosingParagraph className="mt-2">{step.lead}</ClosingParagraph> : null}
              <ClosingList items={step.items} />
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-lg bg-ink p-6 text-paper">
          <p className="font-reading text-[17px] font-semibold leading-relaxed text-paper/90">{copy.greeting}</p>
          <p className="mt-4 font-reading text-[20px] font-semibold leading-relaxed text-paper">
            {copy.helloLead}
          </p>
          <p className="mt-4 font-reading text-[17px] leading-relaxed text-paper/90">{copy.helloGuaranteeIntro}</p>
          <ul className="mt-5 space-y-4">
            {copy.guarantees.map((item) => (
              <li key={item.lead} className="border-t border-paper/15 pt-4 first:border-t-0 first:pt-0">
                <p className="font-sans text-base font-bold text-sunrise">{item.lead}</p>
                <p className="mt-1 font-reading text-[16px] leading-relaxed text-paper/85">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <RememberBlock label={copy.rememberLabel}>{copy.remember}</RememberBlock>

        <div className="mt-8">
          <Button href={DISCOVERY_CALL_URL} variant="primary" size="lg">
            Book a discovery call
            <span aria-hidden>→</span>
          </Button>
        </div>
      </div>
    </ContainedBand>
  );
}
