import type { Metadata } from "next";
import { MasterclassReplayPage } from "@/components/masterclass/masterclass-replay-page";

export const metadata: Metadata = {
  title: "Masterclass Replay (Aug 26) | Tim Yeo",
  description:
    "Get the free masterclass replay: How I went from overlooked to $300k Principal & Leadership Roles.",
};

const YOUTUBE_REPLAY_URL = "https://youtu.be/Vbw96ZcGR70";

export default function MasterclassReplayAug26Route() {
  return (
    <MasterclassReplayPage
      successRedirectUrl={YOUTUBE_REPLAY_URL}
      eyebrow="Free masterclass replay · Aug 26"
      title="Watch Masterclass: How I went from overlooked to $300k Principal & Leadership Roles"
      description="Enter your email in the form — you’ll be taken to the replay right after."
    />
  );
}
