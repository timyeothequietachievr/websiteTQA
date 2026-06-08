import { NextResponse } from "next/server";
import { optOutEmail } from "@/lib/newsletter-opt-out";
import { verifyAdminBearer } from "@/lib/unsubscribe-token";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Internal opt-out (n8n Ghost webhook, automations). */
export async function POST(request: Request) {
  if (!verifyAdminBearer(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { email?: string; ghostMemberId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email) {
    return NextResponse.json({ error: "email is required" }, { status: 400 });
  }

  try {
    const result = await optOutEmail(email, { ghostMemberId: body.ghostMemberId });
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    console.error("[api/newsletter/opt-out]", error);
    return NextResponse.json({ error: "Opt-out failed" }, { status: 500 });
  }
}
