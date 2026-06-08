"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container } from "@/components/revamp/primitives";
import { ComingSoonPill } from "@/components/revamp/coming-soon-pill";
import { Navigation } from "@/components/revamp/navigation";
import { FooterRev } from "@/components/revamp/sections-3";
import { getStoredPlaybookEmail } from "@/lib/playbooks/access-storage";
import { PlaybookAccessModal } from "@/components/playbooks/playbook-access-modal";
import { SITE_FEATURES } from "@/lib/site-features";

function PlaybookComingSoon({ title }: { title: string }) {
  return (
    <div className="min-h-full bg-paper">
      <Navigation />
      <main className="py-20">
        <Container>
          <ComingSoonPill className="mb-4" />
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">Free playbook</p>
          <h1 className="font-display mt-4 text-3xl font-semibold text-charcoal">{title}</h1>
          <p className="font-reading mt-4 max-w-xl text-[17px] leading-relaxed text-warm-700">
            This playbook is coming soon. Browse what&rsquo;s on the way on the free resources page.
          </p>
          <Link
            href="/free-resources#playbooks"
            className="mt-8 inline-flex font-sans text-sm font-semibold text-ember underline underline-offset-4"
          >
            Back to playbooks →
          </Link>
        </Container>
      </main>
      <FooterRev showDiscoveryCta={false} />
    </div>
  );
}

function PlaybookAccessGateInner({
  slug,
  title,
  children,
}: {
  slug: string;
  title: string;
  children: ReactNode;
}) {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const email = getStoredPlaybookEmail();
    if (!email) {
      setModalOpen(true);
      setReady(true);
      return;
    }

    void (async () => {
      try {
        await fetch("/api/playbooks/access", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, slug, firstBrowserAccess: false }),
        });
      } catch {
        // Still allow reading if CRM sync fails
      }
      setAllowed(true);
      setReady(true);
    })();
  }, [slug]);

  if (!ready) {
    return (
      <div className="min-h-full bg-paper">
        <Navigation />
        <main className="py-24">
          <Container>
            <p className="font-reading text-warm-600">Loading playbook…</p>
          </Container>
        </main>
      </div>
    );
  }

  if (!allowed) {
    return (
      <div className="min-h-full bg-paper">
        <Navigation />
        <main className="py-20">
          <Container>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ember">Free playbook</p>
            <h1 className="font-display mt-4 text-3xl font-semibold text-charcoal">{title}</h1>
            <p className="font-reading mt-4 max-w-xl text-[17px] leading-relaxed text-warm-700">
              Enter your email to read this playbook. We&rsquo;ll send you the link too.
            </p>
          </Container>
        </main>
        <PlaybookAccessModal
          open={modalOpen}
          slug={slug}
          title={title}
          onClose={() => router.push("/playbooks")}
          onSuccess={() => {
            setAllowed(true);
            setModalOpen(false);
          }}
        />
        <FooterRev showDiscoveryCta={false} />
      </div>
    );
  }

  return <>{children}</>;
}

export function PlaybookAccessGate({
  slug,
  title,
  children,
}: {
  slug: string;
  title: string;
  children: ReactNode;
}) {
  if (SITE_FEATURES.playbooksComingSoon) {
    return <PlaybookComingSoon title={title} />;
  }

  return (
    <PlaybookAccessGateInner slug={slug} title={title}>
      {children}
    </PlaybookAccessGateInner>
  );
}
