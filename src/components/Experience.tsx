"use client";

import React from "react";
// import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "../hooks";
// import { useTheme } from "@/context/theme-context";

export const Experience = () => {
  // const { ref } = useSectionInView("Experience");
  // const { theme } = useTheme();
  return (
    <section
      id="experience"
      className="bg-white from-black via-gray-700 to-black scroll-mt-28  items-center"
    >
      {/* <SectionHeading>My experience</SectionHeading> */}
      <h1 className=" text-[28px] sm:text-[33px] md:text-[45px]  mb-[1rem] text-center   font-bold uppercase">
        My <span className="text-gray-400">Experience</span>
      </h1>
      <VerticalTimeline lineColor="black">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                background: "#00000",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #000000",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
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
    </section>
  );
};
