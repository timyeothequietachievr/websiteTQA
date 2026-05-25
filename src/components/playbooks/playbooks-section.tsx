"use client";

import Link from "next/link";
import { Container } from "@/components/revamp/primitives";
import { PlaybooksGrid } from "@/components/playbooks/playbooks-grid";
import { getPlaybookSummaries } from "@/lib/playbooks";

export function PlaybooksSection({
  id = "playbooks",
  showViewAll = true,
}: {
  id?: string;
  showViewAll?: boolean;
}) {
  const playbooks = getPlaybookSummaries();

  return (
    <section id={id} className="scroll-mt-24 bg-paper-soft py-24 sm:py-28">
      <Container>
        <div className="mb-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2
              className="font-display font-semibold text-charcoal"
              style={{
                fontSize: "clamp(36px, 4.4vw, 56px)",
                lineHeight: 1,
                letterSpacing: "-0.022em",
                textWrap: "balance",
              }}
            >
              Playbooks for quiet achievers.
            </h2>
            <p className="mt-4 max-w-[56ch] font-sans text-base leading-relaxed text-warm-700">
              Tiny how-to guides for specific situations. One topic. All action. Free.
            </p>
          </div>
        </div>
        <PlaybooksGrid playbooks={playbooks} />
        {showViewAll ? (
          <p className="mt-10 text-center">
            <Link
              href="/playbooks"
              className="inline-flex font-sans text-sm font-semibold text-charcoal underline underline-offset-4"
            >
              See all playbooks <span aria-hidden>→</span>
            </Link>
          </p>
        ) : null}
      </Container>
    </section>
  );
}
