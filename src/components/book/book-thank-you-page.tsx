"use client";

import { Navigation } from "@/components/revamp/navigation";
import { FooterRev } from "@/components/revamp/sections-3";
import { Button, Container } from "@/components/revamp/primitives";
import { ConversionTracker } from "@/components/analytics/conversion-tracker";

export function BookThankYouPage() {
  return (
    <>
      <ConversionTracker conversionType="book_purchase" pagePath="/book/thank-you" />
      <Navigation />
      <main className="bg-[var(--tqa-paper)] text-[var(--tqa-ink)]">
        <Container className="py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl">Thank you for your purchase</h1>
            <p className="mt-6 text-lg leading-8 text-[var(--tqa-ink-soft)]">
              Check your inbox. An email should arrive within a few minutes.
            </p>
            <p className="mt-4 text-lg leading-8 text-[var(--tqa-ink-soft)]">
              No email? Contact{" "}
              <a
                href="mailto:support@thequietachievr.com"
                className="font-semibold text-[var(--tqa-ember)] underline underline-offset-4"
              >
                support@thequietachievr.com
              </a>
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/" size="lg">
                Back to homepage
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <FooterRev />
    </>
  );
}
