import type { Metadata } from "next";
import { AboutLandingPage } from "@/components/about/about-landing-page";

export const metadata: Metadata = {
  title: "Meet Tim Yeo | The Quiet Achiever",
  description:
    "Tim Yeo is the author of and chief introvert at The Quiet Achiever. Best known for saying complex things simply.",
  openGraph: {
    title: "Meet Tim Yeo — The Quiet Achiever",
    description:
      "Being an introvert in a world that desires the extrovert ideal is hard. There is a better way — and you don't have to do it alone.",
    images: [{ url: "/assets/about-hero.jpg" }],
  },
};

export default function AboutPage() {
  return <AboutLandingPage />;
}
