import Link from "next/link";
import {
  MASTERCLASS_PROMO,
  getMasterclassPromoHref,
} from "@/lib/masterclass-promo";

function linkProps(href: string) {
  const isExternal = href.startsWith("http");
  return {
    href,
    ...(isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {}),
  };
}

/**
 * Sitewide top toaster — destination follows MASTERCLASS_PROMO.mode
 * (live → /masterclass with Aug 2-line date+title layout, replay → replay gate).
 */
export function MasterclassPromoBanner() {
  const href = getMasterclassPromoHref();

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
          {...linkProps(href)}
          className="min-w-0 text-center no-underline"
          style={{ color: "inherit" }}
        >
          <span className="block font-sans text-[13px] font-semibold leading-snug sm:text-[14px]">
            {MASTERCLASS_PROMO.toasterLine1}
            <br />
            {MASTERCLASS_PROMO.toasterLine2}{" "}
            <span aria-hidden className="text-sunrise">
              →
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
