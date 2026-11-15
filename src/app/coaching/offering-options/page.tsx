import type { Metadata } from "next";
import { CoachingOfferingOptionsGallery } from "@/components/coaching/coaching-offering-section";
import { Navigation } from "@/components/revamp/navigation";

export const metadata: Metadata = {
  title: "Coaching offering colour styles | Tim Yeo",
  robots: { index: false, follow: false },
};

export default function CoachingOfferingOptionsPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navigation hideNavLinks ctaLabel="Back to coaching" ctaHref="/coaching" />
      <main>
        <CoachingOfferingOptionsGallery />
      </main>
    </div>
  );
}
