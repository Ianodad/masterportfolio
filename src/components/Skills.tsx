"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="scroll-mt-28 items-center py-2 flex justify-center bg-white dark:bg-cm-blue-950 md:py-14"
    >
      <div className="max-w-[53rem]">
        <h1 className=" text-[28px] sm:text-[33px] md:text-[45px]  mb-[1rem] text-center font-bold uppercase">
          My <span className="text-gray-400">Skills</span>
        </h1>
        <div>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 justify-items-center">
            {skillsData.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-lg px-6 py-3 dark:bg-white/10 dark:text-white/80 shadow-md dark:shadow-white dark:shadow-sm"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};
