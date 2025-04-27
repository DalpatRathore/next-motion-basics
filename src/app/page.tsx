"use client";

import AnimateButton from "@/components/AnimateButton";

export default function Home() {
  return (
    <div
      className="perspective-distant transform-3d min-h-screen bg-neutral-900 w-full flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <AnimateButton />
    </div>
  );
}
