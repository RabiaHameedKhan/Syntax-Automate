"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

import AutomationCard from "@/components/services/AutomationCard";
import AIAgentCard from "@/components/services/AIAgentCard";
import WebDevelopmentCard from "@/components/services/WebDevelopmentCard";
import MobileAppCard from "@/components/services/MobileAppCard";
import AIIntegrationCard from "@/components/services/AIIntegrationcard";

/* ============================================================
   SLIDE DATA
   ============================================================ */

const SLIDES = [
  {
    key: "automation",
    eyebrow: "AI AUTOMATION",
    title: ["Replace repetitive", "business work", "with AI"],
    description:
      "Automate emails, documents, CRM updates, approvals, reports, notifications and repetitive workflows with intelligent systems that operate 24/7.",
    tags: [
      "CRM",
      "Emails",
      "Slack",
      "Notion",
      "Google Workspace",
      "Zapier",
    ],
    cta: "Explore Automation",
    ctaStyle: "solid",
    Card: AutomationCard,
  },
  {
    key: "agents",
    eyebrow: "AI AGENTS",
    title: ["AI employees", "that answer,", "analyze & execute"],
    description:
      "Build intelligent assistants capable of handling customer support, scheduling, knowledge retrieval, internal operations and business conversations—available every hour of every day.",
    tags: [
      "Chatbots",
      "Voice AI",
      "OpenAI",
      "Claude",
      "RAG",
      "Knowledge Base",
    ],
    cta: "Build an AI Agent",
    ctaStyle: "outline",
    Card: AIAgentCard,
  },
  {
    key: "web",
    eyebrow: "WEB DEVELOPMENT",
    title: ["Fast websites", "engineered for", "growth"],
    description:
      "We design and build premium websites, SaaS platforms, dashboards and enterprise applications that combine exceptional performance with outstanding user experience.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Supabase",
    ],
    cta: "View Web Projects",
    ctaStyle: "solid",
    Card: WebDevelopmentCard,
  },
  {
    key: "mobile",
    eyebrow: "MOBILE DEVELOPMENT",
    title: ["Mobile apps", "your customers", "actually enjoy"],
    description:
      "We create premium iOS and Android applications with beautiful interfaces, smooth performance and scalable architectures that help businesses engage customers anywhere.",
    tags: [
      "React Native",
      "Flutter",
      "iOS",
      "Android",
      "Firebase",
      "Push Notifications",
    ],
    cta: "Explore Mobile Apps",
    ctaStyle: "outline",
    Card: MobileAppCard,
  },
  {
    key: "integration",
    eyebrow: "AI INTEGRATION",
    title: ["Bring AI into", "your existing", "software"],
    description:
      "Already have a website, dashboard or SaaS product? We seamlessly integrate modern AI capabilities, intelligent search, document understanding, recommendations and workflow automation into your current software.",
    tags: [
      "OpenAI",
      "Claude",
      "Gemini",
      "Vector Search",
      "RAG",
      "Custom APIs",
    ],
    cta: "Integrate AI",
    ctaStyle: "outline",
    Card: AIIntegrationCard,
  },
];

const AUTOPLAY_MS = 6000;

/* ============================================================
   MOTION
   ============================================================ */

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 60 : -60,
  }),

  center: {
    opacity: 1,
    x: 0,
  },

  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -60 : 60,
  }),
};

const slideTransition = {
  x: {
    type: "spring" as const,
    stiffness: 260,
    damping: 32,
  },
  opacity: {
    duration: 0.35,
  },
};

/* ============================================================
   SERVICES
   ============================================================ */

export default function Services() {
  const [[index, direction], setSlide] = useState<[number, number]>([
    0,
    0,
  ]);

  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeIndex =
    ((index % SLIDES.length) + SLIDES.length) % SLIDES.length;

  const slide = SLIDES[activeIndex];

  /* ============================================================
     NAVIGATION
     ============================================================ */

  const goTo = useCallback((newIndex: number, dir: number) => {
    setSlide([newIndex, dir]);
    setProgressKey((current) => current + 1);
  }, []);

  const next = useCallback(() => {
    goTo(index + 1, 1);
  }, [index, goTo]);

  const prev = useCallback(() => {
    goTo(index - 1, -1);
  }, [index, goTo]);

  const jumpTo = useCallback(
    (targetIndex: number) => {
      if (targetIndex === activeIndex) return;

      const dir = targetIndex > activeIndex ? 1 : -1;

      goTo(targetIndex, dir);
    },
    [activeIndex, goTo]
  );

  /* ============================================================
     AUTOPLAY
     ============================================================ */

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setTimeout(() => {
      next();
    }, AUTOPLAY_MS);

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, [index, isPaused, next]);

  /* ============================================================
     KEYBOARD NAVIGATION
     ============================================================ */

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        prev();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [next, prev]);

  const CardComponent = slide.Card;

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#F8FBFC] px-6 py-12 md:px-8 md:py-16">

      {/* ============================================================
          BACKGROUND
          ============================================================ */}

      <div className="pointer-events-none absolute inset-0">
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

      <div className="relative z-10 flex w-full max-w-[1400px] flex-col">

        {/* ============================================================
            HEADING
            ============================================================ */}

        <div className="mb-8 flex flex-col items-center text-center md:mb-10">

          <span className="inline-flex rounded-full border border-[#D8E3E8] bg-white px-6 py-3 text-[11px] uppercase tracking-[0.35em] text-[#1E566C] md:text-[12px]">
            What We Can Do For You!
          </span>

          <h2 className="mt-6 text-[32px] font-extralight leading-[1.05] tracking-[-0.04em] text-[#1F2933] md:mt-7 md:text-[46px]">
            Intelligent software
            <br />
            <span className="text-[#1E566C]">
              built for modern businesses
            </span>
          </h2>

        </div>

        {/* ============================================================
            MAIN CARD
            ============================================================ */}

        <div
          className="group relative w-full overflow-hidden rounded-[28px] border border-[#D8E3E8] bg-white shadow-[0_30px_80px_rgba(30,86,108,0.10)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Ambient glow */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#1E566C]/[0.06] blur-[100px]" />

          <div className="relative min-h-[440px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[560px]">

            <AnimatePresence
              mode="wait"
              custom={direction}
              initial={false}
            >

              <motion.div
                key={slide.key}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.15}
                onDragEnd={(_event, info) => {
                  const { offset, velocity } = info;

                  const swipe =
                    Math.abs(offset.x) * velocity.x;

                  if (swipe < -8000 || offset.x < -80) {
                    next();
                  } else if (
                    swipe > 8000 ||
                    offset.x > 80
                  ) {
                    prev();
                  }
                }}
                className="grid h-full cursor-grab items-center gap-10 px-7 py-10 active:cursor-grabbing sm:px-10 md:grid-cols-2 md:gap-12 md:px-12 md:py-12 lg:px-16"
              >

                {/* ======================================================
                    CONTENT
                    ====================================================== */}

                <div>

                  <span className="text-[12px] uppercase tracking-[0.34em] text-[#1E566C] md:text-[13px]">
                    {slide.eyebrow}
                  </span>

                  <h3 className="mt-4 text-[30px] font-extralight leading-[1.08] tracking-[-0.03em] text-[#1F2933] md:mt-6 md:text-[42px]">

                    {slide.title.map((line, i) => (
                      <span key={`${slide.key}-${i}`}>
                        {line}

                        {i < slide.title.length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}

                  </h3>

                  <p className="mt-4 max-w-[520px] text-[15px] leading-7 text-[#5F6B76] md:mt-5 md:text-[17px] md:leading-8">
                    {slide.description}
                  </p>

                  {/* Tags */}

                  <div className="mt-6 flex flex-wrap gap-2.5 md:mt-7">

                    {slide.tags.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#D8E3E8] bg-white px-4 py-1.5 text-[12px] text-[#48606B] md:text-[13px]"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                  {/* CTA */}

                  <button
                    type="button"
                    className={
                      slide.ctaStyle === "solid"
                        ? "group/btn mt-8 flex items-center gap-3 rounded-xl bg-[#1E566C] px-6 py-3.5 text-white transition-all duration-300 hover:shadow-[0_20px_60px_rgba(30,86,108,.28)] md:mt-9"
                        : "group/btn mt-8 flex items-center gap-3 rounded-xl border border-[#1E566C] bg-white px-6 py-3.5 text-[#1E566C] transition-all duration-300 hover:bg-[#1E566C] hover:text-white md:mt-9"
                    }
                  >
                    {slide.cta}

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1"
                    />
                  </button>

                </div>

                {/* ======================================================
                    SERVICE VISUAL
                    ====================================================== */}

                <div className="relative flex items-center justify-center">
                  <CardComponent />
                </div>

              </motion.div>

            </AnimatePresence>

            {/* ========================================================
                PREVIOUS BUTTON
                ======================================================== */}

            <button
              type="button"
              aria-label="Previous service"
              onClick={prev}
              className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#D8E3E8] bg-white/90 text-[#1E566C] opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-[#1E566C] hover:text-white group-hover:opacity-100 md:flex"
            >
              <ArrowLeft size={16} />
            </button>

            {/* ========================================================
                NEXT BUTTON
                ======================================================== */}

            <button
              type="button"
              aria-label="Next service"
              onClick={next}
              className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#D8E3E8] bg-white/90 text-[#1E566C] opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-[#1E566C] hover:text-white group-hover:opacity-100 md:flex"
            >
              <ArrowRight size={16} />
            </button>

          </div>

          {/* ==========================================================
              DOTS / PROGRESS
              ========================================================== */}

          <div className="relative z-10 flex items-center justify-center gap-2 pb-6">

            {SLIDES.map((s, i) => (
              <button
                key={s.key}
                type="button"
                aria-label={`Go to ${s.eyebrow}`}
                onClick={() => jumpTo(i)}
                className="relative h-[6px] overflow-hidden rounded-full bg-[#D8E3E8] transition-all duration-300"
                style={{
                  width: i === activeIndex ? 28 : 6,
                }}
              >

                {i === activeIndex && (
                  <motion.span
                    key={progressKey}
                    initial={{
                      scaleX: 0,
                    }}
                    animate={{
                      scaleX: isPaused ? 0 : 1,
                    }}
                    transition={{
                      duration: isPaused
                        ? 0
                        : AUTOPLAY_MS / 1000,
                      ease: "linear",
                    }}
                    style={{
                      originX: 0,
                    }}
                    className="absolute inset-0 rounded-full bg-[#1E566C]"
                  />
                )}

              </button>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}