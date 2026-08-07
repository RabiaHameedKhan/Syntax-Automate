"use client";

import { motion } from "framer-motion";

// ---- Timeline ----
// Screens slide left, hold, then slide to the next. A 4th "clone" slide
// (identical to the 1st) sits at the end, so when the loop restarts and
// snaps back to slide 1, the frame looks unchanged — no visible pop.
// All movement is in percentages of the slide-track's own width, so it
// works identically at any container size — nothing is computed in px.
const HOLD = 2.4;
const SLIDE = 0.7;
const CYCLE = HOLD * 3 + SLIDE * 3; // 9.3s
const SLIDES = 4;
const STEP = 100 / SLIDES; // 25% per screen

const tf = (s: number) => s / CYCLE;

const times = [
  0,
  tf(HOLD),
  tf(HOLD + SLIDE),
  tf(HOLD * 2 + SLIDE),
  tf(HOLD * 2 + SLIDE * 2),
  tf(HOLD * 3 + SLIDE * 2),
  tf(HOLD * 3 + SLIDE * 3),
];

const ease = ["linear", "easeInOut", "linear", "easeInOut", "linear", "easeInOut"];

const screenX = {
  animate: {
    x: [
      "0%",
      "0%",
      `-${STEP}%`,
      `-${STEP}%`,
      `-${STEP * 2}%`,
      `-${STEP * 2}%`,
      `-${STEP * 3}%`,
    ],
  },
  transition: { duration: CYCLE, repeat: Infinity, times, ease },
};

// Tab dot sits at the center of 1 of 3 equal-width tabs: 16.67% / 50% / 83.33%.
// Animated via `x` (transform) instead of `left` so it's handled entirely by
// the compositor — animating `left` forces a layout reflow on every frame,
// which is what was causing the jank/shake.
const dotX = {
  animate: {
    x: ["16.67%", "16.67%", "50%", "50%", "83.33%", "83.33%", "16.67%"],
  },
  transition: { duration: CYCLE, repeat: Infinity, times, ease },
};

function OnboardingScreen() {
  return (
    <div className="flex h-full w-full shrink-0 flex-col items-center justify-center px-[8%] text-center">
      <span className="text-[0.55em] font-semibold uppercase leading-tight tracking-[0.2em] text-[#7FAEC1]">
        Syntax Automate
      </span>
      <p className="mt-[0.7em] text-[1.05em] font-semibold leading-tight text-white">
        Book in
        <br />
        seconds
      </p>
      <p className="mt-[0.5em] text-[0.68em] leading-snug text-white/50">
        Real-time slots, right on your phone.
      </p>
      <span className="mt-[0.8em] rounded-full bg-gradient-to-r from-[#3A6274] to-[#5EA5C0] px-[0.9em] py-[0.4em] text-[0.62em] font-medium uppercase tracking-wide text-white">
        Get Started
      </span>
    </div>
  );
}

export default function MobileAppCard() {
  return (
    <div className="relative flex h-[clamp(320px,60vh,560px)] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      {/* glow */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="pointer-events-none absolute inset-0 bg-[#1E566C]/10 blur-3xl"
      />

      {/* phone — width is fluid, bounded by BOTH viewport width and viewport
          height (via the vh term) so it can never grow taller than the
          screen and force a scroll; height still follows from aspect-ratio */}
      <div className="relative aspect-[9/19] w-[clamp(150px,min(24vw,26vh),280px)] rounded-[10%] border border-white/15 bg-[#0F1418] p-[3%] shadow-2xl">
        {/* notch */}
        <div className="absolute left-1/2 top-[5%] z-10 h-[3%] w-[42%] -translate-x-1/2 rounded-full bg-[#0F1418]" />

        <div
          className="relative flex h-full w-full flex-col overflow-hidden rounded-[8%] bg-[#0E161B]"
          style={{ fontSize: "clamp(8px, 1.5vw, 13px)" }}
        >
          {/* status bar */}
          <div className="flex shrink-0 items-center justify-between px-[10%] pt-[6%]">
            <span className="font-mono text-[0.65em] text-white/70">9:41</span>
            <div className="flex items-center gap-[3%]">
              <span className="h-[0.25em] w-[0.25em] rounded-full bg-white/50" />
              <span className="h-[0.35em] w-[0.25em] rounded-full bg-white/50" />
              <span className="h-[0.45em] w-[0.25em] rounded-full bg-white/70" />
              <span className="ml-[3%] h-[0.6em] w-[1.1em] rounded-[2px] border border-white/50" />
            </div>
          </div>

          {/* sliding screens */}
          <div className="relative mt-[4%] flex-1 overflow-hidden">
            <motion.div
              {...screenX}
              className="flex h-full"
              style={{ width: `${SLIDES * 100}%`, willChange: "transform" }}
            >
              <OnboardingScreen />

              {/* ---- Screen 2: Dashboard ---- */}
              <div className="h-full w-full shrink-0 px-[8%] pt-[3%]">
                <p className="text-[0.6em] text-white/50">Hi, Alex</p>
                <div className="mt-[0.5em] flex items-baseline gap-[0.3em]">
                  <span className="text-[1.6em] font-bold leading-none text-white">128</span>
                  <span className="text-[0.55em] text-white/50">orders today</span>
                </div>
                <div className="mt-[0.9em] space-y-[0.4em]">
                  <div className="flex items-center justify-between rounded-md bg-white/[0.04] px-[0.6em] py-[0.4em]">
                    <span className="text-[0.6em] text-white/80">Table 4</span>
                    <span className="flex items-center gap-[0.3em] text-[0.5em] text-emerald-400">
                      <span className="h-[0.4em] w-[0.4em] rounded-full bg-emerald-400" />
                      Confirmed
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-white/[0.04] px-[0.6em] py-[0.4em]">
                    <span className="text-[0.6em] text-white/80">Table 7</span>
                    <span className="flex items-center gap-[0.3em] text-[0.5em] text-amber-400">
                      <span className="h-[0.4em] w-[0.4em] rounded-full bg-amber-400" />
                      Pending
                    </span>
                  </div>
                </div>
              </div>

              {/* ---- Screen 3: Profile ---- */}
              <div className="h-full w-full shrink-0 px-[8%] pt-[3%]">
                <div className="flex items-center gap-[0.6em]">
                  <div className="flex h-[2em] w-[2em] items-center justify-center rounded-full bg-[#274250] text-[0.65em] font-semibold text-[#9FD4E6]">
                    AM
                  </div>
                  <div>
                    <p className="text-[0.62em] font-medium text-white">Alex Morgan</p>
                    <p className="text-[0.5em] text-white/40">alex@syntax.io</p>
                  </div>
                </div>
                <div className="mt-[0.9em] space-y-[0.4em] border-t border-white/[0.06] pt-[0.6em]">
                  {["Notifications", "Payment methods", "Log out"].map((row) => (
                    <div key={row} className="flex items-center justify-between py-[0.15em]">
                      <span className="text-[0.6em] text-white/70">{row}</span>
                      <span className="text-[0.6em] text-white/25">›</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ---- Screen 4: clone of Screen 1 (for the seamless loop) ---- */}
              <OnboardingScreen />
            </motion.div>
          </div>

          {/* tab bar */}
          <div className="relative flex shrink-0 items-center border-t border-white/[0.06] bg-[#0E161B] py-[3%]">
            {["Home", "Orders", "Profile"].map((label) => (
              <span
                key={label}
                className="flex-1 text-center text-[0.5em] uppercase tracking-wide text-white/40"
              >
                {label}
              </span>
            ))}
            <motion.div
              {...dotX}
              style={{ willChange: "transform" }}
              className="pointer-events-none absolute inset-x-0 bottom-[8%] h-[0.3em]"
            >
              <span className="absolute left-0 h-[0.3em] w-[0.3em] -translate-x-1/2 rounded-full bg-[#8ED8EA]" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
