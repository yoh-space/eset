"use client";

export default function NewsletterForm() {
  return (
    <section className="py-20 bg-gold">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Stay Connected
        </h2>
        <p className="mt-3 text-lg text-white/80">
          Subscribe to our newsletter for updates on our programs, impact
          stories, and ways to get involved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3.5 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            onClick={() => alert("Thank you for subscribing!")}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
