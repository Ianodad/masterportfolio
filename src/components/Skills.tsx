"use client";

import React from "react";
import SectionHeading from "./section-heading";
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

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28  scroll-mt-28 items-center sm:mb-40 flex justify-center"
    >
      <div className="max-w-[53rem]">
        <h1 className=" text-[28px] sm:text-[33px] md:text-[45px]  mb-[1rem] text-center   font-bold uppercase">
          My skills
        </h1>
        <div>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 justify-items-center">
            {skillsData.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
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
    </section>
  );
}
