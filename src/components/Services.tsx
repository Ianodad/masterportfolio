import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { IoInfiniteSharp } from "react-icons/io5";

import React from "react";

export const Services = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 via-slate-300 to-slate-50 pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        My <span className="text-gray-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div className="bg-gradient-to-t from-red-700 via-red-900 to-red hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb[1.5rem] text-purple-500">
              Frontend
            </h1>
            <p className="text-[15px] text-white font-normal">
              Proficient in HTML, CSS, and JavaScript, ReactJS, NextJS.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-t from-yellow-700 via-yellow-900 to-yellow hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb[1.5rem] text-purple-500">
              Backend
            </h1>
            <p className="text-[15px] text-white font-normal">
              Proficient in server-side programming languages like Python,
              Golang, or Node.js.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-t from-blue-700 via-blue-900 to-blue hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <IoInfiniteSharp className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb[1.5rem] text-purple-500">
              DevOps
            </h1>
            <p className="text-[15px] text-white font-normal">
              Proficient in devops and experience creating and managing cloud
              platforms such as AWS, GCP and Azure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
