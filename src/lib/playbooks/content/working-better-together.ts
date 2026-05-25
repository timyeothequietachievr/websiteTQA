import type { Playbook } from "../types";

export const workingBetterTogether: Playbook = {
  slug: "working-better-together",
  title: "Working Better Together — The Quiet Achiever's Playbook",
  shortTitle: "Working Better Together",
  tag: "Teams",
  description:
    "Run meetings and brainstorms that hear quieter voices—and make the whole team smarter.",
  emoji: "🤝",
  premise:
    "The default operating system at work was designed by extroverts, for extroverts. That's not anyone's fault—but it costs your team the best ideas. A few tiny habits change that. Same success, different path.",
  introLine:
    "For the team that wants to stop punishing its quieter members and start hearing what they have to say.",
  intro: {
    title: "Why most teams accidentally silence their best ideas",
    paragraphs: [
      "Big meetings. Brainstorms. Whoever speaks first wins. Decisions made by who shouts loudest. Sound familiar?",
      "The quiet half of your team has brilliant ideas. They just need a different path to share them. When you build that path, you don't just include introverts—you make the whole team smarter. Diverse teams beat same-same teams. Always.",
      "The truth: the team that hears its quieter voices makes better decisions and ships better work.",
    ],
  },
  whoFor: [
    "You're a manager whose team has 1–2 silent meeting attendees",
    "You're an introvert and your team's defaults exhaust you",
    "You want to run meetings, brainstorms, and reviews that work for everyone",
    "You want to build a remote/hybrid culture that doesn't accidentally favour the loudest",
    "You want to practise inclusion as a behaviour, not a slogan",
  ],
  habits: [
    {
      title: "Always send the agenda before the meeting",
      problem:
        "Quiet achievers are slower at processing (not slower at thinking). Cold-opening on a topic disadvantages them.",
      fix: "Share the agenda + any pre-reads at least 24 hours ahead: purpose of meeting, decisions needed (with options), pre-read links, where each person should bring an opinion. Everyone walks in primed. Quality of contribution doubles.",
    },
    {
      title: "Give a heads-up to people you want input from",
      problem: "You ask Janet on the spot. Janet panics. You conclude Janet has no opinion.",
      fix: 'Message ahead of the meeting: "Hi Janet—I\'d love your view on the design system question tomorrow. No pressure to have all the answers, just want to make sure I make space for your perspective." This isn\'t favouritism. It\'s the on-ramp.',
    },
    {
      title: "Use silent-then-share for any brainstorm or review",
      problem:
        "Group brainstorms produce a couple of loud ideas everyone anchors on. The quieter ideas die.",
      fix: "5–10 minutes silent (sticky notes, doc, board). Then share. Then group. Then vote.",
      highlight:
        "Every study on this shows the same thing: silent-first beats group-first for both quantity and quality of ideas.",
    },
    {
      title: "Pass the microphone",
      problem: "The same 2–3 voices dominate every meeting. The other 5–7 stay silent.",
      fix: '"Let\'s go round the room. Janet, I\'d love your take first." Name the person. Make it normal. Make space. Then don\'t react if they pass—they may need another minute.',
    },
    {
      title: "Make chat a first-class citizen on video calls",
      problem:
        "Quiet team members write thoughtful messages in chat. The chair never reads them. Their input vanishes.",
      fix: 'Treat chat as primary. Read it out loud. Reply to it on camera. "Janet has a great point in the chat—let\'s pick that up." For remote/hybrid teams, this single habit is the biggest unlock you can make.',
    },
    {
      title: "Default to 1:1s for important calls",
      problem: "Big meetings are theatre. Real decisions happen in side conversations.",
      fix: "When the call really matters, do it 1:1. Quiet achievers are unrecognisable in 1:1s—thoughtful, articulate, generous. The bigger the room, the more we shrink.",
    },
    {
      title: "Document decisions, not vibes",
      problem:
        "A meeting ends, everyone leaves with a different version of what was agreed. The quiet ones got steamrolled.",
      fix: "Last 5 minutes of every meeting: What did we decide? Who's responsible? (One name, one A.) When is it done by? Who needs to know? Write it. Send it. Done.",
    },
  ],
  proTips: [
    "Re-share key points twice in different formats. Once as the leader. Once when summarising.",
    'Set a team norm: "reply to direct messages within one working day." Observable. Callable.',
    "For hybrid: assume every meeting has remote attendees. Treat the camera like the most senior person in the room.",
    "Run quarterly working agreements: what does the team need more of? Less of?",
    "Separate generation (silent) from evaluation (group). Don't mix them.",
  ],
  commonMistakes: [
    "Calling on quieter people without warning, then concluding they had nothing to say",
    "Letting the loudest voice's first idea anchor the whole brainstorm",
    "Treating chat as background noise on video calls",
    "Endless big meetings instead of focused 1:1s",
    "Letting decisions drift instead of writing them down",
  ],
  limitations: [
    "These habits won't fix a leader who doesn't want to hear quieter voices.",
    'They won\'t override deep cultural norms (e.g. "only the senior speaks first"). Pair with leadership change.',
    "It won't work if you only do it once. Norms are living documents. Review every quarter.",
  ],
  thirtyDay: [
    {
      week: "Week 2",
      focus: "Run one brainstorm silent-first. Document the difference in idea quality.",
      outcome: "Better ideas. Quieter members heard.",
    },
    {
      week: "Week 4",
      focus: "Run a working agreements session. Co-design 3–5 observable team norms.",
      outcome: "Shared rules of engagement everyone owns.",
    },
  ],
  bookBlurb:
    "The meetings, facilitation, and management chapters go deep on these habits.",
  showSchoolCta: true,
  closingLine:
    "Just because we're quiet doesn't mean we have nothing to say. When teams pass the mic, everyone wins. Tiny habits, done well, accumulated over time.",
};
