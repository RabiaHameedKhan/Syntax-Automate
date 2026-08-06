"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Bell,
  CheckCircle2,
} from "lucide-react";

export default function MobileAppCard() {
  return (
    <div className="relative h-[250px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

      {/* glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute inset-0 bg-[#1E566C]/10 blur-3xl"
      />

      {/* phone */}

      <div className="absolute left-1/2 top-1/2 h-[185px] w-[105px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/15 bg-[#0F1418] p-2 shadow-2xl">

        <div className="relative h-full overflow-hidden rounded-[20px] bg-[#162128]">

          {/* loading bar */}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 4,
            }}
            className="h-1 origin-left bg-[#78AEC2]"
          />

          {/* screen */}

          <motion.div
            animate={{
              y: [0, -55, -55, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            {/* screen 1 */}

            <div className="p-3">

              <div className="h-4 w-14 rounded bg-[#5C8CA1]" />

              <div className="mt-4 h-12 rounded-lg bg-[#204051]" />

              <div className="mt-3 flex gap-2">
                <div className="h-8 flex-1 rounded bg-[#17323F]" />
                <div className="h-8 flex-1 rounded bg-[#17323F]" />
              </div>

            </div>

            {/* screen 2 */}

            <div className="mt-8 p-3">

              <div className="mb-3 h-10 rounded bg-[#5C8CA1]" />

              {[1,2,3].map((item)=>(
                <div
                  key={item}
                  className="mb-2 h-7 rounded bg-[#17323F]"
                />
              ))}

            </div>

          </motion.div>

          {/* tap ripple */}

          <motion.div
            animate={{
              scale: [0, 2.8],
              opacity: [0.45, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="absolute bottom-8 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border border-[#84B7CA]"
          />

        </div>
      </div>

      {/* notification */}

      <motion.div
        initial={{
          x: 80,
          opacity: 0,
        }}
        animate={{
          x: [80, 0, 0, 80],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-5 top-6 flex items-center gap-2 rounded-xl border border-[#4F7D91]/30 bg-[#132028] px-3 py-2"
      >
        <Bell
          size={16}
          className="text-[#8CC3D7]"
        />

        <span className="text-xs text-white/70">
          New Update
        </span>

      </motion.div>

      {/* success */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-[#2C5C73] bg-[#17303A] px-3 py-2"
      >
        <CheckCircle2
          size={14}
          className="text-emerald-400"
        />

        <span className="text-xs text-[#D6ECF3]">
          Published
        </span>

      </motion.div>

      {/* floating phone icon */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#4F7D91]/30 bg-[#132028]"
      >
        <Smartphone
          size={22}
          className="text-[#8CC3D7]"
        />
      </motion.div>

    </div>
  );
}  