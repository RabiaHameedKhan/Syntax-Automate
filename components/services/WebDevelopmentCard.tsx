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
    ease: "easeInOut" as const,
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
    ease: "easeInOut" as const,
    times: [0, t(start), t(start + dur), 1],
  },
});

// A preview element fades/slides up once its matching code line finishes.
const previewReveal = (start: number, dur = 0.5) => ({
  animate: { opacity: [0, 0, 1, 1], y: [8, 8, 0, 0] },
  transition: {
    duration: CYCLE,
    repeat: Infinity,
    ease: "easeOut" as const,
    times: [0, t(start), t(start + dur), 1],
  },
});

export default function WebDevelopmentCard() {
  return (
    <div className="relative flex h-auto min-h-[560px] w-full flex-col overflow-hidden rounded-[24px] border border-[#24404D]/20 bg-[#0B1116] px-5 py-6 sm:min-h-[560px] sm:rounded-[34px] sm:px-8 sm:py-7 md:h-[520px] md:min-h-0 lg:px-10">
      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: [0.18, 0.35, 0.18], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E566C]/20 blur-[100px] sm:h-[420px] sm:w-[420px] sm:blur-[120px] md:h-[520px] md:w-[520px] md:blur-[140px]"
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
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#7FAEC1] sm:text-[11px] sm:tracking-[0.3em]">
            Web Development
          </p>
          <h3 className="mt-1.5 text-base font-semibold tracking-tight text-white sm:text-lg">
            From code to live site
          </h3>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#315262] bg-[#10181E] px-3 py-1.5">
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-2 w-2 shrink-0 rounded-full bg-emerald-400"
          />
          <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.14em] text-[#CBEAF5] sm:text-[10px] sm:tracking-[0.18em]">
            Full-service team
          </span>
        </div>
      </div>

      {/* ================= WORKSPACE ================= */}
      <motion.div
        {...containerAnim}
        className="relative z-10 mt-5 flex flex-1 flex-col gap-4 sm:mt-6 md:flex-row"
      >
        {/* ---- CODE EDITOR PANEL ---- */}
        <div className="flex min-h-[220px] flex-1 flex-col overflow-hidden rounded-2xl border border-[#233A45] bg-[#0E161B] shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 border-b border-[#1D2E37] bg-[#111A20] px-3 py-2 sm:px-4 sm:py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4A52]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4A52]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A4A52]" />
            </div>
            <span className="ml-2 rounded-t border-b border-[#6BB8D1] px-2 py-1 font-mono text-[10px] text-[#CBEAF5] sm:text-[11px]">
              Hero.tsx
            </span>
          </div>

          <div className="flex-1 overflow-x-auto px-4 py-4 font-mono text-[11px] leading-[1.8] sm:px-5 sm:py-5 sm:text-[12.5px] sm:leading-[1.9]">
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

        {/* Connector — horizontal bar between stacked panels on mobile, vertical bar between side-by-side panels on desktop */}
        <div className="relative flex h-6 w-full items-center justify-center md:h-auto md:w-10 md:flex-none">
          {/* mobile: horizontal line, dot travels left/right */}
          <div className="h-px w-full bg-gradient-to-r from-[#233A45] via-[#3A6274] to-[#233A45] md:hidden" />
          <motion.span
            animate={{ left: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8ED8EA] shadow-[0_0_10px_rgba(142,216,234,0.8)] md:hidden"
          />
          {/* desktop: vertical line, dot travels up/down */}
          <div className="hidden h-full w-px bg-gradient-to-b from-[#233A45] via-[#3A6274] to-[#233A45] md:block" />
          <motion.span
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8ED8EA] shadow-[0_0_10px_rgba(142,216,234,0.8)] md:block"
          />
        </div>

        {/* ---- LIVE PREVIEW PANEL ---- */}
        <div className="flex min-h-[220px] flex-1 flex-col overflow-hidden rounded-2xl border border-[#233A45] bg-white shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 border-b border-[#E7ECEF] bg-[#F6F8F9] px-3 py-2 sm:px-4 sm:py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#E3E8EA]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E3E8EA]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#E3E8EA]" />
            </div>
            <div className="ml-2 h-5 max-w-[180px] flex-1 rounded-full border border-[#E3E8EA] bg-white" />
          </div>

          <div className="flex flex-1 flex-col px-4 py-4 sm:px-6 sm:py-6">
            <motion.div {...previewReveal(1.35)} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <span className="text-xs font-semibold tracking-tight text-[#0B1116] sm:text-sm">
                Acme Studio
              </span>
              <div className="flex gap-2 text-[9px] uppercase tracking-[0.08em] text-[#5C7280] sm:gap-4 sm:text-[11px] sm:tracking-[0.1em]">
                <span>Work</span>
                <span>About</span>
                <span>Contact</span>
              </div>
            </motion.div>

            <div className="mt-6 flex flex-1 flex-col justify-center sm:mt-10">
              <motion.h1
                {...previewReveal(2.75)}
                className="text-xl font-bold leading-tight tracking-tight text-[#0B1116] sm:text-2xl md:text-3xl"
              >
                Build Something Great
              </motion.h1>
              <motion.p {...previewReveal(4.15)} className="mt-3 max-w-[280px] text-xs text-[#5C7280] sm:text-sm">
                Custom software, done right.
              </motion.p>
              <motion.div {...previewReveal(5.55)} className="mt-5 sm:mt-6">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#3A6274] to-[#5EA5C0] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.1em] text-white shadow-[0_10px_25px_-8px_rgba(58,98,116,0.6)] sm:px-5 sm:py-2.5 sm:text-xs">
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
