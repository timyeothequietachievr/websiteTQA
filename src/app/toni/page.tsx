import type { Metadata } from "next";
import { Navigation } from "@/components/revamp/navigation";
import { FooterRev } from "@/components/revamp/sections-3";
import { Container } from "@/components/revamp/primitives";
import { ToniChat } from "./toni-chat";

export const metadata: Metadata = {
  title: "Toni — AI Coach for Quiet Achievers",
  description:
    "Test Toni, Tim Yeo's AI coaching prototype for specific workplace situations.",
};

export default function ToniPage() {
  return (
    <div className="bg-paper" data-screen-label="Toni chat">
      <Navigation />
      <main>
        <section className="py-10 sm:py-14">
          <Container wide>
            <div className="mb-8 max-w-4xl">
              <p className="font-mono text-[11px] font-bold tracking-[0.2em] text-ember uppercase">
                Toni MVP
              </p>
              <h1 className="mt-3 font-display text-[clamp(42px,6vw,76px)] leading-[0.95] font-semibold tracking-[-0.02em] text-charcoal">
                An AI coaching lab for quiet achievers.
              </h1>
              <p className="mt-5 max-w-2xl font-reading text-lg leading-relaxed text-warm-700">
                This is the temporary home for Toni while we test whether the conversations are useful.
                For now, she lives here only. Later, we can bring her back to the homepage and site-wide.
              </p>
            </div>
            <ToniChat />
          </Container>
        </section>
      </main>
      <FooterRev />
    </div>
  );
}
