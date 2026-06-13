import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { navLinks, contactInfo } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-gold" />
              <span className="text-lg font-bold text-white">
                ESSET LETIWLID
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Dedicated to improving lives and building a brighter future for
              communities across Ethiopia through sustainable development,
              cultural preservation, and social empowerment.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Our Mission</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-gray-400">
                  Food Security
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-400">
                  Cultural Heritage
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-400">
                  Youth Empowerment
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-400">
                  Environment & Biodiversity
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-400">
                  Rights & Social Protection
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <span className="text-sm text-gray-400">
                  {contactInfo.phone}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <span className="text-sm text-gray-400">
                  {contactInfo.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ESSET LETIWLID Charitable
            Organization. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Registration No: {contactInfo.registrationNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
