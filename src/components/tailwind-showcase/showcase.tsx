"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/revamp/primitives";
import { ComponentLabelBadge } from "@/components/component-label";
import {
  REVAMP_COMPONENT_COUNT,
  tailwindComponentCode,
} from "@/lib/component-catalog";
import { tailwindShowcaseRegistry } from "./registry";

export function TailwindComponentShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showBlocks, setShowBlocks] = useState(false);

  const categories = [...new Set(tailwindShowcaseRegistry.map((e) => e.category))];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBlocks(true);
          observer.disconnect();
        }
      },
      { rootMargin: "480px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const firstTailwindCode = tailwindComponentCode(0);
  const lastTailwindCode = tailwindComponentCode(
    tailwindShowcaseRegistry.length - 1,
  );

  return (
    <section
      ref={sectionRef}
      id="tailwind-showcase"
      className="border-t-4 border-ember bg-paper-soft"
      aria-labelledby="tailwind-showcase-heading"
    >
      <Container wide className="py-20 sm:py-28">
        <p className="eyebrow text-ember">Component library</p>
        <h2
          id="tailwind-showcase-heading"
          className="display-headline mt-4 font-bold text-charcoal"
          style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05 }}
        >
          Tailwind UI Marketing — styled for The Quiet Achiever
        </h2>
        <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-warm-700">
          All {tailwindShowcaseRegistry.length} blocks from your uploaded
          marketing kit, recolored with ember, ink, and paper tokens. Each block
          has a label ({firstTailwindCode}–{lastTailwindCode}) for your Notion
          page picks.
        </p>
        <p className="mt-2 font-mono text-xs text-warm-500">
          Homepage revamp sections are c1–c{REVAMP_COMPONENT_COUNT}. Full index:{" "}
          <a href="/component-catalog.json" className="text-ember underline">
            component-catalog.json
          </a>
        </p>
        {!showBlocks && (
          <p className="mt-6 font-sans text-sm text-warm-500">
            Scroll down to load the component previews (keeps the homepage nav
            clean until you need them).
          </p>
        )}
      </Container>

      {showBlocks ? (
        <div className="space-y-24 pb-32">
          {categories.map((category) => {
            const entries = tailwindShowcaseRegistry.filter(
              (e) => e.category === category,
            );
            return (
              <div key={category}>
                <Container wide>
                  <h3 className="font-mono text-xs font-bold tracking-[0.18em] text-ember-deep uppercase">
                    {category}
                  </h3>
                </Container>
                <div className="mt-8 space-y-16">
                  {entries.map((entry) => {
                    const registryIndex = tailwindShowcaseRegistry.findIndex(
                      (e) => e.id === entry.id,
                    );
                    const code = tailwindComponentCode(registryIndex);
                    return (
                      <article
                        key={entry.id}
                        id={entry.id}
                        className="overflow-hidden border-y border-paper-200 bg-paper"
                        data-component-code={code}
                      >
                        <Container wide className="py-3">
                          <p className="font-sans text-sm font-semibold text-charcoal">
                            <span className="mr-2 inline-block rounded-sm bg-ember px-1.5 py-0.5 font-mono text-[11px] font-bold text-paper">
                              {code}
                            </span>
                            {entry.label}
                          </p>
                          <p className="font-mono text-[11px] text-warm-500">
                            {entry.id}
                          </p>
                        </Container>
                        <div className="tailwind-showcase-sandbox relative">
                          <ComponentLabelBadge
                            code={code}
                            title={entry.label}
                          />
                          <div className="tailwind-showcase-block font-sans [&_h1]:font-display [&_h2]:font-display [&_h3]:font-display">
                            <entry.Component />
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
