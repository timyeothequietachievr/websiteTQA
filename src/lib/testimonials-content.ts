/** Full testimonials wall — ported from websiteold.thequietachievr.com/testimonials */

export type SiteTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS_HERO = {
  title: "Reviews and Testimonials",
} as const;

/** Featured pull-quote at the top of /testimonials */
export const FEATURED_SITE_TESTIMONIAL: SiteTestimonial = {
  quote:
    "It was such a breath of fresh air to work with a coach that understands me. Tim was always able to relate to my situation and often felt like he had been there himself. I left our sessions with many take-aways but also with many practical tips and strategies I could utilize the very next day.",
  name: "Rod Naber",
  role: "Lead Product Designer, Stripe, USA",
};

export const SITE_TESTIMONIALS: SiteTestimonial[] = [
  {
    quote:
      "It was such a breath of fresh air to work with a coach that understands me. Tim was always able to relate to my situation and often felt like he had been there himself. I left our sessions with many take-aways but also with many practical tips and strategies I could utilize the very next day.",
    name: "Rod Naber",
    role: "Lead Product Designer, Stripe, USA",
  },
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
      'The course\'s impact has been nothing short of transformative, especially for an executive like myself. His expertise and clear communication style made the learning experience concise yet comprehensive, focusing on practical skills and a mindset shift tailored for introverts. One standout aspect was the innovative approach to the "tell me about yourself" question. His visual strategy was a breath of fresh air. As an executive, this approach not only enhanced my interview performance but re-framed how I thought about and communicate my career journey.',
    name: "Claire Erickson",
    role: "VP, Product & Tech Strategy & Operations, Blackhawk Network, USA",
  },
  {
    quote:
      'Tim gave me a lot of space to unpack what I struggle with as an introvert, and then tackled each part with an actionable tip. I think the actionable nature of the conversation was what really helped. The professional "advice" I have gotten about introversion in the past has always been too abstract or philosophical to be truly helpful.',
    name: "Kumari Pacheco",
    role: "Content Designer, A Book Apart",
  },
  {
    quote:
      "I attended the course on Quiet Leadership. I found the course extremely informative and beneficial in helping me understand myself better as an introvert. He provided strategies and techniques that I can use in everyday situations as a UX leader in a tech environment where loud voices often dominate conversations. I took away several learnings that I use today in my career. Thank you, Tim!",
    name: "Dawn Ta",
    role: "Director, Research and Design, Ascension, US",
  },
  {
    quote:
      "A practical and kind guide to not merely survive work socialization, but get great at it!",
    name: "Julia Racsko",
    role: "Design Coach, Superbloom, Germany",
  },
  {
    quote:
      "Tim has simple and actionable frameworks to navigate overwhelming situations. His methods are baked in psychology and his personal experience. He patiently listened to my questions and provided me with simple tools that I can easily remember and apply in next meetup.",
    name: "Twisha Mistry",
    role: "Designer",
  },
  {
    quote:
      "Tim was very approachable and genuine to speak with. He also gave me some great food for thought that I intend to action.",
    name: "Kate Frappell",
    role: "Design Manager, Ofload",
  },
  {
    quote:
      "I went through so many interviews. I had a lot of anxiety back then. I felt like I was too humble when talking about my accomplishments. Tim really helped me with practical advice - which is not easy to find the more senior you get.",
    name: "Amy Zhu",
    role: "Senior Product Designer, Assent, Canada",
  },
  {
    quote:
      "I extended my intro based on the course and I could see by the reactions of the interview panel how effectively it communicated my experience and capabilities and set the stage for the rest of the conversation. This was the single most valuable feedback on presenting work. It challenged me to assess other areas in the workplace where I may be minimizing important context.",
    name: "Jennifer O",
    role: "Staff Product Designer, Buoy Software, USA",
  },
  {
    quote:
      "This course came at the perfect time when I needed support with interviews. Tim was empathetic, pragmatic, and calm - and gave me advice and examples that I could quickly apply under pressure. He gave me the space to ask questions specific to my circumstances. I highly recommend.",
    name: "Evena Wong",
    role: "Product Designer, Seer Medical, Australia",
  },
  {
    quote:
      "Tim gave me valuable feedback and insights that I have not even thought of. The way he shared strategies and experience positioned me better on the market and get my first job. Thank you!",
    name: "Sophie Matrai",
    role: "Senior Product Designer, Atlassian, Australia",
  },
  {
    quote:
      "Tim is great; we covered every query I got and I left having closure, rare find! His experience resonated with mine, having gone through what I am currently going through.",
    name: "Lewis Kangethe Ngugi",
    role: "Senior Product Designer, HubSpot",
  },
  {
    quote:
      "Tim went the extra mile. He showered us with resources and patiently answered every question, making the course not only informative but also truly personalised to our needs.",
    name: "Bethany Moran",
    role: "Principal Digital User Experience Designer, NSW Govt, Australia",
  },
  {
    quote:
      "Tim is amazing and clearly doing this work to help others. He offered his time and advice freely in spite of being on the other side of the world from myself. It's inspiring to see what another introvert has accomplished! I hope to take his course soon!",
    name: "Allison Lei",
    role: "Senior Product Designer, Seismic, USA",
  },
  {
    quote:
      "Chatting with Tim is inspiring. It is so great to see there is an introverted designer who speak publicly that he is an introvert and share his lived experience with us, many other introverted designers, on how might we navigate skilfully in a world that flavours extroverted people. Thank you Tim for sharing so many useful tips!",
    name: "Vicky Chiu",
    role: "Senior Product Designer, Service NSW, Australia",
  },
  {
    quote:
      "The course gave me confidence to present myself and my work to others. The exercises he designed are really helpful tools that I will continue using to prepare for challenging situations in and outside of work.",
    name: "Plamena Doncheva",
    role: "Senior Product Designer, Glovo, Spain",
  },
  {
    quote:
      "Tim is fantastic coach. He is thoughtful, engaging and passionate about helping introverts build their confidence as design leaders. The course has helped me to deal with the common issues I face as a designer and to build a toolkit with actionable insights in how to overcome them. Thanks to Tim I am able to thrive as both an introvert and a design leader.",
    name: "Scott Llewellyn",
    role: "UX Designer, Give Panel, UK",
  },
  {
    quote:
      "The methods and constructive feedback provided by Tim have been invaluable. Many of the techniques are directly affecting my day-to-day way of working, like my conduct in meetings and confidence approaching new situations.",
    name: "Madeleine van Dam",
    role: "Product Designer, Ofload, Australia",
  },
  {
    quote:
      "Tim was filled with great advice on how to navigate my workspace and start to be more active at my own pace and by my own meaning. He made me feel comfortable and gave me motivation to start working on my communication skills, step by step, without rushing.",
    name: "Daniela Montanez",
    role: "Visual Designer, Huge, Colombia",
  },
  {
    quote:
      "I highly recommend Tim. He provided tactics and strategies I can use as an introverted designer. He listened very attentively and asked me to describe work scenarios so that he could give advice appropriate to them. He also provided some handy questions that I can use for my 1:1 conversations and meetings.",
    name: "Andrew Cuevas",
    role: "UX Designer",
  },
  {
    quote:
      "It was a pleasure being able to spend time chatting with Tim - he was extremely engaging and I took away the feeling that he was focussed on helping me specifically (stopping to take notes and targeting key growth areas I had addressed). I would not hesitate to book in a follow up session! I plan on first implementing feedback real time as I continue to build out my design career. Thank you Tim!",
    name: "Beth Bridges",
    role: "UX Product Designer, Moshtix, Australia",
  },
  {
    quote:
      "Tim is a generous resource for introverted designers and those who want to lead them successfully.",
    name: "Capra Jneva",
    role: "Senior Manager, Platform Research and Architecture, Autodesk, USA",
  },
  {
    quote:
      "In just the first week, I was able to put my learnings from this course into practice. Genuinely practical advice.",
    name: "Raemarie Lee",
    role: "Product Designer, Learnerbly, UK",
  },
  {
    quote:
      "Tim quickly identified my main problem area and suggested a few tips I could just apply straight away. He made me so comfortable talking about myself and my experience. I highly recommend this to everyone!!",
    name: "Eunbi Koh",
    role: "Product Designer, Just Eat Takeaway, UK",
  },
  {
    quote:
      "Tim provided invaluable insights into the challenges faced by introverts, particularly the impact of cultural differences in Western and Asian workplaces.",
    name: "Erin Yeh",
    role: "UX/UI Design, Australia",
  },
  {
    quote:
      "Tim is such an inspiration. He was very approachable, made me feel comfortable and I can see his passion on helping others that are introverted. The biggest message for me was to embrace and respect myself.",
    name: "Melanie Owubokiri",
    role: "UX Designer, Pushpay",
  },
  {
    quote:
      "I love how much your work is about allowing introverts to unlock their full super power rather than feeling like this is something they need to adjust/ work around. The tools you suggested does exactly that-- allows introverts to own, celebrate, and understand who they are.",
    name: "Nada Salem",
    role: "Design Strategist, McKinsey & Company",
  },
  {
    quote:
      "Tim went above and beyond. He did not just help me get unstuck with all the surrounding problems I was facing, but he reminded me that I was taking the right steps. He shared some actionable tips, was a great listener, patient, observative, and clever. I highly recommend; our session was therapeutic!",
    name: "Wilson Thai",
    role: "UX/UI Designer",
  },
  {
    quote:
      "Tim dishes out practical advice tailored for introverts navigating the tech and corporate sectors. Drawing from personal experiences, the book serves up strategies for success in key areas like networking, public speaking, and feedback. What really makes it stand out is the relatable real-life examples sprinkled throughout, which not only make the techniques and frameworks more understandable but also give readers the confidence and clarity to tackle these situations head-on. It is a go-to resource for introverts looking to thrive in industries that often overlook their strengths, providing down-to-earth insights to excel in environments not always tuned to their needs.",
    name: "Taryn Ewens",
    role: "Software Engineer, Atlassian, Australia",
  },
  {
    quote:
      "Tim is a great mentor for those that want genuine and authentic conversations. He was an attentive listener and offered invaluable advice. He was empathetic and understanding of my concerns as a career switcher. No matter what type of mentorship you seek, his wealth of experience and background will enable him to connect with you on a profound level.",
    name: "Gloria Wang",
    role: "Product Designer, Systems Engineer, Australia",
  },
];
