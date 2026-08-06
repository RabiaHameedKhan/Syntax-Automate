"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Activity,
  Rocket,
  CheckCircle2,
} from "lucide-react";

export default function CloudDeploymentCard() {
  return (
    <div className="relative h-[250px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

      {/* Background Glow */}

      <motion.div
        animate={{
          opacity: [0.25, 0.5, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute inset-0 bg-[#1E566C]/10 blur-3xl"
      />

      {/* Connection Lines */}

      <div className="absolute left-1/2 top-[72px] h-[95px] w-[2px] -translate-x-1/2 bg-[#5C8EA2]/40" />

      <div className="absolute left-[88px] top-[118px] h-[2px] w-[80px] bg-[#5C8EA2]/40" />

      <div className="absolute right-[88px] top-[118px] h-[2px] w-[80px] bg-[#5C8EA2]/40" />

      {/* Cloud */}

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl border border-[#5C8EA2]/30 bg-[#132028]"
      >
        <Cloud
          size={30}
          className="text-[#8EC1D4]"
        />
      </motion.div>

      {/* Server */}

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-[120px] flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl border border-[#5C8EA2]/30 bg-[#132028]"
      >
        <Server
          size={28}
          className="text-[#8EC1D4]"
        />
      </motion.div>

      {/* Monitoring */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.5,
        }}
        className="absolute left-8 top-[100px] flex h-14 w-14 items-center justify-center rounded-xl border border-[#5C8EA2]/30 bg-[#132028]"
      >
        <Activity
          size={22}
          className="text-[#8EC1D4]"
        />
      </motion.div>

      {/* Rocket */}

      <motion.div
        animate={{
          x: [0, -10, 0],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="absolute right-8 top-[100px] flex h-14 w-14 items-center justify-center rounded-xl border border-[#5C8EA2]/30 bg-[#132028]"
      >
        <Rocket
          size={22}
          className="text-[#8EC1D4]"
        />
      </motion.div>

      {/* Upload Packet */}

      <motion.div
        animate={{
          y: [0, 50, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-[72px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#A9D7E7]"
      />

      {/* Health Badge */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-[#2E5E73] bg-[#16313B] px-3 py-2"
      >
        <CheckCircle2
          size={14}
          className="text-emerald-400"
        />

        <span className="text-xs text-[#DDEFF6]">
          99.9% Uptime
        </span>
      </motion.div>

      {/* Live Chart */}

      <div className="absolute bottom-5 right-6 flex items-end gap-1">

        {[14, 24, 18, 34, 22, 38].map((h, i) => (
          <motion.div
            key={i}
            animate={{
              height: [h, h + 8, h],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
            className="w-2 rounded-full bg-[#8EC1D4]"
            style={{ height: h }}
          />
        ))}

      </div>

    </div>
  );
}