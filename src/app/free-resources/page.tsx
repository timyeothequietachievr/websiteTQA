import type { Metadata } from "next";
import { FreeResourcesLandingPage } from "@/components/free-resources/free-resources-landing-page";

export const metadata: Metadata = {
  title: "Free Resources | The Quiet Achiever",
  description:
    "Podcast episodes, playbooks, and the newsletter — free resources for quiet achievers and introverts at work.",
};

export default function FreeResourcesPage() {
  return <FreeResourcesLandingPage />;
}
