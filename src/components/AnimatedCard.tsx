import React from "react";

import { motion } from "motion/react";

const AnimatedCard = () => {
  return (
    <div className="min-w-80 min-h-100 h-100 rounded-xl shadow-2xl p-4 bg-white flex flex-col gap-5">
      <div className="space-y-3">
        <h1 className="text-xl text-neutral-700">Animated Card</h1>
        <p className="text-sm max-w-xs text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          officia!
        </p>
        <button className="text-base px-6 py-2 rounded-lg text-black border hover:bg-black hover:text-blue-100 transition-colors duration-200">
          Aceternity Ui
        </button>
      </div>
      <div className="flex-1 bg-gray-100 rounded-lg border border-dashed border-yellow-500 relative w-full h-full">
        <motion.div
          className="absolute inset-0 h-full w-full bg-yellow-500 rounded-lg space-y-2 p-2"
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px",
          }}
          whileHover={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              className="flex items-center justify-start gap-x-2 rounded-sm border p-2 shadow-sm text-sm"
              key={i}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-cpu-icon lucide-cpu"
                >
                  <path d="M12 20v2" />
                  <path d="M12 2v2" />
                  <path d="M17 20v2" />
                  <path d="M17 2v2" />
                  <path d="M2 12h2" />
                  <path d="M2 17h2" />
                  <path d="M2 7h2" />
                  <path d="M20 12h2" />
                  <path d="M20 17h2" />
                  <path d="M20 7h2" />
                  <path d="M7 20v2" />
                  <path d="M7 2v2" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="8" y="8" width="8" height="8" rx="1" />
                </svg>
              </span>
              Beautiful & consistent icons
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCard;
