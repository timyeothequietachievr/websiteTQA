import type { Metadata } from "next";
import { Suspense } from "react";
import { GoogleAnalyticsProvider } from "@/components/analytics/google-analytics-provider";
import { PostHogProvider } from "@/components/analytics/posthog-provider";
import "./globals.css";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thequietachievr.com").replace(
  /\/$/,
  "",
);

const siteDescription =
  "I help quiet achievers have impact at work — without pretending to be an extrovert. Coaching, a book, Quiet Leadership School, and practical tiny habits.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tim Yeo — Career Coach for Asian Men in Tech",
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "The Quiet Achiever",
    title: "Tim Yeo — Career Coach for Asian Men in Tech",
    description: siteDescription,
    images: [{ url: "/assets/tim-masthead-bc.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tim Yeo — Career Coach for Asian Men in Tech",
    description: siteDescription,
    images: ["/assets/tim-masthead-bc.jpg"],
  },
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
          <GoogleAnalyticsProvider>
            <PostHogProvider>{children}</PostHogProvider>
          </GoogleAnalyticsProvider>
        </Suspense>
      </body>
    </html>
  );
}
