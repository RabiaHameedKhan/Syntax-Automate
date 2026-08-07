"use client";

import { motion } from "framer-motion";

// ---- Timeline (seconds) — everything is driven by one shared clock via
// explicit keyframe `times`, so nothing ever resets via React state and
// nothing ever pops while visible. The scene fades to fully transparent
// before it resets, then fades back in, so the loop is seamless. ----
const CYCLE = 12;
const HOLD_END = 9.5;
const FADE_END = 10.3;

const t = (s: number) => s / CYCLE;

const containerAnim = {
  animate: { opacity: [0, 1, 1, 0, 0] },
  transition: {
    duration: CYCLE,
    repeat: Infinity,
    ease: "easeInOut",
    times: [0, t(0.3), t(HOLD_END), t(FADE_END), 1],
  },
};

// A code line "types in" via clip-path reveal — no width math needed,
// works for any line length.
const codeReveal = (start: number, dur = 0.9) => ({
  animate: {
    clipPath: [
      "inset(0 100% 0 0)",
      "inset(0 100% 0 0)",
      "inset(0 0% 0 0)",
      "inset(0 0% 0 0)",
    ],
  },
  transition: {
    duration: CYCLE,
    repeat: Infinity,
    ease: "easeInOut",
    times: [0, t(start), t(start + dur), 1],
  },
});

// A preview element fades/slides up once its matching code line finishes.
const previewReveal = (start: number, dur = 0.5) => ({
  animate: { opacity: [0, 0, 1, 1], y: [8, 8, 0, 0] },
  transition: {
    duration: CYCLE,
    repeat: Infinity,
    ease: "easeOut",
    times: [0, t(start), t(start + dur), 1],
  },
});

export default function WebDevelopmentCard() {
  return (
    <div className="relative flex h-[520px] w-full flex-col overflow-hidden rounded-[34px] border border-[#24404D]/20 bg-[#0B1116] px-8 py-7 sm:px-10">
      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.18, 0.35, 0.18], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E566C]/20 blur-[140px]"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(#5E8FA2 1px, transparent 1px),
            linear-gradient(90deg,#5E8FA2 1px, transparent 1px)
          `,
          backgroundSize: "34px 34px",
        }}
      />

      {/* ================= HEADER ================= */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#7FAEC1]">
            Web Development
          </p>
          <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-white">
            From code to live site
          </h3>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#315262] bg-[#10181E] px-3 py-1.5">
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-2 w-2 rounded-full bg-emerald-400"
          />
          <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] text-[#CBEAF5]">
            Full-service team
          </span>
        </div>
      </div>

      {/* ================= WORKSPACE ================= */}
      <motion.div
        {...containerAnim}
        className="relative z-10 mt-6 flex flex-1 flex-col gap-4 sm:flex-row"
      >
        {/* ---- CODE EDITOR PANEL ---- */}
        <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#233A45] bg-[#0E161B] shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 border-b border-[#1D2E37] bg-[#111A20] px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4A52]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4A52]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4A52]" />
            </div>
            <span className="ml-2 rounded-t border-b border-[#6BB8D1] px-2 py-1 font-mono text-[11px] text-[#CBEAF5]">
              Hero.tsx
            </span>
          </div>

          <div className="flex-1 px-5 py-5 font-mono text-[12.5px] leading-[1.9]">
            <p className="text-[#5EA5C0]">
              function <span className="text-[#8ED8EA]">Hero</span>() {"{"}
            </p>
            <p className="pl-4 text-[#5EA5C0]">return (</p>
            <p className="pl-8">
              <span className="inline-block overflow-hidden align-top">
                <motion.span {...codeReveal(0.3)} className="inline-block whitespace-nowrap">
                  <span className="text-[#4C6A78]">{"<"}</span>
                  <span className="text-[#8ED8EA]">Navbar</span>
                  <span className="text-[#4C6A78]"> {"/>"}</span>
                </motion.span>
              </span>
            </p>
            <p className="pl-8">
              <span className="inline-block overflow-hidden align-top">
                <motion.span {...codeReveal(1.7)} className="inline-block whitespace-nowrap">
                  <span className="text-[#4C6A78]">{"<h1>"}</span>
                  <span className="text-[#CBEAF5]">Build Something Great</span>
                  <span className="text-[#4C6A78]">{"</h1>"}</span>
                </motion.span>
              </span>
            </p>
            <p className="pl-8">
              <span className="inline-block overflow-hidden align-top">
                <motion.span {...codeReveal(3.1)} className="inline-block whitespace-nowrap">
                  <span className="text-[#4C6A78]">{"<p>"}</span>
                  <span className="text-[#9BC3D3]">Custom software, done right.</span>
                  <span className="text-[#4C6A78]">{"</p>"}</span>
                </motion.span>
              </span>
            </p>
            <p className="pl-8">
              <span className="inline-block overflow-hidden align-top">
                <motion.span {...codeReveal(4.5)} className="inline-block whitespace-nowrap">
                  <span className="text-[#4C6A78]">{"<"}</span>
                  <span className="text-[#8ED8EA]">Button</span>
                  <span className="text-[#4C6A78]">{">"}</span>
                  <span className="text-[#CBEAF5]">Get Started</span>
                  <span className="text-[#4C6A78]">{"</"}</span>
                  <span className="text-[#8ED8EA]">Button</span>
                  <span className="text-[#4C6A78]">{">"}</span>
                </motion.span>
              </span>
            </p>
            <p className="pl-4 text-[#5EA5C0]">);</p>
            <p className="text-[#5EA5C0]">{"}"}</p>
          </div>
        </div>

        {/* Connector */}
        <div className="relative hidden w-10 items-center justify-center sm:flex">
          <div className="h-px w-full bg-gradient-to-r from-[#233A45] via-[#3A6274] to-[#233A45]" />
          <motion.span
            animate={{ left: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-2 w-2 -translate-x-1/2 rounded-full bg-[#8ED8EA] shadow-[0_0_10px_rgba(142,216,234,0.8)]"
          />
        </div>

        {/* ---- LIVE PREVIEW PANEL ---- */}
        <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#233A45] bg-white shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 border-b border-[#E7ECEF] bg-[#F6F8F9] px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E3E8EA]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E3E8EA]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E3E8EA]" />
            </div>
            <div className="ml-2 h-5 flex-1 max-w-[180px] rounded-full border border-[#E3E8EA] bg-white" />
          </div>

          <div className="flex flex-1 flex-col px-6 py-6">
            <motion.div {...previewReveal(1.35)} className="flex items-center justify-between">
              <span className="text-sm font-semibold tracking-tight text-[#0B1116]">
                Acme Studio
              </span>
              <div className="flex gap-4 text-[11px] uppercase tracking-[0.1em] text-[#5C7280]">
                <span>Work</span>
                <span>About</span>
                <span>Contact</span>
              </div>
            </motion.div>

            <div className="mt-10 flex flex-1 flex-col justify-center">
              <motion.h1
                {...previewReveal(2.75)}
                className="text-2xl font-bold leading-tight tracking-tight text-[#0B1116] sm:text-3xl"
              >
                Build Something Great
              </motion.h1>
              <motion.p {...previewReveal(4.15)} className="mt-3 max-w-[280px] text-sm text-[#5C7280]">
                Custom software, done right.
              </motion.p>
              <motion.div {...previewReveal(5.55)} className="mt-6">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#3A6274] to-[#5EA5C0] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-white shadow-[0_10px_25px_-8px_rgba(58,98,116,0.6)]">
                  Get Started
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
