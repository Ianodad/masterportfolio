import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { IoInfiniteSharp } from "react-icons/io5";

import { myServicesData } from "@/lib/data";

import React from "react";

const skills = [
  {
    id: 'frontend',
    color: 'red',
    icon: 'CodeBracketSquareIcon',
    title: 'Frontend',
    description: 'Proficient in HTML, CSS, JavaScript, ReactJS, NextJS.'
  },
  {
    id: 'backend',
    color: 'yellow',
    icon: 'CommandLineIcon',
    title: 'Backend',
    description: 'Proficient in server-side programming languages like Python, Golang, or Node.js.'
  },
  {
    id: 'devops',
    color: 'blue',
    icon: 'IoInfiniteSharp',
    title: 'DevOps',
    description: 'Proficient in devops and experience creating and managing cloud platforms such as AWS, GCP, and Azure.'
  }
];

const iconComponents = {
  CodeBracketSquareIcon: CodeBracketSquareIcon,
  CommandLineIcon: CommandLineIcon,
  IoInfiniteSharp: IoInfiniteSharp,
  // ... map other icon names to their components
}
export const Services = () => {
  return (
    <div className="bg-slate-50 pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="text-center text-black text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        My <span className="text-gray-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        {myServicesData.map((skill) => (
          <div key={skill.id}>
            <div
              className={`bg-cm-${skill.color}-500 to-${skill.color} hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]`}
            >
              {skill.icon}
              <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb[1.5rem] text-purple-500">
                {skill.title}
              </h1>
              <p className="text-[15px] text-white font-normal">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
