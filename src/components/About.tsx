import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <div className="bg-white from-black via-gray-700 to-black pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase  mb-[1rem]">
            About Me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-black">
            Transforming <span className="text-black">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-500 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Transitioning from vision to web development involves translating
              conceptual ideas into tangible digital experiences. This process
              integrates design elements, user interfaces, and functionality to
              create engaging websites. Collaboration between designers and
              developers ensures the realization of the initial vision,
              delivering a seamless and interactive online presence
            </p>
          </div>
          <button className="px-[2rem] hover:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-black via-slate-200 to-black transition-all duration-300 py-[1rem] text-[18px] font-bold uppercase bg-[#fff] text-black flex items-center space-x-2 border rounded-full">
            <a href="https://roadmap.sh/">
              <p>Check For Road Map</p>
            </a>
          </button>
        </div>
        <div
          data-aos="zoom-in"
          className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]"
        >
          <Image
            src="/images/aboutt.png"
            alt="user"
            layout="fill"
            className="object-cover rounded-full bg-yellow-300"
          ></Image>
        </div>
      </div>
    </div>
  );
};
