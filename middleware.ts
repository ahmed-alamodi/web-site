import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { NextResponse } from "next/server";

const headers = { "accept-language": "en-US,en;q=0.5" };
const languages = new Negotiator({ headers }).languages();
const locales = ["ar-SA"];
const defaultLocale = "ar-SA";

match(languages, locales, defaultLocale); // -> 'en-US'

// Get the preferred locale, similar to the above or using a library
function getLocale() {
  // This is a placeholder implementation
  // You should replace this with your actual locale detection logic
  return defaultLocale;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function middleware(request): NextResponse | undefined {
  console.log("🚀 > request:", request);
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}x`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale();
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
