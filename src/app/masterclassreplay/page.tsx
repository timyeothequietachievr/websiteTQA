import type { Metadata } from "next";
import { MasterclassReplayPage } from "@/components/masterclass/masterclass-replay-page";

export const metadata: Metadata = {
  title: "Masterclass Replay | Tim Yeo",
  description:
    "Get the free masterclass replay: How I went from overlooked to $300k Principal & Leadership Roles.",
};

export default function MasterclassReplayRoute() {
  return <MasterclassReplayPage />;
}
