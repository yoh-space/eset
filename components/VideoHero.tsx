"use client";

interface VideoHeroProps {
  video: string;
  children: React.ReactNode;
}

export default function VideoHero({ video, children }: VideoHeroProps) {
  return (
    <div className="relative overflow-hidden w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/webm" />
      </video>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
