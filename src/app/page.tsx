"use client";

import AnimateButton from "@/components/AnimateButton";
import AnimatedCard from "@/components/AnimatedCard";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-neutral-900 w-full flex flex-col items-center justify-center gap-20"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="perspective-distant transform-3d flex items-center justify-center">
        <AnimateButton />
      </div>
      <div className="flex items-center justify-center">
        <AnimatedCard />
      </div>
    </div>
  );
}
