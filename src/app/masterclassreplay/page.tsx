import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Masterclass Replay | Tim Yeo",
  description:
    "Get the free masterclass replay: How I went from overlooked to $300k Principal & Leadership Roles.",
};

/** Canonical replay gate is now /masterclass (EO popup → YouTube). */
export default function MasterclassReplayRoute() {
  redirect("/masterclass");
}
