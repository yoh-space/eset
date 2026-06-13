"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ArrowRight, Users, Handshake, DollarSign } from "lucide-react";

export default function GetInvolvedPage() {
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [partnershipForm, setPartnershipForm] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleVolunteerSubmit = () => {
    setSubmitted("volunteer");
  };

  const handlePartnershipSubmit = () => {
    setSubmitted("partnership");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bannerImages/get-involved-banner.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary-dark/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Get Involved
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              There are many ways to support our mission and make a lasting
              difference in Ethiopian communities.
            </p>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DollarSign className="h-12 w-12 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Make a Donation
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your contribution goes directly to our programs on the ground. With
            95% of every dollar directed to program delivery, your donation has
            real impact. A gift of $50 can feed a family for a month. $200 can
            send a child to school for a year. $1,000 can train 20 farmers in
            sustainable agriculture.
          </p>
          <button
            onClick={() => alert("Thank you for your generosity! We will redirect you to our secure donation portal.")}
            className="mt-8 inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-bold transition-all hover:shadow-xl"
          >
            Donate Now
            <Heart className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Users className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Volunteer With Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you are in Ethiopia or abroad, your skills and time can
                make a real difference. We welcome volunteers with expertise in
                education, healthcare, agriculture, technology, cultural
                preservation, and community development.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Short-term and long-term opportunities available
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Remote and on-site positions across Ethiopia
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Professional development and cultural exchange
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Accommodation and local support provided
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              {submitted === "volunteer" ? (
                <div className="text-center py-12">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We have received your volunteer application. Our team will
                    reach out within 3-5 business days.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Volunteer Application
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={volunteerForm.name}
                      onChange={(e) =>
                        setVolunteerForm({
                          ...volunteerForm,
                          name: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={volunteerForm.email}
                      onChange={(e) =>
                        setVolunteerForm({
                          ...volunteerForm,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={volunteerForm.phone}
                      onChange={(e) =>
                        setVolunteerForm({
                          ...volunteerForm,
                          phone: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <select
                      value={volunteerForm.interest}
                      onChange={(e) =>
                        setVolunteerForm({
                          ...volunteerForm,
                          interest: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="">Area of Interest</option>
                      <option value="food-security">Food Security</option>
                      <option value="cultural-heritage">
                        Cultural Heritage
                      </option>
                      <option value="youth-tech">Youth Technology</option>
                      <option value="environment">Environment</option>
                      <option value="rights">Rights & Protection</option>
                      <option value="health-education">
                        Health & Education
                      </option>
                      <option value="ethics">Ethics & Moral Development</option>
                    </select>
                    <textarea
                      placeholder="Tell us about your skills and experience *"
                      rows={4}
                      value={volunteerForm.message}
                      onChange={(e) =>
                        setVolunteerForm({
                          ...volunteerForm,
                          message: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    />
                    <button
                      onClick={handleVolunteerSubmit}
                      className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg"
                    >
                      Submit Application
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:order-2">
              <Handshake className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Partner With Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We collaborate with international NGOs, government agencies,
                academic institutions, and private sector partners who share our
                vision for a thriving Ethiopia. Together, we can amplify our
                impact and create sustainable change at scale.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Co-design and implement community programs
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Fund specific projects or program areas
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Provide technical expertise and capacity building
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Sponsor research and impact evaluation
                </li>
              </ul>
            </div>

            <div className="lg:order-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              {submitted === "partnership" ? (
                <div className="text-center py-12">
                  <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We have received your partnership inquiry. Our partnerships
                    team will contact you within 5 business days.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Partnership Inquiry
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={partnershipForm.name}
                      onChange={(e) =>
                        setPartnershipForm({
                          ...partnershipForm,
                          name: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={partnershipForm.email}
                      onChange={(e) =>
                        setPartnershipForm({
                          ...partnershipForm,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <input
                      type="text"
                      placeholder="Organization Name *"
                      value={partnershipForm.organization}
                      onChange={(e) =>
                        setPartnershipForm({
                          ...partnershipForm,
                          organization: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <textarea
                      placeholder="Tell us about your organization and how you'd like to partner *"
                      rows={4}
                      value={partnershipForm.message}
                      onChange={(e) =>
                        setPartnershipForm({
                          ...partnershipForm,
                          message: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    />
                    <button
                      onClick={handlePartnershipSubmit}
                      className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg"
                    >
                      Send Inquiry
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Every Contribution Counts
          </h2>
          <p className="text-gray-400 mb-8">
            Whether you donate, volunteer, or partner with us, you become part
            of a movement for positive change in Ethiopia.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
