"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { PlaybookSummary } from "@/lib/playbooks/types";
import { getStoredPlaybookEmail } from "@/lib/playbooks/access-storage";
import { PlaybookAccessModal } from "@/components/playbooks/playbook-access-modal";

export function PlaybooksGridInteractive({ playbooks }: { playbooks: readonly PlaybookSummary[] }) {
  const router = useRouter();
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);

  const pendingPlaybook = playbooks.find((p) => p.slug === pendingSlug) ?? null;

  async function requestAccess(slug: string) {
    const storedEmail = getStoredPlaybookEmail();
    if (!storedEmail) {
      setPendingSlug(slug);
      setModalOpen(true);
      return;
    }

    setLoadingSlug(slug);
    try {
      const res = await fetch("/api/playbooks/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: storedEmail,
          slug,
          firstBrowserAccess: false,
        }),
      });
      const data = (await res.json().catch(() => null)) as { redirectUrl?: string; error?: string } | null;
      if (!res.ok || !data?.redirectUrl) {
        setPendingSlug(slug);
        setModalOpen(true);
        return;
      }
      router.push(data.redirectUrl);
    } finally {
      setLoadingSlug(null);
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {playbooks.map((book) => (
          <button
            key={book.slug}
            type="button"
            onClick={() => requestAccess(book.slug)}
            disabled={loadingSlug === book.slug}
            className="flex min-h-[260px] flex-col rounded-lg bg-paper p-7 text-left ring-1 ring-charcoal/10 transition-shadow hover:shadow-md disabled:opacity-70"
          >
            <div className="flex-1">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">{book.tag}</p>
              <p className="mt-3 text-2xl leading-none" aria-hidden>
                {book.emoji}
              </p>
              <h3 className="font-display mt-3 text-[22px] font-semibold leading-tight tracking-tight text-charcoal">
                {book.shortTitle}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-warm-700">{book.description}</p>
            </div>
            <p className="mt-6 font-sans text-xs font-bold uppercase tracking-[0.14em] text-ember">
              {loadingSlug === book.slug ? "Opening…" : "Free"}{" "}
              <span aria-hidden>{loadingSlug === book.slug ? "" : "→"}</span>
            </p>
          </button>
        ))}
      </div>

      {pendingPlaybook ? (
        <PlaybookAccessModal
          open={modalOpen}
          slug={pendingPlaybook.slug}
          title={pendingPlaybook.shortTitle}
          onClose={() => {
            setModalOpen(false);
            setPendingSlug(null);
          }}
          onSuccess={(redirectUrl) => {
            setModalOpen(false);
            setPendingSlug(null);
            router.push(redirectUrl);
          }}
        />
      ) : null}
    </>
  );
}
