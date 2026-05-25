import type { Metadata } from "next";
import { ThirtyHabitsLandingPage } from "@/components/thirty-habits/thirty-habits-landing-page";

export const metadata: Metadata = {
  title: "30 Habits in 30 Days — Course | Tim Yeo",
  description:
    "Master people skills with confidence, one tiny habit at a time. Buy once, get access, and practise one habit per day from The Quiet Achiever.",
  openGraph: {
    title: "30 Habits in 30 Days",
    description:
      "A guided way to practise tiny habits from The Quiet Achiever — one habit per day, at your own pace.",
    images: [{ url: "/assets/30habits/30habits-howitworks.jpg" }],
  },
};

export default function ThirtyHabitsPage() {
  return <ThirtyHabitsLandingPage />;
}
