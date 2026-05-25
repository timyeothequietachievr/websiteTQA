import { NextRequest, NextResponse } from "next/server";
import { createPlaybookContact } from "@/lib/emailoctopus";
import {
  appendPlaybookTagToContact,
  createCrmContact,
  deriveContactName,
  findCrmContactByEmail,
  formatPlaybookCrmTag,
  isNotionCrmConfigured,
} from "@/lib/notion/crm";
import { resolvePlaybook } from "@/lib/playbooks/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type AccessBody = {
  email?: string;
  slug?: string;
  firstBrowserAccess?: boolean;
};

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as AccessBody | null;
  const slug = body?.slug?.trim() ?? "";
  const email = body?.email?.trim().toLowerCase() ?? "";
  const firstBrowserAccess = Boolean(body?.firstBrowserAccess);

  const playbook = resolvePlaybook(slug);
  if (!playbook) {
    return NextResponse.json({ error: "Playbook not found." }, { status: 404 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      {
        needsEmail: true,
        slug: playbook.slug,
        title: playbook.title,
        path: playbook.path,
      },
      { status: 400 },
    );
  }

  const tagLine = formatPlaybookCrmTag(playbook.slug, playbook.title);

  if (!isNotionCrmConfigured()) {
    return NextResponse.json(
      { error: "Playbook signup is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  try {
    let contact = await findCrmContactByEmail(email);
    const isNewContact = !contact;

    if (!contact) {
      contact = await createCrmContact({
        email,
        displayName: deriveContactName(email),
        playbookTagLine: tagLine,
      });
    } else {
      await appendPlaybookTagToContact(contact, tagLine);
    }

    if (firstBrowserAccess) {
      const eo = await createPlaybookContact(email, playbook.slug);
      if (!eo.ok) {
        return NextResponse.json({ error: eo.message }, { status: 502 });
      }
    }

    return NextResponse.json({
      ok: true,
      redirectUrl: playbook.path,
      publicUrl: playbook.publicUrl,
      firstAccess: isNewContact || firstBrowserAccess,
      email,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Something went wrong.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
