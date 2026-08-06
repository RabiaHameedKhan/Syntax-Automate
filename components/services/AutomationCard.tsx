"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

const beforeTasks = [
  { time: "3m", text: "Open email & save attachment" },
  { time: "2m", text: "Extract invoice data" },
  { time: "5m", text: "Update CRM records" },
  { time: "4m", text: "Rename & organize files" },
  { time: "3m", text: "Notify finance team" },
  { time: "∞", text: "Repeat every day..." },
];

const afterTasks = [
  "Email received",
  "AI extracted invoice",
  "CRM updated",
  "Files organized",
  "Slack notification sent",
];

export default function AutomationCard() {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let step = 0;

    const interval = setInterval(() => {
      step++;

      if (step <= afterTasks.length) {
        setActiveStep(step);
        setProgress(Math.round((step / afterTasks.length) * 100));
      } else {
        setTimeout(() => {
          setActiveStep(0);
          setProgress(0);
        }, 1500);

        step = 0;
      }
    }, 850);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 lg:flex-row">

      {/* BEFORE */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
        className="flex-1 rounded-[34px] border border-[#E7E9EC] bg-[#FCFBF8] p-8 shadow-[0_20px_70px_rgba(0,0,0,0.05)]"
      >

        <p className="mb-6 text-[12px] uppercase tracking-[0.28em] text-[#8E7555]">
          BEFORE • Manual Workflow
        </p>

        <div className="space-y-3">

          {beforeTasks.map((task) => (

            <div
              key={task.text}
              className="flex items-center gap-4 rounded-xl bg-[#F4EFE5] px-4 py-3"
            >

              <span className="text-xs text-[#9D8A6D]">

                {task.time}

              </span>

              <span className="text-sm text-[#6F6048]">

                {task.text}

              </span>

            </div>

          ))}

        </div>

      </motion.div>

      {/* AFTER */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8, delay: .15 }}
        viewport={{ once: true }}
        className="
          relative
          flex-1
          overflow-hidden
          rounded-[34px]
          bg-gradient-to-br
          from-[#D8FFF0]
          via-[#C5FFF8]
          to-[#A8F5F8]
          p-8
          shadow-[0_30px_80px_rgba(30,86,108,.15)]
        "
      >

        {/* glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [.3, .55, .3],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="
            absolute
            right-[-80px]
            top-[-80px]
            h-56
            w-56
            rounded-full
            bg-[#1E566C]
            blur-[90px]
          "
        />

        <div className="relative z-10">

          <div className="mb-8 flex items-center justify-between">

            <div>

              <p className="text-[12px] uppercase tracking-[0.28em] text-[#1E566C]">

                AFTER • AI Automation

              </p>

              <h3 className="mt-3 text-3xl font-light text-[#163A4A]">

                {progress}% Complete

              </h3>

            </div>

            {/* Progress */}

            <div className="relative h-20 w-20">

              <svg
                viewBox="0 0 100 100"
                className="h-full w-full -rotate-90"
              >

                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="#D7F8F4"
                  strokeWidth="8"
                  fill="none"
                />

                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="#1E566C"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={264}
                  animate={{
                    strokeDashoffset:
                      264 - (264 * progress) / 100,
                  }}
                />

              </svg>

              <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-[#1E566C]">

                {progress}%

              </span>

            </div>

          </div>

          <div className="space-y-3">

            {afterTasks.map((task, index) => {

              const completed = index < activeStep;

              return (

                <motion.div
                  key={task}
                  animate={{
                    opacity: completed ? 1 : .45,
                    scale: completed ? 1 : .96,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-white/75
                    px-5
                    py-4
                    backdrop-blur-md
                  "
                >

                  {completed ? (

                    <CheckCircle2
                      size={20}
                      className="text-[#1E566C]"
                    />

                  ) : (

                    <AlertCircle
                      size={20}
                      className="text-[#87B7B6]"
                    />

                  )}

                  <span className="text-sm text-[#23495A]">

                    {task}

                  </span>

                </motion.div>

              );

            })}

          </div>

          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
              mt-8
              rounded-2xl
              bg-[#163A4A]
              px-6
              py-5
              text-white
            "
          >

            <p className="text-xs uppercase tracking-[0.22em] text-white/60">

              Weekly Time Saved

            </p>

            <h2 className="mt-2 text-4xl font-light">

              31h 24m

            </h2>

          </motion.div>

        </div>

      </motion.div>

    </div>
  );
}