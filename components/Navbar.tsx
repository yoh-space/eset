"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-7 w-7 text-primary" />
            <span className="text-lg font-bold text-primary">
              ESSET LETIWLID
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              className="bg-gold hover:bg-gold-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
            >
              Donate
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
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
