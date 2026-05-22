import type { Metadata } from "next";
import { PodcastLandingPage } from "@/components/podcast/podcast-landing-page";

export const metadata: Metadata = {
  title: "Podcast & interviews | Tim Yeo",
  description:
    "Watch and listen to Tim Yeo on podcasts and video interviews — quiet leadership, introverts at work, and The Quiet Achiever. All free.",
  openGraph: {
    title: "Podcasts. Videos. Articles. — Tim Yeo",
    description: "Tim on other people's podcasts — watch, listen, and read online, all free.",
  },
};

export default function PodcastPage() {
  return <PodcastLandingPage />;
}
