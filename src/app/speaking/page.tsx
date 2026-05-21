import type { Metadata } from "next";
import { SpeakingLandingPage } from "@/components/speaking/speaking-landing-page";

export const metadata: Metadata = {
  title: "Speaking — Book Tim Yeo | Tim Yeo",
  description:
    "Keynotes and firesides on quiet leadership for introverts. Book Tim Yeo for design, product, and leadership events.",
  openGraph: {
    title: "Book Tim Yeo to speak",
    description:
      "Practical talks on quiet leadership — designed so your quietest attendees feel included.",
    images: [{ url: "/assets/tim-masthead.jpg" }],
  },
};

export default function SpeakingPage() {
  return <SpeakingLandingPage />;
}
