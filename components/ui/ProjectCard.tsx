"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  index: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  accent: string;
};

export default function ProjectCard({
  index,
  title,
  category,
  description,
  tags,
  accent,
}: ProjectCardProps) {
  const reverse = index % 2 === 1;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`
        group
        flex
        flex-col
        items-center
        gap-10
        lg:flex-row
        ${reverse ? "lg:flex-row-reverse" : ""}
      `}
    >
      {/* Preview */}

      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          relative
          h-[430px]
          w-full
          overflow-hidden
          rounded-[34px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#0C1720]
          to-[#101F2A]
          lg:w-[58%]
        "
      >
        {/* Animated Glow */}

        <div
          className="
            absolute
            -left-24
            -top-24
            h-[260px]
            w-[260px]
            rounded-full
            blur-[120px]
            opacity-50
            transition-all
            duration-700
            group-hover:scale-125
          "
          style={{
            background: accent,
          }}
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
            bg-[size:45px_45px]
          "
        />

        {/* Fake Dashboard */}

        <div className="absolute inset-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

          <div className="flex items-center gap-2 border-b border-white/10 p-5">

            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />

          </div>

          <div className="space-y-5 p-8">

            <div className="h-6 w-[65%] rounded-full bg-white/10" />

            <div className="h-3 w-full rounded-full bg-white/5" />

            <div className="h-3 w-[85%] rounded-full bg-white/5" />

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="h-36 rounded-2xl bg-white/5" />

              <div className="h-36 rounded-2xl bg-white/5" />

              <div className="col-span-2 h-28 rounded-2xl bg-white/5" />

            </div>

          </div>

        </div>
      </motion.div>

      {/* Content */}

      <div className="w-full lg:w-[42%]">

        <p
          className="mb-4 text-sm uppercase tracking-[0.3em]"
          style={{
            color: accent,
          }}
        >
          {category}
        </p>

        <h3 className="text-[46px] font-extralight leading-tight tracking-[-0.04em] text-white">
          {title}
        </h3>

        <p className="mt-6 text-[18px] leading-9 text-[#9AA8B3]">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          {tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-2
                text-sm
                text-[#B8C3CC]
              "
            >
              {tag}
            </span>
          ))}

        </div>

        <motion.button
          whileHover={{
            x: 8,
          }}
          className="
            mt-10
            flex
            items-center
            gap-3
            text-white
            transition-all
          "
        >
          View Case Study

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </motion.button>

      </div>

    </motion.div>
  );
}