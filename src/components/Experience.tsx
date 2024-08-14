"use client";

import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "../hooks";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

export const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  // useEffect(() => {

  // }, [theme]);

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="bg-slate-50 from-black via-gray-700 to-black scroll-mt-10 pt-[7rem] items-center dark:bg-cm-blue-900"
    >
      {/* <SectionHeading>My experience</SectionHeading> */}
      <h1 className=" text-[28px] sm:text-[33px] md:text-[45px]  mb-[1rem] text-center   font-bold uppercase">
        My <span className="text-gray-400">Experience</span>
      </h1>
      <VerticalTimeline lineColor={theme === "dark" ? "white" : "#152238"}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                // background: "#00000",
                background: theme === "dark" ? "#1A202C" : "#ffffff",

                boxShadow: "",
                border: "1px solid rgba(0, 0, 0, 0.15)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "dark"
                    ? "0.4rem solid white"
                    : "0.4rem solid #1A202C",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "dark" ? "#1A202C" : "#ffffff",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.company}</p>
              <p className="!mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
              <p className="font-normal !mt-0">{item.tools}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
};
