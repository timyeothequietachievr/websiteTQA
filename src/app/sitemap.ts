import type { MetadataRoute } from "next";
import { PLAYBOOK_SLUGS } from "@/lib/playbooks";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thequietachievr.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/coaching",
    "/book",
    "/about",
    "/speaking",
    "/speakerkit",
    "/podcast",
    "/free-resources",
    "/30-habits-in-30-days",
    "/playbooks",
    "/toni",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...PLAYBOOK_SLUGS.map((slug) => ({
      url: `${SITE_URL}/playbooks/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
