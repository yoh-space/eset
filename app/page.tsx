import Link from "next/link";
import { ArrowRight, Heart, ChevronRight } from "lucide-react";
import { missionPillars, impactStats, programs, partners } from "@/lib/constants";
import PillarCard from "@/components/PillarCard";
import ImpactStat from "@/components/ImpactStat";
import ProgramCard from "@/components/ProgramCard";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Building a Brighter Future for Ethiopian Communities
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
              ESSET LETIWLID is dedicated to empowering vulnerable communities
              across Ethiopia through sustainable development, cultural
              preservation, and social justice — because every life deserves
              dignity and opportunity.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all hover:shadow-xl"
              >
                Donate Now
                <Heart className="h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-full text-base font-semibold backdrop-blur-sm transition-all border border-white/20"
              >
                Learn More
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              ESSET LETIWLID exists to uplift Ethiopian communities by
              addressing the root causes of poverty, inequality, and social
              exclusion. We work hand-in-hand with local communities to create
              lasting change through seven interconnected mission pillars that
              reflect the full spectrum of human need and potential.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {missionPillars.map((pillar) => (
              <PillarCard
                key={pillar.id}
                icon={pillar.icon}
                title={pillar.title}
                summary={pillar.summary}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Impact</h2>
            <p className="mt-3 text-lg text-primary/80">
              Measurable results that reflect our commitment to change
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {impactStats.map((stat) => (
              <ImpactStat
                key={stat.label}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Featured Programs
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Explore our flagship initiatives making a difference
              </p>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-1 text-primary font-semibold hover:text-primary-dark transition-colors shrink-0"
            >
              View all programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard
                key={program.title}
                title={program.title}
                pillar={program.pillar}
                description={program.description}
                image={program.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-10">
            Our Partners & Affiliates
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="text-gray-400 font-semibold text-sm tracking-wide hover:text-gray-600 transition-colors"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterForm />
    </>
  );
}
