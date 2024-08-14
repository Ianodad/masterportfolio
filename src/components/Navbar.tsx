import React from "react";
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/theme-context";
interface Props {
  openNav: () => void;
}

export const Navbar = ({ openNav }: Props) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();
  console.log("theme", theme);
  return (
    <div className="w-[100%] top-0 sticky h-[10vh] bg-white dark:bg-cm-blue-950 dark:shadow-cm-dark-grey-950  shadow-md z-[1000]">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-cm-blue-700 dark:text-white font-bold">
          IAN
          <span className="text-cm-red-500">ADERA</span>
        </h1>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            className={cn(
              "nav-link",
              activeSection === link.section && "active"
            )}
            href={link.href}
            onClick={() => setActiveSection(link.section)}
          >
            {link.text}
          </Link>
        ))}
        <button onClick={toggleTheme} className="text-gray-500">
          {theme === "light" ? (
            <MoonIcon className="w-6 h-6 transition-all duration-300 text-cm-blue-700" />
          ) : (
            <SunIcon className="w-6 h-6 transition-all duration-300 text-yellow-500" />
          )}
        </button>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-gray-300" />
        </div>
      </div>
    </div>
  );
};
