"use client";

import { HeroGlobe } from "@/components/animations/HeroGlobe";
import Iridescence from "@/components/animations/Iridescence";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
   <Iridescence
  color={[0.35, 0.55, 0.70]}
  amplitude={0.06}
  speed={0.45}
  mouseReact
/>
      </div>

      <div className="mx-auto flex min-h-screen max-w-[1700px] items-center justify-between px-16 pt-28 pb-8">

        {/* LEFT */}

        <div className="w-[48%] pl-[170px]">

          <span className="mb-8 block text-[13px] uppercase tracking-[0.42em] text-[#1E566C]">
            AI Powered Software House
          </span>

          <h1
            className="
              max-w-[700px]
              text-[88px]
              leading-[0.92]
              tracking-[-0.07em]
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
              max-w-[560px]
              text-[19px]
              leading-8
              text-[#5F6B76]
            "
          >
            We build intelligent AI systems, business automation,
            modern web applications and premium digital experiences.
          </p>

          <div className="mt-12 flex gap-4">

            <button
              className="
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

        <div className="relative flex w-[52%] items-center justify-center">

          {/* Soft Glow */}

          <div
            className="
              absolute
              h-[560px]
              w-[560px]
              rounded-full
              bg-[#1E566C]/10
              blur-[110px]
            "
          />

          {/* Globe */}

          <div
            className="
              relative
              h-[420px]
              w-[420px]
              sm:h-[470px]
              sm:w-[470px]
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