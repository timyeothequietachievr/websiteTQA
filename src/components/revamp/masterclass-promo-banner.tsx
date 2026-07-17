"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/** Hide after the Sydney session ends (28 Jul 2026, noon AEST). */
const EVENT_END_MS = Date.parse("2026-07-28T12:00:00+10:00");

/**
 * Sitewide top toaster promoting the free live master class.
 * Option 3 — ember-deep strip; sticky with the nav.
 */
export function MasterclassPromoBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (Date.now() > EVENT_END_MS) return;
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Free live master class"
      className="relative"
      style={{
        background: "var(--tqa-ember-deep)",
        color: "var(--tqa-paper)",
        borderBottom: "1px solid rgba(0,0,0,0.18)",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center px-5 py-2.5 sm:px-8 lg:px-12">
        <Link
          href="/masterclass"
          className="min-w-0 flex-1 text-left no-underline"
          style={{ color: "inherit" }}
        >
          <span className="block font-sans text-[13px] font-semibold leading-snug sm:text-[14px]">
            Free Masterclass: How I went from overlooked to $300k Principal &amp; Leadership Roles —
            as an asian in tech{" "}
            <span aria-hidden className="text-sunrise">
              →
            </span>
          </span>
          <span
            className="mt-0.5 block font-sans text-[11px] leading-snug sm:text-[12px]"
            style={{ color: "rgba(245,240,211,0.78)" }}
          >
            28 Jul @ 10:00&nbsp;am AEST (Sydney), 8:00&nbsp;am SG | 27 Jul @ 8:00&nbsp;pm ET, 5:00&nbsp;pm
            PT
          </span>
        </Link>
      </div>
    </div>
  );
}
