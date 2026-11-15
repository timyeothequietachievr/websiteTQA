"use client";

import {
  NewBadge,
  newBadgeLabel,
  type NewBadgeVariant,
} from "@/components/coaching/coaching-new-badge";
import { Container } from "@/components/revamp/primitives";

const VARIANTS: NewBadgeVariant[] = [1, 2, 3, 4, 5];

export function CoachingNewBadgeOptionsGallery() {
  return (
    <div className="pb-20">
      <Container>
        <div className="mx-auto max-w-[900px] py-10">
          <h1 className="font-display text-3xl font-semibold text-ink">NEW badge options</h1>
          <p className="mt-3 max-w-2xl font-reading text-[17px] leading-relaxed text-charcoal">
            Five ways to mark Jobbie and 1 year free of AI tools as new. Shipped: Option 4 —
            ink pill + sunrise dot (paper pill on dark bands so it always contrasts).
          </p>
        </div>
      </Container>

      <div className="space-y-4">
        {VARIANTS.map((n) => (
          <section key={n} className="bg-paper px-5 py-10 sm:px-8 lg:px-12">
            <Container>
              <p className="mb-6 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">
                Option {n} — {newBadgeLabel(n)}
              </p>

              <div
                className="overflow-hidden rounded-[10px] px-6 py-8 sm:px-10"
                style={{ background: "var(--tqa-sunrise)", color: "var(--tqa-ink)" }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember-deep">
                    Introducing Jobbie
                  </p>
                  <NewBadge variant={n} />
                </div>
                <h2 className="font-display mt-3 text-2xl font-semibold sm:text-3xl">
                  Never get ghosted again
                </h2>
              </div>

              <div
                className="mt-4 overflow-hidden rounded-[10px] px-6 py-8 sm:px-10"
                style={{ background: "var(--tqa-ink)", color: "var(--tqa-paper)" }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--tqa-sunrise-soft)]">
                    Included with coaching
                  </p>
                  <NewBadge variant={n} onDark />
                </div>
                <h2 className="font-display mt-3 text-2xl font-semibold sm:text-3xl">
                  1 year free of AI tools
                </h2>
              </div>
            </Container>
          </section>
        ))}
      </div>
    </div>
  );
}
