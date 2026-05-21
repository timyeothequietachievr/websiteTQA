"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Container, Button, Eyebrow } from "@/components/revamp/primitives";

export function SpeakingPageShell({
  children,
  ctaLabel = "Enquire about speaking",
  ctaHref = "mailto:speaker@thequietachievr.com?subject=Speaking%20enquiry",
}: {
  children: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div className="min-h-full bg-paper">
      <SpeakingMasthead ctaLabel={ctaLabel} ctaHref={ctaHref} />
      {children}
    </div>
  );
}

export function SpeakingMasthead({
  ctaLabel,
  ctaHref,
}: {
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <header
      className="sticky top-0 z-[100] border-b border-charcoal/10"
      style={{ background: "rgba(245,240,211,0.94)", backdropFilter: "saturate(140%) blur(8px)" }}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Link href="/" className="inline-flex flex-col leading-none" aria-label="Tim Yeo — Introvert Coach">
            <span className="font-display text-[22px] font-bold tracking-tight text-charcoal">Tim Yeo</span>
            <span className="font-display mt-0.5 text-[13px] italic text-ember-deep">Introvert Coach</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/speakerkit"
              className="hidden font-sans text-[14px] font-semibold text-charcoal underline-offset-4 hover:text-ember hover:underline sm:inline"
            >
              Speaker kit
            </Link>
            <Button href={ctaHref} size="sm">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export function SectionBlock({
  eyebrow,
  title,
  children,
  dark = false,
  className = "",
  id,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${dark ? "bg-ink text-paper" : "bg-paper"} ${className}`}
    >
      <Container>
        {eyebrow ? <Eyebrow tone={dark ? "cream" : "ember"}>{eyebrow}</Eyebrow> : null}
        {title ? (
          <h2
            className={`font-display mt-4 font-semibold tracking-tight ${dark ? "text-paper" : "text-charcoal"}`}
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.05 }}
          >
            {title}
          </h2>
        ) : null}
        <div className={title || eyebrow ? "mt-8" : ""}>{children}</div>
      </Container>
    </section>
  );
}

export function CtaBand({
  title,
  body,
  primaryHref = "mailto:speaker@thequietachievr.com?subject=Speaking%20enquiry",
  primaryLabel = "Email Tim",
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-paper-soft py-14 sm:py-16">
      <Container>
        <div className="rounded-xl bg-ink p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">{title}</h2>
          {body ? <p className="mt-3 max-w-2xl font-reading text-base leading-relaxed text-paper/85">{body}</p> : null}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={primaryHref} variant="primary">
              {primaryLabel}
            </Button>
            {secondaryHref && secondaryLabel ? (
              <Button href={secondaryHref} variant="cream">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function QuoteCard({ quote, attribution }: { quote: string; attribution?: string }) {
  return (
    <figure className="rounded-lg bg-paper-soft p-6 ring-1 ring-charcoal/10">
      <blockquote className="font-reading text-[17px] leading-relaxed text-charcoal italic">&ldquo;{quote}&rdquo;</blockquote>
      {attribution ? <figcaption className="mt-4 font-sans text-sm font-semibold text-warm-700">{attribution}</figcaption> : null}
    </figure>
  );
}

export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg ring-1 ring-charcoal/10">
      <table className="w-full min-w-[520px] border-collapse text-left font-sans text-sm">
        <thead>
          <tr className="bg-paper-soft">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-bold text-charcoal">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-charcoal/10 bg-paper">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top text-warm-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CopyPasteBlock({ label, children }: { label: string; children: string }) {
  return (
    <div className="rounded-lg bg-paper-soft p-5 ring-1 ring-charcoal/10">
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ember">{label}</p>
      <p className="mt-3 font-reading text-[15px] leading-relaxed text-warm-700 whitespace-pre-wrap">{children}</p>
    </div>
  );
}
