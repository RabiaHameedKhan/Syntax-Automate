"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
  "About",
  "Services",
  "Work",
  "Process",
  "FAQ",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto max-w-[1700px] px-14 h-24 grid grid-cols-[220px_1fr_220px] items-center">

        <Link href="/">
          <Image
            src="/logo/logo-white.png"
            alt="Syntax Automate"
            width={170}
            height={52}
            priority
          />
        </Link>

        <nav className="justify-self-center hidden lg:block">
          <ul className="flex items-center gap-14">

            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[14px] uppercase tracking-[0.22em] text-[#20252D] hover:text-[#1E566C] transition"
                >
                  {item}
                </a>
              </li>
            ))}

          </ul>
        </nav>

        <button
          className="
          justify-self-end
          h-[50px]
          px-7
          rounded-xl
          bg-[#1E566C]
          text-white
          uppercase
          text-[13px]
          tracking-[0.16em]
          hover:bg-[#174454]
          transition
        "
        >
          Start Project →
        </button>

      </div>
    </header>
  );
}