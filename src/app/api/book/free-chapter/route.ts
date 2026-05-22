import { NextRequest, NextResponse } from "next/server";
import { createFreeChapterContact } from "@/lib/emailoctopus";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as { email?: string } | null;
  const email = body?.email?.trim().toLowerCase() ?? "";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const result = await createFreeChapterContact(email);

  if (!result.ok) {
    const status = result.message.includes("not configured") ? 503 : 502;
    return NextResponse.json({ error: result.message }, { status });
  }

  return NextResponse.json({
    status: result.status,
    alreadyExists: result.alreadyExists ?? false,
    pending: result.status === "PENDING",
  });
}
