"use client";

import { useCallback, useEffect, useState } from "react";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { BookHero } from "@/components/sections/book-hero";
import { FeatureSection } from "@/components/sections/feature";
import { IntroBand } from "@/components/sections/intro-band";
import { Masthead } from "@/components/sections/masthead";
import { PricingSection } from "@/components/sections/pricing";
import { TestimonialSection } from "@/components/sections/testimonial";
import { TopicsGrid } from "@/components/sections/topics-grid";

function Toast({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 2400);
    return () => clearTimeout(timer);
  }, [message, onDismiss]);

  return (
    <div
      role="status"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-md bg-ink-deep px-5 py-3 text-sm text-paper shadow-lg"
    >
      {message}
    </div>
  );
}

export function HomePage() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((message: string) => {
    setToast(message);
  }, []);

  const dismissToast = useCallback(() => setToast(null), []);

  const scrollToPricing = useCallback(() => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    showToast("Scrolling to pricing…");
  }, [showToast]);

  return (
    <>
      <Navigation
        onLogin={() => showToast("Log in — would redirect to Circle.so")}
      />
      <main>
        <Masthead
          onBuy={scrollToPricing}
          onWatch={() => showToast("▶︎ Playing intro video")}
        />
        <BookHero onBuy={scrollToPricing} />
        <IntroBand />
        <TopicsGrid />
        <TestimonialSection />
        <FeatureSection />
        <div id="pricing">
          <PricingSection
            onBuy={(name) => showToast(`Add ${name} to cart`)}
          />
        </div>
      </main>
      <Footer />
      {toast && <Toast message={toast} onDismiss={dismissToast} />}
    </>
  );
}
