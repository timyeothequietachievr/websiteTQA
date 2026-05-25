import type { Metadata } from "next";
import { PlaybooksLandingPage } from "@/components/playbooks/playbooks-landing-page";

export const metadata: Metadata = {
  title: "Playbooks | Tim Yeo — The Quiet Achiever",
  description:
    "Free playbooks for quiet achievers and introverts at work — networking, visibility, difficult conversations, interviews, and more.",
};

export default function PlaybooksPage() {
  return <PlaybooksLandingPage />;
}
