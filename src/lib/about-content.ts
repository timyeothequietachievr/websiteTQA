/** About page copy — synced from Notion “V2 content” */

export const ABOUT_HERO = {
  eyebrow: "chief introvert",
  title: "👋 Hello!",
  imageSrc: "/assets/about-hero.jpg",
  imageAlt: "Tim Yeo",
  bioParagraphs: [
    "Tim Yeo is the chief introvert of The Quiet Achiever.",
    "He coaches and runs The Quiet Achiever School to help quiet achievers have impact at work without pretending to be extroverts.",
    "Best known for saying complex things simply.",
  ],
} as const;

export type AboutStorySection = {
  title: string;
  paragraphs: readonly string[];
};

export const ABOUT_STORY_SECTIONS: AboutStorySection[] = [
  {
    title: "Being an introvert in a world that desires the extrovert ideal is hard.",
    paragraphs: [
      "Over 20+ years, I've worked as a designer and a leader in tech. Companies dominated by big personalities, strong opinions and loud voices.",
    ],
  },
  {
    title: "Like you, I struggled to manage my introversion.",
    paragraphs: [
      "Born Chinese in Singapore in an English-speaking family, I moved to Australia in 2012; and what a culture shock it was.",
      "I felt invisible.",
      "Work cultures rewarded those who spoke up — even though those who said the most didn't have the most to say.",
      'For years, I read self-help books on public speaking. I watched every TED Talk, copying their every move. I modeled social butterflies at networking events. I watched in awe as company leaders delivered speeches effortlessly. I pretended to be an extrovert at work to fit the "extrovert ideal".',
    ],
  },
  {
    title: "I thought: if I tried hard enough I could be like them.",
    paragraphs: [
      "And it worked. But I was also exhausted, because I was pretending to be someone I was not.",
    ],
  },
  {
    title: "I thought: Maybe there was something wrong with me. Maybe I wasn't good enough.",
    paragraphs: [
      "There had to be a better way. I refused to give up, and found another path to success.",
      "I did not realise it at the time. But I took the best of what I learned. I stopped pretending and started practicing, making those techniques my own.",
    ],
  },
  {
    title: "I didn't have to be loud. I could be quiet; and still be heard.",
    paragraphs: [],
  },
  {
    title:
      "The Quiet Achiever's mission is to help introverts have impact and influence without pretending to be extroverts.",
    paragraphs: [
      "Maybe you are tired of keeping quiet in meetings even though you have something to say.",
      "Perhaps you wish you were better at networking and didn't find it awkward and embarrassing.",
      "Or maybe you just wish you were more visible in your organisation because you know how have something value to say; if only people heard you.",
      "There is a better way; and you don't have to do it alone.",
    ],
  },
];
