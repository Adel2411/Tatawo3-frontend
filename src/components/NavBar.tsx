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
    <header className="px-4 md:px-12 fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="h-16 flex items-center justify-between w-full">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              Iftar Connect
            </span>
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
