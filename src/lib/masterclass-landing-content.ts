/**
 * /masterclass landing copy — Jo brief (18 Oct 2026).
 * Keep [TIM TO CONFIRM: …] placeholders verbatim; render highlighted on the page.
 */

/**
 * Monthly hero colour rotation.
 * - Option 1: Ember deep (toaster) — active Oct 2026 (was A/B “1C”: 30% bottom crop)
 * - Option 2: Sunrise · ink type — alternate months
 * - Option 3: Ink deep · paper type — alternate months
 * Flip `activeHeroOption` next month; keep crop at 30% for all.
 */
export type MasterclassHeroOptionId = 1 | 2 | 3;

export const MASTERCLASS_HERO_CROP_BOTTOM_PCT = 30;

export const MASTERCLASS_HERO_OPTIONS = {
  1: {
    id: 1 as const,
    name: "Ember deep",
    background: "var(--tqa-ember-deep)",
    heading: "var(--tqa-paper)",
    body: "rgba(245,240,211,0.90)",
    eyebrow: "var(--tqa-sunrise)",
    ctaVariant: "cream" as const,
    h1Size: "clamp(38px, 5.4vw, 66px)",
  },
  2: {
    id: 2 as const,
    name: "Sunrise · ink type",
    background: "var(--tqa-sunrise)",
    heading: "var(--tqa-ink)",
    body: "rgba(43,43,82,0.88)",
    eyebrow: "var(--tqa-ember-deep)",
    ctaVariant: "ink" as const,
    h1Size: "clamp(40px, 5.8vw, 70px)",
  },
  3: {
    id: 3 as const,
    name: "Ink deep · paper type",
    background: "var(--tqa-ink-deep)",
    heading: "var(--tqa-paper)",
    body: "rgba(245,240,211,0.88)",
    eyebrow: "var(--tqa-sunrise)",
    ctaVariant: "cream" as const,
    h1Size: "clamp(36px, 5.2vw, 64px)",
  },
} as const;

/** October 2026 — option 1 (ember deep / former 1C crop). */
export const activeHeroOption: MasterclassHeroOptionId = 1;

export const MASTERCLASS_LANDING = {
  meta: {
    title: "Free Masterclass: Overlooked to $300k Principal & Leadership Roles | Tim Yeo",
    description:
      "Free live masterclass, Thu 29 Oct 2026. Why final rounds go to the lowest-risk hire, not the best candidate, and how senior tech pros land $250k–$350k roles.",
  },

  topBar: {
    label: "Watch the masterclass replay · Watch the replay →",
    href: "#watch-replay",
  },

  stickyCta: {
    label: "Watch the replay",
    href: "#watch-replay",
  },

  hero: {
    eyebrow: "Free masterclass replay",
    h1: "Overlooked to $300k Principal & Leadership Roles",
    sub1:
      "If someone else keeps landing your dream job, it's not your technical skills. It's how senior hiring decisions get made.",
    pov: "Final rounds don't go to the best candidate. They go to the lowest-risk hire.",
    sub2:
      "I'll show you the 4 rules that landed me Head of Design at three $700M fintech startups. My clients now use them to land $250k–$350k Principal, Staff and Leadership roles.",
    dateLine: "Next masterclass: TBC",
    timezoneLink: "See it in your time zone →",
    cta: "Watch the replay →",
    micro: "Free. Enter your email to watch.",
    proof:
      "3x Head of Design at $700M fintech startups · 20+ years in tech · Coached [TIM TO CONFIRM: 1,000+] people through job offers and salary negotiations",
  },

  register: {
    sectionId: "register",
    headline: "Register and get an invite in your calendar",
    sub: "",
    sessions: [
      {
        title: "Session 1 · US, Asia, AU friendly time",
        lines: [
          "29 Oct (Thu) · Sydney 10:00am | Singapore 7:00am",
          "28 Oct (Wed) · New York (ET) 7:00pm | Los Angeles (PT) 4:00pm | London 11:00pm",
        ],
        cta: "Save my seat →",
        href: "https://luma.com/fzslx2w9",
      },
      {
        title: "Session 2 · UK, Europe, Asia, AU friendly time",
        lines: [
          "29 Oct (Thu) · Sydney 7:00pm | Singapore 4:00pm | London 8:00am | Berlin/Paris (CET) 9:00am",
        ],
        cta: "Save my seat →",
        href: "https://luma.com/64m0y3ed",
      },
    ],
  },

  logosHeading: "Trusted by tech professionals at:",

  agenda: {
    title: "What you'll get in 60 minutes",
    items: [
      {
        lead: "Why you keep making the final round but never getting the offer.",
        body: "Hint: it's not because of your technical skills.",
      },
      {
        lead: "The portfolio trap that keeps you stuck.",
        body: "Why being brilliant at your craft is exactly why you are overlooked.",
      },
      {
        lead: "How people are landing your dream job without even applying.",
        body: "I'll share the secret nobody tells you.",
      },
      {
        lead: "The 4-word question that lands multiple offers.",
        body: "How to master your answer and show up as your best self every time.",
      },
    ],
  },

  whoFor: {
    title: "This is for you if you're…",
    items: [
      'Doing the work of three people, but never quite "leadership material"',
      "Hardest worker on your team, but someone else always lands your dream job",
      "First to get the grunt work but last to get the pay rise",
      "Smartest person in the room, but the last person to be asked/heard",
      "Watching people who are louder (not better) get the role you deserve",
    ],
  },

  results: {
    title: "What changed for the tech professionals I work with",
    cards: [
      {
        headline: "$200K Staff role: +$40K + equity in 5 weeks",
        subline: "Senior → Staff Product Designer. 2 applications, 1 offer, 1 counter-offer.",
        image: {
          src: "/masterclass/results/200k-equity-staff.webp",
          fallbackSrc: "/masterclass/results/200k-equity-staff.jpeg",
          alt: "Client text: 200k + Staff title + equity. Start next month.",
        },
        cardText: null,
      },
      {
        headline: "Headhunted: +$33K + equity",
        subline:
          "Senior Designer stuck in a toxic workplace with a micromanaging boss → Founding Designer.",
        image: {
          src: "/masterclass/results/toxic-founding-designer.webp",
          fallbackSrc: "/masterclass/results/toxic-founding-designer.jpeg",
          alt: "Client text: They returned signed contract!",
        },
        cardText: null,
      },
      {
        headline: "Leadership role in 11 weeks, after nearly 20 years stuck at Senior",
        subline: "Product Design Lead on the Growth team",
        image: {
          src: "/masterclass/results/20-years-stuck-as-senior.webp",
          fallbackSrc: "/masterclass/results/20-years-stuck-as-senior.jpeg",
          alt: "Client WhatsApp: The TA said I'm the strongest fit",
        },
        cardText: null,
      },
      {
        headline: "+$20K in 9 weeks, after being made redundant on maternity leave",
        subline: "4 months redundancy, landed their role after 2 months",
        image: null,
        cardText: "5 opportunities, 2 offers, peace of mind with their newborn child",
      },
      {
        headline: "VP → next Exec role",
        subline: "+$50K + equity in 4 months",
        image: null,
        cardText: "Accessing the hidden job market, focused on interview craft",
      },
    ],
  },

  host: {
    eyebrow: "HOSTED BY TIM YEO",
    title: "Meet Tim",
    /** Hero — Option 1: smile teeth · ember deep. */
    heroImageSrc: "/assets/masterclass-alt-smile-teeth.webp",
    heroImageFallbackSrc: "/assets/masterclass-alt-smile-teeth.png",
    /** Meet Tim — Option 3: closed mouth straight · sunrise. */
    imageSrc: "/assets/masterclass-alt-closed-mouth.webp",
    imageFallbackSrc: "/assets/masterclass-alt-closed-mouth.png",
    imageAlt: "Tim Yeo, career coach",
    paragraphs: [
      {
        bold: "Over 20+ years",
        rest: ", I've worked as a designer and a leader in tech. Companies dominated by big personalities, strong opinions and loud voices.",
      },
      {
        bold: '"My work should speak for itself."',
        rest: " For years, that was my entire career strategy. Keep my head down. Work hard. Do great work. Wait for my bosses to notice how great I am. This strategy kept me stuck under $140K for nearly a decade. All this time, I thought I was just not good enough.",
      },
      {
        bold: "At my lowest point",
        rest: ", I was laid off & had 28 days to find another job, or leave Australia.",
      },
      {
        bold: "The turnaround came when",
        rest: " I realised being brilliant at my technical skills was exactly what kept me stuck. To become a principal and leader, I needed to learn the rules of the game. I landed a Head of UX role with 8 days to spare. And I succeeded without playing politics or pretending to be someone I was not.",
      },
      {
        bold: "Today, I've been 3x Head of Design at $700M startups",
        rest: ", written an Amazon #1 book, The Quiet Achiever, been a keynote speaker at conferences, and coached 1,000+ people.",
      },
      {
        bold: "In this masterclass",
        rest: ", I'll show you exactly what I changed, and how my clients now land $300k Principal and leadership roles.",
      },
    ],
  },

  costOfInaction: {
    title: "The cost of staying overlooked isn't $0",
    intro: "If nothing changes, you already know what the next 12 months look like:",
    bullets: [
      'Another performance review that says "meets expectations."',
      "Another final round interview where someone else gets the offer.",
      "Another year on the same salary while your bills keep going up",
    ],
    after: [
      "One of my clients went from Senior to Staff in 5 weeks: $200K (+$40K) + equity.",
      "This masterclass is free. The worst-case scenario is that you walk away knowing exactly why you've been overlooked, with some practical tips on how to land your next role on your own.",
    ],
  },

  faqs: [
    {
      q: "How is this different from other career advice?",
      a: "My advice comes from a successful 20yrs+ career in tech. I've been on both sides of the interview table. I've seen first hand how hiring decisions get made. I've lived it. The coaching I do is practical, actionable and gets the results you need.",
    },
    {
      q: "Am I senior enough for this?",
      a: "This is designed for people who are ambitious, brilliant at their craft and want to level up in their career but don't know how. If that's you, join us.",
    },
    {
      q: "Is this only for Asian men in tech?",
      a: "No. I coach women and non-Asians too. If you're brilliant at your craft and keep getting overlooked, join us.",
    },
    {
      q: "Will there be a pitch?",
      a: "Yes. At the end, I'll share how you can work with me in my $300k Career Accelerator. If I can help you, I'll say Yes. If I can't help you, I'll say No.",
    },
    {
      q: "I've been burned by career coaches before.",
      a: "I get it. That's why my coaching comes with a 100% work-for-free guarantee. I'll explain exactly how it works on the call.",
    },
    {
      q: "How long is it?",
      a: "60 minutes, including live Q&A.",
    },
  ],

  closing: {
    title: "Ready to land your $300k Principal or Leadership role?",
    copy1:
      "60 minutes. The rules nobody taught you about how senior hiring decisions get made. From someone who was laid off with 28 days to leave Australia, and then became 3x Head of Design at $700M startups.",
    copy2: "Tired of being overlooked for the job and salary you deserve?",
    cta: "Watch the replay →",
    micro: "Free. Enter your email to watch.",
  },

  disclaimer:
    "Client results are individual and not typical. They are not a guarantee of what you will achieve. Your results depend on your experience, your market, your effort and factors outside anyone's control. Testimonials are shared with permission.",
} as const;
