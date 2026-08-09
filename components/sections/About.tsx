"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, ArrowUpRight } from "lucide-react";
import RobotAnimation from "@/components/animations/RobotAnimation";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_25%_15%,#063A42,#02181C_65%)] py-8 sm:py-10 lg:h-screen lg:max-h-[900px] lg:py-8"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-80, 70, -80],
            y: [-40, 50, -40],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[-15%] h-[500px] w-[500px] rounded-full bg-[#22D9CF]/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [70, -60, 70],
            y: [30, -40, 30],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#12A9AE]/30 blur-[140px]"
        />

        <motion.div
          animate={{
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[45%] top-[35%] h-[300px] w-[300px] rounded-full bg-[#6EEFE6]/15 blur-[100px]"
        />

        {/* ambient circles */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-[150px] top-[25%] h-[350px] w-[350px] rounded-full border border-[#8FEFE9]/15"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 65,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-[170px] bottom-[5%] h-[400px] w-[400px] rounded-full border border-[#8FEFE9]/15"
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1160px] flex-col px-5 sm:px-7 lg:px-8">

        {/* Section label */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3 flex shrink-0 items-center gap-3"
        >
          <span className="h-px w-7 bg-[#9CF4EC]/70" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#9CF4EC]">
            About Syntax Automate
          </span>
        </motion.div>

        {/* =====================================================
            ROBOK-STYLE ASYMMETRIC LAYOUT
        ===================================================== */}

        <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[1.28fr_0.72fr]">

          {/* =================================================
              LARGE LEFT CARD
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative flex min-h-0 flex-col overflow-hidden rounded-[26px] border border-black/10 bg-[linear-gradient(150deg,#E7ECEF,#C9D3D8)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_25px_60px_rgba(0,0,0,0.3)] sm:p-7 lg:p-8"
          >
            {/* card ambient glow */}

            <div className="pointer-events-none absolute bottom-[-130px] left-[-80px] h-[300px] w-[300px] rounded-full bg-[#0F6A72]/10 blur-[100px]" />

            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[260px] w-[260px] rounded-full bg-[#0F6A72]/10 blur-[100px]" />

            {/* top badge */}

            <div className="relative z-10 flex shrink-0 items-center gap-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-black/10 bg-white/60">
                <Sparkles
                  size={14}
                  className="text-[#0F6A72]"
                />
              </div>

              <span className="rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.25em] text-black">
                Who We Are
              </span>

            </div>

            {/* Main content */}

            <div className="relative z-10 flex flex-1 flex-col justify-center py-3">

              <h2 className="text-[34px] font-light leading-[1.05] tracking-[-0.04em] text-black sm:text-[42px] lg:text-[46px]">
                We turn complex
                <br />
                ideas into
                <br />
                <span className="text-[#0F6A72]">
                  intelligent systems.
                </span>
              </h2>

              <p className="mt-4 max-w-[560px] text-[13px] leading-6 text-black/70 sm:text-[14px]">
                Syntax Automate builds modern digital products,
                AI-powered workflows and scalable software systems
                that help businesses work smarter and move faster.
              </p>

            </div>

            {/* Bottom feature cards */}

            <div className="relative z-10 grid shrink-0 grid-cols-3 gap-2.5">

              <div className="rounded-xl border border-black/10 bg-white/55 px-4 py-2.5">
                <div className="text-[12px] font-semibold text-black">
                  AI
                </div>

                <div className="mt-1 text-[7px] uppercase tracking-[0.22em] text-black/55">
                  First
                </div>
              </div>

              <div className="rounded-xl border border-black/10 bg-white/55 px-4 py-2.5">
                <div className="text-[12px] font-semibold text-black">
                  Automation
                </div>

                <div className="mt-1 text-[7px] uppercase tracking-[0.22em] text-black/55">
                  Workflows
                </div>
              </div>

              <div className="rounded-xl border border-black/10 bg-white/55 px-4 py-2.5">
                <div className="text-[12px] font-semibold text-black">
                  Scalable
                </div>

                <div className="mt-1 text-[7px] uppercase tracking-[0.22em] text-black/55">
                  Systems
                </div>
              </div>

            </div>

            {/* Large background word */}

            <div className="pointer-events-none absolute bottom-[-20px] left-8 select-none text-[90px] font-bold leading-none tracking-[-0.08em] text-black/[0.04] sm:text-[110px]">
              SYNTAX
            </div>

          </motion.div>

          {/* =================================================
              RIGHT COLUMN — TWO STACKED CARDS
          ================================================= */}

          <div className="grid min-h-0 gap-4 lg:grid-rows-[0.95fr_1.05fr]">

            {/* =============================================
                TOP — ROBOT ANIMATION
            ============================================= */}

            <motion.div
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.15,
              }}
              className="relative flex min-h-0 items-center justify-center overflow-hidden rounded-[26px] border border-black/10 bg-[linear-gradient(150deg,#E7ECEF,#C9D3D8)] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_50px_rgba(0,0,0,0.25)]"
            >

              {/* top label */}

              <div className="absolute left-4 top-4 z-20">
                <span className="rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[0.25em] text-black">
                  Intelligent Systems
                </span>
              </div>

              {/* live */}

              <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-3 py-1.5">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0F6A72]" />

                <span className="text-[7px] uppercase tracking-[0.2em] text-black">
                  Live
                </span>

              </div>

              {/* Actual animation card */}

              <div className="relative z-10 flex shrink-0 items-center justify-center">
                <RobotAnimation />
              </div>

            </motion.div>

            {/* =============================================
                BOTTOM — WHAT WE BUILD
            ============================================= */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.25,
              }}
              className="relative flex min-h-0 flex-col overflow-hidden rounded-[26px] border border-black/10 bg-[linear-gradient(150deg,#E7ECEF,#C9D3D8)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_50px_rgba(0,0,0,0.28)] sm:p-6"
            >

              {/* ambient glow */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#0F6A72]/10 blur-[70px]" />

              {/* heading */}

              <div className="relative z-10 flex shrink-0 items-start justify-between gap-4">

                <div>

                  <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#0F6A72]">
                    What We Build
                  </span>

                  <h3 className="mt-2 text-[19px] font-light leading-[1.15] tracking-[-0.03em] text-black sm:text-[21px]">
                    AI that connects.
                    <br />
                    <span className="text-[#0F6A72]">
                      Automation that works.
                    </span>
                  </h3>

                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white/60">
                  <Zap
                    size={14}
                    className="text-[#0F6A72]"
                  />
                </div>

              </div>

              {/* process line */}

              <div className="relative z-10 mt-4 flex shrink-0 items-center">

                <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-3 py-1.5">
                  <Sparkles
                    size={10}
                    className="text-[#0F6A72]"
                  />

                  <span className="text-[9px] font-medium text-black">
                    AI
                  </span>
                </div>

                <div className="mx-2 h-px flex-1 bg-black/15" />

                <div className="rounded-full border border-black/10 bg-white/55 px-3 py-1.5">
                  <span className="text-[9px] font-medium text-black">
                    Workflow
                  </span>
                </div>

                <div className="mx-2 h-px flex-1 bg-black/15" />

                <div className="rounded-full border border-black/10 bg-white/55 px-3 py-1.5">
                  <span className="text-[9px] font-medium text-black">
                    Action
                  </span>
                </div>

              </div>

              {/* divider */}

              <div className="relative z-10 my-3 h-px shrink-0 bg-black/10" />

              {/* description */}

              <div className="relative z-10 flex flex-1 flex-col justify-end gap-3">

                <p className="max-w-[390px] text-[11px] leading-5 text-black/70 sm:text-[12px]">
                  We integrate AI into existing products and automate
                  repetitive processes so your systems can do more with
                  less manual work.
                </p>

                <button className="group flex w-fit shrink-0 items-center gap-2 text-[9px] font-semibold text-[#0F6A72] transition-colors hover:text-black">
                  Explore capabilities

                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>

              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
