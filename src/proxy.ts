import { NextResponse, type NextRequest } from "next/server";

const PROTECTED_ROUTE_LABEL = "The Quiet Achiever Design System";

function unauthorized() {
  return new NextResponse("Password required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${PROTECTED_ROUTE_LABEL}", charset="UTF-8"`,
      "Cache-Control": "no-store",
    },
  });
}

function forbidden(message: string) {
  return new NextResponse(message, {
    status: 503,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function passwordFromAuthorization(authorization: string | null) {
  if (!authorization?.startsWith("Basic ")) {
    return null;
  }

  try {
    const decoded = Buffer.from(authorization.slice("Basic ".length), "base64").toString(
      "utf8",
    );
    const separator = decoded.indexOf(":");
    return separator === -1 ? null : decoded.slice(separator + 1);
  } catch {
    return null;
  }
}

export function proxy(request: NextRequest) {
  const password = process.env.DESIGN_SYSTEM_PASSWORD;

  if (!password) {
    if (process.env.NODE_ENV === "development") {
      return NextResponse.next();
    }

    return forbidden("Design system password is not configured.");
  }

  const providedPassword = passwordFromAuthorization(
    request.headers.get("authorization"),
  );

  if (providedPassword !== password) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/design-system/:path*",
    "/visual-library/:path*",
    "/component-catalog.json",
    "/preview/:path*",
  ],
};
