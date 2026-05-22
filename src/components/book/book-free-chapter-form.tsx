"use client";

import { useState, type FormEvent } from "react";
import posthog from "posthog-js";

type SubmitState = "idle" | "loading" | "success" | "error";

export function BookFreeChapterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setMessage("");

    try {
      const res = await fetch("/api/book/free-chapter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => null)) as {
        error?: string;
        pending?: boolean;
        alreadyExists?: boolean;
      } | null;

      if (!res.ok) {
        setState("error");
        setMessage(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setState("success");
      setMessage(
        data?.pending
          ? "Almost there — confirm your email and we'll send Chapter 1 and the checklist."
          : data?.alreadyExists
            ? "You're already on the list — check your inbox for Chapter 1 and the checklist."
            : "You're in — check your inbox for Chapter 1 and the checklist.",
      );

      if (posthog.__loaded) {
        posthog.capture("chapter_download_signup", {
          pending: Boolean(data?.pending),
          already_exists: Boolean(data?.alreadyExists),
        });
      }
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  const disabled = state === "loading" || state === "success";

  return (
    <div>
      <form
        className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        onSubmit={onSubmit}
        aria-busy={state === "loading"}
      >
        <label className="sr-only" htmlFor="free-chapter-email">
          Email address
        </label>
        <input
          id="free-chapter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={disabled}
          className="h-12 flex-1 rounded border-0 px-4 font-sans text-[15px] text-charcoal outline-none disabled:opacity-70"
          style={{ background: "var(--tqa-paper)" }}
        />
        <button
          type="submit"
          disabled={disabled}
          className="h-12 rounded px-6 font-sans text-[15px] font-bold disabled:cursor-not-allowed disabled:opacity-70"
          style={{ background: "var(--tqa-ember)", color: "var(--tqa-paper)" }}
        >
          {state === "loading" ? "Sending…" : state === "success" ? "Sent ✓" : "Download Now →"}
        </button>
      </form>
      {message ? (
        <p
          role={state === "error" ? "alert" : "status"}
          className={`mt-4 max-w-xl font-reading text-[15px] leading-relaxed ${
            state === "error" ? "text-ember-deep" : "text-charcoal"
          }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
