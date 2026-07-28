/**
 * Short-link redirects — ported from timyeothequietachievr/website next.config.mjs
 * Keep in sync with the live site so cutover to www.thequietachievr.com preserves all short links.
 */

export type SiteRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

const amazonBookReviewsUrl =
  "https://www.amazon.com/Love-You-Like-No-Otter/dp/1728213746/ref=sr_1_1?dib=eyJ2IjoiMSJ9.iM2dGT47yCIAhd358-mJsLg6WbSZrU_Oi-cFjKmouzeuAKE81UK7Rr2C6sziWtsU2JdgSbVh7c2KrSzZSuV3BmM-e-VEE2nFKlcod16tv9Zfza2ydrcLZ5Box6BHWjj4GGHwTEG1Zjtk31jNkXO07bcZGSZHWwoLdhYyrVP8lWfcVw-JvzF72cy2Ouf-Tzt14D_hJ4pNPugimBS_r8usqMNpdFpUcBXRaxfmeacDUaU.YmWF5TZCLsrspj6KN51mNnqGkM5Ls4eASTcfkeJ9yRg&dib_tag=se&keywords=love+you+like+no+otter&qid=1720588521&sr=8-1#reviewsMedley";

export const LEGACY_SITE_REDIRECTS: SiteRedirect[] = [
  { source: "/bookreview", destination: amazonBookReviewsUrl, permanent: true },
  { source: "/tipjar", destination: "https://thequietachievr.kit.com/products/tip-jar", permanent: true },
  { source: "/amazon", destination: "https://mybook.to/thequietachiever/opt/1?iguid=xLjtcoXHrU-ZJo3Vz-0k1Q", permanent: true },
  { source: "/newsletter", destination: "https://www.thequietachievr.com/#newsletter", permanent: true },
  { source: "/convinceyourboss", destination: "https://www.convinceyourboss.com/", permanent: true },
  { source: "/toovaluabletolose", destination: "https://www.toovaluabletolose.com/", permanent: true },
  { source: "/meetconvince", destination: "https://calendar.app.google/YGkqSkuNjCGKhic5A", permanent: true },
  { source: "/meettoovaluable", destination: "https://calendar.app.google/G43SJXZsECYMP8xaA", permanent: true },
  { source: "/freest", destination: "https://calendar.app.google/UXWV9DyHqgPDiXqZ7", permanent: true },
  { source: "/chemistrycall", destination: "https://calendar.app.google/P2WJMi69ayBH8mFQ8", permanent: true },
  { source: "/deepdive", destination: "https://calendar.app.google/ci4Ep8unAXZHGxhm9", permanent: true },
  { source: "/coachingsession", destination: "https://calendar.app.google/MWQDadagbKhXZeyz5", permanent: true },
  { source: "/followonlinkedin", destination: "https://www.linkedin.com/in/timyeo/", permanent: true },
  { source: "/youtube", destination: "https://www.youtube.com/@thequietachievr?sub_confirmation=1", permanent: true },
  {
    source: "/speakerbio",
    destination:
      "https://docs.google.com/document/d/1Fr3IjH0RIn8YzR8MWHUT-ZyLlACqhGTg6sn1GLBSSD0/edit?usp=sharing",
    permanent: true,
  },
  { source: "/proposal", destination: "https://youtu.be/ACvWsSzJ3ns", permanent: true },
  { source: "/storyofyou", destination: "https://youtu.be/g7L9x1J8SI4", permanent: true },
  { source: "/meetlarryandtim", destination: "https://calendar.app.google/ChY14tzQHX6Btvik7", permanent: true },
  {
    source: "/applylarryandtim",
    destination:
      "https://docs.google.com/forms/d/e/1FAIpQLSdfZ9iDHi22mNxI2vh1KwinaqgGJCuKtflCGhNAncaVz3sBnw/viewform?usp=sharing&ouid=113998785391257342366",
    permanent: true,
  },
  { source: "/applyforcoaching", destination: "https://forms.gle/3NDnX989HwCbMeLQA", permanent: true },
  { source: "/write-a-review", destination: "https://forms.gle/P3q28mSRBCz5ttMYA", permanent: true },
  { source: "/research", destination: "https://calendar.app.google/zpVsNckekLmVE3uX7", permanent: true },
  {
    source: "/freechapter",
    destination:
      "https://watery-crustacean-f88.notion.site/The-Quiet-Achiever-Book-Free-Chapter-Tiny-Habits-Checklist-91d073990e084e79b5f3a10e03fddcd2",
    permanent: true,
  },
  {
    source: "/speakingfororganisers",
    destination:
      "https://watery-crustacean-f88.notion.site/Speaking-for-event-organisers-e4dc6e4cf7db472c901150b3b1d199b4",
    permanent: true,
  },
  { source: "/discoverycall", destination: "https://calendar.app.google/P2WJMi69ayBH8mFQ8", permanent: true },
  {
    source: "/approov",
    destination: "https://www.notion.so/Proposal-e2605a306a024ac48d3d8ebadbf3539e",
    permanent: true,
  },
  { source: "/masterclass", destination: "https://luma.com/m2fdcuh5", permanent: true },
  { source: "/masterclassreplay", destination: "https://youtube.com/live/-j6DIZx628Q", permanent: true },
  { source: "/masterclasslinkedin", destination: "https://www.linkedin.com/events/7483755299858825216?viewAsMember=true", permanent: true },
  { source: "/300k", destination: "https://calendar.app.google/djuSbPXPWza8hQPP6", permanent: true },
  { source: "/giveaway", destination: "https://calendar.app.google/NpPTkc4a6ZbvoNnDA", permanent: true },
];
