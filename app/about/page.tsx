import { Heart, Target, Shield, Users } from "lucide-react";
import TeamCard from "@/components/TeamCard";
import { teamMembers, contactInfo } from "@/lib/constants";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We approach every community with empathy, respect, and a genuine commitment to understanding their unique needs and aspirations.",
  },
  {
    icon: Target,
    title: "Accountability",
    description:
      "We hold ourselves to the highest standards of transparency, ensuring that every donation and resource is used effectively to create measurable impact.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Honesty and ethical conduct form the foundation of all our operations, partnerships, and community engagements.",
  },
  {
    icon: Users,
    title: "Community Ownership",
    description:
      "We believe lasting change comes from within. Our programs are designed and implemented in partnership with local communities, not for them.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              About ESSET LETIWLID
            </h1>
            <p className="mt-4 text-lg text-primary/80 leading-relaxed">
              Our story, our values, and our commitment to the people of
              Ethiopia.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                ESSET LETIWLID Charitable Organization was founded in 2020 by a
                group of Ethiopian professionals and community leaders who
                recognized the urgent need for a holistic approach to
                development — one that addresses not just immediate material
                needs, but also the cultural, educational, environmental, and
                ethical dimensions of community wellbeing.
              </p>
              <p>
                The name "ESSET LETIWLID" translates to "Foundation for
                Generations" in Amharic, reflecting our belief that true
                development must be built on a strong foundation that will
                benefit not only today's communities but generations to come.
              </p>
              <p>
                Since our founding, we have grown from a small volunteer-led
                initiative into a nationally recognized charitable organization
                operating across multiple regions of Ethiopia. Our programs have
                touched the lives of over 100,000 individuals, and we continue
                to expand our reach while deepening our impact.
              </p>
              <p>
                We are registered with the Ethiopian Agency for Civil Society
                Organizations and maintain full compliance with all regulatory
                requirements. Our commitment to transparency and accountability
                is unwavering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Core Values
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Team
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Dedicated professionals committed to serving Ethiopian communities
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Legal Info */}
      <section className="py-16 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Legal & Registration Information
            </h2>
            <p className="text-sm leading-relaxed">
              ESSET LETIWLID Charitable Organization is a registered nonprofit
              organization under the laws of the Federal Democratic Republic of
              Ethiopia. We are fully licensed and regulated by the Ethiopian
              Agency for Civil Society Organizations.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <span className="bg-white/10 px-4 py-2 rounded-lg">
                Registration No: {contactInfo.registrationNumber}
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-lg">
                Tax ID: ET-1234567890
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
