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
      className="bg-white dark:bg-cm-blue-950 pb-[3rem] pt-[3rem] md:pt-[3rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h1 className="text-center text-black dark:text-cm-blue-50 text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase pb-[5rem]">
        About <span className="text-gray-400">Me</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div className="pt-[5rem]">
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-cm-blue-950 dark:text-cm-blue-50">
            Imagination <span className="text-cm-red-500">Redefined</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10 ">
            <span className="w-[100px] hidden md:block h-[5px] bg-cm-blue-950 dark:text-cm-blue-50 rounded-sm"></span>
            <p className="text-[19px] text-cm-blue-950 dark:text-cm-blue-50">
              As a full-stack developer, I blend creativity and technical
              expertise to bring your ideas to life. I design and build
              user-centered applications that are both functional and visually
              captivating. With deep front-end and back-end knowledge, I deliver
              seamless solutions tailored to your needs. Driven by a passion for
              problem-solving, I explore new possibilities to create digital
              experiences that leave a lasting impression. Let&apos;s turn your
              imagination into reality.
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
      </div>
    </motion.section>
  );
};
