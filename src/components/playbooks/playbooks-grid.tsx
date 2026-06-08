import type { PlaybookSummary } from "@/lib/playbooks/types";
import { SITE_FEATURES } from "@/lib/site-features";
import { ComingSoonPill } from "@/components/revamp/coming-soon-pill";
import { PlaybooksGridInteractive } from "@/components/playbooks/playbooks-grid-interactive";

export function PlaybooksGrid({ playbooks }: { playbooks: readonly PlaybookSummary[] }) {
  if (SITE_FEATURES.playbooksComingSoon) {
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {playbooks.map((book) => (
          <article
            key={book.slug}
            aria-disabled
            className="flex min-h-[260px] flex-col rounded-lg bg-paper p-7 ring-1 ring-charcoal/10"
          >
            <div className="flex-1">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">{book.tag}</p>
              <p className="mt-3 text-2xl leading-none" aria-hidden>
                {book.emoji}
              </p>
              <h3 className="font-display mt-3 text-[22px] font-semibold leading-tight tracking-tight text-charcoal">
                {book.shortTitle}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-warm-700">{book.description}</p>
            </div>
            <div className="mt-6">
              <ComingSoonPill />
            </div>
          </article>
        ))}
      </div>
    );
  }

  return <PlaybooksGridInteractive playbooks={playbooks} />;
}
