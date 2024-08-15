"use client";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import React, { useEffect, useState } from "react";

import { MobileNavbar } from "@/components/MobileNavbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/project";
import { Blogs } from "@/components/Blogs";
import { Footer } from "@/components/Footer";
import { Skills } from "@/components/Skills";

export default function Home() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <main className="">
      <Navbar openNav={openNav} />
      <MobileNavbar nav={nav} closeNav={closeNav} />
      <Hero />
      <div className="relative z-[30]">
        <About />
        <Services />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <Blogs />
        <Footer />
      </div>
    </main>
  );
}
