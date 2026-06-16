"use client";

import { Mail } from "lucide-react";

export default function NewsletterForm() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-2xl mx-auto">
          {/* Card */}
          <div className="relative bg-gray-50 border border-gray-100 rounded-3xl p-8 sm:p-12 text-center">
            {/* Decorative icon */}
            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6">
              <Mail className="h-7 w-7 text-primary" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Stay Connected
            </h2>
            <p className="mt-3 text-gray-400 leading-relaxed max-w-md mx-auto">
              Subscribe to our newsletter for updates on our programs, impact
              stories, and ways to get involved.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <button
                onClick={() => alert("Thank you for subscribing!")}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
