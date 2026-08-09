"use client";

import { motion } from "framer-motion";

export default function RobotAnimation() {
  return (
    <div className="relative mx-auto flex h-[230px] w-[230px] shrink-0 items-center justify-center">

      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F6A72]/25 blur-[45px]"
      />

      {/* =====================================================
          ROTATING SYSTEM RING
      ===================================================== */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[175px] w-[175px] -translate-x-1/2 -translate-y-1/2"
      >
        {/* Circular border */}

        <div className="absolute inset-0 rounded-full border border-black/25" />

        {/* Outer subtle ring */}

        <div className="absolute -inset-2 rounded-full border border-black/10" />

        {/* Rotating text */}

        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <path
              id="robotTextCircle"
              d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
              fill="none"
            />
          </defs>

          <text
            fill="#0F6A72"
            fontSize="10"
            fontWeight="700"
            letterSpacing="2.2"
          >
            <textPath
              href="#robotTextCircle"
              startOffset="0%"
              textLength="430"
              lengthAdjust="spacing"
            >
              INTEGRATIONS • AUTOMATIONS • DEVELOPMENT •
            </textPath>
          </text>
        </svg>

        {/* Small orbit dots */}

        <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#0F6A72]" />

        <span className="absolute bottom-[-3px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#0F6A72]/70" />
      </motion.div>

      {/* =====================================================
          INNER SYSTEM RING
      ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.96, 1.04, 0.96],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/20"
      />

      {/* =====================================================
          ROBOT IMAGE
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 z-10 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-white shadow-[0_6px_20px_rgba(15,106,114,0.35)]"
      >
        {/* Plain img tag (not next/image) so it always renders from /public,
            regardless of image-optimizer config */}
        <img
          src="/animation/robot.jpg"
          alt="AI robot"
          width={92}
          height={92}
          className="h-full w-full object-cover"
        />
      </motion.div>

    </div>
  );
}
