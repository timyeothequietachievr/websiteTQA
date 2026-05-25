import { getPlaybookBySlug } from "@/lib/playbooks";

export function getPlaybookPath(slug: string) {
  return `/playbooks/${slug}`;
}

export function getPlaybookPublicUrl(slug: string) {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    process.env.VERCEL_URL?.replace(/\/$/, "") ||
    "https://www.thequietachievr.com";
  const origin = base.startsWith("http") ? base : `https://${base}`;
  return `${origin}${getPlaybookPath(slug)}`;
}

export function resolvePlaybook(slug: string) {
  const playbook = getPlaybookBySlug(slug);
  if (!playbook) return null;
  return {
    slug: playbook.slug,
    title: playbook.shortTitle,
    path: getPlaybookPath(playbook.slug),
    publicUrl: getPlaybookPublicUrl(playbook.slug),
  };
}
