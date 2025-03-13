"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";

const NavBar = () => {
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.1]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
      <motion.div
        className="absolute inset-0 z-[-1]"
        style={{
          opacity: bgOpacity,
          backdropFilter: useTransform(
            scrollYProgress,
            [0, 0.3],
            ["blur(0px)", "blur(10px)"],
          ),
          boxShadow: useTransform(
            scrollYProgress,
            [0, 0.1],
            ["none", "0 1px 3px rgba(0,0,0,0.1)"],
          ),
          borderBottom: useTransform(
            borderOpacity,
            (opacity) => `1px solid rgba(var(--primary-color-rgb), ${opacity})`,
          ),
        }}
      />

      <Link href="/" className="font-semibold text-xl">
        DCF Volunteer
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link
          href="/opportunities"
          className="hover:text-primary transition-colors"
        >
          Opportunities
        </Link>
        <Link href="/about" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
        <ThemeToggle />
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col space-y-4 md:hidden">
          <Link
            href="/opportunities"
            className="hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Opportunities
          </Link>
          <Link
            href="/about"
            className="hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
