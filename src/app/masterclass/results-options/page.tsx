import type { Metadata } from "next";
import { MasterclassResultsOptionsGallery } from "@/components/masterclass/masterclass-results-options";
import { Navigation } from "@/components/revamp/navigation";

export const metadata: Metadata = {
  title: "Masterclass results colour styles | Tim Yeo",
  robots: { index: false, follow: false },
};

export default function MasterclassResultsOptionsPage() {
  return (
    <div className="min-h-full bg-paper">
      <Navigation hideNavLinks ctaLabel="Back to masterclass" ctaHref="/masterclass" />
      <main>
        <MasterclassResultsOptionsGallery />
      </main>
    </div>
  );
}
