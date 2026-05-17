import type { Metadata } from "next";
import { Suspense } from "react";
import { PostHogProvider } from "@/components/analytics/posthog-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tim Yeo — Introvert Coach · Homepage Revamp",
  description:
    "I help quiet achievers have impact at work — without pretending to be an extrovert. Coaching, a book, a school, and practical tiny habits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <PostHogProvider>{children}</PostHogProvider>
        </Suspense>
      </body>
    </html>
  );
}
