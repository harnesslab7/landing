import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, locales } from "./lib/i18n";

// Cookie (manual choice) wins, then the browser's Accept-Language, then English.
function preferredLocale(req: NextRequest) {
  const cookie = req.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;

  const header = req.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const code = part.split(";")[0].trim().toLowerCase().split("-")[0];
    if (isLocale(code)) return code;
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/${preferredLocale(req)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except /api, Next internals and files with an extension.
  matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};
