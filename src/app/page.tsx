"use client";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import React, { useEffect, useState } from "react";

import { MobileNavbar } from "@/components/MobileNavbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <main className="">
      <Navbar openNav={openNav} />
      <MobileNavbar nav={nav} closeNav={closeNav} />
      <Hero />
    </main>
  );
}
