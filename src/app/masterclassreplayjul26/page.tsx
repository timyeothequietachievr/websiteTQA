import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Masterclass | Tim Yeo",
  description:
    "Free live masterclass: How I went from overlooked to $300k Principal & Leadership Roles.",
};

/** Lead-up period: point old replay gates at the live signup page. */
export default function MasterclassReplayJul26Route() {
  redirect("/masterclass");
}
