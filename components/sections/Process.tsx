"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Lightbulb,
  Boxes,
  BrainCircuit,
  Code2,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with the problem, the users, and the business logic behind it.",
    icon: Lightbulb,
    tag: "PROBLEM",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We design the technical foundation, data flow, integrations, and system architecture.",
    icon: Boxes,
    tag: "SYSTEM",
  },
  {
    number: "03",
    title: "Add Intelligence",
    description:
      "AI and automation are introduced where they can create measurable impact.",
    icon: BrainCircuit,
    tag: "INTELLIGENCE",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We turn the architecture into fast, reliable, and refined digital products.",
    icon: Code2,
    tag: "PRODUCT",
  },
  {
    number: "05",
    title: "Evolve",
    description:
      "The system launches, learns from real usage, and continues getting better.",
    icon: Rocket,
    tag: "EVOLUTION",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0.08, 0.82], [0, 1]);

  const glowY = useTransform(scrollYProgress, [0, 1], [-80, 180]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#071017] py-32 text-white lg:py-44"
    >
 {/* =========================================================
    SUBTLE AMBIENT WAVES
========================================================= */}

<div className="pointer-events-none absolute inset-0 overflow-hidden">

  {/* Deep atmospheric base */}
  <div className="absolute inset-0 bg-[#071017]" />

  {/* Large soft ambient glow */}
  <motion.div
    animate={{
      x: ["-8%", "8%", "-8%"],
      y: ["0%", "5%", "0%"],
      scale: [1, 1.08, 1],
      opacity: [0.16, 0.24, 0.16],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      left-1/2
      top-[15%]
      h-[650px]
      w-[900px]
      -translate-x-1/2
      rounded-full
      bg-[#1E566C]/25
      blur-[170px]
    "
  />

  {/* =====================================================
      WAVE 1
  ===================================================== */}

  <motion.svg
    viewBox="0 0 1600 500"
    preserveAspectRatio="none"
    animate={{
      x: ["-4%", "4%", "-4%"],
      scaleY: [1, 1.08, 1],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      left-[-5%]
      top-[18%]
      h-[420px]
      w-[110%]
      opacity-40
    "
  >
    <defs>
      <filter id="waveBlur1">
        <feGaussianBlur stdDeviation="8" />
      </filter>

      <linearGradient id="waveGradient1" x1="0" x2="1">
        <stop offset="0%" stopColor="#1E566C" stopOpacity="0" />
        <stop offset="30%" stopColor="#72C5DF" stopOpacity="0.22" />
        <stop offset="55%" stopColor="#A0DCEA" stopOpacity="0.3" />
        <stop offset="80%" stopColor="#72C5DF" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#1E566C" stopOpacity="0" />
      </linearGradient>
    </defs>

    <motion.path
      d="
        M-100 280
        C150 80 330 430 570 250
        C800 70 980 430 1210 250
        C1370 130 1500 260 1700 170
      "
      fill="none"
      stroke="url(#waveGradient1)"
      strokeWidth="42"
      filter="url(#waveBlur1)"
    />
  </motion.svg>

  {/* =====================================================
      WAVE 2
  ===================================================== */}

  <motion.svg
    viewBox="0 0 1600 500"
    preserveAspectRatio="none"
    animate={{
      x: ["5%", "-5%", "5%"],
      scaleY: [1.05, 0.94, 1.05],
    }}
    transition={{
      duration: 19,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      left-[-5%]
      top-[32%]
      h-[500px]
      w-[110%]
      opacity-30
    "
  >
    <defs>
      <filter id="waveBlur2">
        <feGaussianBlur stdDeviation="11" />
      </filter>

      <linearGradient id="waveGradient2" x1="0" x2="1">
        <stop offset="0%" stopColor="#72C5DF" stopOpacity="0" />
        <stop offset="35%" stopColor="#4C9DB5" stopOpacity="0.2" />
        <stop offset="60%" stopColor="#72C5DF" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#1E566C" stopOpacity="0" />
      </linearGradient>
    </defs>

    <path
      d="
        M-100 180
        C180 390 360 40 610 230
        C850 420 1010 60 1260 240
        C1430 360 1540 210 1700 300
      "
      fill="none"
      stroke="url(#waveGradient2)"
      strokeWidth="55"
      filter="url(#waveBlur2)"
    />
  </motion.svg>

  {/* =====================================================
      WAVE 3 — VERY SUBTLE
  ===================================================== */}

  <motion.svg
    viewBox="0 0 1600 500"
    preserveAspectRatio="none"
    animate={{
      x: ["-3%", "3%", "-3%"],
    }}
    transition={{
      duration: 24,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      left-[-5%]
      top-[48%]
      h-[460px]
      w-[110%]
      opacity-20
    "
  >
    <defs>
      <filter id="waveBlur3">
        <feGaussianBlur stdDeviation="14" />
      </filter>

      <linearGradient id="waveGradient3" x1="0" x2="1">
        <stop offset="0%" stopColor="#1E566C" stopOpacity="0" />
        <stop offset="45%" stopColor="#8ED4E5" stopOpacity="0.18" />
        <stop offset="70%" stopColor="#72C5DF" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#1E566C" stopOpacity="0" />
      </linearGradient>
    </defs>

    <path
      d="
        M-100 300
        C180 100 370 420 600 280
        C820 140 1000 390 1240 230
        C1430 110 1570 250 1700 190
      "
      fill="none"
      stroke="url(#waveGradient3)"
      strokeWidth="70"
      filter="url(#waveBlur3)"
    />
  </motion.svg>

  {/* =====================================================
      SOFT HORIZONTAL LIGHT
  ===================================================== */}

  <motion.div
    animate={{
      x: ["-20%", "20%", "-20%"],
      opacity: [0.08, 0.18, 0.08],
    }}
    transition={{
      duration: 16,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      left-1/2
      top-[44%]
      h-[180px]
      w-[1200px]
      -translate-x-1/2
      rounded-full
      bg-[#72C5DF]/10
      blur-[100px]
    "
  />

  {/* =====================================================
      CENTER GLOW
  ===================================================== */}

  <motion.div
    animate={{
      scale: [0.9, 1.15, 0.9],
      opacity: [0.08, 0.18, 0.08],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      left-1/2
      top-[38%]
      h-[280px]
      w-[500px]
      -translate-x-1/2
      rounded-full
      bg-[#1E566C]/20
      blur-[120px]
    "
  />

</div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-16">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[900px] text-center"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#72C5DF] shadow-[0_0_12px_rgba(114,197,223,.8)]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#91B8C6]">
              Our Process
            </span>
          </div>

          <h2 className="text-[48px] font-extralight leading-[1] tracking-[-0.055em] text-white sm:text-[62px] lg:text-[78px]">
            From idea
            <br />

            <span className="text-[#72C5DF]">
              to intelligent system.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[680px] text-[17px] leading-8 text-[#91A5AE] sm:text-[19px]">
            Every system we build moves through a deliberate engineering
            process — transforming business problems into software that can
            think, automate, and evolve.
          </p>
        </motion.div>

        {/* =====================================================
            SYSTEM VISUAL
        ===================================================== */}

        <div className="relative mx-auto mt-28 max-w-[1200px]">
          {/* Horizontal system line */}

          <div className="absolute left-[10%] right-[10%] top-[42px] hidden h-px bg-white/10 lg:block" />

          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute left-[10%] right-[10%] top-[42px] hidden h-px origin-left bg-gradient-to-r from-[#1E566C] via-[#72C5DF] to-[#1E566C] lg:block"
          />

          {/* ===================================================
              NODES
          =================================================== */}

          <div className="grid gap-6 lg:grid-cols-5 lg:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.13,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >
                  {/* Node */}

                  <div className="relative mx-auto flex h-[86px] w-[86px] items-center justify-center lg:mx-auto">
                    {/* outer pulse */}

                    <motion.div
                      animate={{
                        scale: [1, 1.18, 1],
                        opacity: [0.15, 0.35, 0.15],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        delay: index * 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full border border-[#72C5DF]/40"
                    />

                    {/* node background */}

                    <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#72C5DF]/30 bg-[#0B1A22] shadow-[0_0_35px_rgba(61,151,181,.12)] transition-all duration-500 group-hover:border-[#72C5DF]/80 group-hover:bg-[#102631] group-hover:shadow-[0_0_40px_rgba(61,151,181,.25)]">
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="text-[#78C6DC] transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* =================================================
                      STEP CONTENT
                  ================================================= */}

                  <div className="mt-7 text-center lg:px-5">
                    <span className="text-[10px] font-medium tracking-[0.3em] text-[#527B89]">
                      {step.number}
                    </span>

                    <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.28em] text-[#72C5DF]">
                      {step.tag}
                    </div>

                    <h3 className="mt-4 text-[24px] font-light tracking-[-0.03em] text-white">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-4 max-w-[210px] text-[14px] leading-7 text-[#8097A1]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            LOWER SYSTEM STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-28 max-w-[1100px]"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] px-7 py-10 sm:px-12 sm:py-12 lg:px-16">
            {/* animated corner glow */}

            <motion.div
              animate={{
                x: [-80, 80, -80],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -top-32 left-1/2 h-[250px] w-[250px] rounded-full bg-[#1E566C]/30 blur-[90px]"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[700px]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-[#72C5DF]" />

                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#72C5DF]">
                    The result
                  </span>
                </div>

                <h3 className="text-[30px] font-extralight leading-tight tracking-[-0.04em] text-white sm:text-[38px]">
                  We don't just ship software.
                  <br />

                  <span className="text-[#72C5DF]">
                    We build systems that evolve.
                  </span>
                </h3>
              </div>

              <motion.div
                whileHover={{
                  x: 4,
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <button className="group flex h-[52px] items-center gap-3 whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.045] px-6 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#72C5DF]/40 hover:bg-[#72C5DF]/10">
                  See How We Work

                  <ArrowUpRight
                    size={17}
                    className="text-[#72C5DF] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM MICRO LABEL
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-white/10" />

          <span className="text-[9px] uppercase tracking-[0.35em] text-[#50636C]">
            Engineered for what comes next
          </span>

          <span className="h-px w-12 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}