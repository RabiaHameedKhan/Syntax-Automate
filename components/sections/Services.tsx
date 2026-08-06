"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import AutomationCard from "@/components/services/AutomationCard";
import AIAgentCard from "@/components/services/AIAgentCard";
import WebDevelopmentCard from "@/components/services/WebDevelopmentCard";
import MobileAppCard from "@/components/services/MobileAppCard";
import AIIntegrationCard from "@/components/services/AIIntegrationcard";



const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFC] py-36">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#1E566C]/5 blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
            linear-gradient(#1E566C 1px, transparent 1px),
            linear-gradient(90deg,#1E566C 1px, transparent 1px)
          `,
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-[1550px] px-8">

        {/* Heading */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          variants={fadeUp}
          className="mx-auto mb-36 max-w-[900px] text-center"
        >

          <span className="inline-flex rounded-full border border-[#D8E3E8] bg-white px-6 py-3 text-[12px] uppercase tracking-[0.35em] text-[#1E566C]">

            OUR SERVICES

          </span>

          <h2 className="mt-8 text-[64px] font-extralight leading-[1.02] tracking-[-0.05em] text-[#1F2933]">

            Intelligent software
            <br />

            <span className="text-[#1E566C]">

              built for modern businesses

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-[20px] leading-9 text-[#5F6B76]">

            Every solution we build is designed to remove manual work,
            increase efficiency and create systems that continue
            delivering value long after deployment.

          </p>

        </motion.div>

        {/* ===================================================== */}
        {/* AI AUTOMATION */}
        {/* ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .9 }}
          variants={fadeUp}
          className="grid items-center gap-28 py-28 lg:grid-cols-2"
        >

          {/* LEFT */}

          <div>

            <span className="text-[13px] uppercase tracking-[0.34em] text-[#1E566C]">

              AI AUTOMATION

            </span>

            <h3 className="mt-7 text-[62px] font-extralight leading-[1.03] tracking-[-0.05em] text-[#1F2933]">

              Replace repetitive
              <br />

              business work
              <br />

              with AI

            </h3>

            <p className="mt-8 max-w-[560px] text-[19px] leading-9 text-[#5F6B76]">

              Automate emails, documents, CRM updates,
              approvals, reports, notifications and
              repetitive workflows with intelligent systems
              that operate 24/7.

            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "CRM",
                "Emails",
                "Slack",
                "Notion",
                "Google Workspace",
                "Zapier"
              ].map((item) => (

                <span
                  key={item}
                  className="rounded-full border border-[#D8E3E8] bg-white px-5 py-2 text-[13px] text-[#48606B]"
                >

                  {item}

                </span>

              ))}

            </div>

            <button className="group mt-12 flex items-center gap-3 rounded-xl bg-[#1E566C] px-8 py-4 text-white transition-all duration-300 hover:shadow-[0_20px_60px_rgba(30,86,108,.28)]">

              Explore Automation

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </button>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute inset-0 rounded-[40px] bg-[#1E566C]/5 blur-[80px]" />

            <div className="relative">

              <AutomationCard />

            </div>

          </div>

        </motion.div>

                {/* ===================================================== */}
        {/* AI AGENTS */}
        {/* ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          variants={fadeUp}
          className="grid items-center gap-28 py-28 lg:grid-cols-2"
        >
          {/* LEFT CARD */}

          <div className="order-2 lg:order-1 relative">

            <div className="absolute inset-0 rounded-[40px] bg-[#1E566C]/5 blur-[80px]" />

            <div className="relative">
              <AIAgentCard />
            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="order-1 lg:order-2">

            <span className="text-[13px] uppercase tracking-[0.34em] text-[#1E566C]">
              AI AGENTS
            </span>

            <h3 className="mt-7 text-[62px] font-extralight leading-[1.03] tracking-[-0.05em] text-[#1F2933]">

              AI employees
              <br />
              that answer,
              <br />
              analyze & execute

            </h3>

            <p className="mt-8 max-w-[560px] text-[19px] leading-9 text-[#5F6B76]">

              Build intelligent assistants capable of handling
              customer support, scheduling, knowledge retrieval,
              internal operations and business conversations—
              available every hour of every day.

            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Chatbots",
                "Voice AI",
                "OpenAI",
                "Claude",
                "RAG",
                "Knowledge Base",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D8E3E8] bg-white px-5 py-2 text-[13px] text-[#48606B]"
                >
                  {item}
                </span>
              ))}

            </div>

            <button className="group mt-12 flex items-center gap-3 rounded-xl border border-[#1E566C] bg-white px-8 py-4 text-[#1E566C] transition-all duration-300 hover:bg-[#1E566C] hover:text-white">

              Build an AI Agent

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </button>

          </div>
        </motion.div>

        {/* ===================================================== */}
        {/* WEB DEVELOPMENT */}
        {/* ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          variants={fadeUp}
          className="grid items-center gap-28 py-28 lg:grid-cols-2"
        >
          {/* LEFT */}

          <div>

            <span className="text-[13px] uppercase tracking-[0.34em] text-[#1E566C]">
              WEB DEVELOPMENT
            </span>

            <h3 className="mt-7 text-[62px] font-extralight leading-[1.03] tracking-[-0.05em] text-[#1F2933]">

              Fast websites
              <br />
              engineered for
              <br />
              growth

            </h3>

            <p className="mt-8 max-w-[560px] text-[19px] leading-9 text-[#5F6B76]">

              We design and build premium websites, SaaS platforms,
              dashboards and enterprise applications that combine
              exceptional performance with outstanding user
              experience.

            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind",
                "Node.js",
                "Supabase",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D8E3E8] bg-white px-5 py-2 text-[13px] text-[#48606B]"
                >
                  {item}
                </span>
              ))}

            </div>

            <button className="group mt-12 flex items-center gap-3 rounded-xl bg-[#1E566C] px-8 py-4 text-white transition-all duration-300 hover:shadow-[0_20px_60px_rgba(30,86,108,.28)]">

              View Web Projects

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </button>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute inset-0 rounded-[40px] bg-[#1E566C]/5 blur-[80px]" />

            <div className="relative">
              <WebDevelopmentCard />
            </div>

          </div>

        </motion.div>

                {/* ===================================================== */}
        {/* MOBILE APPLICATIONS */}
        {/* ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          variants={fadeUp}
          className="grid items-center gap-28 py-28 lg:grid-cols-2"
        >
          {/* LEFT CARD */}

          <div className="order-2 lg:order-1 relative">

            <div className="absolute inset-0 rounded-[40px] bg-[#1E566C]/5 blur-[80px]" />

            <div className="relative">
              <MobileAppCard />
            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="order-1 lg:order-2">

            <span className="text-[13px] uppercase tracking-[0.34em] text-[#1E566C]">
              MOBILE DEVELOPMENT
            </span>

            <h3 className="mt-7 text-[62px] font-extralight leading-[1.03] tracking-[-0.05em] text-[#1F2933]">

              Mobile apps
              <br />
              your customers
              <br />
              actually enjoy

            </h3>

            <p className="mt-8 max-w-[560px] text-[19px] leading-9 text-[#5F6B76]">

              We create premium iOS and Android applications with
              beautiful interfaces, smooth performance and scalable
              architectures that help businesses engage customers
              anywhere.

            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "React Native",
                "Flutter",
                "iOS",
                "Android",
                "Firebase",
                "Push Notifications",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D8E3E8] bg-white px-5 py-2 text-[13px] text-[#48606B]"
                >
                  {item}
                </span>
              ))}

            </div>

            <button className="group mt-12 flex items-center gap-3 rounded-xl border border-[#1E566C] bg-white px-8 py-4 text-[#1E566C] transition-all duration-300 hover:bg-[#1E566C] hover:text-white">

              Explore Mobile Apps

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </button>

          </div>

        </motion.div>

                {/* ===================================================== */}
       

                {/* ===================================================== */}
        {/* AI INTEGRATION */}
        {/* ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          variants={fadeUp}
          className="grid items-center gap-28 py-28 lg:grid-cols-2"
        >
          {/* LEFT CARD */}

          <div className="order-2 lg:order-1 relative">

            <div className="absolute inset-0 rounded-[40px] bg-[#1E566C]/5 blur-[80px]" />

            <div className="relative">
              <AIIntegrationCard />
            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="order-1 lg:order-2">

            <span className="text-[13px] uppercase tracking-[0.34em] text-[#1E566C]">
              AI INTEGRATION
            </span>

            <h3 className="mt-7 text-[62px] font-extralight leading-[1.03] tracking-[-0.05em] text-[#1F2933]">

              Bring AI into
              <br />
              your existing
              <br />
              software

            </h3>

            <p className="mt-8 max-w-[560px] text-[19px] leading-9 text-[#5F6B76]">

              Already have a website, dashboard or SaaS product?
              We seamlessly integrate modern AI capabilities,
              intelligent search, document understanding,
              recommendations and workflow automation into your
              current software.

            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "OpenAI",
                "Claude",
                "Gemini",
                "Vector Search",
                "RAG",
                "Custom APIs",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D8E3E8] bg-white px-5 py-2 text-[13px] text-[#48606B]"
                >
                  {item}
                </span>
              ))}

            </div>

            <button className="group mt-12 flex items-center gap-3 rounded-xl border border-[#1E566C] bg-white px-8 py-4 text-[#1E566C] transition-all duration-300 hover:bg-[#1E566C] hover:text-white">

              Integrate AI

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </button>

          </div>

        </motion.div>

                {/* ===================================================== */}
        {/* CTA */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-32 overflow-hidden rounded-[42px] bg-[#1E566C] px-16 py-20 text-center text-white"
        >

          <span className="text-[12px] uppercase tracking-[0.35em] text-white/70">

            READY TO BUILD?

          </span>

          <h2 className="mx-auto mt-6 max-w-[900px] text-[64px] font-extralight leading-[1.05] tracking-[-0.05em]">

            Let's create software
            <br />
            that grows your business.

          </h2>

          <p className="mx-auto mt-8 max-w-[700px] text-[20px] leading-9 text-white/75">

            Whether it's AI automation, custom software,
            enterprise systems or premium digital experiences,
            we're ready to build your next competitive advantage.

          </p>

          <button className="group mx-auto mt-14 flex items-center gap-3 rounded-xl bg-white px-9 py-4 text-[#1E566C] transition-all duration-300 hover:scale-105">

            Start Your Project

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />

          </button>

        </motion.div>

      </div>
    </section>
  );
}

