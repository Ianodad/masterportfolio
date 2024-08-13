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
  return (
    <div className="w-[100%] top-0 sticky h-[10vh] bg-[#fefeff] shadow-md z-[1000]">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-cm-blue-700 font-bold">
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
            {/* {link.section === activeSection && (
              <motion.span
                className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                layoutId="activeSection"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              ></motion.span>
            )} */}
          </Link>
        ))}
        <div onClick={toggleTheme}>
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-gray-300" />
        </div>
      </div>
    </div>
  );
};
