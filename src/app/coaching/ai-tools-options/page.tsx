import type { Metadata } from "next";
import { CoachingAiToolsOptionsGallery } from "@/components/coaching/coaching-ai-tools-options";
import { Navigation } from "@/components/revamp/navigation";

export const metadata: Metadata = {
  title: "AI tools layout options | Tim Yeo",
  robots: { index: false, follow: false },
};

export default function CoachingAiToolsOptionsPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navigation hideNavLinks ctaLabel="Back to coaching" ctaHref="/coaching" />
      <main>
        <CoachingAiToolsOptionsGallery />
      </main>
    </div>
  );
}
