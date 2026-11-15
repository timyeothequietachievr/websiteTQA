/** Coaching page copy — primary: thequietachievr.com/coaching, secondary: Notion landing spec */

export const COACHING_HERO_SUBTITLE =
  "3x Head of Design at $700M startups. 20+ years in tech. Coached 1,000+ quiet achievers. 100% work-for-free guarantee.";

export const COACHING_STORY_TITLE =
  "Being a quiet Asian in a loud tech company that desires the extrovert ideal is hard";

export const DISCOVERY_CALL_TOPICS = [
  "What challenges you are facing",
  "What you have tried",
  "The outcomes that you want",
  "The help you need",
  "Where you want to be at the end of this engagement",
  "Any questions you have to make a decision; I'll answer.",
] as const;

export type CoachingDifferentSegment = { text: string; bold?: boolean };

export type CoachingDifferentParagraph = {
  segments: readonly CoachingDifferentSegment[];
};

export const COACHING_DIFFERENT = {
  title: "What makes Tim\u2019s coaching different?",
  paragraphs: [
    {
      segments: [
        {
          text: "Tim has been a designer and design leader for 20yrs+. His advice comes from personal lived experience and coaching over 1000+ designers.",
        },
      ],
    },
    {
      segments: [
        { text: "Our belief is that " },
        {
          text: "your identity is separate from the skills you need to achieve success",
          bold: true,
        },
        { text: "." },
      ],
    },
    {
      segments: [{ text: "The things you need to have impact at work are skills." }],
    },
    {
      segments: [
        { text: "Skills can be practised", bold: true },
        { text: ". With practise, skills improve." },
      ],
    },
    {
      segments: [
        { text: "Confidence grows", bold: true },
        { text: ". Impact and influence increases." },
      ],
    },
    {
      segments: [
        { text: "Who you are, your identity, " },
        { text: "shouldn\u2019t limit you", bold: true },
        { text: " (unless you let it)" },
      ],
    },
    {
      segments: [
        { text: "We establish a " },
        {
          text: "curriculum of practise specifically designed for introverts & quiet achievers",
          bold: true,
        },
      ],
    },
  ] satisfies readonly CoachingDifferentParagraph[],
} as const;

export const HELP_WITH = [
  {
    title: "Break through the bamboo ceiling",
    body: "The bamboo ceiling for Asians is like the glass ceiling for women. Some work cultures have a picture of what a leader looks like — and it doesn\u2019t look like us. I\u2019ll show you how to overcome this bias and reap the rewards of your hard work, while staying true to your authentic self.",
  },
  {
    title: "New quiet leader",
    body: "You are a leader or manager for the first time and not sure if you're doing it right. You are quiet by nature. You've been made a leader. You're feeling strong imposter syndrome. Every other leader around you is loud and has strong opinions. Your team is looking to you for answers, but you're unsure of what you are doing.",
  },
  {
    title: "Managing a quiet team",
    body: "The team you manage are so quiet. You wish they spoke up more and you don't know how to get the best out of them. You want the loud and the quiet on your team to just work better together.",
  },
  {
    title: "Leadership advisor",
    body: "You are a leader or manager. You are also an introvert and quiet by nature, and want an advisor who's walked a similar path before.",
  },
  {
    title: "Self promotion",
    body: "You do great work and have huge successes but wish you could be more visible and talk about your wins without feeling like you're bragging. You want to share your great work but talking about them feels dirty and ick. Meanwhile, others who do less and brag more get all the credit.",
  },
  {
    title: "Talk like a leader",
    body: "You have the technical skills and the great ideas but you're not confident in convincing others and public speaking. You want to influence your leaders and peers but don't know how to align competing interests.",
  },
  {
    title: "Thought leader",
    body: "You want to be a thought leader but nothing you are trying is working or you don't know where to start. A major presentation, public talk, event, or podcast is coming; you're nervous about speaking in front of a big group and being put on the spot.",
  },
  {
    title: "Interview preparation and rehearsal",
    body: "You have the skills and experience for the job you really want but somehow you never get picked. You want to move into a leadership role but they keep telling you \"you are not ready\" and you don't know what to do to level up.",
  },
  {
    title: "Get promoted",
    body: "You want to be promoted to a leadership role but your boss says \"you are not ready\", you feel stuck, and you don't know what to do to level up.",
  },
  {
    title: "Friction with strong opinions",
    body: "They talk louder, have strong points of view, and you don't know how to say no or handle their difficult conversations.",
  },
  {
    title: "Networking",
    body: "Meet new people, grow your network, make small talk, and introduce yourself with confidence without the icky feeling.",
  },
] as const;

export const HELP_WITH_CLOSING =
  "I have experienced every one of these in my career. I can show you how to overcome them.";

export const STEPS = [
  {
    n: "01",
    title: "Discovery call",
    meta: "45-min video call",
    body: "We talk about the challenges you're facing and where you'd like help. Coaching requires chemistry — this is for both of us to see if we want to work together.",
  },
  {
    n: "02",
    title: "Deep Dive",
    meta: "90-min session",
    body: "Goal Setting Workshop: you walk away with your coaching plan, a list of personal goals, and prioritised action items to achieve them.",
  },
  {
    n: "03",
    title: "Coaching plan",
    meta: "Usually fortnightly (or weekly if urgent)",
    body: "Sessions focus on feedback, troubleshooting, and your real challenges. Text support (txt) between sessions.",
  },
] as const;

export const TOPICS = [
  "Public speaking",
  "Self-promotion & visibility",
  "Introducing yourself",
  "Small talk",
  "Networking",
  "Meetings",
  "Facilitation",
  "Difficult conversations",
  "How to say no (politely)",
  "Interviews",
  "Management & leadership",
  "Executive communication",
  "Stakeholder influence",
] as const;

export const COACH_TRAITS = [
  {
    title: "I'm Asian living/working in a western culture",
    body: "I grew up in Singapore from Chinese heritage. I\u2019ve spent most of my career working in loud, extroverted tech startups in Australia; dominated by western cultures & beliefs, and no other leader looked like me.",
  },
  {
    title: "I'm an introverted leader",
    body: "I understand what it's like to be quiet by nature when your peers in the room are loud and extroverted.",
  },
  {
    title: "I'm not your boss",
    body: "Your boss has many priorities and you are simply one of them. As your coach, you are my only priority.",
  },
  {
    title: "Drawing from experience",
    body: "I've coached 1000+ quiet achievers worldwide. I also have 20+ years in tech, startups, and consulting — I've seen and heard a lot.",
  },
  {
    title: "Limiting beliefs and norms",
    body: "In your bubble, your way has been the only way you know. Where I see you do this, I'll point it out and we'll talk about it.",
  },
  {
    title: "Tough love",
    body: "I'm pretty direct, low B.S., and I will tell you the things you need to hear to level up — with kindness and good humour.",
  },
  {
    title: "Private and confidential",
    body: "Everything you tell me stays with me. You will never hear your name online; your boss and peers will never know.",
  },
] as const;

export const WHAT_YOU_GET_ITEMS = [
  {
    lead: "12 x 1:1 coaching sessions",
    body: "booked at your convenience. No fixed schedule, no group sessions; just 100% focus on you",
  },
  {
    lead: "Personalised coaching plan",
    body: "with prioritised goals and actions to help you focus. Clear steps on how to accomplish each of them.",
  },
  {
    lead: "Full access to the $300k Career Accelerator curriculum",
    body: "from Day 1",
  },
  {
    body: "Video recordings and transcripts of every session.",
  },
  {
    lead: "Ongoing support",
    body: "Unlimited text messages between sessions, rehearsal, async preparation and feedback, salary negotiation etc.",
  },
  {
    body: "Digital edition of The Quiet Achiever book (ePub, PDF, audiobook).",
  },
] as const;

/** After How it works — Jobbie intro (key points from /jobbie). */
export const COACHING_JOBBIE = {
  eyebrow: "Introducing Jobbie",
  title: "Never get ghosted again",
  lede: "Jobbie is your personal AI-powered talent recruiter for coaching clients. Roles found every day, checked by me, with a tailored CV and a warm way in — so you get past the ATS and into the room.",
  points: [
    {
      lead: "Roles found for you, every day.",
      body: "Jobbie trawls 150+ company career sites plus private design-leader Slack groups. Roles are scored against your profile for fit, then I hand-review every role against your brief. Only matching roles reach you.",
    },
    {
      lead: "Connect with hiring managers directly.",
      body: "Jobbie searches through the organisation and ranks likely hiring managers, peers and recruiters with their contact information. If Tim Yeo is connected, he can make a warm introduction.",
    },
    {
      lead: "A CV and cover letter tailored to each role.",
      body: "Jobbie tailors a unique version of your CV to suit every job application. Each version is positioned to cut through ATS and reach the human behind it. You review the final CV + cover letter before you proceed.",
    },
  ],
  ctaMicrocopy: "Free for all my coaching clients. Not sold separately.",
  ctaLabel: "See how Jobbie works",
  ctaHref: "/jobbie",
  /** Same MacBook hero asset as /jobbie */
  screenshotSrc: "/assets/jobbie-hero-screenshot.webp",
  screenshotFallbackSrc: "/assets/jobbie-hero-screenshot.jpg",
  screenshotAlt: "Jobbie opportunities board on a MacBook screen",
} as const;

/**
 * Premium AI / product tools included with coaching (live list Nov 2026).
 * Excludes offers marked almost gone or temporarily unavailable.
 * Values are approximate 1-year retail.
 */
export const COACHING_AI_TOOLS_FEATURED = [
  {
    name: "Notion Business",
    value: "$240",
    blurb: "Collaborative AI workspace where teams and agents work together.",
    logoSrc: "/assets/ai-tool-logos/notion.svg",
    logoAlt: "Notion",
  },
  {
    name: "Wispr Flow Pro",
    value: "$180",
    blurb: "Effortless voice dictation with zero edits — share context as fast as you think.",
    logoSrc: "/assets/ai-tool-logos/wispr.png",
    logoAlt: "Wispr Flow",
  },
  {
    name: "Mobbin Team",
    value: "$1,920",
    blurb: "The world's most comprehensive UI/UX design reference library for mobile and web.",
    logoSrc: "/assets/ai-tool-logos/mobbin.svg",
    logoAlt: "Mobbin",
  },
  {
    name: "Granola Business",
    value: "$1,680",
    blurb: "The AI notepad for people in back-to-back meetings.",
    logoSrc: "/assets/ai-tool-logos/granola.png",
    logoAlt: "Granola",
  },
  {
    name: "Lovable Pro",
    value: "$252",
    blurb: "AI app builder that takes you from idea to a working product.",
    logoSrc: "/assets/ai-tool-logos/lovable.png",
    logoAlt: "Lovable",
  },
  {
    name: "Framer Pro",
    value: "$360",
    blurb: "Design-first website builder — ship and manage your site without engineering.",
    logoSrc: "/assets/ai-tool-logos/framer.svg",
    logoAlt: "Framer",
  },
  {
    name: "Google AI Pro",
    value: "$240",
    blurb: "Higher access to Gemini, NotebookLM, Flow, 5 TB of storage, and more.",
    logoSrc: "/assets/ai-tool-logos/google.svg",
    logoAlt: "Google",
  },
] as const;

export const COACHING_AI_TOOLS_FULL = [
  { name: "Brain.fm", value: "$100", blurb: "Focus music for deep work" },
  { name: "Customer.io Essentials", value: "$1,200", blurb: "Customer engagement for product-led teams" },
  { name: "ElevenLabs Creator", value: "$264", blurb: "Voice, video, image and music generation" },
  { name: "Fin AI Agent + Advanced", value: "$7,140", blurb: "AI customer service agent (5 seats)" },
  { name: "Framer Pro", value: "$360", blurb: "Design-first website builder" },
  { name: "Gamma Pro", value: "$216", blurb: "AI presentations and websites" },
  { name: "Google AI Pro", value: "$240", blurb: "Gemini, NotebookLM, Flow, 5 TB storage" },
  { name: "Granola Business", value: "$1,680", blurb: "AI notepad for meetings (10 seats)" },
  { name: "Higgsfield Pro", value: "$348", blurb: "Agentic AI content creation" },
  { name: "Jam Team", value: "$1,920", blurb: "Bug reports for developers (10 seats)" },
  { name: "Linear Business", value: "$1,080", blurb: "Product planning and issue tracking (5 seats)" },
  { name: "Lovable Pro", value: "$252", blurb: "AI app builder from idea to production" },
  { name: "Magic Patterns Starter", value: "$240", blurb: "AI prototyping for product teams" },
  { name: "Manus", value: "$240", blurb: "General AI agent with monthly credits" },
  { name: "Mobbin Team", value: "$1,920", blurb: "UI/UX reference library (10 seats)" },
  { name: "n8n Cloud Starter", value: "$240", blurb: "Visual AI and workflow automation" },
  { name: "Notion Business", value: "$240", blurb: "Collaborative AI workspace" },
  { name: "Pangram Professional", value: "$540", blurb: "AI content detector" },
  { name: "PostHog Scale", value: "$16,500", blurb: "Product analytics with 2× monthly limits" },
  { name: "Railway Hobby", value: "$245", blurb: "AI-native cloud hosting" },
  { name: "Readwise + Reader", value: "$120", blurb: "Reading, highlights and AI unpack" },
  { name: "Replit Core", value: "$240", blurb: "Build apps with natural language" },
  { name: "Runway Pro", value: "$336", blurb: "AI video, image and audio models" },
  { name: "Stripe Atlas", value: "$200", blurb: "40% off company incorporation" },
  { name: "Supercut Pro", value: "$1,800", blurb: "AI screen recording (10 seats)" },
  { name: "Waking Up", value: "$129", blurb: "Meditation and mental OS" },
  { name: "Wispr Flow Pro", value: "$180", blurb: "Voice dictation with zero edits" },
  { name: "X Premium", value: "$360", blurb: "Grok, Grok Build/Cursor and X Premium" },
] as const;

export const COACHING_AI_TOOLS = {
  eyebrow: "Included with coaching",
  title: "1 year free of AI tools",
  intro: [
    "AI has changed the game. Employers now expect AI skills as a baseline requirement. But learning and paying for these tools are costly. That's why I've partnered with 20+ leading AI companies to offer you 1 year subscription to all of them.",
    "Free for all my coaching clients; not sold separately.",
  ],
  totalValueLabel: "Total value",
  totalValue: "$38,000+",
  otherCountLabel: "+ 21 more tools",
  faqTitle: "What's included in the 1 year AI tools access?",
} as const;

export const COACHING_EVERYTHING_INCLUDED = {
  eyebrow: "$300k Career Accelerator",
  title: "Every coaching client gets:",
  lede: "Everything you need to land your next role — from application to negotiating multiple job offers. You never have to job search alone again.",
  alsoGetTitle: "Starting November 2026, you also get:",
  extras: [
    {
      lead: "Jobbie — your personal AI-powered talent recruiter.",
      body: "Roles found every day, hand-reviewed, with people research and tailored CVs. Free for coaching clients.",
      learnMoreHref: "#Jobbie",
    },
    {
      lead: "1 year subscription of premium AI tools.",
      body: "Notion, Wispr Flow, Mobbin, Granola, Lovable, Framer, Google AI Pro and 20+ more — worth over $38,000.",
      learnMoreHref: "#PremiumAItools",
    },
  ],
} as const;

export type CoachingTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: CoachingTestimonial[] = [
  {
    quote:
      "It was such a breath of fresh air to work with a coach who understands me. Tim was always able to relate to my situation and often felt like he had been there himself. I left our sessions with many take-aways and practical tips I could use the very next day.",
    name: "Rod Naber",
    role: "Lead Product Designer, Stripe, USA",
  },
  {
    quote:
      "I think about you often and I can't tell you how well your advice has served me. I use the various intros all the time and the tactics for small talk and speaking up in meetings.",
    name: "Patricia Avila",
    role: "Design Leader, Opaque Systems, USA",
  },
  {
    quote:
      "Tim's expertise made the experience concise yet comprehensive — practical skills and a mindset shift tailored for introverts.",
    name: "Claire Erickson",
    role: "VP Product & Tech, Blackhawk Network, USA",
  },
  {
    quote:
      "The Leadership for Introverts course provided me with easy-to-apply tools to boost my confidence and increase my visibility in my org. The bite-sized video format fit perfectly into my hectic schedule.",
    name: "Course participant",
    role: "Design leader",
  },
  {
    quote:
      "Tim's visual strategy for \"tell me about yourself\" was a breath of fresh air. As an executive, it enhanced my interview performance and re-framed how I communicate my career journey.",
    name: "Executive coaching client",
    role: "VP-level leader",
  },
  {
    quote:
      "I went through so many interviews. I had a lot of anxiety back then. I felt like I was too humble when talking about my accomplishments. Tim really helped me with practical advice — which is not easy to find the more senior you get.",
    name: "Amy Zhu",
    role: "Senior Product Designer, Assent, Canada",
  },
  {
    quote:
      "Tim quickly identified my main problem area and suggested a few tips I could apply straight away. He made me so comfortable talking about myself and my experience.",
    name: "Eunbi Koh",
    role: "Product Designer, Just Eat Takeaway, UK",
  },
  {
    quote:
      "Tim is fantastic coach. He is thoughtful, engaging and passionate about helping introverts build their confidence as design leaders.",
    name: "Design leader",
    role: "Course participant",
  },
  {
    quote:
      "The methods and constructive feedback provided by Tim have been invaluable. Many of the techniques are directly affecting my day-to-day way of working.",
    name: "Madeleine van Dam",
    role: "Product Designer, Ofload, Australia",
  },
  {
    quote:
      "In just the first week, I was able to put my learnings into practice. Genuinely practical advice.",
    name: "Course participant",
    role: "",
  },
  {
    quote:
      "Tim went above and beyond. He didn't just help me get unstuck — he reminded me that I was taking the right steps. Our session was therapeutic!",
    name: "Discovery call client",
    role: "",
  },
  {
    quote:
      "Tim gave me valuable feedback and insights I hadn't even thought of. The way he shared strategies positioned me better on the market and helped me get my first job.",
    name: "Discovery call client",
    role: "",
  },
];

export const FAQS = [
  {
    q: "How much are coaching engagements?",
    a: "Clients typically make an investment of $10,000 and upwards over a coaching period of 3–12 months. Based on the discovery call, we will agree on the right cadence to achieve your goals.",
  },
  {
    q: "How does the 100% work-for-free guarantee work?",
    a: "You show up. You do the work. If you don't achieve the goals you set or recoup your investment in equivalent value 90 days after completing your coaching, we'll keep working, at no additional charge, till you do.",
  },
  {
    q: "Do you have a payment plan?",
    a: "Yes. You can Pay in 4 (i.e. 4 consecutive fortnightly payments, paid over 8 weeks).",
  },
  {
    q: "Can my company pay?",
    a: "Yes. We can split payment and provide separate invoices to your employer and yourself.",
  },
  {
    q: "What's a discovery call exactly?",
    a: "A strategic conversation — not chit-chat. See the How to apply section on this page for what we cover and what to expect by the end of the call.",
    howItWorksAnchor: true,
  },
  {
    q: "Is this just for job hunting & interviews?",
    a: "No. The advice we give will help you become your company's Most Valuable Employee — individuals who are the first to be promoted, last to be fired and respected for their talents.",
  },
  {
    q: "Do you work with extroverts or managers of quiet people?",
    a: "Yes — I coach managers of quiet teams who want to lead them better. We focus on creating ways of working that get the most out of all your people, and help louder and quieter teammates work better together.",
  },
  {
    q: "What if we're not a fit?",
    a: "I only work with people I can help. If I can't, I'll tell you during the discovery call and refer you to someone who can. No dramas.",
  },
] as const;

export const DISCOVERY_CTA_NOTE =
  "45-minute video call. If I can help, I'll share next steps. If not, I'll refer you to someone who can.";

export const COACHING_CLOSING = {
  title: "Congrats! You've reached the end.",
  mostPeopleHeadline: "Funny thing is: most people who get here don't book a call.",
  mostPeopleBecause: "That's because:",
  mostPeopleReasons: [
    "They want a “silver bullet” that magically makes all their problems go away. For free.",
    "Their situation right now isn't THAT bad (yet). Things will get better; if they are lucky. If.",
  ],
  notForYouHeadline: "If this is you, don't book a call.",
  notForYouBecause: "Why? Because:",
  notForYouReasons: [
    "You've got time & resources to try and fix things on your own.",
    "All the best advice in the world won't change your career if you are not ready to accept help.",
  ],
  forYouHeadline: "Discovery calls are for people who:",
  forYouReasons: [
    "Have tried everything else but nothing seems to work.",
    "All the advice they've got seems suited for other people but doesn't suit them.",
    "Ready for change, ready to try something new.",
  ],
  greeting: "If this is you:",
  helloLead: "👋 Hello! I look forward to meeting you soon",
  helloGuaranteeIntro: "I will guarantee you this:",
  guarantees: [
    {
      lead: "By the end of the call",
      body: "If I can help you, I'll say Yes. If I can't help you, I'll say No.",
    },
    {
      lead: "You can apply my advice the very next day",
      body: "Practical. Easy to apply. You just have to do it.",
    },
    {
      lead: "Who you are is enough",
      body: "You don't need to pretend to be someone else, you don't need to change who you are. You just need tiny habits that work for you.",
    },
  ],
  rememberLabel: "Remember:",
  rememberLead: "The best time to look for a job is when you don't need one.",
  rememberClose: "The next best time is now.",
} as const;

/** @deprecated Use COACHING_CLOSING */
export const COACHING_CLOSING_OPTION_2 = COACHING_CLOSING;
