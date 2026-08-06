"use client";

import { HeroGlobe } from "@/components/animations/HeroGlobe";
import Iridescence from "@/components/animations/Iridescence";
import BlurText from "@/components/animations/BlurText";
import { motion } from "framer-motion";

// Sequencing: the navbar animates in first (~1.1s to fully settle).
// Hero content then reveals in three stages, one group at a time.
const NAV_CLEAR = 1.1;
const STAGE_GAP = 0.25;

const STAGE_1 = NAV_CLEAR;
const STAGE_2 = STAGE_1 + 0.75 + STAGE_GAP;
const STAGE_3 = STAGE_2 + 0.7 + STAGE_GAP;

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        pt-20
        sm:pt-24
        lg:h-[100svh]
        lg:max-h-[100svh]
        lg:pt-0
      "
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Iridescence
          color={[1, 1, 1]}
          amplitude={0.06}
          speed={0.45}
          mouseReact
        />
      </div>

      {/* Bottom shadow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[5]
          h-[220px]
          bg-gradient-to-b
          from-transparent
          via-black/[0.03]
          to-black/[0.09]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-[1700px]
          flex-col
          items-center
          justify-center
          gap-8
          px-5
          py-10
          sm:px-8
          sm:py-12
          md:px-10
          lg:h-full
          lg:min-h-0
          lg:flex-row
          lg:justify-between
          lg:gap-14
          lg:px-16
          lg:pt-24
          lg:pb-6
        "
      >
        {/* LEFT */}

        <div
          className="
            w-full
            text-center
            lg:w-[48%]
            lg:pl-[120px]
            xl:pl-[170px]
            lg:text-left
          "
        >
          <motion.span
            className="
              mb-2
              block
              text-[10px]
              uppercase
              tracking-[0.30em]
              text-[#1E566C]
              sm:text-[12px]
              lg:mb-4
              lg:tracking-[0.42em]
            "
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: STAGE_1,
              ease: "easeOut",
            }}
          >
            AI Powered Software House
          </motion.span>

                    {/* Animated Heading */}

          <motion.div
            className="
              mx-auto
              max-w-[700px]
              text-[34px]
              leading-[1]
              tracking-[-0.03em]
              font-extralight
              xs:text-[38px]
              sm:text-[48px]
              md:text-[60px]
              lg:mx-0
              lg:max-w-none
              lg:text-[78px]
              lg:leading-[0.94]
              xl:text-[88px]
              xl:leading-[0.92]
              lg:tracking-[-0.04em]
            "
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: STAGE_1 + 0.08,
              ease: "easeOut",
            }}
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
              mx-auto
              mt-4
              max-w-[560px]
              text-[14px]
              leading-7
              text-[#5F6B76]
              sm:text-[16px]
              lg:mx-0
              lg:mt-8
              lg:text-[18px]
              lg:leading-8
            "
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: STAGE_2,
              ease: "easeOut",
            }}
          >
            We build intelligent AI systems, business automation,
            modern web applications and premium digital experiences.
          </motion.p>

          <motion.div
            className="
              mt-8
              flex
              w-full
              flex-col
              items-center
              gap-3
              sm:flex-row
              sm:justify-center
              lg:justify-start
              lg:mt-12
            "
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: STAGE_3,
              ease: "easeOut",
            }}
          >
            <button
              className="
                h-[48px]
                w-full
                max-w-[260px]
                rounded-xl
                bg-[#1E566C]
                px-8
                text-[12px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-white
                transition-all
                hover:bg-[#174454]
                sm:w-auto
                sm:max-w-none
                sm:h-[52px]
                sm:text-[13px]
              "
            >
              Start Project
            </button>

            <button
              className="
                h-[48px]
                w-full
                max-w-[260px]
                rounded-xl
                border
                border-[#D7DEE3]
                bg-white
                px-8
                text-[12px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-[#1F2933]
                transition-all
                hover:border-[#1E566C]
                hover:text-[#1E566C]
                sm:w-auto
                sm:max-w-none
                sm:h-[52px]
                sm:text-[13px]
              "
            >
              View Work
            </button>
          </motion.div>

        </div>

        {/* RIGHT */}

        <motion.div
          className="
            relative
            mt-8
            flex
            w-full
            items-center
            justify-center
            lg:mt-0
            lg:w-[52%]
          "
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: STAGE_1,
            ease: "easeOut",
          }}
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
              sm:h-[260px]
              sm:w-[260px]
              sm:blur-[90px]
              md:h-[360px]
              md:w-[360px]
              lg:h-[500px]
              lg:w-[500px]
              lg:blur-[110px]
              xl:h-[560px]
              xl:w-[560px]
            "
          />

          {/* Globe */}

          <div
            className="
              relative
              h-[220px]
              w-[220px]
              sm:h-[300px]
              sm:w-[300px]
              md:h-[380px]
              md:w-[380px]
              lg:h-[480px]
              lg:w-[480px]
              xl:h-[560px]
              xl:w-[560px]
            "
          >
            <HeroGlobe />
          </div>

        </motion.div>

              </div>
    </section>
  );
}
