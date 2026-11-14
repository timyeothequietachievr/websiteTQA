import type { Metadata } from "next";
import { JobbieLandingPage } from "@/components/jobbie/jobbie-landing-page";
import { JOBBIE_LANDING } from "@/lib/jobbie-landing-content";
import { getJobbiePublicStats } from "@/lib/jobbie-stats";

export const metadata: Metadata = {
  title: JOBBIE_LANDING.meta.title,
  description: JOBBIE_LANDING.meta.description,
};

export default async function JobbiePage() {
  const stats = await getJobbiePublicStats();
  return <JobbieLandingPage stats={stats} />;
}
