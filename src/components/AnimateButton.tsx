"use client";
import React from "react";
import { motion } from "motion/react";

const AnimateButton = () => {
  return (
    <div>
      <motion.button
        className="group text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_2px_1px_0px_rgba(255,255,255,.1)_inset, 0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] relative translate-z-25"
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          y: -5,
          boxShadow: "0px 10px 100px rgba(8,112,184,0.5)",
        }}
        whileTap={{
          y: 0,
        }}
      >
        <span className="group-hover:text-blue-100">Dalpat Rathore</span>
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-x-0 bottom-0 bg-gradient-to-r from transparent via-cyan-500 to-transparent h-1 w-full mx-auto blur-sm"></span>
      </motion.button>
    </div>
  );
};

export default AnimateButton;
