"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">

      {/* Ambient Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#1E566C]/5
          blur-[140px]
        "
      />

      {/* CTA */}

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          overflow-hidden
          rounded-[42px]
          bg-[#1E566C]
          px-6
          py-16
          text-center
          text-white
          sm:px-10
          sm:py-20
          lg:px-16
          lg:py-24
        "
      >

        {/* Subtle decorative glow */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/10
            blur-[100px]
          "
        />

        {/* Content */}

        <div className="relative z-10">

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              inline-block
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-white/70
              sm:text-[12px]
            "
          >
            Ready to Build?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mx-auto
              mt-6
              max-w-[900px]
              text-[42px]
              font-extralight
              leading-[1.05]
              tracking-[-0.05em]
              sm:text-[52px]
              lg:text-[64px]
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
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="
              mx-auto
              mt-8
              max-w-[700px]
              text-[16px]
              leading-8
              text-white/75
              sm:text-[18px]
              lg:text-[20px]
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
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              group
              mx-auto
              mt-12
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
              transition-shadow
              duration-300
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
              sm:mt-14
              sm:px-9
            "
          >
            Start Your Project

            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </motion.a>

        </div>

      </motion.div>

    </section>
  );
}