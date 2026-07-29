"use client";

import { useEffect } from "react";

const EO_FORM_ID = "96ef9e38-8a7a-11f1-8c9e-5dbe765ef454";
const EO_FORM_SRC = `https://eomail5.com/form/${EO_FORM_ID}.js`;

/**
 * Email Octopus popup form — load once. Opens via data-eo-form-toggle-id clicks
 * (EO’s own modal), not an inline embed.
 */
function useEmailOctopusPopupForm() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.querySelector(`script[data-form="${EO_FORM_ID}"]`)) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = EO_FORM_SRC;
    script.setAttribute("data-form", EO_FORM_ID);
    document.body.appendChild(script);
  }, []);
}

/**
 * Sitewide top toaster — masterclass is over; opens Email Octopus replay popup.
 * Option 3 — ember-deep strip; sticky with the nav.
 */
export function MasterclassPromoBanner() {
  useEmailOctopusPopupForm();

  return (
    <div
      role="region"
      aria-label="Free masterclass replay"
      className="relative"
      style={{
        background: "var(--tqa-ember-deep)",
        color: "var(--tqa-paper)",
        borderBottom: "1px solid rgba(0,0,0,0.18)",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center px-5 py-2.5 sm:px-8 lg:px-12">
        <button
          type="button"
          data-eo-form-toggle-id={EO_FORM_ID}
          className="min-w-0 flex-1 text-left"
          style={{
            color: "inherit",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <span className="block font-sans text-[13px] font-semibold leading-snug sm:text-[14px]">
            Masterclass Replay: How I went from overlooked to $300k Principal &amp; Leadership Roles —
            as an asian in tech{" "}
            <span aria-hidden className="text-sunrise">
              →
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
