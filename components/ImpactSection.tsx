"use client";

import { useEffect, useRef, useState } from "react";
import {
  Users,
  GraduationCap,
  Building2,
  Landmark,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";

const stats = [
  { number: "15,000+", label: "Families Supported", icon: Users },
  { number: "8,000+", label: "Youth Trained", icon: GraduationCap },
  { number: "120+", label: "Communities Reached", icon: Building2 },
  { number: "50+", label: "Heritage Sites Preserved", icon: Landmark },
  { number: "3,500+", label: "Women Empowered", icon: HeartHandshake },
  { number: "95%", label: "Program Efficiency Rate", icon: TrendingUp },
];

function AnimatedNumber({ value, suffix }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const raw = parseInt(value.replace(/[^0-9]/g, ""));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(raw / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= raw) {
        setDisplay(raw);
        clearInterval(timer);
      } else {
        setDisplay(start);
      }
    }, duration / 60);
    return () => clearInterval(timer);
  }, [visible, raw]);

  return (
    <span ref={ref}>
      {visible ? display.toLocaleString() : "0"}
      {value.includes("+") ? "+" : value.includes("%") ? "%" : ""}
    </span>
  );
}

export default function ImpactSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gold/[0.02] blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary-light/[0.03] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-4 bg-primary/5 px-4 py-1.5 rounded-full">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Measurable{" "}
            <span className="text-primary">results</span>, lasting change
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Every number represents a life touched, a community strengthened,
            and a step toward a brighter future for Ethiopia.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 hover:bg-white hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 tabular-nums">
                    <AnimatedNumber value={stat.number} />
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
