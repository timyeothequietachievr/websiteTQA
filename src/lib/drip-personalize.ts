import interests from "../../infra/ghost-newsletter/config/interests.json";
import { buildUnsubscribeUrl } from "@/lib/unsubscribe-token";

type InterestSlug = keyof typeof interests;

const CTA_PATHS: Record<string, string> = Object.fromEntries(
  Object.entries(interests).map(([slug, cfg]) => [slug, cfg.redirectPath]),
);

function getSiteUrl(): string {
  return (
    process.env.SITE_URL?.replace(/\/$/, "") ||
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://websitetqa.thequietachievr.com"
  );
}

export function personalizeDripHtml(
  html: string,
  options: {
    email: string;
    name?: string;
    memberId?: string;
    ctaInterest?: string;
  },
): string {
  const siteUrl = getSiteUrl();
  const name = options.name?.trim() || "there";
  const interest = options.ctaInterest?.trim() as InterestSlug | undefined;
  const ctaPath = interest && interest in CTA_PATHS ? CTA_PATHS[interest] : "/";
  const ctaLink = `${siteUrl}${ctaPath.startsWith("/") ? ctaPath : `/${ctaPath}`}`;
  const unsubscribeUrl = buildUnsubscribeUrl(options.email, siteUrl);

  return html
    .replaceAll("{{name}}", name)
    .replaceAll("{{cta_link}}", ctaLink)
    .replaceAll("{{unsubscribe_url}}", unsubscribeUrl);
}
