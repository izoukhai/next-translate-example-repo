// middleware.ts
import { NextMiddleware, NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import i18n from "./i18n";

const PUBLIC_FILE = /\.(.*)$/;
const NEXT_FILE = /((?!_next).*)/;

const pathnameIsMissingLocale = (pathname: string) => {
  return i18n.locales.every(
    (loc) => !pathname.startsWith(`/${loc}/`) && pathname !== `/${loc}`
  );
};

const shouldProceed = (pathname: string) => {
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return false;
  }
  return true;
};

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  /** Ignore non-page paths */
  if (shouldProceed(pathname)) {
    if (request.nextUrl.locale === "default") {
      const response = NextResponse.redirect(
        new URL(`${"fr"}${request.nextUrl.pathname}`, request.url)
      );
      return response;
    }

    request.nextUrl.searchParams.set("lang", request.nextUrl.locale);
    return NextResponse.rewrite(request.nextUrl);
  }
}
