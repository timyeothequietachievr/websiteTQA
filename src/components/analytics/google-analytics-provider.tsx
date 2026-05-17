"use client";

import Script from "next/script";
import { useEffect, type ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-TVY6L0GW07";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const DOWNLOAD_EXTENSIONS =
  /\.(pdf|epub|mobi|docx?|xlsx?|pptx?|zip|mp3|mp4|wav|mov)$/i;

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtagShim(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
}

function sendEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (!GA_MEASUREMENT_ID) {
    return;
  }

  ensureGtag();
  window.gtag?.("event", eventName, params);
}

function getElementLabel(element: Element) {
  return (
    element.getAttribute("aria-label") ||
    element.getAttribute("title") ||
    element.textContent?.replace(/\s+/g, " ").trim().slice(0, 140) ||
    element.tagName.toLowerCase()
  );
}

function isOutbound(url: string) {
  try {
    return new URL(url).hostname !== window.location.hostname;
  } catch {
    return false;
  }
}

function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) {
      return;
    }

    const pagePath = `${pathname}${searchParams.toString() ? `?${searchParams}` : ""}`;

    ensureGtag();
    window.gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
      send_page_view: false,
    });
    sendEvent("page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

export function GoogleAnalyticsProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const element = target.closest("a, button, [role='button']");
      if (!element) {
        return;
      }

      const href = element instanceof HTMLAnchorElement ? element.href : undefined;
      const label = getElementLabel(element);

      sendEvent("ui_click", {
        event_category: "engagement",
        event_label: label,
        link_text: label,
        link_url: href,
        element_tag: element.tagName.toLowerCase(),
        element_id: element.id || undefined,
        page_path: window.location.pathname,
        page_title: document.title,
      });

      if (href && isOutbound(href)) {
        sendEvent("outbound_click", {
          event_category: "navigation",
          event_label: href,
          link_text: label,
          link_url: href,
        });
      }

      if (href && DOWNLOAD_EXTENSIONS.test(new URL(href, window.location.href).pathname)) {
        sendEvent("file_download", {
          event_category: "download",
          event_label: href,
          link_text: label,
          link_url: href,
        });
      }
    };

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) {
        return;
      }

      sendEvent("form_submit", {
        event_category: "lead",
        form_id: form.id || undefined,
        form_name: form.getAttribute("name") || undefined,
        form_action: form.action || undefined,
        page_path: window.location.pathname,
        page_title: document.title,
      });
    };

    const sentDepths = new Set<number>();
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) {
        return;
      }

      const depth = Math.round((window.scrollY / scrollableHeight) * 100);
      for (const milestone of [25, 50, 75, 90, 100]) {
        if (depth >= milestone && !sentDepths.has(milestone)) {
          sentDepths.add(milestone);
          sendEvent("scroll_depth", {
            event_category: "engagement",
            event_label: `${milestone}%`,
            percent_scrolled: milestone,
            page_path: window.location.pathname,
          });
        }
      }
    };

    const startedAt = Date.now();
    const handleVisibilityChange = () => {
      if (document.visibilityState !== "hidden") {
        return;
      }

      sendEvent("page_engagement", {
        event_category: "engagement",
        engagement_time_msec: Date.now() - startedAt,
        page_path: window.location.pathname,
        page_title: document.title,
      });
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      <GoogleAnalyticsPageView />
      {children}
    </>
  );
}
