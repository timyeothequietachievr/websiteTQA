import { NextRequest } from "next/server";
import { appendToniLog } from "@/lib/toni/logging";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATINGS = new Set(["helpful", "not-useful", "not-tim", "ask-tim"]);

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return new Response("Invalid JSON", { status: 400 });
  }

  const rating = "rating" in body ? String(body.rating) : "";
  if (!RATINGS.has(rating)) {
    return new Response("Invalid rating", { status: 400 });
  }

  await appendToniLog("feedback.jsonl", body);
  return Response.json({ ok: true });
}
