import Link from "next/link";

/**
 * Sitewide top toaster — links to /masterclassreplay where the EO form opens.
 * Option 3 — ember-deep strip; sticky with the nav.
 */
export function MasterclassPromoBanner() {
  return (
    <div
      role="region"
      aria-label="Watch masterclass"
      className="relative"
      style={{
        background: "var(--tqa-ember-deep)",
        color: "var(--tqa-paper)",
        borderBottom: "1px solid rgba(0,0,0,0.18)",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-center px-5 py-2.5 sm:px-8 lg:px-12">
        <Link
          href="/masterclassreplay"
          className="min-w-0 text-center no-underline"
          style={{ color: "inherit" }}
        >
          <span className="block font-sans text-[13px] font-semibold leading-snug sm:text-[14px]">
            Watch Masterclass: How I went from overlooked to $300k Principal &amp; Leadership Roles{" "}
            <span aria-hidden className="text-sunrise">
              →
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
