"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import {
  clearBioAttributionCookie,
  readBioAttributionCookie,
  readBioUrlParams,
} from "@/lib/bio-attribution";

type ConversionTrackerProps = {
  conversionType: "book_purchase" | "coaching_interest" | "generic";
  pagePath: string;
};

export function ConversionTracker({
  conversionType,
  pagePath,
}: ConversionTrackerProps) {
  const searchParams = useSearchParams();
  const firedRef = useRef(false);

  useEffect(() => {
    if (!posthog.__loaded || firedRef.current) {
      return;
    }

    firedRef.current = true;

    const urlAttribution = readBioUrlParams(searchParams.toString());
    const cookieAttribution = readBioAttributionCookie();

    if (urlAttribution.bioDistinctId) {
      posthog.alias(urlAttribution.bioDistinctId, posthog.get_distinct_id());
    } else if (cookieAttribution?.phid) {
      posthog.alias(cookieAttribution.phid, posthog.get_distinct_id());
    }

    posthog.capture("conversion_completed", {
      conversion_type: conversionType,
      conversion_source: urlAttribution.source ?? cookieAttribution?.destination_kind ?? "unknown",
      page_path: pagePath,
      bio_distinct_id: urlAttribution.bioDistinctId ?? cookieAttribution?.phid,
      link_id: cookieAttribution?.link_id,
      link_text: cookieAttribution?.link_text,
      utm_source: urlAttribution.utm_source,
      utm_medium: urlAttribution.utm_medium,
      utm_campaign: urlAttribution.utm_campaign,
      funnel: "links_bio",
    });

    clearBioAttributionCookie();
  }, [conversionType, pagePath, searchParams]);

  return null;
}
