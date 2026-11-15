"use client";

import type { ReactNode } from "react";

/**
 * “NEW” markers for Jobbie + AI tools on /coaching.
 * Shipped: Option 4 — pill + sunrise dot. Fill flips for contrast:
 * ink on light/sunrise bands, paper on dark/ink bands (design-system tokens only).
 */
export type NewBadgeVariant = 1 | 2 | 3 | 4 | 5;

const LABELS: Record<NewBadgeVariant, string> = {
  1: "Sunrise pill (pricing badge)",
  2: "Ember ring pill (Coming soon pattern)",
  3: "Sunrise star + NEW",
  4: "Ink pill with sunrise dot",
  5: "Ember-deep flag",
};

export function newBadgeLabel(variant: NewBadgeVariant) {
  return LABELS[variant];
}

/** Option 4 — solid pill + sunrise accent; flips fill so it always contrasts. */
function InkPillWithSunriseDot({
  onDark = false,
  className = "",
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] ${
        onDark ? "bg-paper text-ink" : "bg-ink text-paper"
      } ${className}`}
    >
      <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-sunrise" />
      New
    </span>
  );
}

export function NewBadge({
  variant = 4,
  onDark = false,
  className = "",
}: {
  variant?: NewBadgeVariant;
  /** True on ink / ember-deep / other dark bands — uses paper fill so the pill pops. */
  onDark?: boolean;
  className?: string;
}) {
  switch (variant) {
    case 1:
      return (
        <span
          className={`inline-flex items-center rounded-full bg-sunrise px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink-deep ${className}`}
        >
          New
        </span>
      );
    case 2:
      return (
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] ring-1 ${
            onDark
              ? "bg-paper/15 text-sunrise ring-paper/25"
              : "bg-ember/10 text-ember-deep ring-ember/25"
          } ${className}`}
        >
          New
        </span>
      );
    case 3:
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] ${
            onDark ? "text-sunrise" : "text-ember-deep"
          } ${className}`}
        >
          <span aria-hidden className="text-[12px] leading-none text-sunrise">
            ★
          </span>
          New
        </span>
      );
    case 4:
      return <InkPillWithSunriseDot onDark={onDark} className={className} />;
    case 5:
      return (
        <span
          className={`inline-flex items-center rounded-sm px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] ${
            onDark ? "bg-sunrise text-ink-deep" : "bg-ember-deep text-paper"
          } ${className}`}
        >
          New
        </span>
      );
    default:
      return null;
  }
}

/** Title row with optional NEW badge beside the h2 / eyebrow cluster. */
export function WithNewBadge({
  variant = 4,
  onDark = false,
  children,
}: {
  variant?: NewBadgeVariant;
  onDark?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {children}
      <NewBadge variant={variant} onDark={onDark} />
    </div>
  );
}
