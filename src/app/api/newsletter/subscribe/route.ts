import { NextResponse } from "next/server";
import { createNewsletterContact, isNewsletterEmailOctopusConfigured } from "@/lib/emailoctopus";
import { isNotionCrmConfigured, upsertNewsletterSubscriberCrm } from "@/lib/notion-crm";
import { isNewsletterSignupEnabled } from "@/lib/site-features";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!isNewsletterSignupEnabled()) {
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

  if (!isNewsletterEmailOctopusConfigured()) {
    return NextResponse.json({ error: "Newsletter signup is not configured yet" }, { status: 503 });
  }

  try {
    const result = await createNewsletterContact(email, name);

    if (!result.ok) {
      return NextResponse.json({ error: result.message }, { status: 502 });
    }

    let crm: "created" | "updated" | false = false;
    if (isNotionCrmConfigured()) {
      try {
        crm = await upsertNewsletterSubscriberCrm({ email, name });
      } catch (crmError) {
        console.error("[api/newsletter/subscribe] CRM sync failed:", crmError);
      }
    }

    return NextResponse.json({
      ok: true,
      status: result.status,
      alreadyExists: result.alreadyExists ?? false,
      crm,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Subscribe failed";
    console.error("[api/newsletter/subscribe]", message);
    return NextResponse.json({ error: "Could not subscribe. Try again later." }, { status: 502 });
  }
}
