"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  "About",
  "Services",
  "Work",
  "Process",
  "FAQ",
  "Contact",
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop navbar */}
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`
          fixed inset-x-0 top-0 z-50 hidden
          transition-all duration-500
          lg:block
          ${
            scrolled
              ? "bg-white/80 shadow-[0_10px_30px_-15px_rgba(15,23,32,0.15)] backdrop-blur-md"
              : "bg-transparent"
          }
        `}
      >
        <div
          className={`
            mx-auto grid max-w-[1700px]
            grid-cols-[170px_1fr_170px]
            xl:grid-cols-[220px_1fr_220px]
            items-center px-6 xl:px-14
            transition-all duration-500
            ${scrolled ? "h-20" : "h-24"}
          `}
        >
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <Image
                  src="/logo/logo-white.png"
                  alt="Syntax Automate"
                  width={170}
                  height={52}
                  priority
                  className="h-auto w-auto xl:w-[170px]"
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
            <ul className="flex items-center gap-6 xl:gap-14">

                            {navItems.map((item) => (
                <motion.li
                  key={item}
                  variants={navItemVariant}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
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
              group justify-self-end
              h-[50px] rounded-xl
              bg-[#1E566C]
              px-5 xl:px-7
              text-[13px] uppercase tracking-[0.16em]
              text-white
              shadow-[0_10px_25px_-10px_rgba(30,86,108,0.55)]
              transition-colors
              hover:bg-[#174454]
            "
          >
            <span className="inline-flex items-center gap-2">
              Start Project
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile / Tablet Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          fixed inset-x-0 top-0 z-50 lg:hidden
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/90 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        <div className="flex h-20 items-center justify-between px-5 sm:px-6">
          <Link href="/">
            <Image
              src="/logo/logo-white.png"
              alt="Syntax Automate"
              width={150}
              height={46}
              priority
              className="h-auto w-auto max-w-[150px] sm:max-w-[170px]"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2"
          >
            {menuOpen ? (
              <X size={30} color="#20252D" />
            ) : (
              <Menu size={30} color="#20252D" />
            )}
          </button>
        </div>

                <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden bg-white"
            >
              <nav className="flex flex-col py-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setMenuOpen(false)}
                    className="
                      border-b border-gray-100
                      px-6 py-4
                      text-sm uppercase tracking-[0.18em]
                      text-[#20252D]
                      hover:bg-gray-50
                    "
                  >
                    {item}
                  </motion.a>
                ))}

                <div className="px-6 pt-5">
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="
                      w-full rounded-xl
                      bg-[#1E566C]
                      py-4
                      text-sm uppercase tracking-[0.15em]
                      text-white
                      hover:bg-[#174454]
                      transition-colors
                    "
                  >
                    Start Project
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

