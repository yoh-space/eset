"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamImage = ({ src, name }: { src: string; name: string }) => {
  return (
    <div className="w-[90px] h-[90px] md:w-[130px] md:h-[130px] opacity-80 overflow-hidden rounded-full border-[3px] border-solid border-[rgba(59,59,59,0.6)] aspect-[1/1] flex-none saturate-[0.2] sepia-[0.46] relative">
      <Image
        className="transition duration-300 absolute top-0 inset-0 object-cover z-50"
        src={src}
        width={130}
        height={130}
        alt={name}
      />
    </div>
  );
};

export default function TeamCard({
  name,
  role,
  bio,
  image,
}: TeamCardProps) {
  return (
    <motion.div
      whileHover={{
        rotateX: 2,
        rotateY: 2,
        rotate: 3,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="rounded-3xl bg-gradient-to-b from-[#f2f0eb] to-[#fff9eb] overflow-hidden flex flex-col items-center justify-start relative z-10 shadow-md py-8 px-5"
    >
      {/* Decorative background layer */}
      <div className="absolute opacity-[0.08] inset-0 overflow-hidden">
        <Image
          className="block w-full h-full object-center object-cover"
          src="https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?q=80&w=3129&auto=format&fit=crop"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative flex flex-col items-center">
        {image ? (
          <TeamImage src={image} name={name} />
        ) : (
          <div className="w-[90px] h-[90px] md:w-[130px] md:h-[130px] rounded-full bg-gradient-to-br from-[#f2f0eb] to-[#e8dcc8] border-[3px] border-solid border-[rgba(59,59,59,0.6)] flex items-center justify-center">
            <User size={48} className="text-[rgba(31,27,29,0.15)]" />
          </div>
        )}

        <h3 className="text-[rgba(31,27,29,0.7)] text-xl font-bold text-center mt-4 lowercase">
          {name}
        </h3>
        <p className="text-[rgba(31,27,29,0.5)] text-sm font-semibold italic text-center mt-1 lowercase underline underline-offset-4 decoration-1">
          {role}
        </p>
        <p className="text-[rgba(31,27,29,0.6)] text-sm text-center mt-3 leading-relaxed max-w-xs">
          {bio}
        </p>
      </div>
    </motion.div>
  );
}
