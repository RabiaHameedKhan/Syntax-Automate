"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  ArrowUp,
} from "lucide-react";

/* =========================================================
   DETERMINISTIC BACKGROUND PIXELS
   No Math.random() → avoids hydration problems
========================================================= */

const pixels = Array.from({ length: 110 }, (_, i) => {
  const x = (i * 47 + 11) % 100;
  const y = (i * 71 + 17) % 100;

  const size =
    i % 11 === 0
      ? 5
      : i % 5 === 0
        ? 4
        : 3;

  return {
    id: i,
    x,
    y,
    size,
    delay: (i * 0.17) % 5,
    duration: 2.8 + ((i * 0.37) % 3),
  };
});

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071A21] text-white">

      {/* =====================================================
          ANIMATED PIXEL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Soft central teal atmosphere */}

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#1E566C]/30
            blur-[150px]
          "
        />

        {/* Secondary ambient glow */}

        <motion.div
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["5%", "-5%", "5%"],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-[180px]
            top-[15%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#2D7588]/25
            blur-[130px]
          "
        />

        <motion.div
          animate={{
            x: ["10%", "-10%", "10%"],
            y: ["-5%", "8%", "-5%"],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-[180px]
            bottom-[10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#3C8798]/20
            blur-[140px]
          "
        />

        {/* =================================================
            GLOWING PIXELS
        ================================================= */}

        {pixels.map((pixel) => (
          <motion.span
            key={pixel.id}
            initial={{
              opacity: 0,
              scale: 0.4,
            }}
            animate={{
              opacity: [
                0,
                0.15,
                0.75,
                0.25,
                0,
              ],
              scale: [
                0.4,
                0.8,
                1,
                0.7,
                0.4,
              ],
            }}
            transition={{
              duration: pixel.duration,
              delay: pixel.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              rounded-[1px]
              bg-[#70C4D7]
              shadow-[0_0_10px_rgba(112,196,215,0.5)]
            "
            style={{
              left: `${pixel.x}%`,
              top: `${pixel.y}%`,
              width: `${pixel.size}px`,
              height: `${pixel.size}px`,
            }}
          />
        ))}

        {/* =================================================
            CONCENTRATED PIXEL FIELD
        ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[480px]
            w-[700px]
            -translate-x-1/2
            opacity-70
          "
        >
          {Array.from({ length: 55 }, (_, i) => {
            const column = i % 11;
            const row = Math.floor(i / 11);

            return (
              <motion.span
                key={`cluster-${i}`}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3.2 + (i % 4) * 0.6,
                  delay: (i % 9) * 0.45,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  h-[3px]
                  w-[3px]
                  rounded-[1px]
                  bg-[#5FAFC1]
                "
                style={{
                  left: `${column * 10 + (row % 2) * 5}%`,
                  top: `${row * 17 + (column % 3) * 2}%`,
                }}
              />
            );
          })}
        </div>

        {/* =================================================
            SLOW MOVING LIGHT
        ================================================= */}

        <motion.div
          animate={{
            x: ["-30%", "130%"],
            opacity: [0, 0.25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-0
            top-[38%]
            h-[1px]
            w-[280px]
            bg-gradient-to-r
            from-transparent
            via-[#70C4D7]
            to-transparent
            blur-[1px]
          "
        />

      </div>

      {/* =====================================================
          FOOTER CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

        {/* =================================================
            TOP FOOTER AREA
        ================================================= */}

        <div className="
          border-b
          border-white/[0.08]
          py-16
          sm:py-20
          lg:py-24
        ">

          <div className="
            grid
            gap-14
            lg:grid-cols-[1.7fr_1fr_1fr_1.2fr]
            lg:gap-10
          ">

            {/* =================================================
                BRAND
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.8,
              }}
            >

              {/* Logo */}

              <motion.div
                whileHover={{
                  x: 3,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="inline-block"
              >
                <Image
                  src="/logo/logo-black.png"
                  alt="Syntax Automate"
                  width={155}
                  height={48}
                  className="h-auto w-[145px] object-contain"
                />
              </motion.div>

              {/* Tagline */}

              <p className="
                mt-7
                max-w-[360px]
                text-[15px]
                leading-7
                text-[#9CB2B9]
              ">
                Intelligent software, AI automation and digital
                systems built to help businesses move faster.
              </p>

              {/* Status */}

              <div className="
                mt-7
                flex
                items-center
                gap-3
                text-[11px]
                uppercase
                tracking-[0.2em]
                text-[#76929B]
              ">

                <motion.span
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#63C7D6]
                    shadow-[0_0_10px_rgba(99,199,214,0.8)]
                  "
                />

                Available for new projects

              </div>

            </motion.div>

            {/* =================================================
                NAVIGATION
            ================================================= */}

            <FooterColumn
              title="Explore"
              links={[
                "Home",
                "About",
                "Projects",
                "Services",
              ]}
            />

            {/* =================================================
                SERVICES
            ================================================= */}

            <FooterColumn
              title="Capabilities"
              links={[
                "AI Automation",
                "AI Agents",
                "Web Development",
                "Mobile Apps",
                "Cloud Solutions",
              ]}
            />

            {/* =================================================
                CONTACT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >

              <p className="
                mb-6
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-[#6F8D96]
              ">
                Get in touch
              </p>

              <a
                href="mailto:hello@syntaxautomate.com"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[15px]
                  text-[#D8E7EB]
                  transition-colors
                  duration-300
                  hover:text-[#70C4D7]
                "
              >

                hello@syntaxautomate.com

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />

              </a>

              {/* CTA */}

              <motion.a
                href="mailto:hello@syntaxautomate.com"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  mt-8
                  flex
                  w-fit
                  items-center
                  gap-4
                  rounded-full
                  border
                  border-[#4B7F8D]/40
                  bg-[#0B252D]/80
                  px-5
                  py-3
                  text-[11px]
                  uppercase
                  tracking-[0.18em]
                  text-[#D8E7EB]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#70C4D7]/60
                  hover:bg-[#12333C]
                "
              >

                Start a project

                <span className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#70C4D7]
                  text-[#071A21]
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                ">

                  <ArrowUpRight size={14} />

                </span>

              </motion.a>

            </motion.div>

          </div>

        </div>

        {/* =================================================
            MIDDLE SOCIAL AREA
        ================================================= */}

        <div className="
          flex
          flex-col
          gap-8
          border-b
          border-white/[0.08]
          py-8
          sm:flex-row
          sm:items-center
          sm:justify-between
        ">

          {/* Socials */}

          <div className="flex items-center gap-3">

            <SocialButton
              icon={<span className="text-sm font-medium">in</span>}
              label="LinkedIn"
              href="#"
            />

            <SocialButton
              icon={<span className="text-sm font-medium">ig</span>}
              label="Instagram"
              href="#"
            />

            <SocialButton
              icon={<span className="text-sm font-medium">gh</span>}
              label="GitHub"
              href="#"
            />

          </div>

          {/* Closing statement */}

          <p className="
            text-[11px]
            uppercase
            tracking-[0.18em]
            text-[#607B84]
          ">
            Building what comes next.
          </p>

        </div>

        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div className="
          flex
          flex-col
          gap-5
          py-7
          text-[10px]
          uppercase
          tracking-[0.18em]
          text-[#59727B]
          sm:flex-row
          sm:items-center
          sm:justify-between
        ">

          <span>
            © {new Date().getFullYear()} Syntax Automate
          </span>

          <div className="
            flex
            flex-wrap
            items-center
            gap-6
          ">

            <a
              href="#"
              className="transition-colors hover:text-[#8FCBD7]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[#8FCBD7]"
            >
              Terms
            </a>

            {/* Back to top */}

            <motion.button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              whileHover={{
                y: -3,
              }}
              className="
                group
                flex
                items-center
                gap-2
                transition-colors
                hover:text-[#8FCBD7]
              "
            >

              Back to top

              <span className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                transition-all
                duration-300
                group-hover:border-[#70C4D7]/40
                group-hover:bg-[#70C4D7]/10
              ">

                <ArrowUp
                  size={12}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                />

              </span>

            </motion.button>

          </div>

        </div>

      </div>
    </footer>
  );
}


/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.8,
      }}
    >

      <p className="
        mb-6
        text-[10px]
        font-medium
        uppercase
        tracking-[0.3em]
        text-[#6F8D96]
      ">
        {title}
      </p>

      <div className="
        flex
        flex-col
        items-start
        gap-3.5
      ">

        {links.map((link, index) => (
          <motion.a
            key={link}
            href="#"
            initial={{
              opacity: 0,
              x: -8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.06,
            }}
            className="
              group
              flex
              items-center
              gap-2
              text-[14px]
              text-[#A7BBC1]
              transition-colors
              duration-300
              hover:text-[#70C4D7]
            "
          >

            <span
              className="
                h-px
                w-0
                bg-[#70C4D7]
                transition-all
                duration-300
                group-hover:w-3
              "
            />

            {link}

          </motion.a>
        ))}

      </div>

    </motion.div>
  );
}


/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialButton({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{
        y: -3,
      }}
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/[0.02]
        text-[#8DA7AF]
        transition-all
        duration-300
        hover:border-[#70C4D7]/40
        hover:bg-[#70C4D7]/10
        hover:text-[#70C4D7]
      "
    >
      {icon}
    </motion.a>
  );
}