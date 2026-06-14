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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--tqa-ember)]">
              Order confirmed
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
              Thank you for buying the book
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--tqa-ink-soft)]">
              Check your inbox for PayHip download instructions. If you bought the audiobook or
              eBook, your files should arrive within a few minutes.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/book" size="lg">
                Back to the book page
              </Button>
              <Button href="/free-resources" size="lg" variant="secondary">
                Get free resources
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <FooterRev />
    </>
  );
}
