import type { ReactNode } from "react";
import { Container, Button, ContainedBand } from "@/components/revamp/primitives";
import { THIRTY_HABITS_HOW_IT_WORKS_IMAGE, THIRTY_HABITS_PAGE_PATH } from "@/lib/thirty-habits-content";

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-display font-semibold text-ink"
      style={{ fontSize: "clamp(28px, 3vw, 36px)", lineHeight: 1.08 }}
    >
      {children}
    </h2>
  );
}

export function ThirtyHabitsPromoSection() {
  return (
    <ContainedBand tone="sunrise" padY="clamp(64px, 6vw, 80px)">
      <Container>
        <SectionHeading>Want more? Try this:</SectionHeading>
        <div className="mt-8 grid grid-cols-1 items-center gap-8 rounded-lg border border-ink/10 bg-paper p-8 ring-1 ring-charcoal/10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={THIRTY_HABITS_HOW_IT_WORKS_IMAGE}
              alt="30 Habits in 30 Days course"
              className="w-full rounded-lg object-cover ring-1 ring-charcoal/10"
              style={{ minHeight: "220px", maxHeight: "320px" }}
            />
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-display text-2xl font-semibold text-charcoal">30 Habits in 30 Days</h3>
            <p className="font-reading mt-4 text-[17px] leading-relaxed text-charcoal">
              30 Habits in 30 Days is an online companion to the book. We cover 30 habits, with added videos that explain
              how to put these habits into practise.
            </p>
            <p className="font-reading mt-4 text-[17px] leading-relaxed text-warm-700">
              Digital copy of <em>The Quiet Achiever</em> book included.
            </p>
            <div className="mt-6">
              <Button variant="primary" href={THIRTY_HABITS_PAGE_PATH}>
                Learn more
                <span aria-hidden>→</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </ContainedBand>
  );
}
