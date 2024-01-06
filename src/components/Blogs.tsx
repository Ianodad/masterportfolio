import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

export const Blogs = () => {
  return (
    <div className="pt-[4em] md:pt-[8rem] pb-[4rem] bg-white">
      <h1 className="heading">
        My <span></span>Blog
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <div className="blog-card">
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="https://placehold.co/400x600"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              December 10, 2023
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">By Sajal</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">Comments (2)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              Next js Fullstack Development
            </p>
          </div>
        </div>
        <div className="blog-card">
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="https://placehold.co/600x400"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              December 10, 2023
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">By Sajal</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white">Comments (2)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              Next js Fullstack Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
