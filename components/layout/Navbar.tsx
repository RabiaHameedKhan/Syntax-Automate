"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import StaggeredMenu from "@/components/animations/StaggeredMenu";

const navItems = [
  "About",
  "Services",
  "Work",
  "Process",
  "FAQ",
  "Contact",
];

// Same nav items, reshaped for StaggeredMenu's { label, ariaLabel, link } API
const mobileMenuItems = navItems.map((item) => ({
  label: item,
  ariaLabel: `Go to ${item}`,
  link: `#${item.toLowerCase()}`,
}));

// Placeholder socials — swap for your real profiles
const mobileSocialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

const navContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.25,
    },
  },
};

const navItemVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop navbar — unchanged from lg upward */}
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`
          fixed inset-x-0 top-0 z-50 hidden
          transition-all duration-500
          lg:block
          ${scrolled
            ? "bg-white/80 shadow-[0_10px_30px_-15px_rgba(15,23,32,0.15)] backdrop-blur-md"
            : "bg-transparent"}
        `}
      >
        <div
          className={`
            mx-auto grid h-24 max-w-[1700px] grid-cols-[220px_1fr_220px]
            items-center px-14 transition-all duration-500
            ${scrolled ? "h-20" : "h-24"}
          `}
        >

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <Link href="/">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 22 }}>
                <Image
                  src="/logo/logo-white.png"
                  alt="Syntax Automate"
                  width={170}
                  height={52}
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>

          <motion.nav
            className="justify-self-center"
            initial="hidden"
            animate="visible"
            variants={navContainer}
          >
            <ul className="flex items-center gap-10 xl:gap-14">

              {navItems.map((item) => (
                <motion.li key={item} variants={navItemVariant} transition={{ duration: 0.5, ease: "easeOut" }}>
                  <a
                    href="#"
                    className="group relative text-[13px] xl:text-[14px] uppercase tracking-[0.22em] text-[#20252D] transition-colors hover:text-[#1E566C]"
                  >
                    {item}
                    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#1E566C] transition-all duration-300 ease-out group-hover:w-full" />
                  </a>
                </motion.li>
              ))}

            </ul>
          </motion.nav>

          <motion.button
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.045, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="
              group
              justify-self-end
              h-[50px]
              rounded-xl
              bg-[#1E566C]
              px-7
              text-[13px]
              uppercase
              tracking-[0.16em]
              text-white
              shadow-[0_10px_25px_-10px_rgba(30,86,108,0.55)]
              transition-colors
              hover:bg-[#174454]
            "
            style={{ transition: "background-color 0.3s ease" }}
          >
            <span className="inline-flex items-center gap-2">
              Start Project
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </motion.button>

        </div>
      </motion.header>

      {/* Mobile / tablet navbar — StaggeredMenu, below lg. Colors, accent,
          logo and header scroll-background are all pulled from the same
          palette as the desktop nav above so the two feel like one system. */}
      <div className="lg:hidden">
        <StaggeredMenu
          isFixed
          position="right"
          items={mobileMenuItems}
          socialItems={mobileSocialItems}
          displaySocials
          displayItemNumbering
          menuButtonColor="#20252D"
          openMenuButtonColor="#20252D"
          changeMenuColorOnOpen={false}
          colors={["#1E566C", "#153C4B"]}
          accentColor="#1E566C"
          logoUrl="/logo/logo-dark.png"
          scrolled={scrolled}
          headerScrolledBackground="rgba(255,255,255,0.85)"
        />
      </div>
    </>
  );
}
