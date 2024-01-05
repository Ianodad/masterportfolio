import React from "react";
import Particle from "./Particle";
// import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownCircleIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { TextEffect } from "./TextEffect";
import { BsLinkedin } from "react-icons/bs";

import { FaGithubSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="h-[90vh] mt-[10vh] bg-cover bg-center filter">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap[3rem] h-[100%] items-center z-10">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-red font-bold overline">
            {"HI, I'M"}
            <span className="text-yellow cursor-wait overline "> IAN!</span>
          </h1>
          <TextEffect />
          <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Art is my <span className="font-bold">passion</span>, and code is my
            canvas. With over 6 years of dedicated experience as a
            <span className="font-bold"> fullstack developer</span>, I excel in
            sculpting beautiful and dynamic web applications. React, Node, and
            JavaScript are not just tools, but my mediums of choice, through
            which I transform ideas into digital masterpieces.
          </motion.h1>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-black via-slate-200 to-black transition-all duration-300 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 border rounded-full">
              <a href="/documents/Ian-adera-cv.pdf" download>
                <p>Download cv</p>
              </a>
              <ArrowDownCircleIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <motion.div
              className="flex flex-row items-center js sm:justify-center  gap-2 px-4 text-lg font-medium"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <a
                className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://www.linkedin.com/in/ian-odhiambo/"
                target="_blank"
              >
                <BsLinkedin />
              </a>

              <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/Ianodad"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
              <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://medium.com/@ianodad"
                target="_blank"
              >
                <FaMedium />
              </a>
            </motion.div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]"
        >
          <Image
            src="/images/profile.png"
            alt="user"
            layout="fill"
            className="object-cover rounded-full bg-red-800"
          ></Image>
        </div>
      </div>
    </div>
  );
};
