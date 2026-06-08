import { NextResponse } from "next/server";
import { optOutEmail } from "@/lib/newsletter-opt-out";
import { verifyUnsubscribeToken } from "@/lib/unsubscribe-token";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function thankYouHtml(message: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Unsubscribed — The Quiet Achiever</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #f5f0d3; color: #1a1a3a; margin: 0; padding: 48px 24px; }
    main { max-width: 36rem; margin: 0 auto; }
    h1 { font-size: 1.5rem; margin-bottom: 0.75rem; }
    p { line-height: 1.6; }
    a { color: #c45c26; }
  </style>
</head>
<body>
  <main>
    <h1>You’re unsubscribed</h1>
    <p>${message}</p>
    <p><a href="https://websitetqa.thequietachievr.com">Back to the site</a></p>
  </main>
</body>
</html>`;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const email = url.searchParams.get("email")?.trim().toLowerCase() ?? "";
  const exp = url.searchParams.get("exp");
  const sig = url.searchParams.get("sig");

  if (!email || !verifyUnsubscribeToken(email, exp, sig)) {
    return new NextResponse(thankYouHtml("This unsubscribe link is invalid or has expired."), {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  try {
    await optOutEmail(email);
    return new NextResponse(
      thankYouHtml("You won’t receive any more emails from us. Sorry to see you go."),
      { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } },
    );
  } catch (error) {
    console.error("[api/unsubscribe]", error);
    return new NextResponse(thankYouHtml("Something went wrong. Please try again or contact us."), {
      status: 500,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
}
