import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

type RouteContext = { params: Promise<{ id: string }> };

const TEMPLATE_DIR = path.join(
  process.cwd(),
  "infra/ghost-newsletter/email-templates",
);

const TEMPLATE_ID = /^[a-z0-9-]+$/;

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  if (!TEMPLATE_ID.test(id)) {
    return NextResponse.json({ error: "Invalid template id" }, { status: 400 });
  }

  try {
    const filePath = path.join(TEMPLATE_DIR, `${id}.html`);
    const html = await readFile(filePath, "utf8");
    return NextResponse.json({ id, html });
  } catch {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }
}
