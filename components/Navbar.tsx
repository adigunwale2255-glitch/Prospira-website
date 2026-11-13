"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolledOrNotHome = isScrolled || pathname !== "/";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolledOrNotHome ? "glass py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-headline font-black text-2xl tracking-tighter flex items-center"
        >
          <span
            className={cn(
              isScrolledOrNotHome ? "text-foreground" : "text-white"
            )}
          >
            PROSPIRA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium text-sm transition-colors hover:text-primary",
                isScrolledOrNotHome ? "text-foreground" : "text-white/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(
              "px-6 py-2 rounded-full font-bold text-sm transition-all",
              isScrolledOrNotHome
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-white text-secondary hover:bg-accent hover:text-secondary-foreground"
            )}
          >
            Start Project
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={cn(
            "md:hidden p-2",
            isScrolledOrNotHome ? "text-foreground" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-headline font-bold text-foreground border-b border-border pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 bg-primary text-white font-bold rounded-xl"
            >
              Start Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

