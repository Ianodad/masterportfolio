import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
import { blog } from "@/lib/data";

export const Blogs = () => {
  return (
    <section className="pt-[2em] md:pt-[4rem] pb-[4rem] bg-white">
      <h1 className=" text-[28px] sm:text-[33px] md:text-[45px]  mb-[1rem] text-center   font-bold uppercase">
        My <span className="text-gray-400">Blogs</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        {blog.map((item, index) => {
          const {
            title,
            date,
            description,
            link,
            tags,
            views,
            reads,
            imageUrl,
          } = item;
          return (
            <div className="blog-card" key={index}>
              <div className="w-[100%] relative h-[400px]">
                <Image
                  src={imageUrl}
                  alt="blog"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div className=" text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
                <div className="w-fit px-[2rem] py-[1rem] bg-[#e7f3ee] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                  {date}
                </div>
                <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                  <div className="flex items-center space-x-3">
                    {/* <ChatBubbleLeftRightIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" /> */}
                    <p className="text-white">Views ({views})</p>
                    <p className="text-white">Reads ({reads})</p>
                  </div>
                </div>
                <p className="mt-[1rem] text-white text-[18px] font-semibold">
                  {title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
