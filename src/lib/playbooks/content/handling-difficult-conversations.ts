import type { Playbook } from "../types";

export const handlingDifficultConversations: Playbook = {
  slug: "handling-difficult-conversations",
  title: "Handling Difficult Conversations — The Quiet Achiever's Playbook",
  shortTitle: "Handling Difficult Conversations",
  tag: "Communication",
  description:
    "Have the conversation you've been avoiding—using behaviour not intention, 1:1, within 24 hours.",
  emoji: "🥵",
  premise:
    "Difficult conversations don't get easier by waiting. They get worse. The good news: there's a five-beat framework that works. Focus on behaviour, not intention. 1:1, within 24 hours.",
  introLine:
    "For the conversation you've been avoiding for two weeks. Or two years.",
  intro: {
    title: "Why difficult conversations are extra hard for us",
    paragraphs: [
      "Quiet achievers have fewer social interactions per day than extroverts. So a single difficult conversation can be a huge chunk of your day, your energy, your week.",
      "We also avoid them because we don't want to disappoint, hurt feelings, or risk the relationship. So we feed the dark hairy ball of negativity instead. Every time you say yes when you mean no, that ball gets bigger. Eventually it fills the whole room of your mind—and you quit, or burn out, or both.",
      "Difficult conversations are skills. Skills can be practised. Sound familiar?",
    ],
  },
  whoFor: [
    "You've been avoiding a conversation for too long",
    "You're a new people leader and someone on your team is behaving badly",
    "You received feedback that wasn't clear and you don't know what to do with it",
    "You're stuck on the receiving end of feedback that wasn't fair",
    "You want to learn how to give hard feedback without damaging the relationship",
  ],
  habits: [
    {
      title: "Use SBICC every time",
      problem: "Without a framework, hard conversations spiral into emotion and meander.",
      fix: "Five beats. Practise out loud first: Situation (when and where), Behaviour (what you saw or heard—not what you think they thought), Impact (effect on you or the team), Consequence (lasting damage if it continues), Change (new behaviour you'd like to see).",
      highlight:
        'Example: "At yesterday\'s meeting, you interrupted me three times while I was making my one point. It made me feel what I had to say wasn\'t valuable, and if it continues, I\'ll speak up less. Next time, can you let me finish first?"',
    },
    {
      title: "Focus on behaviour, not intention",
      problem:
        '"You did it because you don\'t respect me." → they get defensive. Conversation over.',
      fix: "Behaviour is observable. Intention is invisible. Stick to what you saw, heard, or experienced.",
      bullets: [
        '✅ "You rolled your eyes when Janet spoke" — ❌ "You don\'t respect Janet"',
        '✅ "You arrived 20 minutes late" — ❌ "You don\'t take this seriously"',
      ],
      highlight: "Always assume best intentions. Otherwise your judgement gets clouded by fiction.",
    },
    {
      title: "Don't respond when emotionally heightened",
      problem: "You receive feedback that stings. You react. You say something you can't take back.",
      fix: 'Buy time: "Wow, I didn\'t expect that. Thanks for letting me know. Can I think about it and come back to you tomorrow?" Words, once said, cannot be taken back. Sleep on it.',
    },
    {
      title: "Within 24 hours, no later",
      problem:
        "Too soon → emotions still hot. Too late → forgotten or you've made excuses.",
      fix: "Aim for the 24-hour sweet spot. Long enough for both of you to process, recent enough to remember exactly what happened.",
    },
    {
      title: "Always 1:1",
      problem: "Public feedback humiliates. Defensive walls go up. Nothing gets through.",
      fix: "Bad news, in private. Good news, from the rooftops. People are less defensive when no one's watching, and more open when no one's listening.",
    },
    {
      title: "When you receive unclear feedback, run SBICC backwards",
      problem:
        "Most people are terrible at giving feedback. You leave the conversation more confused than before.",
      fix: "Approach with curiosity. Ask the missing parts.",
      bullets: [
        '"When exactly did this happen?" (Situation)',
        '"What specifically did I do?" (Behaviour)',
        '"How did it affect you or the team?" (Impact)',
        '"If I keep doing it, what happens?" (Consequence)',
        '"What would you like me to do differently?" (Change)',
      ],
    },
    {
      title: "If outvoted, predict the outcome",
      problem:
        "The team is moving in a direction you think is wrong. You go along quietly. It fails. You feel worse, not vindicated.",
      fix: 'Earn the right to be wrong: "I wouldn\'t be doing my job if I didn\'t flag these risks. Let me predict what I think will happen…" If you\'re right, you earn clout. If you\'re wrong, you learn something. Both are wins.',
    },
  ],
  proTips: [
    "Write the feedback down. Practise it out loud. Iterate till it feels honest and kind.",
    "Tell teammates which areas you do and don't want feedback on—it focuses the conversation.",
    'If the behaviour is a symptom not a cause, dig deeper. "Tell me more about what\'s frustrating you about Janet?"',
    "For people leaders: not addressing bad behaviour signals you tolerate it. Speak up in service of the team.",
    "If the power dynamics are stacked against you, escalate. Even your boss has a boss.",
  ],
  commonMistakes: [
    "Giving feedback in a group setting",
    "Assuming intention instead of describing behaviour",
    "Reacting in the moment when you receive hard feedback",
    'Sweeping the conversation under the carpet "just this once"',
    "Trying to soften feedback so much it becomes unactionable",
  ],
  limitations: [
    "This won't fix a deeply toxic relationship. Sometimes the answer is to leave.",
    "It won't work if the other person isn't capable of receiving feedback. (See: leave.)",
    "It will feel direct. Direct is clear. Practise the empathy in your tone.",
  ],
  thirtyDay: [
    {
      week: "Week 2",
      focus: "Practise the SBICC with a trusted friend. Iterate the words till they feel honest.",
      outcome: "You can deliver it without flinching.",
    },
    {
      week: "Week 4",
      focus:
        "Reflect: what landed, what didn't, what would you do differently? Write it down.",
      outcome: "A repeatable practice you'll use the rest of your career.",
    },
  ],
  bookBlurb:
    "The full SBICC chapter has 12 worked examples—from toilet seats to executive feedback.",
  closingLine:
    "The only way to get used to hard conversations is to have more of them. It's like being scared of spiders. Exposure works. You are enough.",
};
