import {
  CodeBracketSquareIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";
import { IoInfiniteSharp } from "react-icons/io5";

import { myServicesData } from "@/lib/data";

import React from "react";
import cx from "classnames";
import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";
// const iconServicesComponents = {
//   codeBracketSquareIcon: CodeBracketSquareIcon,
//   commandLineIcon: CommandLineIcon,
//   ioInfiniteSharp: IoInfiniteSharp,
//   // ... map other icon names to their components
// };

export const Services = () => {
  const { ref } = useSectionInView("Services", 0.8);
  return (
    <motion.section
      id="services"
      ref={ref}
      className="bg-slate-50 pt-[10rem] md:pt-[8rem] pb-[5rem] dark:bg-cm-blue-900"
    >
      <p className="text-center text-black dark:text-cm-blue-50 text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        My <span className="text-gray-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        {myServicesData.map((service) => (
          <div key={service.id}>
            <div
              style={{ backgroundColor: service.color }}
              className={`bg-[${service.color}]-500 to-${service.color} shadow-md shadow-grey rounded-lg hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]`}
            >
              {React.createElement(service.icon, {
                className: "w-[6rem] h-[6rem] mx-auto text-[#d3fae8]",
              })}
              <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb[1.5rem] text-purple-500">
                {service.title}
              </h1>
              <p className="text-[15px] text-white font-normal">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
