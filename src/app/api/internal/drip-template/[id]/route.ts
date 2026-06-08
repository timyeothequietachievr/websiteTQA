import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { personalizeDripHtml } from "@/lib/drip-personalize";
import { verifyAdminBearer } from "@/lib/unsubscribe-token";

type RouteContext = { params: Promise<{ id: string }> };

const TEMPLATE_DIR = path.join(
  process.cwd(),
  "infra/ghost-newsletter/email-templates",
);

const TEMPLATE_ID = /^[a-z0-9-]+$/;

export async function GET(request: Request, context: RouteContext) {
  const { id } = await context.params;
  if (!TEMPLATE_ID.test(id)) {
    return NextResponse.json({ error: "Invalid template id" }, { status: 400 });
  }

  try {
    const filePath = path.join(TEMPLATE_DIR, `${id}.html`);
    let html = await readFile(filePath, "utf8");

    const url = new URL(request.url);
    const email = url.searchParams.get("email")?.trim().toLowerCase() ?? "";
    const wantsPersonalize = Boolean(email);

    if (wantsPersonalize) {
      if (!verifyAdminBearer(request)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      html = personalizeDripHtml(html, {
        email,
        name: url.searchParams.get("name") ?? undefined,
        memberId: url.searchParams.get("memberId") ?? undefined,
        ctaInterest: url.searchParams.get("ctaInterest") ?? undefined,
      });
    }

    return NextResponse.json({ id, html });
  } catch {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }
}
