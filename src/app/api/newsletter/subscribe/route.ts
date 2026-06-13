import { NextResponse } from "next/server";
import { getGhostAdminConfig, subscribeGhostMember } from "@/lib/ghost-admin";
import { isNotionCrmConfigured, upsertNewsletterSubscriberCrm } from "@/lib/notion-crm";
import { SITE_FEATURES } from "@/lib/site-features";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (SITE_FEATURES.newsletterComingSoon) {
    return NextResponse.json({ error: "Newsletter signup is not open yet" }, { status: 503 });
  }

  let body: { email?: string; name?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const name = body.name?.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  if (!getGhostAdminConfig()) {
    return NextResponse.json({ error: "Newsletter signup is not configured yet" }, { status: 503 });
  }

  try {
    const member = await subscribeGhostMember(email, name);

    let crm: "created" | "updated" | false = false;
    if (isNotionCrmConfigured()) {
      try {
        crm = await upsertNewsletterSubscriberCrm({
          email,
          ghostMemberId: member.id,
          name,
        });
      } catch (crmError) {
        console.error("[api/newsletter/subscribe] CRM sync failed:", crmError);
      }
    }

    return NextResponse.json({ ok: true, memberId: member.id, crm });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Subscribe failed";
    console.error("[api/newsletter/subscribe]", message);
    return NextResponse.json({ error: "Could not subscribe. Try again later." }, { status: 502 });
  }
}
