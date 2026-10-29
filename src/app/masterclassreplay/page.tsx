import type { Metadata } from "next";
import { MasterclassReplayPage } from "@/components/masterclass/masterclass-replay-page";

export const metadata: Metadata = {
  title: "Masterclass Replay | Tim Yeo",
  description:
    "Get the free masterclass replay: How I went from overlooked to $300k Principal & Leadership Roles.",
};

const YOUTUBE_REPLAY_URL = "https://youtu.be/vgsnCR-8ezE";

export default function MasterclassReplayRoute() {
  return (
    <MasterclassReplayPage
      successRedirectUrl={YOUTUBE_REPLAY_URL}
      description="Enter your email in the form — you’ll be taken to the replay right after."
    />
  );
}
