import type { Metadata } from "next";
import { TestimonialsLandingPage } from "@/components/testimonials/testimonials-landing-page";

export const metadata: Metadata = {
  title: "Testimonials | The Quiet Achiever",
  description:
    "Reviews and testimonials from coaching clients, course participants, and Quiet Achiever readers — quiet professionals and leaders in tech.",
  openGraph: {
    title: "Testimonials — The Quiet Achiever",
    description:
      "Named feedback from quiet achievers Tim Yeo has coached, taught, and written for.",
  },
};

export default function TestimonialsPage() {
  return <TestimonialsLandingPage />;
}
