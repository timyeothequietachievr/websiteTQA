"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/revamp/navigation";
import { Container, Button } from "@/components/revamp/primitives";
import { FooterRev } from "@/components/revamp/sections-3";

const EO_FORM_ID = "96ef9e38-8a7a-11f1-8c9e-5dbe765ef454";
const EO_FORM_SRC = `https://eomail5.com/form/${EO_FORM_ID}.js`;
const EO_SCRIPT_LOADED_ATTR = "data-eo-loaded";

function getForm(): HTMLElement | null {
  return document.querySelector(`[data-form="${EO_FORM_ID}"]:not(script)`) as HTMLElement | null;
}

function getScript(): HTMLScriptElement | null {
  return document.querySelector(`script[data-form="${EO_FORM_ID}"]`) as HTMLScriptElement | null;
}

function showForm(form: HTMLElement) {
  form.style.removeProperty("display");
  form.classList.add("active");
}

function isVisible(form: HTMLElement) {
  return form.classList.contains("active") && getComputedStyle(form).display !== "none";
}

/**
 * Load EO script and wait until it has fully executed.
 * Form node appears mid-script; opening too early gets overwritten by EO’s hide.
 */
function ensureReady(): Promise<HTMLElement | null> {
  return new Promise((resolve) => {
    const existingForm = getForm();
    const existingScript = getScript();

    if (existingForm && existingScript?.getAttribute(EO_SCRIPT_LOADED_ATTR) === "1") {
      resolve(existingForm);
      return;
    }

    const finish = (scriptEl: HTMLScriptElement) => {
      scriptEl.setAttribute(EO_SCRIPT_LOADED_ATTR, "1");
      window.setTimeout(() => resolve(getForm()), 80);
    };

    if (existingScript) {
      if (existingScript.getAttribute(EO_SCRIPT_LOADED_ATTR) === "1") {
        resolve(getForm());
        return;
      }
      existingScript.addEventListener("load", () => finish(existingScript), { once: true });
      window.setTimeout(() => finish(existingScript), 400);
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = EO_FORM_SRC;
    script.setAttribute("data-form", EO_FORM_ID);
    script.addEventListener("load", () => finish(script), { once: true });
    script.addEventListener("error", () => resolve(null), { once: true });
    document.body.appendChild(script);
  });
}

async function openMasterclassForm() {
  const form = await ensureReady();
  if (!form) return false;
  for (let i = 0; i < 12; i += 1) {
    showForm(form);
    await new Promise((r) => window.setTimeout(r, 40));
    if (isVisible(form)) return true;
  }
  return isVisible(form);
}

/**
 * Dedicated landing for the masterclass replay Email Octopus popup.
 * Loads EO only on this page and opens the modal once the script is ready.
 */
export function MasterclassReplayPage() {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const opened = await openMasterclassForm();
      if (cancelled) return;
      setStatus(opened ? "ready" : "error");
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-full bg-paper">
      <Navigation hideNavLinks ctaLabel="Book a discovery call" ctaHref="/coaching" />
      <main>
        <section className="border-b border-charcoal/10 pt-10 pb-20 sm:pt-14 sm:pb-24">
          <Container>
            <div className="mx-auto max-w-[640px] text-center">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">
                Free masterclass replay
              </p>
              <h1 className="font-display mt-4 text-[clamp(28px,4vw,44px)] font-semibold leading-[1.1] text-charcoal">
                Watch Masterclass: How I went from overlooked to $300k Principal &amp; Leadership
                Roles
              </h1>
              <p className="font-reading mt-5 text-[17px] leading-relaxed text-warm-700">
                Enter your email in the form to get the replay links sent to your inbox.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3">
                <button
                  type="button"
                  data-eo-form-toggle-id={EO_FORM_ID}
                  onClick={() => {
                    void openMasterclassForm();
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
