import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaybookPage } from "@/components/playbooks/playbook-page";
import { getPlaybookBySlug, PLAYBOOK_SLUGS } from "@/lib/playbooks";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PLAYBOOK_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const playbook = getPlaybookBySlug(slug);
  if (!playbook) return { title: "Playbook | Tim Yeo" };
  return {
    title: `${playbook.shortTitle} | Tim Yeo — The Quiet Achiever`,
    description: playbook.description,
  };
}

export default async function PlaybookDetailPage({ params }: Props) {
  const { slug } = await params;
  const playbook = getPlaybookBySlug(slug);
  if (!playbook) notFound();
  return <PlaybookPage playbook={playbook} />;
}
