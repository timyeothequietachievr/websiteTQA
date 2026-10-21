import type { Metadata } from "next";
import { MasterclassLandingPage } from "@/components/masterclass/masterclass-landing-page";
import { MASTERCLASS_LANDING } from "@/lib/masterclass-landing-content";

const { title, description } = MASTERCLASS_LANDING.meta;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function MasterclassRoute() {
  return <MasterclassLandingPage />;
}
