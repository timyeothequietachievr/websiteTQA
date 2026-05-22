export type PodcastEpisode = {
  show: string;
  title: string;
  date: string;
  href: string;
  summary: string;
  cover: string;
  coverAlt?: string;
  featured?: boolean;
};

/** Newest first — matches thequietachievr.com/podcast */
export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    show: "The Quiet Warrior Podcast",
    title: "The Quiet Achiever — how introverts can be visible without pretending to be extroverts",
    date: "Feb 2026",
    href: "https://quietwarrior.buzzsprout.com/1955873/episodes/18748203-114-the-quiet-achiever-how-introverts-can-be-visible-without-pretending-to-be-extroverts-tim-yeo",
    summary:
      "Tim on being seen and heard at work without performing extroversion — practical tips for meetings, networking, public speaking, and inclusive remote teams.",
    cover: "/assets/podcast/quietwarrior.jpg",
    coverAlt: "The Quiet Warrior Podcast episode cover",
    featured: true,
  },
  {
    show: "The Belonging Project Podcast",
    title: "Quiet leadership: Tim Yeo on empowering introverts",
    date: "2025",
    href: "https://belongingproject.substack.com/p/quiet-leadership-tim-yeo-on-empowering",
    summary:
      "From Singapore to Australia, reframing introversion as a strength, and making introverts and extroverts work better together.",
    cover: "/assets/podcast/belongingproject.jpg",
    coverAlt: "The Belonging Project Podcast episode cover",
    featured: true,
  },
  {
    show: "The Quiet and Strong Podcast",
    title: "The Quiet Achiever's guide to authentic introverted leadership",
    date: "Aug 2025",
    href: "https://thequietandstrongpodcast.buzzsprout.com/1572478/episodes/17765722-ep-239-the-quiet-achiever-s-guide-to-authentic-introverted-leadership-with-tim-yeo",
    summary:
      "With David Hall: why introversion is not a weakness, and practical strategies for thriving as an introvert leader.",
    cover: "/assets/podcast/quietstrong.jpg",
    coverAlt: "The Quiet and Strong Podcast episode cover",
  },
  {
    show: "Powerful Introvert Podcast",
    title: "Who says quiet leaders cannot lead loud rooms?",
    date: "2025",
    href: "https://www.powerfulintrovertpodcast.com/p/tim-yeo-on-redefining-leadership",
    summary:
      "Greg Weinger and Tim on small talk, networking, the 4 Ps (Prepare, Practice, Push, Presence), and leading without faking extroversion.",
    cover: "/assets/podcast/powerfulintrovert.jpg",
    coverAlt: "Powerful Introvert Podcast episode cover",
  },
  {
    show: "Human-Centered Design Podcast",
    title: "Leadership, introversion, and the invisible emotional toll of workplace dynamics",
    date: "May 2025",
    href: "https://www.thisishcd.com/episode/unlocking-the-power-of-introversion-in-leadership-workplaces",
    summary: "Gerry Scullion on self-discovery, challenging the extrovert ideal, and building more inclusive workplaces.",
    cover: "/assets/podcast/hcd-gerryscullion.jpeg",
    coverAlt: "Human-Centered Design Podcast episode cover",
  },
  {
    show: "Ran Talks Design",
    title: "Succeeding as your authentic introverted self",
    date: "Jan 2025",
    href: "https://youtu.be/saNYHLWGoA8",
    summary:
      "Practical habits to build confidence, be heard in meetings, and create impact without changing who you are.",
    cover: "/assets/podcast/rantalksdesign.jpeg",
    coverAlt: "Ran Talks Design episode cover",
  },
  {
    show: "Invincible Career",
    title: "Succeeding as an introvert",
    date: "Jul 2023",
    href: "https://www.youtube.com/watch?v=q7bMuU8aqUY",
    summary: "Job searching, interviews, getting noticed, and the kind of coaching Tim does with introverts.",
    cover: "/assets/podcast/invinciblecareer.jpeg",
    coverAlt: "Invincible Career episode cover",
  },
  {
    show: "UX Cake Podcast",
    title: "The quiet leader: strategies for introverts",
    date: "May 2023",
    href: "https://podcasts.apple.com/au/podcast/the-quiet-leader-strategies-for-introverts-with-tim-yeo/id1350595015?i=1000611676060",
    summary: "Quiet leadership, making work visible, and overcoming the extrovert ideal in design.",
    cover: "/assets/podcast/uxcake.jpeg",
    coverAlt: "UX Cake Podcast episode cover",
  },
  {
    show: "UX Podcast",
    title: "#296 — Introvert designers with Tim Yeo",
    date: "Aug 2022",
    href: "https://uxpodcast.com/296-introverts-tim-yeo/",
    summary: "How introverted designers and leaders can make an impact without pretending to be extroverts.",
    cover: "/assets/podcast/uxpodcast.jpeg",
    coverAlt: "UX Podcast episode cover",
  },
  {
    show: "Design Feeling",
    title: "Design leadership for introverts",
    date: "Jul 2022",
    href: "https://www.designfeeling.co/design-leadership-for-introverts-with-tim-yeo/",
    summary: "Tim's journey as an introverted designer and design leader — and coaching other quiet achievers.",
    cover: "/assets/podcast/designfeeling.jpeg",
    coverAlt: "Design Feeling episode cover",
  },
  {
    show: "Understanding Users",
    title: "Design leadership for introverts (UCD Gathering keynote preview)",
    date: "Jun 2022",
    href: "https://podcasts.apple.com/ph/podcast/14-the-remote-conference-keynote-speakers-ucd/id1591604213?i=1000564673772",
    summary: "Tim on his career, how he works, and his UCD Gathering keynote on design leadership for introverts.",
    cover: "/assets/podcast/understandingusers.jpeg",
    coverAlt: "Understanding Users episode cover",
  },
  {
    show: "IxDA Sydney Podcast",
    title: "Design leadership for introverts",
    date: "Dec 2021",
    href: "https://open.spotify.com/episode/2Ds4joYDHHqPyEi53lQFd2",
    summary: "Standing out as a new designer, design exercises, and crafting your path as an introvert.",
    cover: "/assets/podcast/ixda.jpeg",
    coverAlt: "IxDA Sydney Podcast episode cover",
  },
  {
    show: "UX Maturity",
    title: "Succeeding as an introvert with Tim Yeo",
    date: "Dec 2021",
    href: "https://open.spotify.com/episode/5mSLWrX174tx47ICfepU1r",
    summary: "Introversion as strength in the design industry and techniques to succeed as a quiet designer.",
    cover: "/assets/podcast/uxmaturity.jpeg",
    coverAlt: "UX Maturity episode cover",
  },
  {
    show: "IxDA Milan",
    title: "Design leadership for introverts",
    date: "Feb 2020",
    href: "https://vimeo.com/410019935",
    summary: "A memorable conference talk in Milan — days before COVID lockdown — with every public-speaking habit Tim had developed.",
    cover: "/assets/podcast/ixda-milan.jpg",
    coverAlt: "IxDA Milan talk video thumbnail",
  },
  {
    show: "Scaling Design Conference",
    title: "Scaling impactful design teams (panel)",
    date: "Feb 2022",
    href: "https://www.youtube.com/watch?v=EPACYLMCdxI",
    summary:
      "Panel with design leaders from Airwallex, CM Group, SafetyCulture, and Tim (IBM / The Quiet Achiever).",
    cover: "/assets/podcast/shiftingdesign.jpeg",
    coverAlt: "Scaling Design Conference panel video cover",
  },
  {
    show: "Design Buddies",
    title: "Quiet leadership for introverts",
    date: "Mar 2024",
    href: "https://www.youtube.com/watch?v=BOOd2Q83EJA&t=2s",
    summary: "How to lead as an introvert and have impact when working remotely.",
    cover: "/assets/podcast/designbuddies.jpeg",
    coverAlt: "Design Buddies talk video cover",
  },
  {
    show: "ADPList BeMore Festival",
    title: "Leadership for quiet achievers",
    date: "Nov 2023",
    href: "https://youtu.be/LdxDN2xOrEg",
    summary: "Keynote on quiet leadership at the BeMore Festival.",
    cover: "/assets/podcast/adplist.jpeg",
    coverAlt: "ADPList BeMore Festival keynote cover",
  },
];
