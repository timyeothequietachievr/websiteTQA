import type { Metadata } from "next";
import { CoachingNewBadgeOptionsGallery } from "@/components/coaching/coaching-new-badge-gallery";
import { Navigation } from "@/components/revamp/navigation";

export const metadata: Metadata = {
  title: "NEW badge options | Tim Yeo",
  robots: { index: false, follow: false },
};

export default function CoachingNewBadgeOptionsPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navigation hideNavLinks ctaLabel="Back to coaching" ctaHref="/coaching" />
      <main>
        <CoachingNewBadgeOptionsGallery />
      </main>
    </div>
  );
}
