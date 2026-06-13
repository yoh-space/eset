"use client";

import { useEffect, useRef } from "react";

interface ParallaxBannerProps {
  image: string;
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxBanner({
  image,
  children,
  speed = 0.6,
  className = "",
}: ParallaxBannerProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = bg.parentElement?.getBoundingClientRect();
          const offset = rect ? Math.max(-rect.top, 0) : window.scrollY;
          bg.style.transform = `translateY(${offset * speed}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ clipPath: "inset(0)" }}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          willChange: "transform",
          height: "130%",
          top: "-15%",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
