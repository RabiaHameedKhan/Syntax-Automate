"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";

export default function WebDevelopmentCard() {
  return (
    <div className="relative h-[250px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

      {/* glow */}

      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute inset-0 bg-[#1E566C]/10 blur-3xl"
      />

      {/* browser */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .8,
        }}
        className="absolute left-1/2 top-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#11161B]"
      >

        {/* top bar */}

        <div className="flex h-9 items-center gap-2 border-b border-white/10 px-4">

          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />

          <div className="ml-auto flex items-center gap-2 text-[#86B6C7]">
            <Globe size={14} />
          </div>

        </div>

        <div className="p-4">

          {/* navbar */}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: .4,
              duration: .6,
            }}
            className="mb-4 h-3 origin-left rounded bg-[#4D7284]"
          />

          {/* hero */}

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "85%" }}
            transition={{
              delay: .8,
              duration: .6,
            }}
            className="mb-3 h-7 rounded bg-[#5E8FA2]"
          />

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "55%" }}
            transition={{
              delay: 1,
              duration: .6,
            }}
            className="mb-6 h-3 rounded bg-white/20"
          />

          {/* cards */}

          <div className="grid grid-cols-3 gap-2">

            {[0,1,2].map((i)=>(
              <motion.div
                key={i}
                initial={{
                  opacity:0,
                  y:18
                }}
                animate={{
                  opacity:1,
                  y:0
                }}
                transition={{
                  delay:1.3+i*.18,
                  duration:.45
                }}
                className="h-16 rounded-lg bg-[#183441]"
              />
            ))}

          </div>

        </div>

      </motion.div>

      {/* floating code */}

      <motion.div
        animate={{
          y:[0,-12,0],
        }}
        transition={{
          duration:3,
          repeat:Infinity,
        }}
        className="absolute left-8 top-8 flex h-12 w-12 items-center justify-center rounded-xl border border-[#4F7D91]/30 bg-[#132028]"
      >
        <Code2
          className="text-[#90C2D4]"
          size={22}
        />
      </motion.div>

      {/* layout */}

      <motion.div
        animate={{
          y:[0,10,0],
        }}
        transition={{
          duration:4,
          repeat:Infinity,
        }}
        className="absolute right-8 top-10 flex h-12 w-12 items-center justify-center rounded-xl border border-[#4F7D91]/30 bg-[#132028]"
      >
        <LayoutDashboard
          className="text-[#90C2D4]"
          size={22}
        />
      </motion.div>

      {/* deployment badge */}

      <motion.div
        animate={{
          scale:[1,.92,1],
        }}
        transition={{
          duration:1.8,
          repeat:Infinity,
        }}
        className="absolute bottom-6 right-8 flex items-center gap-2 rounded-full border border-[#2D5E74] bg-[#16303B] px-3 py-2 text-xs text-[#D9EEF5]"
      >
        <CheckCircle2
          size={14}
          className="text-emerald-400"
        />
        Live
      </motion.div>

      {/* typing cursor */}

      <motion.div
        animate={{
          opacity:[1,0,1],
        }}
        transition={{
          duration:.8,
          repeat:Infinity,
        }}
        className="absolute bottom-10 left-10 h-5 w-[2px] bg-[#9FD4E6]"
      />

    </div>
  );
}