import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

interface Props {
  openNav: () => void;
}
export const Navbar = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] top-0 sticky h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          IAN
          <span className="text-cm-red-500">ADERA</span>
        </h1>
        <div className="nav-link">Home</div>
        <div className="nav-link">About</div>
        <div className="nav-link">Projects</div>
        <div className="nav-link">Skills</div>
        <div className="nav-link">Experience</div>
        <div className="nav-link">Blogs</div>
        <div className="nav-link">Contact</div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-gray-300" />
        </div>
      </div>
    </div>
  );
};
