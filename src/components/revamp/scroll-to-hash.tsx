"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Next.js App Router often lands at the top after a cross-page hash link
 * (e.g. /jobbie → /coaching#how-it-works). Re-apply the hash scroll after paint.
 */
function scrollToCurrentHash() {
  const raw = window.location.hash;
  if (!raw || raw.length < 2) return false;
  const id = decodeURIComponent(raw.slice(1));
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;

    let cancelled = false;
    let tries = 0;

    const attempt = () => {
      if (cancelled) return;
      if (scrollToCurrentHash()) return;
      if (tries++ >= 30) return;
      window.setTimeout(attempt, 50);
    };

    // Next may reset scroll after the first paint — retry across a few frames.
    const t0 = window.setTimeout(attempt, 0);
    const t1 = window.setTimeout(attempt, 120);
    const t2 = window.setTimeout(attempt, 400);

    return () => {
      cancelled = true;
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      scrollToCurrentHash();
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
