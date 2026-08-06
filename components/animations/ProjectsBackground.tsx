"use client";

import { motion } from "framer-motion";

export default function ProjectsBackground() {
  return (
    <>
      {/* Animated Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-100
          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Center Glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#1E566C]
          blur-[220px]
        "
      />

      {/* Left Glow */}

      <motion.div
        animate={{
          y: [-20, 20, -20],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-120px]
          top-[220px]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#2D7A94]
          blur-[160px]
        "
      />

      {/* Right Glow */}

      <motion.div
        animate={{
          y: [20, -20, 20],
          opacity: [0.10, 0.20, 0.10],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-120px]
          bottom-[120px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#1E566C]
          blur-[180px]
        "
      />

      {/* Floating Particles */}

      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[#69A5BA]/40"
          style={{
            width: 3 + (i % 4),
            height: 3 + (i % 4),
            left: `${5 + ((i * 13) % 90)}%`,
            top: `${8 + ((i * 17) % 80)}%`,
          }}
          animate={{
            y: [-12, 12, -12],
            opacity: [0.15, 0.8, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 4 + (i % 5),
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}