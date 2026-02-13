"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/sections/about";
import Experiences from "@/components/sections/experiences";
import Education from "@/components/sections/education";
import Footer from "@/components/footer";
import Image from "next/image";
import AnimatedLogo from "@/../public/animated-quinch-logo.gif";

export default function About() {
  const [logoClass, setLogoClass] = useState("select-none opacity-0");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateLogoStyle = () => {
      const root = document.documentElement;

      const isTeal = root.classList.contains("teal");
      const isDark = root.classList.contains("dark");

      let newClass = "select-none";

      if (isTeal) {
        newClass = "select-none";
      } else if (isDark) {
        newClass = "grayscale saturate-0 select-none invert";
      } else {
        newClass = "grayscale saturate-0 select-none";
      }

      // Keep opacity-0 until mounted
      setLogoClass(`${newClass} ${mounted ? "opacity-100" : "opacity-0"}`);
    };

    // mark as mounted after first render
    setMounted(true);
    updateLogoStyle();

    const observer = new MutationObserver(updateLogoStyle);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [mounted]);

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-16 p-4">
      <div className="w-fit mx-auto py-10 transition-opacity duration-300">
        <Image
          width={150}
          src={AnimatedLogo}
          alt="Animated logo"
          className={logoClass + " transition-opacity duration-300"}
          draggable={false}
        />
      </div>

      <Hero />
      <Experiences />
      <Education />
      <Footer />
    </div>
  );
}
