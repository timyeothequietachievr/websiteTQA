import type { Metadata } from "next";
import { CoachingLandingPage } from "@/components/coaching/coaching-landing-page";

export const metadata: Metadata = {
  title: "Coach for quiet achievers | Tim Yeo",
  description:
    "1:1 coaching for introverts and quiet achievers who want to be seen and heard at work without pretending to be extroverts. Book a free 30-min discovery call.",
  openGraph: {
    title: "Coach for quiet achievers — Tim Yeo",
    description:
      "Coached 1,000+ quiet achievers since 2021. Personalised, practical coaching for leaders in loud rooms.",
  },
};

export default function CoachingPage() {
  return <CoachingLandingPage />;
}
