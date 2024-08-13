import { useSectionInView } from "@/hooks";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export const About = () => {
  const { ref } = useSectionInView("About", 0.4);
  return (
    <motion.section
      ref={ref}
      id="about"
      className="bg-white from-black via-gray-700 to-black pb-[3rem] pt-[10rem] md:pt-[10rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase  mb-[1rem]">
            About Me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-black">
            Transforming <span className="text-cm-red-500">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-black rounded-sm"></span>
            <p className="text-[19px] text-black w-[80%]">
              Transitioning from vision to web development involves translating
              conceptual ideas into tangible digital experiences. This process
              integrates design elements, user interfaces, and functionality to
              create engaging websites. Collaboration between designers and
              developers ensures the realization of the initial vision,
              delivering a seamless and interactive online presence
            </p>
          </div>
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2em] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative rounded-[50%/60%_60%_40%_40%]">
          <Image
            src="/images/aboutt.png"
            alt="user"
            layout="fill"
            className="object-cover rounded-full bg-yellow-300 z-[11] relative w-[100%] h-[100%]"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5]  bottom-[2rem] left-[2rem] rounded-full"></div>
        </div>
        /
      </div>
    </motion.section>
  );
};
