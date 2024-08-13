import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { navLinks } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

export const MobileNavbar = ({ nav, closeNav }: Props) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 right-0 bg-[#fefeff] left-0 bottom-0 z-[10000000] bg-[#09101a] `}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="nav-link-mobile"
            onClick={() => {
              setActiveSection(link.section);
              closeNav(); // Assuming you have a function to close the mobile nav
            }}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-gray-300"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};
