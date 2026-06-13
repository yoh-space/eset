import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  pillar: string;
  description: string;
  image: string;
}

export default function ProgramCard({
  title,
  pillar,
  description,
  image,
}: ProgramCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="h-48 relative overflow-hidden bg-gradient-to-br from-primary/20 to-gold/20">
        <img
          src={image}
          alt={pillar}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="text-xs font-semibold text-white/90 uppercase tracking-wider bg-primary/70 px-2.5 py-1 rounded-full">
            {pillar}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-semibold text-gold uppercase tracking-wider">
          {pillar}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          {description}
        </p>
        <Link
          href="/programs"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark mt-4 transition-colors group/link"
        >
          Learn more
          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
