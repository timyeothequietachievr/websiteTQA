"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import {
  readBioAttributionCookie,
  readBioUrlParams,
} from "@/lib/bio-attribution";

const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY || "phc_vvzGombu49viAehfCEQd9fKbnSHo6dWoDFMaPGiSMgYc";
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

function getElementLabel(element: Element) {
  return (
    element.getAttribute("aria-label") ||
    element.getAttribute("title") ||
    element.textContent?.replace(/\s+/g, " ").trim().slice(0, 140) ||
    element.tagName.toLowerCase()
  );
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!POSTHOG_KEY || !POSTHOG_HOST || !posthog.__loaded) {
      return;
    }

    posthog.capture("$pageview", {
      $current_url: window.location.href,
      path: pathname,
      search: searchParams.toString(),
      title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (!POSTHOG_KEY || !POSTHOG_HOST || posthog.__loaded) {
      return;
    }

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      autocapture: true,
      capture_pageview: false,
      capture_pageleave: true,
      cross_subdomain_cookie: true,
      persistence: "cookie",
      disable_session_recording: false,
      loaded: (client) => {
        if (typeof window !== "undefined") {
          const urlAttribution = readBioUrlParams(window.location.search);
          if (urlAttribution.bioDistinctId) {
            client.alias(urlAttribution.bioDistinctId, client.get_distinct_id());
            client.capture("bio_link_arrival", {
              bio_distinct_id: urlAttribution.bioDistinctId,
              landing_path: window.location.pathname,
              utm_source: urlAttribution.utm_source,
              utm_medium: urlAttribution.utm_medium,
              utm_campaign: urlAttribution.utm_campaign,
            });
          }

          const cookieAttribution = readBioAttributionCookie();
          if (cookieAttribution) {
            if (cookieAttribution.phid) {
              client.alias(cookieAttribution.phid, client.get_distinct_id());
            }

            client.capture("bio_link_touch", {
              bio_distinct_id: cookieAttribution.phid,
              link_id: cookieAttribution.link_id,
              link_text: cookieAttribution.link_text,
              destination_kind: cookieAttribution.destination_kind,
            });
          }
        }

        if (process.env.NODE_ENV === "development") {
          client.debug();
        }
      },
    });
  }, []);

  useEffect(() => {
    if (!POSTHOG_KEY || !POSTHOG_HOST) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const element = target.closest("a, button, [role='button']");
      if (!element || !posthog.__loaded) {
        return;
      }

      posthog.capture("ui_click", {
        label: getElementLabel(element),
        tag: element.tagName.toLowerCase(),
        href: element instanceof HTMLAnchorElement ? element.href : undefined,
        id: element.id || undefined,
        path: window.location.pathname,
        page_title: document.title,
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <>
      <PostHogPageView />
      {children}
    </>
  );
}
