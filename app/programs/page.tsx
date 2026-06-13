import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import {
  Wheat,
  Landmark,
  Cpu,
  TreePine,
  HeartHandshake,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import { missionPillars } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wheat,
  Landmark,
  Cpu,
  TreePine,
  HeartHandshake,
  BookOpen,
  Lightbulb,
};

const pillarImages: Record<string, string> = {
  "food-security": "/ProgramCardImages/Food.jpg",
  "cultural-heritage": "/ProgramCardImages/culturalPreseravation.jpg",
  "youth-tech": "/ProgramCardImages/youthTechnology.jpg",
  "environment": "/ProgramCardImages/Environment.jpg",
  "rights": "/ProgramCardImages/childProtection.jpg",
  "health-education": "/ProgramCardImages/community.jpg",
  "ethics": "/ProgramCardImages/Ethics%20%26%20Moral%20Development.jpg",
};

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bannerImages/programs-banner.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary-dark/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Our Programs
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Seven mission pillars driving holistic community development
              across Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Program Detail Sections */}
      {missionPillars.map((pillar, index) => {
        const Icon = iconMap[pillar.icon];
        const isEven = index % 2 === 0;

        return (
          <section
            key={pillar.id}
            className={`py-20 ${isEven ? "bg-white" : "bg-surface"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    {Icon && (
                      <Icon className="h-8 w-8 text-primary" />
                    )}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {pillar.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {pillar.summary}
                  </p>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                    Key Goals
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {pillar.goals.map((goal) => (
                      <li
                        key={goal}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
                  >
                    Get Involved
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div
                  className={`${isEven ? "lg:order-2" : "lg:order-1"} h-80 rounded-2xl overflow-hidden`}
                >
                  <img
                    src={pillarImages[pillar.id]}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Global CTA */}
      <section className="py-20 bg-gold">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Make a Difference?
          </h2>
          <p className="mt-3 text-lg text-white/80">
            Your support helps us expand our programs and reach more
            communities in need across Ethiopia.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-3.5 rounded-full text-base font-semibold transition-all hover:shadow-xl"
            >
              Donate Now
              <Heart className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-full text-base font-semibold backdrop-blur-sm transition-all border border-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
