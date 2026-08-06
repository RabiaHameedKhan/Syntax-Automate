"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Iridescence from "@/components/animations/Iridescence";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { value: "60+", label: "Projects Delivered" },
  { value: "8+", label: "Years Of Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    title: "Our Mission",
    copy: "To help ambitious teams turn complex ideas into intelligent, reliable software that actually ships.",
  },
  {
    title: "Our Approach",
    copy: "We pair deep engineering with AI-first thinking, so every system we build gets smarter the longer it runs.",
  },
  {
    title: "Our Craft",
    copy: "Clean architecture, considered design, and obsessive attention to detail, on every project we take on.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const headingY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-1 overflow-hidden bg-white pb-24 pt-32 lg:pb-36 lg:pt-40"
    >

      {/* Base section gradient sits at the very back */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white via-[#F4F7F8] to-white" />

      {/* Continues the Hero's flowing background so the two sections blend,
          then fades into the section's own tone above — no hard seam line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[520px] overflow-hidden opacity-70"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      >
        <Iridescence color={[1, 1, 1]} amplitude={0.08} speed={0.4} mouseReact={false} />
      </div>

      {/* Background glow, parallaxed with scroll */}
      <motion.div
        style={{ y: glowY }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-[1]
          h-[460px]
          w-[460px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-br
          from-[#1E566C]/25
          via-[#1E566C]/10
          to-transparent
          blur-[120px]
          sm:h-[560px]
          sm:w-[560px]
          lg:h-[680px]
          lg:w-[680px]
        "
      />

      {/* Secondary lower-corner glow for depth */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          z-[1]
          h-[320px]
          w-[320px]
          translate-x-1/3
          translate-y-1/3
          rounded-full
          bg-gradient-to-tl
          from-[#1E566C]/15
          to-transparent
          blur-[100px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1700px] px-6 lg:px-16">

        <motion.div
          className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
          }}
        >

          {/* LEFT */}

          <motion.div
            style={{ y: headingY }}
            className="w-full text-center lg:text-left"
          >

            <motion.span
              className="mb-4 block text-[12px] uppercase tracking-[0.42em] text-[#1E566C] lg:mb-8"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Who We Are
            </motion.span>

            <motion.h2
              className="
                mx-auto
                max-w-[620px]
                text-[36px]
                sm:text-[48px]
                md:text-[58px]
                lg:mx-0
                lg:text-[64px]
                leading-[1.02]
                tracking-[-0.03em]
                font-extralight
                text-[#1F2933]
              "
              variants={fadeUp}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              Engineers Of <span className="text-[#1E566C]">Intelligent</span> Digital Systems
            </motion.h2>

            <motion.p
              className="
                mt-6
                mx-auto
                max-w-[540px]
                text-[16px]
                leading-8
                text-[#5F6B76]
                sm:text-[18px]
                lg:mx-0
                lg:mt-8
              "
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Syntax Automate is an AI powered software house. We design and
              build intelligent AI systems, business automation, and modern
              web applications for teams who want to move faster without
              cutting corners. Every product we ship is built to think,
              adapt, and scale alongside the businesses that rely on it.
            </motion.p>

            {/* Stats */}

            <motion.div
              className="
                mt-10
                grid
                grid-cols-3
                gap-6
                rounded-2xl
                bg-gradient-to-br
                from-[#1E566C]
                via-[#204F63]
                to-[#153C4B]
                p-6
                shadow-[0_25px_60px_-20px_rgba(30,86,108,0.55)]
                sm:gap-8
                sm:p-8
                lg:mt-14
              "
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                },
              }}
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                  <div className="text-[26px] font-extralight text-white sm:text-[32px]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/70 sm:text-[12px]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            style={{ y: cardsY }}
            className="flex flex-col gap-5"
          >
            {values.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
                  group
                  rounded-2xl
                  border
                  border-[#D7DEE3]
                  bg-gradient-to-b
                  from-white
                  to-[#F4F7F8]
                  p-7
                  shadow-[0_15px_40px_-20px_rgba(30,86,108,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#1E566C]
                  hover:shadow-[0_25px_50px_-15px_rgba(30,86,108,0.35)]
                  lg:p-8
                "
              >
                <h3 className="text-[18px] tracking-[-0.01em] text-[#1F2933] sm:text-[20px]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-7 text-[#5F6B76] sm:text-[15px]">
                  {item.copy}
                </p>
                <div className="mt-5 h-px w-10 bg-[#D7DEE3] transition-all duration-300 group-hover:w-16 group-hover:bg-[#1E566C]" />
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}