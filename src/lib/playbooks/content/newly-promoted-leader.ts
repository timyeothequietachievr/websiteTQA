import type { Playbook } from "../types";

export const newlyPromotedLeader: Playbook = {
  slug: "newly-promoted-leader",
  title: "Newly Promoted Leader — The Quiet Achiever's Playbook",
  shortTitle: "Newly Promoted Leader",
  tag: "Leadership",
  description:
    "Lead people and manage priorities in your first leadership role—without pretending to be someone you're not.",
  emoji: "🎖️",
  premise:
    "You got promoted because you do great work. The job ahead is different. Less doing, more leading. Less pixels, more people. You don't need to become an extrovert to be a great leader. You just need a few tiny habits, in the right order, done well.",
  introLine:
    "For the quiet achiever who just got promoted—and is wondering what on earth they've signed up for.",
  intro: {
    title: "What changes the day you become a leader",
    paragraphs: [
      "For years, your job was the work. Pixels, code, copy, spreadsheets—whatever your craft. You got promoted because you got really good at it.",
      'Then one day, your boss says the words: "Congratulations, you\'re promoted." And everything changes.',
      "The work that got you here is no longer the work that will keep you here. Your job now is to build the team that builds the product. Less doing, more leading.",
      "Sound familiar? If so, you're in the right place.",
    ],
  },
  whoFor: [
    "You've just been promoted into your first leadership role",
    "You're a senior individual contributor wondering whether to step up",
    "You're a quiet achiever who never wanted the spotlight, but the role found you anyway",
    "You're worried you'll lose your craft, your identity, or your sanity",
    "You feel like an imposter. (Hint: everyone does. Even your boss.)",
  ],
  habits: [
    {
      title: "Manage priorities, lead people",
      problem:
        "New leaders default to managing people and priorities. That's micromanagement.",
      fix: "Manage priorities. Lead people. Decide what bubbles to the top, then water and feed your team to do the work. Your job is no longer to do the work. Your job is to make the work possible.",
      highlight: "Mantra: Manage priorities. Lead people. Reverse it at your peril.",
    },
    {
      title: "Your First Team is your peers, not your reports",
      problem:
        "Quiet achievers default to looking after their direct reports. Comfortable, familiar, lower stakes.",
      fix: "Your First Team is your peer leaders and the executive you report to. That's where decisions happen, where alignment lives, where your team's work gets fought for. Spend time there first.",
      bullets: [
        "Schedule fortnightly 1:1s with every peer leader",
        'Ask: "What\'s keeping you up at night? How can my team help?"',
        "Bring something useful before you ask for something",
      ],
    },
    {
      title: "Hire for the gaps in your team",
      problem: "We hire people who look like us. Same-same teams produce same-same ideas.",
      fix: "Map every team member's skills on a 0–5 scale across both hard skills and soft skills. The white space—where no one scores well—is exactly what you hire for next.",
      highlight: "Hire slow. Hire well. One bad hire is a time thief that screws everything up. Be intentional.",
    },
    {
      title: "Design team norms with your team",
      problem: "Most teams accept their norms. They just happen. Some are good, some are toxic.",
      fix: "Design 3–5 norms together. Each one must be observable behaviour. Review them every quarter. Norms are living documents.",
      bullets: [
        '❌ "Be respectful" (impossible to call out) → ✅ "Pass the microphone" (easy to call out)',
        '❌ "Communicate well" → ✅ "Reply to direct messages within one working day"',
      ],
    },
    {
      title: "RASCI every important project",
      problem:
        "Friction comes from unclear ownership. Two people think they're responsible. Or no one does.",
      fix: "Run a RASCI exercise—privately first, then together. Too many R's on one person? Load balance. One A per item—non-negotiable.",
      bullets: [
        "R — Responsible (does the work)",
        "A — Accountable (one person, owns the outcome)",
        "S — Support",
        "C — Consulted",
        "I — Informed",
      ],
    },
    {
      title: "Build trust through behaviour, not words",
      problem: "New leaders try to say the right things. People watch what you do.",
      fix: "Three trust behaviours that compound.",
      bullets: [
        "Go last when others are responsible. Your seniority anchors the room. Speak first only when you're meant to set the frame.",
        'Decide and explain why. The "why" is your get-out-of-jail card. If reasons change, you can change your mind.',
        'Ask for feedback. Repeatedly. First few times you\'ll get "no, all good." Keep asking. When real feedback finally comes—do not react. React once and they\'ll never give you feedback again.',
      ],
    },
    {
      title: "Prioritise with a formula, not a feeling",
      problem: "Quiet achievers want to please everyone. Everything feels urgent.",
      fix: "Score every item using Priority = (Value ÷ Effort) × Confidence. Run planning poker with the team. Sort by priority. If the top result feels wrong, the math isn't broken—your inputs are. Compare scores to neighbours and re-score.",
    },
  ],
  proTips: [
    "Player-coach roles keep you employed, not promoted. Always firefighting? You can't get promoted because you're too valuable where you are.",
    "Up your spreadsheet game. Leadership life is spreadsheets.",
    "Schedule deep work like meetings. Guard it like your life depends on it.",
    "Do skip-level 1:1s with your skip reports every quarter. They'll tell you things their manager won't.",
    "Everyone is winging it. Even your boss. Even the CEO. Feel less like an imposter.",
  ],
  commonMistakes: [
    "Doing the work yourself because it's faster. (You're hiring yourself out of a promotion.)",
    "Treating direct reports as your First Team because it's comfortable.",
    "Hiring 9-out-of-10 unicorns when 7-out-of-10 humans will do.",
    'Saying "the company is family". It isn\'t. The company can fire you. Hope is not a strategy.',
    "Reacting to feedback the first time you get it. You just trained your team to lie to you.",
  ],
  limitations: [
    "This playbook won't make a toxic culture less toxic. It might give you the language to escalate or the courage to leave.",
    "It won't replace 1:1 coaching for the really sticky moments. Some conversations need a thinking partner.",
    "It won't work if you only read it. Tiny habits compound only when practised.",
  ],
  thirtyDay: [
    {
      week: "Week 2",
      focus: "Design team norms together. 3–5 observable behaviours. Review cadence agreed.",
      outcome: "A shared agreement on how you'll work.",
    },
    {
      week: "Week 4",
      focus:
        "Build the trust behaviours. Ask for feedback. Don't react. Decide and explain why on every meaningful call.",
      outcome: "A team that trusts you to lead them.",
    },
  ],
  bookBlurb:
    "Loved this? The whole book takes two hours to read and a lifetime of tiny habits to practise.",
  closingLine:
    "Who you are is enough. You don't have to pretend to be someone you're not to lead well. Skills can be practised. With practise, you get better and better.",
};
