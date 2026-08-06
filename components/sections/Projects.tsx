"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectsBackground from "@/components/animations/ProjectsBackground";


const projects = [
  {
    title: "AI CRM Platform",
    category: "Artificial Intelligence",
    description:
      "Enterprise CRM powered by OpenAI with intelligent automation, lead scoring and customer insights.",
    tags: ["Next.js", "OpenAI", "Supabase"],
    accent: "#1E566C",
  },
  {
    title: "Business Automation",
    category: "Workflow Automation",
    description:
      "Automated internal operations using AI agents, APIs and workflow orchestration reducing manual work by 80%.",
    tags: ["Python", "n8n", "AI"],
    accent: "#2D7A94",
  },
  {
    title: "Healthcare Dashboard",
    category: "Analytics Platform",
    description:
      "Modern healthcare analytics dashboard with real-time reporting, AI insights and secure cloud architecture.",
    tags: ["React", "Node", "AI"],
    accent: "#3A8EA5",
  },
];

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-[#071018] py-36">

      {/* Background Grid */}

     <ProjectsBackground />

     

      <div className="relative z-10 mx-auto max-w-[1500px] px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-28"
        >

          <span
            className="
              absolute
              -mt-24
              text-[180px]
              font-bold
              leading-none
              text-white/5
              select-none
            "
          >
            03
          </span>

          <p className="uppercase tracking-[0.4em] text-[#69A5BA] text-sm mb-5">
            Selected Projects
          </p>

          <h2 className="max-w-[760px] text-[72px] font-extralight leading-[0.95] tracking-[-0.05em] text-white">
            We build products
            <br />
            people actually
            <span className="text-[#69A5BA]"> love using.</span>
          </h2>

          <p className="mt-8 max-w-[620px] text-[18px] leading-9 text-[#9AA8B3]">
            Every solution is engineered around business goals,
            user experience and intelligent automation.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="space-y-14">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
            />
          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <button
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              text-white
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-[#69A5BA]
              hover:bg-[#1E566C]/20
            "
          >
            View All Projects

            <ArrowUpRight
              size={18}
              className="transition-transform duration-500 group-hover:rotate-45"
            />
          </button>
        </motion.div>

      </div>

    </section>
  );
}