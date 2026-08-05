"use client";

import { HeroGlobe } from "@/components/animations/HeroGlobe";
import Iridescence from "@/components/animations/Iridescence";
import BlurText from "@/components/animations/BlurText";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative h-[100svh] max-h-[100svh] overflow-hidden bg-white">

      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Iridescence
          color={[1, 1, 1]}
          amplitude={0.06}
          speed={0.45}
          mouseReact
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-[1700px] flex-col items-center justify-center gap-4 px-6 py-4 sm:gap-6 sm:py-6 lg:flex-row lg:justify-between lg:gap-14 lg:px-16 lg:pt-24 lg:pb-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.2,
            },
          },
        }}
      >

        {/* LEFT */}

        <motion.div
          className="order-2 w-full text-center lg:order-1 lg:w-[48%] lg:pl-[170px] lg:text-left"
          variants={fadeUp}
        >

          <motion.span
            className="mb-2 block text-[10px] uppercase tracking-[0.32em] text-[#1E566C] sm:mb-4 sm:text-[12px] sm:tracking-[0.42em] lg:mb-8"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            AI Powered Software House
          </motion.span>

          {/* Animated Heading */}

          <motion.div
            className="
              mx-auto
              max-w-[700px]
              text-[30px]
              sm:text-[42px]
              md:text-[56px]
              lg:text-[88px]
              leading-[0.98]
              tracking-[-0.03em]
              lg:leading-[0.92]
              lg:tracking-[-0.04em]
              font-extralight
            "
            variants={fadeUp}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <BlurText
              text="Building"
              animateBy="words"
              direction="top"
              delay={180}
              stepDuration={0.8}
            />

            <BlurText
              text="Intelligent"
              animateBy="words"
              direction="top"
              delay={280}
              stepDuration={0.8}
            />

            <BlurText
              text="Digital Systems"
              animateBy="words"
              direction="top"
              delay={380}
              stepDuration={0.8}
            />
          </motion.div>

          <motion.p
            className="
              mt-3
              mx-auto
              max-w-[560px]
              text-[13px]
              leading-6
              text-[#5F6B76]
              sm:mt-5
              sm:text-[16px]
              sm:leading-7
              lg:mt-8
              lg:text-[18px]
              lg:leading-8
            "
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          >
            We build intelligent AI systems, business automation,
            modern web applications and premium digital experiences.
          </motion.p>

          <motion.div
            className="mt-4 flex w-full flex-col items-center justify-center gap-2 sm:mt-8 sm:flex-row sm:gap-4 sm:justify-start lg:mt-12"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >

            <button
              className="
                h-[42px]
                w-full
                rounded-xl
                bg-[#1E566C]
                px-6
                text-[11px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-white
                transition-all
                hover:bg-[#174454]
                sm:h-[52px]
                sm:w-auto
                sm:px-8
                sm:text-[13px]
                sm:tracking-[0.16em]
              "
            >
              Start Project
            </button>

            <button
              className="
                h-[42px]
                rounded-xl
                border
                border-[#D7DEE3]
                bg-white
                px-6
                text-[11px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-[#1F2933]
                transition-all
                hover:border-[#1E566C]
                hover:text-[#1E566C]
                sm:h-[52px]
                sm:px-8
                sm:text-[13px]
                sm:tracking-[0.16em]
              "
            >
              View Work
            </button>

          </motion.div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="relative order-1 flex w-full items-center justify-center lg:order-2 lg:mt-0 lg:w-[52%]"
          variants={fadeUp}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >

          {/* Glow */}

          <div
            className="
              absolute
              h-[180px]
              w-[180px]
              rounded-full
              bg-[#1E566C]/10
              blur-[70px]
              sm:h-[280px]
              sm:w-[280px]
              sm:blur-[90px]
              lg:h-[560px]
              lg:w-[560px]
              lg:blur-[110px]
            "
          />

          {/* Globe */}

          <div
            className="
              relative
              h-[160px]
              w-[160px]
              sm:h-[240px]
              sm:w-[240px]
              md:h-[320px]
              md:w-[320px]
              lg:h-[520px]
              lg:w-[520px]
              xl:h-[560px]
              xl:w-[560px]
            "
          >
            <HeroGlobe />
          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}
