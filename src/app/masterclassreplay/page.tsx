import type { Metadata } from "next";
import { MasterclassReplayPage } from "@/components/masterclass/masterclass-replay-page";
import { MASTERCLASS_REPLAY_YOUTUBE_URL } from "@/lib/masterclass-replay-eo";

export const metadata: Metadata = {
  title: "Masterclass Replay | Tim Yeo",
  description:
    "Get the free masterclass replay: How I went from overlooked to $300k Principal & Leadership Roles.",
};

export default function MasterclassReplayRoute() {
  return (
    <MasterclassReplayPage
      successRedirectUrl={MASTERCLASS_REPLAY_YOUTUBE_URL}
      description="Enter your email in the form — you’ll be taken to the replay right after."
    />
  );
}
