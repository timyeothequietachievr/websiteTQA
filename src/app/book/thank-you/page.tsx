import type { Metadata } from "next";
import { Suspense } from "react";
import { BookThankYouPage } from "@/components/book/book-thank-you-page";

export const metadata: Metadata = {
  title: "Thank you for your purchase | The Quiet Achiever",
  description:
    "Your order is confirmed. Check your inbox for delivery details.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookThankYouRoute() {
  return (
    <Suspense fallback={null}>
      <BookThankYouPage />
    </Suspense>
  );
}
