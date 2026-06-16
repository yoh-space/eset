"use client";

import { Carousel, TestimonialCard, iTestimonial } from "@/components/ui/retro-testimonial";

type TestimonialDetails = {
  [key: string]: iTestimonial & { id: string };
};

const testimonialData = {
  ids: [
    "e60aa346-f6da-11ed-b67e-0242ac120002",
    "e60aa346-f6da-11ed-b67e-0242ac120003",
    "e60aa346-f6da-11ed-b67e-0242ac120004",
    "e60aa346-f6da-11ed-b67e-0242ac120005",
    "e60aa346-f6da-11ed-b67e-0242ac120006",
    "e60aa346-f6da-11ed-b67e-0242ac120007",
  ],
  details: {
    "e60aa346-f6da-11ed-b67e-0242ac120002": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120002",
      description:
        "ESSET LETIWLID's food security program transformed our community. We now have access to nutritious food and sustainable farming training that has improved the lives of hundreds of families in our region.",
      profileImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80",
      name: "Alemitu Bekele",
      designation: "Community Leader, Oromia",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120003": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120003",
      description:
        "The youth technology program gave me skills I never thought possible. I went from never touching a computer to building websites. This organization is truly empowering Ethiopia's next generation.",
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      name: "Samuel Tadesse",
      designation: "Tech Graduate, Addis Ababa",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120004": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120004",
      description:
        "Working with ESSET LETIWLID on heritage preservation has been remarkable. Together we've documented over 200 ancient manuscripts and trained dozens of local artisans in traditional crafts.",
      profileImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
      name: "Dr. Yonas Assefa",
      designation: "Heritage Specialist",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120005": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120005",
      description:
        "The women's empowerment program gave me the confidence and skills to start my own business. Today I employ 12 women from my village. ESSET LETIWLID didn't just help me — they helped my entire community.",
      profileImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
      name: "Meron Haile",
      designation: "Entrepreneur, Tigray",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120006": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120006",
      description:
        "As a community health worker trained by ESSET LETIWLID, I've been able to bring basic healthcare to over 500 families in my village. The training was thorough and the ongoing support is invaluable.",
      profileImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
      name: "Hana Worku",
      designation: "Health Worker, SNNPR",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120007": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120007",
      description:
        "The environmental conservation program has brought our community together. We've planted over 50,000 trees and restored degraded farmland. ESSET LETIWLID showed us that we can heal our land.",
      profileImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
      name: "Getachew Desta",
      designation: "Environmental Advocate, Amhara",
    },
  },
};

export function TestimonialsSection() {
  const details = testimonialData.details as TestimonialDetails;

  const cards = testimonialData.ids.map((cardId: string, index: number) => {
    return (
      <TestimonialCard
        key={cardId}
        testimonial={details[cardId]}
        index={index}
        backgroundImage="https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?q=80&w=3129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    );
  });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-6">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-3 bg-primary/5 px-4 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Voices from the community
          </h2>
          <p className="mt-2 text-gray-400 text-base max-w-xl mx-auto">
            Real stories from the people and communities we serve across
            Ethiopia.
          </p>
        </div>
        <Carousel items={cards} />
      </div>
    </section>
  );
}
