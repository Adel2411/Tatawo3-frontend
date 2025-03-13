"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { UserModeToggle } from "./UserModeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Check if user is on dashboard pages to show mode toggle
  const isLoggedIn = pathname.includes("/dashboard");

  return (
    <header className="px-4 md:px-12 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="h-16 flex items-center justify-between w-full">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center p-2">
            <svg
              width="55"
              height="16"
              viewBox="0 0 55 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.8984 12.5938H49.6875V11.3281H51.8984C52.125 11.3281 52.3359 11.2812 52.5312 11.1953C52.7344 11.1094 52.9062 10.9922 53.0547 10.8438C53.1953 10.6953 53.3125 10.5234 53.3984 10.3281C53.4844 10.1328 53.5234 9.92188 53.5234 9.70312L53.5156 6.28906H50.9531V5.01562H53.5156V2.39844H54.7891L54.7969 9.70312C54.7969 10.0859 54.7266 10.4531 54.5781 10.8047C54.4297 11.1641 54.2188 11.4766 53.9453 11.75C53.6719 12.0234 53.3594 12.2344 53.0156 12.375C52.6641 12.5234 52.2891 12.5938 51.8984 12.5938Z"
                fill="#0074CC"
              />
              <path
                d="M45.5234 11.3125C45.75 11.3125 45.9609 11.2734 46.1562 11.1875C46.3594 11.1016 46.5312 10.9844 46.6797 10.8438C46.8203 10.6953 46.9375 10.5234 47.0234 10.3203C47.1094 10.125 47.1484 9.91406 47.1484 9.6875V5.36719C47.1484 5.14062 47.1094 4.92969 47.0234 4.72656C46.9375 4.53125 46.8203 4.35938 46.6797 4.21094C46.5312 4.0625 46.3594 3.94531 46.1562 3.86719C45.9609 3.78125 45.75 3.73438 45.5234 3.73438H37.3906C37.1797 3.73438 36.9766 3.77344 36.7812 3.85938C36.5938 3.9375 36.4219 4.03906 36.2812 4.17969C36.1328 4.3125 36.0156 4.47656 35.9219 4.66406C35.8359 4.84375 35.7812 5.04688 35.7734 5.25781L35.7656 7.16406V11.3203L45.5234 11.3125ZM48.4219 10.1484C48.4219 10.2578 48.4219 10.3359 48.4375 10.3906C48.4375 10.4453 48.4688 10.5156 48.5078 10.6016C48.5703 10.7344 48.6641 10.8594 48.7812 10.9609C49.0234 11.2031 49.3203 11.3203 49.6875 11.3203V12.5859C49.3281 12.5859 49.0078 12.5234 48.7188 12.4062C48.5547 12.3359 48.4062 12.2656 48.2969 12.1875C48.1719 12.1094 48.0469 12.0078 47.9141 11.875L47.7969 11.7812L47.6797 11.6328V11.625C47.6484 11.6641 47.6094 11.6953 47.5703 11.7344C47.2969 12.0078 46.9844 12.2188 46.6406 12.3672C46.2891 12.5156 45.9141 12.5859 45.5234 12.5859H30.6875V11.3203H34.4922V0.515625H35.7812L35.7734 2.94531C35.9297 2.82812 36.1562 2.71875 36.4531 2.61719C36.7578 2.51562 37.0703 2.46875 37.3906 2.46875H45.5234C45.9141 2.46875 46.2891 2.53906 46.6406 2.67969C46.9844 2.82812 47.2969 3.03906 47.5703 3.3125C47.8516 3.58594 48.0625 3.89844 48.2031 4.25C48.3516 4.60156 48.4219 4.96875 48.4219 5.36719V10.1484Z"
                fill="#0074CC"
              />
              <path
                d="M26.8828 11.3203C27.0391 11.3203 27.1953 11.2891 27.3594 11.2266C27.5234 11.1641 27.6641 11.0781 27.7969 10.9609C28.0312 10.7422 28.1484 10.4688 28.1484 10.1484V4.89062C28.1484 4.72656 28.1172 4.57812 28.0625 4.45312C28.0078 4.3125 27.9141 4.19531 27.7969 4.07812C27.5391 3.83594 27.2344 3.71875 26.8828 3.71875H21.8203C21.6484 3.71875 21.4844 3.75 21.3281 3.80469C21.1719 3.85938 21.0312 3.95312 20.9141 4.07812C20.6719 4.30469 20.5547 4.57031 20.5547 4.89062V10.1484C20.5547 10.3281 20.5859 10.4766 20.6406 10.5938C20.7031 10.7188 20.7969 10.8438 20.9141 10.9609C21.1719 11.2031 21.4688 11.3203 21.8203 11.3203H26.8828ZM25.7109 15.0547C25.2656 15.0547 24.7578 15.0547 24.1875 15.0391V13.7969H25.1328C26.5 13.7969 27.2422 13.7812 27.375 13.7344C27.5312 13.6875 27.6719 13.6094 27.7969 13.5C28.0312 13.2812 28.1484 13.0078 28.1484 12.6875V12.2578C27.8984 12.3906 27.5938 12.4922 27.2344 12.5625C27 12.5781 25.1953 12.5859 21.8203 12.5859C21.4609 12.5859 21.1406 12.5234 20.8438 12.4062C20.5625 12.2812 20.2969 12.1094 20.0469 11.8828C19.8125 11.6562 19.6172 11.3906 19.4844 11.0859C19.3516 10.7812 19.2812 10.4688 19.2812 10.1484V4.89062C19.2812 4.5625 19.3438 4.25 19.4688 3.96094C19.6016 3.67188 19.7812 3.40625 20.0312 3.17188C20.2656 2.9375 20.5391 2.75781 20.8438 2.64062C21.1406 2.51562 21.4688 2.45312 21.8203 2.45312H26.8828C27.0625 2.45312 27.2188 2.46875 27.375 2.49219C27.5156 2.51562 27.6719 2.5625 27.8359 2.63281C28.1328 2.75 28.4062 2.92969 28.6641 3.15625C28.8906 3.36719 29.0703 3.625 29.2109 3.9375C29.3516 4.24219 29.4219 4.5625 29.4219 4.89062V10.1484C29.4219 10.3281 29.4531 10.4844 29.5156 10.6094C29.5703 10.7344 29.6641 10.8516 29.7812 10.9609C30.0234 11.2031 30.3203 11.3203 30.6797 11.3203V12.5859C30.4531 12.5859 30.2422 12.5625 30.0312 12.5078C29.9844 12.5 29.9375 12.4844 29.8906 12.4688C29.8516 12.4531 29.7969 12.4297 29.7266 12.4062L29.4219 12.2578V12.6875C29.4219 13.0156 29.3594 13.3281 29.2344 13.625C29.1016 13.9219 28.9141 14.1797 28.6719 14.3984C28.4453 14.6172 28.1797 14.7891 27.8594 14.9219C27.6328 15.0078 26.9141 15.0547 25.7109 15.0547Z"
                fill="#0074CC"
              />
              <path
                d="M12.4609 12.5625H4.22656C3.83594 12.5625 3.46094 12.4922 3.10938 12.3438C2.76562 12.1953 2.45312 11.9844 2.17969 11.7109C1.90625 11.4375 1.69531 11.125 1.54688 10.7734C1.39844 10.4219 1.32812 10.0547 1.32812 9.66406V7.89844C1.32812 7.23438 1.53125 6.64062 1.94531 6.10938C1.53125 5.98438 1.17188 5.77344 0.867188 5.48438C0.585938 5.22656 0.375 4.92188 0.226562 4.58594C0.078125 4.24219 0 3.875 0 3.48438V3.36719C0 2.98438 0.0703125 2.60938 0.21875 2.25781C0.367188 1.90625 0.578125 1.59375 0.851562 1.32031C1.125 1.04688 1.4375 0.835938 1.78906 0.6875C2.14062 0.546875 2.50781 0.46875 2.89844 0.46875H4.07812V1.74219H2.89844C2.67188 1.74219 2.46094 1.78125 2.26562 1.86719C2.07031 1.95312 1.89844 2.07031 1.75 2.21875C1.60938 2.36719 1.49219 2.53906 1.39844 2.73438C1.3125 2.9375 1.27344 3.14844 1.27344 3.36719V3.48438C1.27344 3.69531 1.3125 3.89844 1.39062 4.08594C1.47656 4.26562 1.58594 4.42188 1.73438 4.55469C1.88281 4.6875 2.05469 4.79688 2.25 4.875C2.45312 4.94531 2.66406 4.98438 2.89844 4.98438L18.3438 4.99219V6.26562L4.14062 6.27344C3.92969 6.28906 3.73438 6.33594 3.54688 6.42188C3.35156 6.50781 3.19531 6.625 3.05469 6.77344C2.91406 6.92188 2.80469 7.09375 2.71875 7.28125C2.64062 7.47656 2.60156 7.67969 2.60156 7.89844V9.66406C2.60156 9.89062 2.64062 10.1016 2.72656 10.2969C2.8125 10.5 2.92969 10.6719 3.07031 10.8203C3.21875 10.9609 3.39062 11.0781 3.59375 11.1641C3.78906 11.25 4 11.2891 4.22656 11.2891H12.4609C12.6797 11.2891 12.8906 11.25 13.0859 11.1641C13.2812 11.0781 13.4531 10.9609 13.6016 10.8203C13.75 10.6719 13.8672 10.5 13.9531 10.2969C14.0391 10.1016 14.0859 9.89062 14.0859 9.66406V9.02344H15.3516V9.66406C15.3516 10.0547 15.2812 10.4219 15.1328 10.7734C14.9922 11.125 14.7812 11.4375 14.5078 11.7109C14.2344 11.9844 13.9219 12.1953 13.5703 12.3438C13.2109 12.4922 12.8438 12.5625 12.4609 12.5625Z"
                fill="#0074CC"
              />
            </svg>
          </Link>
          <nav className="hidden md:flex gap-8 ml-6">
            <Link
              href="/"
              className={`text-sm font-medium ${pathname === "/" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium ${pathname === "/about" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className={`text-sm font-medium ${pathname === "/how-it-works" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
            >
              How It Works
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium ${pathname === "/contact" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <UserModeToggle />
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Join Now
                </Button>
              </Link>
            </div>
          )}
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] flex flex-col"
            >
              <SheetTitle className="border-b py-4 my-8 font-bold text-center text-2xl">
                Nav Menu
              </SheetTitle>
              <nav className="flex flex-col gap-4 mt-2 flex-1">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                    pathname === "/"
                      ? "bg-accent text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                    pathname === "/about"
                      ? "bg-accent text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/how-it-works"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                    pathname === "/how-it-works"
                      ? "bg-accent text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  How It Works
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                    pathname === "/contact"
                      ? "bg-accent text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  Contact
                </Link>
              </nav>

              <div className="mt-auto pt-4 border-t p-4">
                {!isLoggedIn && (
                  <div className="flex flex-col gap-4">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Join Now
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
