"use client";

import Link from "next/link";
import { Navigation } from "@/components/revamp/navigation";
import { Container } from "@/components/revamp/primitives";
import { PlaybooksGrid } from "@/components/playbooks/playbooks-grid";
import { FooterRev } from "@/components/revamp/sections-3";
import { PLAYBOOKS } from "@/lib/playbooks";

export function PlaybooksLandingPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navigation />
      <main>
        <section className="border-b border-charcoal/10 pt-3 pb-12 sm:pb-16">
          <Container>
            <Link
              href="/free-resources"
              className="font-sans text-sm font-semibold text-ember underline underline-offset-4"
            >
              ← Free resources
            </Link>
            <p className="mt-8 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">Free</p>
            <h1
              className="font-display mt-4 font-semibold text-charcoal"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, textWrap: "balance" }}
            >
              Playbooks for quiet achievers
            </h1>
            <p className="mt-5 max-w-2xl font-reading text-lg leading-relaxed text-warm-700">
              Tiny how-to guides for specific situations. One topic. All action. Free.
            </p>
            <p className="mt-4 max-w-2xl font-reading text-[16px] leading-relaxed text-warm-600">
              Also grab the{" "}
              <Link href="/book#checklist" className="font-semibold text-ember underline underline-offset-4">
                free book chapter &amp; Tiny Habits Checklist
              </Link>
              .
            </p>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <PlaybooksGrid playbooks={PLAYBOOKS} />
          </Container>
        </section>
      </main>
      <FooterRev cta={{ label: "Work with me", href: "/#work-with-me" }} ctaAsButton showDiscoveryCta={false} />
    </div>
  );
}
