/** About page copy */

export const ABOUT_HERO = {
  eyebrow: "chief introvert",
  title: "Meet Tim Yeo",
  imageSrc: "/assets/about-hero.jpg",
  imageAlt: "Tim Yeo",
  bio: "Tim Yeo is the author of and chief introvert at The Quiet Achiever. Best known for saying complex things simply.",
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
      "I felt invisible.",
      'For years, I read self-help books on public speaking. I modeled social butterflies at networking events. I watched in awe as company leaders delivered speeches effortlessly. I pretended to be an extrovert at work to fit the "extrovert ideal".',
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
