import type { Metadata } from "next";
import { SpeakerKitPage } from "@/components/speaking/speaker-kit-page";

export const metadata: Metadata = {
  title: "Speaker kit | Tim Yeo",
  description:
    "Bios, headshots, AV requirements, fees, and programme copy for event organisers booking Tim Yeo.",
  robots: { index: true, follow: true },
};

export default function SpeakerKitRoute() {
  return <SpeakerKitPage />;
}
