import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token"); // Retrieve the JWT from cookies
  const { pathname } = req.nextUrl;

  // If the route is the root path
  if (pathname === "/") {
    // Redirect to dashboard if authenticated, otherwise to home
    return token
      ? NextResponse.redirect(new URL("/dashboard", req.url))
      : NextResponse.redirect(new URL("/home", req.url));
  }

  // Define public and protected routes
  const publicRoutes = [
    "/home",
    "/login",
    "/register-user",
    "/register-org",
    "/verify-email",
    "/forgot-password",
    "/reset-password",
  ];
  const protectedRoutes = ["/onboarding", "/dashboard"];

  // If the user is authenticated and visits public routes, redirect to dashboard
  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // If the user is not authenticated and visits protected routes, redirect to login
  if (!token && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
