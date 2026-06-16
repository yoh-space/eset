import Link from "next/link";
import {
  Wheat,
  Landmark,
  Cpu,
  TreePine,
  HeartHandshake,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wheat,
  Landmark,
  Cpu,
  TreePine,
  HeartHandshake,
  BookOpen,
  Lightbulb,
};

interface GlassPillarCardProps {
  icon: string;
  title: string;
  summary: string;
  href?: string;
}

export default function GlassPillarCard({
  icon,
  title,
  summary,
  href = "/programs",
}: GlassPillarCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="glass-card-parent mx-auto w-[290px] h-[300px]">
      <div className="glass-card card relative w-full h-full rounded-[50px] transition-all duration-500 ease-in-out shadow-[rgba(5,71,17,0)_40px_50px_25px_-40px,rgba(5,71,17,0.2)_0px_25px_25px_-5px]"
        style={{
          background: "linear-gradient(135deg, rgb(0, 255, 214) 0%, rgb(8, 226, 96) 100%)",
        }}
      >
        <div className="glass-card-glass pointer-events-none absolute inset-[8px] rounded-[55px] rounded-tr-[100%] border-l border-white border-b border-white"
          style={{
            background: "linear-gradient(0deg, rgba(255,255,255,0.349) 0%, rgba(255,255,255,0.815) 100%)",
          }}
        />

        {/* Logo circles */}
        <div className="glass-card-logo pointer-events-none absolute right-0 top-0">
          <div className="glass-card-circle glass-card-circle1 absolute aspect-square rounded-full top-[8px] right-[8px]"
            style={{
              width: "170px",
              background: "rgba(0, 249, 203, 0.2)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              boxShadow: "rgba(100, 100, 111, 0.2) -10px 10px 20px 0px",
            }}
          />
          <div className="glass-card-circle glass-card-circle2 absolute aspect-square rounded-full top-[10px] right-[10px]"
            style={{
              width: "140px",
              background: "rgba(0, 249, 203, 0.2)",
              backdropFilter: "blur(1px)",
              WebkitBackdropFilter: "blur(1px)",
              boxShadow: "rgba(100, 100, 111, 0.2) -10px 10px 20px 0px",
            }}
          />
          <div className="glass-card-circle glass-card-circle3 absolute aspect-square rounded-full top-[17px] right-[17px]"
            style={{
              width: "110px",
              background: "rgba(0, 249, 203, 0.2)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              boxShadow: "rgba(100, 100, 111, 0.2) -10px 10px 20px 0px",
            }}
          />
          <div className="glass-card-circle glass-card-circle4 absolute aspect-square rounded-full top-[23px] right-[23px]"
            style={{
              width: "80px",
              background: "rgba(0, 249, 203, 0.2)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              boxShadow: "rgba(100, 100, 111, 0.2) -10px 10px 20px 0px",
            }}
          />
          <div className="glass-card-circle glass-card-circle5 absolute aspect-square rounded-full top-[30px] right-[30px] grid place-content-center"
            style={{
              width: "50px",
              background: "rgba(0, 249, 203, 0.2)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              boxShadow: "rgba(100, 100, 111, 0.2) -10px 10px 20px 0px",
            }}
          >
            {Icon && <Icon className="h-5 w-5 text-gold" />}
          </div>
        </div>

        {/* Content */}
        <div className="glass-card-content pt-[100px] pr-[60px] pb-0 pl-[30px]">
          <span className="block text-[#00894d] font-black text-xl leading-tight">
            {title}
          </span>
          <span
            className="text-[15px] mt-5 leading-snug"
            style={{
              color: "rgba(0, 137, 78, 0.7647058824)",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {summary}
          </span>
        </div>

        {/* Bottom */}
        <div className="glass-card-bottom absolute bottom-[20px] left-[20px] right-[20px] flex items-center justify-between px-3 py-[10px]">

          <Link
            href={href}
            className="glass-card-view-more flex items-center gap-1 text-[#00c37b] font-black text-xs no-underline transition-transform duration-200 ease-in-out"
          >
            <span className="bg-none border-none font-black text-xs cursor-pointer">
              View more
            </span>
            <svg
              className="w-[15px] h-[15px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00c37b"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
