"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, useScroll, useTransform } from "motion/react";

const NavBar = () => {
  const { scrollYProgress } = useScroll();

  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  const borderOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 0.1]);

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

      <div className="flex items-center space-x-8">
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
    </nav>
  );
};

export default NavBar;
