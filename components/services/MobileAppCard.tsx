"use client";

import { motion } from "framer-motion";

// ---- Timeline ----
// Screens slide left, held in place, then slide to the next. A 4th "clone"
// slide (identical to the 1st) sits at the end, so when the loop restarts
// and snaps back to slide 1, the frame looks unchanged — no visible pop.
const HOLD = 2.4;
const SLIDE = 0.7;
const CYCLE = HOLD * 3 + SLIDE * 3; // 9.3s
const SCREEN_W = 116; // px, matches the phone's inner viewport width

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
  animate: { x: [0, 0, -SCREEN_W, -SCREEN_W, -SCREEN_W * 2, -SCREEN_W * 2, -SCREEN_W * 3] },
  transition: { duration: CYCLE, repeat: Infinity, times, ease },
};

const TAB_GAP = 30;
const dotX = {
  animate: { x: [0, 0, TAB_GAP, TAB_GAP, TAB_GAP * 2, TAB_GAP * 2, 0] },
  transition: { duration: CYCLE, repeat: Infinity, times, ease },
};

export default function MobileAppCard() {
  return (
    <div className="relative h-[250px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      {/* glow */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-0 bg-[#1E566C]/10 blur-3xl"
      />

      {/* phone */}
      <div className="absolute left-1/2 top-1/2 h-[224px] w-[132px] -translate-x-1/2 -translate-y-1/2 rounded-[26px] border border-white/15 bg-[#0F1418] p-2 shadow-2xl">
        {/* notch */}
        <div className="absolute left-1/2 top-3 z-10 h-[14px] w-[54px] -translate-x-1/2 rounded-full bg-[#0F1418]" />

        <div className="relative h-full overflow-hidden rounded-[18px] bg-[#0E161B]">
          {/* status bar */}
          <div className="flex items-center justify-between px-3 pt-2.5">
            <span className="font-mono text-[8px] text-white/70">9:41</span>
            <div className="flex items-center gap-[3px]">
              <span className="h-[3px] w-[3px] rounded-full bg-white/50" />
              <span className="h-[4px] w-[3px] rounded-full bg-white/50" />
              <span className="h-[5px] w-[3px] rounded-full bg-white/70" />
              <span className="ml-[3px] h-[7px] w-[13px] rounded-[2px] border border-white/50" />
            </div>
          </div>

          {/* sliding screens */}
          <div className="relative mt-2 h-[calc(100%-42px)] w-[116px] overflow-hidden">
            <motion.div {...screenX} className="flex h-full">
              {/* ---- Screen 1: Onboarding ---- */}
              <div className="flex h-full w-[116px] shrink-0 flex-col items-center justify-center px-4 text-center">
                <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#7FAEC1]">
                  Acme
                </span>
                <p className="mt-3 text-[11px] font-semibold leading-tight text-white">
                  Book in
                  <br />
                  seconds
                </p>
                <p className="mt-2 text-[7.5px] leading-snug text-white/50">
                  Real-time slots, right on your phone.
                </p>
                <span className="mt-3 rounded-full bg-gradient-to-r from-[#3A6274] to-[#5EA5C0] px-3 py-1 text-[7px] font-medium uppercase tracking-wide text-white">
                  Get Started
                </span>
              </div>

              {/* ---- Screen 2: Dashboard ---- */}
              <div className="h-full w-[116px] shrink-0 px-3 pt-3">
                <p className="text-[8px] text-white/50">Hi, Alex</p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-[20px] font-bold leading-none text-white">128</span>
                  <span className="text-[7px] text-white/50">orders today</span>
                </div>
                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center justify-between rounded-md bg-white/[0.04] px-2 py-1.5">
                    <span className="text-[7.5px] text-white/80">Table 4</span>
                    <span className="flex items-center gap-1 text-[6.5px] text-emerald-400">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      Confirmed
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-md bg-white/[0.04] px-2 py-1.5">
                    <span className="text-[7.5px] text-white/80">Table 7</span>
                    <span className="flex items-center gap-1 text-[6.5px] text-amber-400">
                      <span className="h-1 w-1 rounded-full bg-amber-400" />
                      Pending
                    </span>
                  </div>
                </div>
              </div>

              {/* ---- Screen 3: Profile ---- */}
              <div className="h-full w-[116px] shrink-0 px-3 pt-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#274250] text-[8px] font-semibold text-[#9FD4E6]">
                    AM
                  </div>
                  <div>
                    <p className="text-[8px] font-medium text-white">Alex Morgan</p>
                    <p className="text-[6.5px] text-white/40">alex@acme.io</p>
                  </div>
                </div>
                <div className="mt-3 space-y-1.5 border-t border-white/[0.06] pt-2">
                  {["Notifications", "Payment methods", "Log out"].map((row) => (
                    <div key={row} className="flex items-center justify-between py-0.5">
                      <span className="text-[7.5px] text-white/70">{row}</span>
                      <span className="text-[7.5px] text-white/25">›</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ---- Screen 4: clone of Screen 1 (for the seamless loop) ---- */}
              <div className="flex h-full w-[116px] shrink-0 flex-col items-center justify-center px-4 text-center">
                <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#7FAEC1]">
                  Acme
                </span>
                <p className="mt-3 text-[11px] font-semibold leading-tight text-white">
                  Book in
                  <br />
                  seconds
                </p>
                <p className="mt-2 text-[7.5px] leading-snug text-white/50">
                  Real-time slots, right on your phone.
                </p>
                <span className="mt-3 rounded-full bg-gradient-to-r from-[#3A6274] to-[#5EA5C0] px-3 py-1 text-[7px] font-medium uppercase tracking-wide text-white">
                  Get Started
                </span>
              </div>
            </motion.div>
          </div>

          {/* tab bar */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-[30px] border-t border-white/[0.06] bg-[#0E161B] py-2">
            {["Home", "Orders", "Profile"].map((label) => (
              <span key={label} className="text-[6.5px] uppercase tracking-wide text-white/40">
                {label}
              </span>
            ))}
            <motion.span
              {...dotX}
              className="absolute bottom-[3px] left-[calc(50%-45px)] h-[3px] w-[3px] rounded-full bg-[#8ED8EA]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
