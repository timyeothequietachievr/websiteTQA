import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

const description =
  "Be seen, be heard, and get the credit you deserve — without pretending to be an extrovert. 1:1 coaching, The Quiet Achiever book, and Quiet Leadership School.";

export const metadata: Metadata = {
  title: "Tim Yeo — Career Coach for Asian Men in Tech",
  description,
  openGraph: {
    title: "Tim Yeo — Career Coach for Asian Men in Tech",
    description,
    images: [{ url: "/assets/og.jpg", width: 1200, height: 630, alt: "Tim Yeo — The Quiet Achiever" }],
  },
};

export default function Home() {
  return <HomePage />;
}
