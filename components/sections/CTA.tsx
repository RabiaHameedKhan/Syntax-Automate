"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative isolate flex h-screen w-full items-center justify-center overflow-hidden text-white">

      {/* ================= Full-bleed background photo ================= */}

      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/CTA/person2.png"
          alt=""
          fill
          priority
          className="object-cover object-[70%_25%]"
          style={{ filter: "saturate(1.15) contrast(1.05)" }}
        />

        {/* Color grade — light tint, darker only where the panel/text sit for contrast */}
        <div className="absolute inset-0 bg-[#1E566C] mix-blend-color opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F2E]/75 via-[#0B1F2E]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2E]/60 via-transparent to-[#0B1F2E]/20" />
      </motion.div>

      {/* Subtle animated glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-1/2
          h-[520px]
          w-[520px]
          -translate-y-1/2
          rounded-full
          bg-[#5EE6D0]/20
          blur-[110px]
        "
      />

      {/* Floating glass orb accent */}

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="
          pointer-events-none
          absolute
          bottom-10
          right-10
          h-16
          w-16
          rounded-full
          border
          border-white/30
          bg-gradient-to-br
          from-[#5EE6D0]/60
          to-[#1E566C]/40
          shadow-[0_0_40px_rgba(94,230,208,0.35)]
          backdrop-blur-md
          hidden
          sm:block
        "
      />

      {/* ================= Glassmorphism content panel ================= */}

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
        className="
          group
          relative
          z-10
          mx-6
          w-full
          max-w-[900px]
          rounded-[32px]
          border
          border-white/15
          bg-white/[0.10]
          px-6
          py-12
          text-center
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-white/40
          hover:shadow-[0_0_50px_rgba(94,230,208,0.35),0_20px_60px_rgba(0,0,0,0.3)]
          sm:px-12
          sm:py-16
        "
      >
        {/* glow ring — brightens on hover */}
        <div className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: "0 0 0 1px rgba(94,230,208,0.4), inset 0 0 30px rgba(94,230,208,0.08)" }} />

        {/* inner top highlight — glass edge sheen */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-white/20
            bg-white/10
            px-4
            py-2
            text-[11px]
            uppercase
            tracking-[0.35em]
            text-white/80
            sm:text-[12px]
          "
        >
          Ready to Build?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="
            mx-auto
            mt-6
            max-w-[760px]
            text-[36px]
            font-extralight
            leading-[1.08]
            tracking-[-0.04em]
            text-white
            sm:text-[48px]
            lg:text-[58px]
          "
        >
          Let's create software
          <br className="hidden sm:block" />
          {" "}that grows your business.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.75 }}
          className="
            mx-auto
            mt-6
            max-w-[620px]
            text-[15px]
            leading-8
            text-white/75
            sm:text-[17px]
            lg:text-[18px]
            lg:leading-9
          "
        >
          Whether it's AI automation, custom software,
          enterprise systems or premium digital experiences,
          we're ready to build your next competitive advantage.
        </motion.p>

        {/* Button */}

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="
            group/btn
            mx-auto
            mt-10
            flex
            w-fit
            items-center
            gap-3
            rounded-xl
            bg-white
            px-8
            py-4
            text-[13px]
            font-medium
            uppercase
            tracking-[0.16em]
            text-[#1E566C]
            transition-all
            duration-300
            hover:bg-[#5EE6D0]
            hover:text-[#0B1F2E]
            hover:shadow-[0_20px_50px_rgba(94,230,208,0.4)]
            sm:mt-12
            sm:px-9
          "
        >
          Start Your Project

          <ArrowUpRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover/btn:-translate-y-1
              group-hover/btn:translate-x-1
            "
          />
        </motion.a>
      </motion.div>

    </section>
  );
}
