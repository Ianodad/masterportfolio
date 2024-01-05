"use client";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import React, { useEffect, useState } from "react";

import { MobileNavbar } from "@/components/MobileNavbar";

export default function Home() {
  const [nav, setNav] = useState(true);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <main className="">
      <Navbar openNav={openNav} />
      <MobileNavbar nav={nav} closeNav={closeNav} />
    </main>
  );
}
