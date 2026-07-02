// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import { DISCOVERY_CALL_URL } from "@/lib/site-data";
import { Container, Eyebrow, Button, SectionLabel } from "./primitives";
import { SchoolCourseGrid } from "./school-course-card";
import { ProfileAvatar } from "./profile-avatar";
import { NewsletterSignup } from "@/components/revamp/newsletter-signup";
import { ComingSoonPill } from "@/components/revamp/coming-soon-pill";
import { PlaybooksSection } from "@/components/playbooks/playbooks-section";
import { SITE_FEATURES } from "@/lib/site-features";
import { SOCIAL_LINK_ITEMS, SOCIAL_LINKS } from "@/lib/social-links";

/* Latest writing, Start here, School, Playbooks, Newsletter, Tim Elsewhere, Footer, Sticky Toni */

function LatestWriting() {
  const posts = [
    { tag: "Meetings",      title: "The five-minute pre-meeting that saves your career", read: "4 min read", date: "Apr 22" },
    { tag: "Saying no",     title: "How to say no to your boss without saying the word",  read: "6 min read", date: "Apr 15" },
    { tag: "Self-promotion",title: "A quiet guide to self-promotion that doesn&rsquo;t feel ick", read: "8 min read", date: "Apr 08" },
  ];
  return (
    <section style={{ padding: "112px 0" }}>
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <SectionLabel number={6} label="Latest writing" />
            <h2 className="font-display"
                style={{ fontSize: "clamp(34px, 4vw, 52px)", lineHeight: 1.0, letterSpacing: "-0.02em", fontWeight: 600, color: "var(--tqa-charcoal)", marginTop: "16px" }}>
              From the newsletter.
            </h2>
          </div>
          <a href="#newsletter" className="font-sans font-semibold text-[14px] inline-flex items-center gap-2"
             style={{ color: "var(--tqa-ember)", textDecoration: "underline", textUnderlineOffset: "5px" }}>
            All essays &rarr;
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <a key={i} href="#post" className="block group" style={{ textDecoration: "none" }}>
              <div style={{ borderTop: "1.5px solid var(--tqa-charcoal)", paddingTop: "16px" }}>
                <div className="flex items-center gap-3 font-mono" style={{ fontSize: "11px", letterSpacing: "0.16em", color: "var(--neutral-500)", textTransform: "uppercase" }}>
                  <span style={{ color: "var(--tqa-ember)", fontWeight: 700 }}>{p.tag}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <div className="font-display" style={{ fontSize: "26px", lineHeight: 1.1, letterSpacing: "-0.018em", fontWeight: 600, color: "var(--tqa-charcoal)", marginTop: "16px", minHeight: "120px" }}
                     dangerouslySetInnerHTML={{ __html: p.title }} />
                <div className="font-sans" style={{ fontSize: "13px", color: "var(--neutral-500)", marginTop: "20px" }}>
                  {p.read}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StartHere() {
  const tiles = [
    { icon: "🎙️", label: "Podcast", note: "Episodes for your listening pleasure", cta: "Listen", href: "/free-resources#podcast" },
    {
      icon: "📋",
      label: "Playbooks",
      note: "Tiny how-to guides for specific situations. One topic. All action. Free.",
      cta: SITE_FEATURES.playbooksComingSoon ? "Coming soon" : "Read",
      href: "#playbooks",
      comingSoon: SITE_FEATURES.playbooksComingSoon,
    },
  ];
  return (
    <section style={{ padding: "96px 0", background: "var(--tqa-paper-soft)" }}>
      <Container>
        <div className="text-center" style={{ maxWidth: "640px", margin: "0 auto 56px" }}>
          <h2 className="font-display"
              style={{ fontSize: "clamp(36px, 4.4vw, 56px)", lineHeight: 1.0, letterSpacing: "-0.022em", fontWeight: 600, color: "var(--tqa-charcoal)", marginTop: "16px" }}>
            Learn for free
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tiles.map((t, i) => (
            <a
              key={i}
              href={"href" in t && t.href ? t.href : "#start"}
              className="block"
              style={{
              pointerEvents: "comingSoon" in t && t.comingSoon ? "none" : "auto",
              opacity: "comingSoon" in t && t.comingSoon ? 0.92 : 1,
              background: "var(--tqa-paper)",
              border: "1px solid rgba(30,30,30,0.10)",
              borderRadius: "8px",
              padding: "28px 24px",
              textDecoration: "none",
              minHeight: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div style={{ fontSize: "32px", lineHeight: 1, marginBottom: "16px" }}>{t.icon}</div>
                  {"comingSoon" in t && t.comingSoon ? <ComingSoonPill /> : null}
                </div>
                <div className="font-display" style={{ fontSize: "22px", lineHeight: 1.15, letterSpacing: "-0.018em", fontWeight: 600, color: "var(--tqa-charcoal)" }}
                     dangerouslySetInnerHTML={{ __html: t.label }} />
                <div className="font-sans" style={{ fontSize: "14px", color: "var(--neutral-700)", marginTop: "10px", lineHeight: 1.5 }}>{t.note}</div>
              </div>
              <div
                className="font-sans inline-flex items-center gap-2"
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "comingSoon" in t && t.comingSoon ? "var(--neutral-500)" : "var(--tqa-ember)",
                  marginTop: "20px",
                }}
              >
                {t.cta} {"comingSoon" in t && t.comingSoon ? null : <span aria-hidden>→</span>}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SchoolBlock() {
  return (
    <section id="school" className="scroll-mt-28" style={{ padding: "112px 0" }}>
      <Container>
        <div className="mb-10">
          <div>
            <h2 className="font-display"
                style={{ fontSize: "clamp(36px, 4.4vw, 56px)", lineHeight: 1.0, letterSpacing: "-0.022em", fontWeight: 600, color: "var(--tqa-charcoal)", marginTop: "16px", textWrap: "balance" }}>
              Quiet Leadership School
            </h2>
            <p className="font-sans" style={{ fontSize: "16px", color: "var(--neutral-700)", marginTop: "16px", maxWidth: "none", lineHeight: 1.6 }}>
              The School&rsquo;s courses offer a structured, step-by-step guide on how to practise all the
              tiny habits from the book, and more. Binge watch all the videos or skip around and watch
              a video you want to practise right now.
            </p>
          </div>
        </div>
        <SchoolCourseGrid />
        <div className="mt-8 text-center">
          <a
            href="/coaching#what-you-get-with-coaching"
            className="font-sans inline-flex items-center gap-2 font-semibold"
            style={{ fontSize: "14px", color: "var(--tqa-ember)", textDecoration: "underline", textUnderlineOffset: "5px" }}
          >
            included with 1:1 Coaching <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

function PlaybooksBand() {
  return <PlaybooksSection />;
}

function NewsletterBand() {
  return (
    <section id="newsletter" className="scroll-mt-28" style={{ padding: "120px 0", background: "var(--tqa-ember)", color: "var(--tqa-paper)" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--tqa-sunrise)", fontWeight: 700 }}>
              Newsletter
            </div>
            <h2 className="font-display" style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 0.98,
              letterSpacing: "-0.022em",
              fontWeight: 600,
              color: "var(--tqa-paper)",
              marginTop: "14px",
              textWrap: "balance",
            }}>
              Tiny habits in your inbox.
            </h2>
            <p className="font-reading" style={{ fontSize: "18px", lineHeight: 1.55, color: "rgba(245,240,211,0.88)", marginTop: "18px", maxWidth: "52ch" }}>
              One short, useful email a week.
            </p>
          </div>
          <div className="lg:col-span-5">
            <NewsletterSignup onDark />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ElsewhereStrip() {
  return (
    <section style={{ padding: "80px 0", background: "var(--tqa-paper)" }}>
      <Container>
        <div className="font-mono uppercase mb-6" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--neutral-500)" }}>
          Follow Tim on
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {SOCIAL_LINK_ITEMS.map((it) => (
            <a
              key={it.platform}
              href={SOCIAL_LINKS[it.platform]}
              target="_blank"
              rel="noopener noreferrer"
              style={{
              display: "block",
              borderTop: "1.5px solid var(--tqa-charcoal)",
              padding: "20px 0",
              textDecoration: "none",
              color: "var(--tqa-charcoal)",
            }}>
              <div className="font-display" style={{ fontSize: "26px", letterSpacing: "-0.018em", fontWeight: 600 }}>
                {it.label}
                <span style={{ fontSize: "0.7em", color: "var(--tqa-ember)", marginLeft: "6px" }}>→</span>
              </div>
              <div className="font-sans" style={{ fontSize: "13px", color: "var(--neutral-500)", marginTop: "6px" }}>
                {it.note}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SchoolQuotes() {
  const quotes = [
    {
      quote:
        "The Leadership for Introverts course provided me with easy-to-apply tools to boost my confidence and increase my visibility in my org. The bite-sized video format fit perfectly into my hectic schedule.",
      name: "Patricia Avila",
      role: "Senior Director Product Design, Artera, USA",
    },
    {
      quote:
        "Watching Tim on video is like listening to a supportive, knowledgeable, empathetic friend. Tim gave me incredible advice and methods I could use in real-life scenarios. I highly recommend.",
      name: "Leonardo Mattei",
      role: "Senior Product Designer, Apple, UK",
    },
    {
      quote:
        "The course’s impact has been nothing short of transformative, especially for an executive like myself. His expertise and clear communication style made the learning experience concise yet comprehensive, focusing on practical skills and a mindset shift tailored for introverts.",
      name: "Claire Erickson",
      role: "VP, Product & Tech Strategy & Operations, Blackhawk Network, USA",
    },
  ];
  return (
    <section style={{ padding: "80px 0", background: "var(--tqa-paper-soft)" }}>
      <Container>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {quotes.map((item) => (
            <figure key={item.name} className="rounded-lg bg-paper p-6 ring-1 ring-charcoal/10">
              <blockquote className="font-reading text-[16px] leading-relaxed text-charcoal italic">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 font-sans text-sm text-warm-700">
                <ProfileAvatar name={item.name} size={56} />
                <div>
                  <strong className="text-charcoal">{item.name}</strong>
                  <br />
                  {item.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

const FOOTER_LINKS: Record<string, string> = {
  Coaching: "/coaching",
  School: "/#school",
  Speaking: "/speaking",
  Book: "/book",
  "30 Habits in 30 Days": "/30-habits-in-30-days",
  "Free Resources": "/free-resources",
  Podcast: "/free-resources#podcast",
  Playbooks: "/playbooks",
  About: "/about",
  "Prompt My Notch": "https://www.promptmynotch.com/",
};

const FOOTER_LINK_TEXT_STYLE = {
  color: "rgba(245,240,211,0.78)",
  fontSize: "14px",
} as const;

function FooterLinkItem({ label }: { label: string }) {
  const href = FOOTER_LINKS[label];
  if (!href) {
    return (
      <span className="font-sans" style={FOOTER_LINK_TEXT_STYLE}>
        {label}
      </span>
    );
  }
  return (
    <a
      href={href}
      className="font-sans"
      style={{ ...FOOTER_LINK_TEXT_STYLE, textDecoration: "none" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--tqa-paper)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = FOOTER_LINK_TEXT_STYLE.color)}
    >
      {label}
    </a>
  );
}

function FooterRev({
  cta,
  ctaAsButton = false,
  showDiscoveryCta = true,
}: {
  cta?: { label: string; href: string };
  /** Render `cta` as the ember button (homepage Work with me) instead of a text link */
  ctaAsButton?: boolean;
  showDiscoveryCta?: boolean;
} = {}) {
  const cols = [
    { h: "Work with me", links: ["Coaching", "School", "Speaking"] },
    { h: "Read & listen", links: ["Book", "30 Habits in 30 Days", "Free Resources"] },
    { h: "Apps", links: ["Prompt My Notch"] },
    { h: "About", links: ["About", "Terms", "Privacy"] },
  ];
  return (
    <footer style={{ background: "var(--tqa-ink-deep)", color: "var(--tqa-paper)", padding: "72px 0 48px" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-display" style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "-0.018em", color: "var(--tqa-paper)" }}>
              Tim Yeo
            </div>
            <div className="font-display italic" style={{ fontSize: "16px", color: "var(--tqa-sunrise)", marginTop: "4px" }}>
              Career Coach
            </div>
            <p className="font-sans" style={{ fontSize: "14px", color: "rgba(245,240,211,0.7)", marginTop: "20px", lineHeight: 1.6, maxWidth: "36ch" }}>
              Life is too short to be living someone else&rsquo;s version of success. Stop pretending. Start practicing.
              <br />
              Remain your true authentic self.
            </p>
            {cta ? (
              <div className="mt-8">
                <a
                  href={cta.href}
                  className={`font-sans inline-flex items-center ${ctaAsButton ? "gap-2" : "gap-1.5 text-[15px] font-semibold"}`}
                  style={
                    ctaAsButton
                      ? {
                          background: "var(--tqa-ember)",
                          color: "var(--tqa-paper)",
                          padding: "12px 18px",
                          borderRadius: "4px",
                          fontSize: "14px",
                          fontWeight: 700,
                          textDecoration: "none",
                        }
                      : {
                          color: "var(--tqa-sunrise)",
                          textDecoration: "underline",
                          textUnderlineOffset: "4px",
                        }
                  }
                >
                  {cta.label} <span aria-hidden>→</span>
                </a>
              </div>
            ) : showDiscoveryCta ? (
              <div className="mt-8">
                <a
                  href={DISCOVERY_CALL_URL}
                  className="font-sans inline-flex items-center gap-2"
                  style={{
                    background: "var(--tqa-ember)",
                    color: "var(--tqa-paper)",
                    padding: "12px 18px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Book a discovery call <span aria-hidden>→</span>
                </a>
              </div>
            ) : null}
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 lg:col-span-8">
            {cols.map((c) => (
              <div key={c.h}>
                <div className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--tqa-sunrise)", fontWeight: 700, marginBottom: "16px" }}>
                  {c.h}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {c.links.map((l) => (
                    <li key={l}>
                      <FooterLinkItem label={l} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-16 pt-8" style={{ borderTop: "1px solid rgba(245,240,211,0.12)" }}>
          <div className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "rgba(245,240,211,0.55)" }}>
            © 2026 The Quiet Achiever
          </div>
          <div className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "rgba(245,240,211,0.55)" }}>
            Built quietly.
          </div>
        </div>
      </Container>
    </footer>
  );
}

function ToniBubble() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "fixed", right: "20px", bottom: "20px", zIndex: 60 }}>
      {open && (
        <div style={{
          width: "320px",
          background: "var(--tqa-paper)",
          border: "1px solid rgba(30,30,30,0.12)",
          borderRadius: "12px",
          padding: "18px",
          boxShadow: "0 24px 48px -12px rgba(30,30,30,0.30)",
          marginBottom: "12px",
        }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div style={{ width: "26px", height: "26px", borderRadius: "999px", background: "var(--tqa-sunrise)", color: "var(--tqa-ink)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px" }}>T</div>
              <div className="font-sans" style={{ fontSize: "13px", fontWeight: 700, color: "var(--tqa-charcoal)" }}>Toni — AI coach</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" style={{ background: "transparent", border: "none", color: "var(--neutral-500)", cursor: "pointer", fontSize: "18px", lineHeight: 1 }}>×</button>
          </div>
          <div className="font-reading" style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--tqa-charcoal)", padding: "10px 12px", background: "var(--white)", border: "1px solid rgba(30,30,30,0.06)", borderRadius: "10px" }}>
            Hi — what&rsquo;s on your mind? Ask me about a meeting, a piece of feedback, or any tiny habit from Tim&rsquo;s book.
          </div>
          <input
            type="text"
            placeholder="Ask Toni anything…"
            className="font-sans"
            style={{
              width: "100%",
              marginTop: "10px",
              border: "1px solid rgba(30,30,30,0.16)",
              borderRadius: "999px",
              padding: "10px 14px",
              fontSize: "13px",
              outline: "none",
            }}
          />
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="font-sans" style={{
        background: "var(--tqa-ink)",
        color: "var(--tqa-paper)",
        border: "none",
        padding: "14px 18px",
        borderRadius: "999px",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        boxShadow: "0 12px 28px -8px rgba(30,30,30,0.40)",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
      }}>
        <span style={{ width: "20px", height: "20px", borderRadius: "999px", background: "var(--tqa-sunrise)", color: "var(--tqa-ink)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "11px" }}>T</span>
        {open ? "Toni is here" : "Open Toni"}
      </button>
    </div>
  );
}



export { LatestWriting, StartHere, SchoolBlock, SchoolQuotes, PlaybooksBand, NewsletterBand, ElsewhereStrip, FooterRev, ToniBubble };
