import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token"); // Retrieve the JWT from cookies
  // Get user type from JWT if available (you'll need to implement this)
  const userTypeCookie = req.cookies.get("user-type"); // 'volunteer' or 'organization'
  const userType = userTypeCookie?.value;

  const { pathname } = req.nextUrl;

  // If the route is the root path
  if (pathname === "/") {
    // Redirect to dashboard if authenticated, otherwise to home
    if (!token) {
      return NextResponse.redirect(new URL("/home", req.url));
    }

    if (!userType) {
      return NextResponse.redirect(new URL("/home", req.url));
    }

    // Redirect based on user type
    return userType === "organization"
      ? NextResponse.redirect(new URL("/organization/overview", req.url))
      : NextResponse.redirect(new URL("/volunteer/overview", req.url));
  }

  // Define public routes
  const publicRoutes = [
    "/home",
    "/login",
    "/register-user",
    "/register-org",
    "/verify-email",
    "/forgot-password",
    "/reset-password",
  ];

  // Check route types by prefix
  const isVolunteerRoute = pathname.startsWith("/volunteer/");
  const isOrgRoute = pathname.startsWith("/organization/");
  const isProtectedRoute =
    isVolunteerRoute || isOrgRoute || pathname === "/onboarding";

  console.log(isProtectedRoute, isOrgRoute, isVolunteerRoute, userType);

  // If the user is authenticated and visits public routes, redirect to appropriate dashboard
  if (token && publicRoutes.includes(pathname)) {
    return userType === "organization"
      ? NextResponse.redirect(new URL("/organization/overview", req.url))
      : NextResponse.redirect(new URL("/volunteer/overview", req.url));
  }

  // If user is not authenticated and visits protected routes, redirect to login
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  // If volunteer tries to access org routes
  if (token && userType === "volunteer" && isOrgRoute) {
    return NextResponse.redirect(new URL("/volunteer/overview", req.url));
  }

  // If organization tries to access volunteer routes
  if (token && userType === "organization" && isVolunteerRoute) {
    return NextResponse.redirect(new URL("/organization/overview", req.url));
  }

  return NextResponse.next();
}

// Apply middleware to routes
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
