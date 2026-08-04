"use client";

import { HeroGlobe } from "@/components/animations/HeroGlobe";
import Iridescence from "@/components/animations/Iridescence";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Iridescence
          color={[1, 1, 1]}
          amplitude={0.06}
          speed={0.45}
          mouseReact
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1700px] flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-16 lg:pt-28 lg:pb-8 gap-14">

        {/* LEFT */}

        <div className="w-full lg:w-[48%] lg:pl-[170px] text-center lg:text-left">

          <span className="mb-8 block text-[12px] uppercase tracking-[0.42em] text-[#1E566C]">
            AI Powered Software House
          </span>

          <h1
            className="
              mx-auto
              max-w-[700px]
              text-[44px]
              sm:text-[54px]
              md:text-[72px]
              lg:text-[88px]
              leading-[0.92]
              tracking-[-0.04em]
              font-extralight
              text-[#1F2933]
            "
          >
            Building
            <br />
            Intelligent
            <br />
            Digital Systems
          </h1>

          <p
            className="
              mt-8
              mx-auto
              max-w-[560px]
              text-[16px]
              sm:text-[18px]
              leading-8
              text-[#5F6B76]
            "
          >
            We build intelligent AI systems, business automation,
            modern web applications and premium digital experiences.
          </p>

          <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">

            <button
              className="
                w-full
                sm:w-auto
                h-[52px]
                px-8
                rounded-xl
                bg-[#1E566C]
                text-white
                text-[13px]
                font-medium
                uppercase
                tracking-[0.16em]
                transition-all
                hover:bg-[#174454]
              "
            >
              Start Project
            </button>

            <button
              className="
                h-[52px]
                px-8
                rounded-xl
                border
                border-[#D7DEE3]
                bg-white
                text-[#1F2933]
                text-[13px]
                font-medium
                uppercase
                tracking-[0.16em]
                transition-all
                hover:border-[#1E566C]
                hover:text-[#1E566C]
              "
            >
              View Work
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex w-full lg:w-[52%] items-center justify-center mt-12 lg:mt-0">

          {/* Soft Glow */}

          <div
            className="
              absolute
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#1E566C]/10
              blur-[110px]
              sm:h-[520px]
              sm:w-[520px]
              lg:h-[560px]
              lg:w-[560px]
            "
          />

          {/* Globe */}

          <div
            className="
              relative
              h-[300px]
              w-[300px]
              sm:h-[420px]
              sm:w-[420px]
              lg:h-[520px]
              lg:w-[520px]
              xl:h-[560px]
              xl:w-[560px]
            "
          >
            <HeroGlobe />
          </div>

        </div>

      </div>

    </section>
  );
}