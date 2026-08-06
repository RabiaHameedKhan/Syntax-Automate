"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  Database,
  Workflow,
} from "lucide-react";

const icons = [
  {
    Icon: BrainCircuit,
    x: 0,
    y: -95,
    delay: 0,
  },
  {
    Icon: Bot,
    x: 95,
    y: 0,
    delay: 0.6,
  },
  {
    Icon: Database,
    x: 0,
    y: 95,
    delay: 1.2,
  },
  {
    Icon: Workflow,
    x: -95,
    y: 0,
    delay: 1.8,
  },
];

export default function AIIntegrationCard() {
  return (
    <div className="relative h-[250px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

      {/* center glow */}

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E566C]/30 blur-[70px]"
      />

      {/* connection lines */}

      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-1/2 h-[2px] origin-left bg-gradient-to-r from-[#5F95A7] via-white/70 to-transparent"
          style={{
            width: 95,
            rotate: `${index * 90}deg`,
          }}
          animate={{
            opacity: [0.25, 1, 0.25],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: item.delay,
          }}
        />
      ))}

      {/* icons */}

      {icons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-1/2"
          animate={{
            x: [x, x * 1.05, x],
            y: [y, y * 1.05, y],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay,
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay,
            }}
            className="flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#5F95A7]/40 bg-[#0E151A]/90 backdrop-blur-xl"
          >
            <Icon
              className="h-6 w-6 text-[#8AB9CA]"
              strokeWidth={1.8}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* center node */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#5F95A7]/50 bg-[#14242C]"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <BrainCircuit
            className="h-9 w-9 text-[#B9D6E1]"
            strokeWidth={1.7}
          />
        </motion.div>
      </motion.div>

      {/* moving particles */}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-[#A6D7E8]"
          animate={{
            x: [
              0,
              Math.cos((i * Math.PI) / 4) * 95,
              0,
            ],
            y: [
              0,
              Math.sin((i * Math.PI) / 4) * 95,
              0,
            ],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.35,
          }}
        />
      ))}
    </div>
  );
}