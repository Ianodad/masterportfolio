import Image from "next/image";
import React from "react";

export const Projects = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Pro <span className="text-gray-500">jects</span>
      </h1>
      <h1 className="text-gray-500 text-2xl text-center">
        {" "}
        <a
          href="https://github.com/shreyzeous21"
          className="border rounded-full bg-slate-100 p-1 hover:bg-gray-500 hover:text-gray-100 transition-all duration-300"
        >
          Check my github
        </a>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/notion.png"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/messenger.png"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]">
            <Image
              src="/images/news.png"
              alt="portfolio"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
