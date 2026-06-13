"use client";

import { useEffect, useRef } from "react";

export default function ParallaxHero({ children }: { children: React.ReactNode }) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const speed = 0.35;
          bg.style.transform = `translateY(${scrollY * speed}px) scale(1.1)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80')] bg-cover bg-center opacity-30"
        style={{ willChange: "transform" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/60 to-primary-dark" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full z-10">
        {children}
      </div>
    </section>
  );
}
