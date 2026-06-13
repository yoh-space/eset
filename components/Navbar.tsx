"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/esset_horizontal_logo.png"
              alt="ESSET LETIWLID"
              width={220}
              height={55}
              className={`h-12 sm:h-20 w-auto transition-all duration-500 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-500 ${
                  scrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg ${
                scrolled
                  ? "bg-gold hover:bg-gold-dark text-white"
                  : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
              }`}
            >
              Donate
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors duration-500 ${
              scrolled ? "text-gray-700" : "text-white/90"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-white/90 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              className="block text-center bg-gold hover:bg-gold-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
