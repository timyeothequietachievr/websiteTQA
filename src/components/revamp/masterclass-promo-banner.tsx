import Link from "next/link";
import {
  MASTERCLASS_PROMO,
  getMasterclassPromoHref,
} from "@/lib/masterclass-promo";

/**
 * Sitewide top toaster — destination follows MASTERCLASS_PROMO.mode
 * (live → Luma RSVP, replay → /masterclassreplay EO form).
 */
export function MasterclassPromoBanner() {
  const href = getMasterclassPromoHref();
  const isExternal = href.startsWith("http");

  return (
    <div
      role="region"
      aria-label={MASTERCLASS_PROMO.mode === "live" ? "Live masterclass" : "Masterclass replay"}
      className="relative"
      style={{
        background: "var(--tqa-ember-deep)",
        color: "var(--tqa-paper)",
        borderBottom: "1px solid rgba(0,0,0,0.18)",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-center px-5 py-2.5 sm:px-8 lg:px-12">
        <Link
          href={href}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="min-w-0 text-center no-underline"
          style={{ color: "inherit" }}
        >
          <span className="block font-sans text-[13px] font-semibold leading-snug sm:text-[14px]">
            {MASTERCLASS_PROMO.toasterLabel}{" "}
            <span aria-hidden className="text-sunrise">
              →
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
