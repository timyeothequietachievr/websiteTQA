import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Quiet Achiever — Tim Yeo",
  description:
    "Tiny habits for quiet achievers to have impact at work without pretending to be extroverts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
