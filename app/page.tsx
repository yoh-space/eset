import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { missionPillars, impactStats, programs, partners } from "@/lib/constants";
import PillarCard from "@/components/PillarCard";
import ProgramCard from "@/components/ProgramCard";
import NewsletterForm from "@/components/NewsletterForm";
import { StackedCardsInteraction } from "@/components/ui/stacked-cards-interaction";
import HeroActionButton from "@/components/HeroActionButton";
import VideoHero from "@/components/VideoHero";
import { PartnersSection } from "@/components/sections/partners-section";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <VideoHero video="/heroBackgroundVideo/Herobackground.webm">
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/70 via-primary-dark/70 to-gray-900/70 text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-dark/60 to-primary-dark/80" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                Empowering communities,<br />
                <span className="text-gold">transforming lives.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
                ESSET LETIWLID works across 7 pillars — food security, cultural
                heritage, youth empowerment, environment, women & children's
                rights, community health, and ethics — to build a brighter future
                for Ethiopia.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-6">
                <HeroActionButton
                  href="/get-involved"
                  primaryText="Donate Now"
                  hoverText="Make an Impact"
                />
                <HeroActionButton
                  href="/about"
                  primaryText="Learn More"
                  hoverText="Our Mission"
                />
              </div>
            </div>
          </div>
        </section>
      </VideoHero>

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Our Impact</h2>
              <p className="mt-3 text-lg text-primary/80">
                Measurable results that reflect our commitment to change
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="text-center group">
                    <div className="text-3xl sm:text-4xl font-bold text-gold mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/70 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <StackedCardsInteraction
                cards={[
                  {
                    image:
                      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
                    title: "15,000+ Families Supported",
                    description:
                      "Food security and livelihood assistance reaching vulnerable households across Ethiopia.",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
                    title: "8,000+ Youth Trained",
                    description:
                      "Digital skills, entrepreneurship, and leadership training for Ethiopia's next generation.",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
                    title: "120+ Communities Reached",
                    description:
                      "Community-driven development programs spanning multiple regions of Ethiopia.",
                  },
                ]}
              />
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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

      <PartnersSection />

      <NewsletterForm />
    </div>
  );
}
