"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/revamp/navigation";
import { Container, Button } from "@/components/revamp/primitives";
import { FooterRev } from "@/components/revamp/sections-3";
import {
  MASTERCLASS_REPLAY_EO_FORM_ID,
  MASTERCLASS_REPLAY_YOUTUBE_URL,
  bindMasterclassReplayEoSuccessRedirect,
  openMasterclassReplayEoForm,
} from "@/lib/masterclass-replay-eo";

export type MasterclassReplayPageProps = {
  /** Optional post-signup destination (overrides EO form redirect). */
  successRedirectUrl?: string;
  eoFormId?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

/**
 * Dedicated landing for the masterclass replay Email Octopus popup.
 * Loads EO only on this page and opens the modal once the script is ready.
 */
export function MasterclassReplayPage({
  successRedirectUrl = MASTERCLASS_REPLAY_YOUTUBE_URL,
  eoFormId = MASTERCLASS_REPLAY_EO_FORM_ID,
  eyebrow = "Free masterclass replay",
  title = "Watch Masterclass: How I went from overlooked to $300k Principal & Leadership Roles",
  description = "Enter your email in the form to get the replay links sent to your inbox.",
}: MasterclassReplayPageProps = {}) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const opened = await openMasterclassReplayEoForm(eoFormId);
      if (cancelled) return;
      setStatus(opened ? "ready" : "error");
    })();
    return () => {
      cancelled = true;
    };
  }, [eoFormId]);

  useEffect(() => {
    if (!successRedirectUrl) return;
    return bindMasterclassReplayEoSuccessRedirect(successRedirectUrl, eoFormId);
  }, [eoFormId, successRedirectUrl]);

  return (
    <div className="min-h-full bg-paper">
      <Navigation hideNavLinks ctaLabel="Book a discovery call" ctaHref="/coaching" />
      <main>
        <section className="border-b border-charcoal/10 pt-10 pb-20 sm:pt-14 sm:pb-24">
          <Container>
            <div className="mx-auto max-w-[640px] text-center">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">
                {eyebrow}
              </p>
              <h1 className="font-display mt-4 text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] text-charcoal">
                {title}
              </h1>
              <p className="font-reading mt-5 text-[17px] leading-relaxed text-warm-700">
                {description}
              </p>

              <div className="mt-8 flex flex-col items-center gap-3">
                <button
                  type="button"
                  data-eo-form-toggle-id={eoFormId}
                  onClick={() => {
                    void openMasterclassReplayEoForm(eoFormId);
                  }}
                  className="inline-flex h-12 items-center justify-center rounded px-6 font-sans text-[15px] font-bold"
                  style={{ background: "var(--tqa-ember)", color: "var(--tqa-paper)" }}
                >
                  {status === "loading" ? "Opening form…" : "Open email form →"}
                </button>
                {status === "error" ? (
                  <p className="font-sans text-sm text-warm-700">
                    If the form didn&rsquo;t open, tap the button above.
                  </p>
                ) : null}
              </div>

              <div className="mt-10">
                <Button href="/coaching" variant="ghost" size="md">
                  Or explore coaching →
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <FooterRev />
    </div>
  );
}
