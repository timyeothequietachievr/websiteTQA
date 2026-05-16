import type { Metadata } from "next";
import { BookLandingPage } from "@/components/book/book-landing-page";

export const metadata: Metadata = {
  title: "The Quiet Achiever — Buy the book | Tim Yeo",
  description:
    "Tiny habits to have impact at work without pretending to be an extrovert. Signed hardcover, paperback, eBook, and audiobook narrated by Tim Yeo.",
  openGraph: {
    title: "The Quiet Achiever — Buy the book",
    description:
      "A practical playbook for introverts and quiet achievers who want to be seen, heard, and promoted.",
    images: [{ url: "/assets/book-cover.jpg" }],
  },
};

export default function BookPage() {
  return <BookLandingPage />;
}
