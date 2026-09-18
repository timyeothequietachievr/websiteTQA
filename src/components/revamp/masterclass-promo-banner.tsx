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
 * (live → Luma RSVP sessions, replay → replay gate EO form).
 */
export function MasterclassPromoBanner() {
  const isLive = MASTERCLASS_PROMO.mode === "live";
  const sessions = isLive ? MASTERCLASS_PROMO.sessions : [];

  return (
    <div
      role="region"
      aria-label={isLive ? "Live masterclass" : "Masterclass replay"}
      className="relative"
      style={{
        background: "var(--tqa-ember-deep)",
        color: "var(--tqa-paper)",
        borderBottom: "1px solid rgba(0,0,0,0.18)",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-1.5 px-5 py-2.5 text-center sm:px-8 lg:px-12">
        {isLive && sessions.length > 0 ? (
          <>
            <p className="m-0 font-sans text-[13px] font-semibold leading-snug sm:text-[14px]">
              {MASTERCLASS_PROMO.toasterLine1}
              <br />
              {MASTERCLASS_PROMO.toasterLine2}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              {sessions.map((session, index) => (
                <span key={session.href} className="inline-flex items-center gap-x-3">
                  {index > 0 ? (
                    <span aria-hidden className="text-paper/45">
                      |
                    </span>
                  ) : null}
                  <Link
                    {...linkProps(session.href)}
                    className="font-sans text-[12px] font-semibold leading-snug no-underline underline-offset-2 hover:underline sm:text-[13px]"
                    style={{ color: "inherit" }}
                  >
                    {session.label}{" "}
                    <span aria-hidden className="text-sunrise">
                      →
                    </span>
                  </Link>
                </span>
              ))}
            </div>
          </>
        ) : (
          <Link
            {...linkProps(getMasterclassPromoHref())}
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
        )}
      </div>
    </div>
  );
}
