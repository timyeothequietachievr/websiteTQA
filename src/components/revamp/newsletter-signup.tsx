"use client";

import { useState } from "react";
import { isNewsletterSignupEnabled } from "@/lib/site-features";
import { ComingSoonPill } from "@/components/revamp/coming-soon-pill";

export function NewsletterSignup({
  showPill = false,
  onDark = true,
}: {
  showPill?: boolean;
  onDark?: boolean;
}) {
  const comingSoon = !isNewsletterSignupEnabled();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (comingSoon) return;

    const trimmed = email.trim().toLowerCase();
    if (!trimmed) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = (await res.json().catch(() => null)) as {
        error?: string;
        status?: string;
        alreadyExists?: boolean;
      } | null;

      if (!res.ok) {
        setStatus("error");
        setMessage(data?.error ?? "Could not subscribe. Try again.");
        return;
      }

      setStatus("success");
      if (data?.alreadyExists && data?.status === "PENDING") {
        setMessage("You’re already pending — check your inbox and click confirm to subscribe.");
      } else if (data?.alreadyExists) {
        setMessage("You’re already on the list.");
      } else if (data?.status === "PENDING") {
        setMessage("Almost there — check your inbox and click confirm to subscribe.");
      } else {
        setMessage("You’re in. Check your inbox for a welcome note.");
      }
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Could not subscribe. Try again.");
    }
  }

  return (
    <div>
      {showPill && comingSoon ? (
        <ComingSoonPill tone={onDark ? "on-dark" : "default"} className="mb-4" />
      ) : null}
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-2" aria-disabled={comingSoon}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={comingSoon || status === "loading"}
          aria-disabled={comingSoon}
          required
          className="font-sans min-w-[240px] flex-1 rounded px-4 text-[15px] outline-none disabled:cursor-not-allowed disabled:opacity-55"
          style={{
            background: "var(--tqa-paper)",
            color: "var(--tqa-charcoal)",
            border: "none",
            height: "52px",
          }}
        />
        <button
          type="submit"
          disabled={comingSoon || status === "loading"}
          className="font-sans rounded px-[22px] text-[15px] font-bold disabled:cursor-not-allowed disabled:opacity-55"
          style={{
            height: "52px",
            background: comingSoon ? "rgba(26,26,58,0.45)" : "var(--tqa-ink)",
            color: "var(--tqa-paper)",
            border: "none",
          }}
        >
          {comingSoon ? "Coming soon" : status === "loading" ? "Subscribing…" : "Subscribe →"}
        </button>
      </form>
      <p
        className="font-mono mt-3.5 text-[11px] uppercase tracking-[0.14em]"
        style={{ color: onDark ? "rgba(245,240,211,0.65)" : "var(--neutral-500)" }}
        role="status"
      >
        {status === "success" || status === "error"
          ? message
          : comingSoon
            ? "Sign-up shortly"
            : "No spam. Unsubscribe anytime."}
      </p>
    </div>
  );
}
