"use client";

import { Fragment, useState, type FormEvent } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import posthog from "posthog-js";
import { getStoredPlaybookEmail, setStoredPlaybookEmail } from "@/lib/playbooks/access-storage";

type SubmitState = "idle" | "loading" | "error";

export function PlaybookAccessModal({
  open,
  slug,
  title,
  onClose,
  onSuccess,
}: {
  open: boolean;
  slug: string;
  title: string;
  onClose: () => void;
  onSuccess: (redirectUrl: string) => void;
}) {
  const [email, setEmail] = useState(() => getStoredPlaybookEmail() ?? "");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setMessage("");

    const firstBrowserAccess = !getStoredPlaybookEmail();

    try {
      const res = await fetch("/api/playbooks/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, slug, firstBrowserAccess }),
      });
      const data = (await res.json().catch(() => null)) as {
        error?: string;
        redirectUrl?: string;
      } | null;

      if (!res.ok || !data?.redirectUrl) {
        setState("error");
        setMessage(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStoredPlaybookEmail(email);

      if (posthog.__loaded) {
        posthog.capture("playbook_access_granted", {
          slug,
          first_browser_access: firstBrowserAccess,
        });
      }

      onSuccess(data.redirectUrl);
    } catch {
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <Transition show={open} as={Fragment}>
      <Dialog className="relative z-[200]" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-ink-deep/55" aria-hidden />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="w-full max-w-md rounded-lg bg-paper p-8 ring-1 ring-charcoal/15">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">Free playbook</p>
              <h2 className="font-display mt-3 text-2xl font-semibold text-charcoal">{title}</h2>
              <p className="font-reading mt-3 text-[16px] leading-relaxed text-warm-700">
                Enter your email and we&rsquo;ll send you the link. You&rsquo;ll open this playbook right away.
              </p>

              <form className="mt-6 space-y-3" onSubmit={onSubmit} aria-busy={state === "loading"}>
                <label className="sr-only" htmlFor="playbook-access-email">
                  Email address
                </label>
                <input
                  id="playbook-access-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={state === "loading"}
                  className="h-12 w-full rounded border border-charcoal/15 px-4 font-sans text-[15px] text-charcoal outline-none ring-ember/30 focus:ring-2 disabled:opacity-70"
                />
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="h-12 w-full rounded font-sans text-[15px] font-bold disabled:cursor-not-allowed disabled:opacity-70"
                  style={{ background: "var(--tqa-ember)", color: "var(--tqa-paper)" }}
                >
                  {state === "loading" ? "Sending…" : "Send me the playbook →"}
                </button>
              </form>

              {message ? (
                <p role="alert" className="mt-4 font-reading text-[15px] leading-relaxed text-ember-deep">
                  {message}
                </p>
              ) : null}

              <button
                type="button"
                onClick={onClose}
                className="mt-6 font-sans text-sm font-semibold text-warm-600 underline underline-offset-4"
              >
                Cancel
              </button>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
