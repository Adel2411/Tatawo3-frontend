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
import Image from "next/image";

// Define the navigation item type
type NavItem = {
  href: string;
  label: string;
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Navigation items array
  const navItems: NavItem[] = [
    { href: "/home", label: "Home" },
    { href: "/iftar", label: "Iftar" },
    { href: "#how-it-works", label: "How It Works" },
  ];

  // Check if user is on dashboard pages to show mode toggle
  const isLoggedIn = pathname.includes("/dashboard");

  return (
    <header className="px-4 md:px-12 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="h-16 flex items-center justify-between w-full">
        <div className="flex items-center gap-16">
          <Link href="/home" className="flex items-center p-2">
            <Image
              src="/Logo.svg"
              alt="People sharing iftar meal"
              width={60}
              height={40}
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </Link>
          <nav className="hidden md:flex gap-8 ml-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium ${
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                } transition-colors hover:text-foreground`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {!isLoggedIn && (
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/register-user">
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
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                      pathname === item.href
                        ? "bg-accent text-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-4 border-t p-4">
                {!isLoggedIn && (
                  <div className="flex flex-col gap-4">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link
                      href="/register-user"
                      onClick={() => setIsOpen(false)}
                    >
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
