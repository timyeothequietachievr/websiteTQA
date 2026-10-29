import { NextResponse } from "next/server";
import {
  createMasterclassReplayContact,
  isMasterclassEmailOctopusConfigured,
} from "@/lib/emailoctopus";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MASTERCLASS_REPLAY_LINKS = {
  youtube: "https://youtube.com/live/-j6DIZx628Q",
  linkedin: "https://www.thequietachievr.com/masterclasslinkedin",
} as const;

export async function POST(request: Request) {
  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase() ?? "";
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  if (!isMasterclassEmailOctopusConfigured()) {
    return NextResponse.json(
      { error: "Masterclass signup is not configured yet" },
      { status: 503 },
    );
  }

  try {
    const result = await createMasterclassReplayContact(email);
    if (!result.ok) {
      return NextResponse.json({ error: result.message }, { status: 502 });
    }

    return NextResponse.json({
      ok: true,
      status: result.status,
      alreadyExists: result.alreadyExists ?? false,
      links: MASTERCLASS_REPLAY_LINKS,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Subscribe failed";
    console.error("[api/masterclass/replay]", message);
    return NextResponse.json({ error: "Could not subscribe. Try again later." }, { status: 502 });
  }
}
