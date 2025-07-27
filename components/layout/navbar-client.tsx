"use client";

import { useEffect, useState } from "react";

interface NavbarClientProps {
  children: React.ReactNode;
  pathname: string;
}

const NavbarClient = ({ children, pathname }: NavbarClientProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use a consistent height to avoid layout jumps
  const baseClass =
    "fixed top-0 left-1/2 z-10 -translate-x-1/2 rounded-2xl py-2 select-none";
  const transitionClass =
    "transition-[background,box-shadow,border-color,backdrop-filter,margin-top,width] duration-500 ease-in-out";
  const style = {
    willChange: "backdrop-filter, box-shadow, transform",
    transform: "translateZ(0)",
  };

  return (
    <div
      className={`${baseClass} ${transitionClass} ${
        scrolled
          ? "bg-nav/75 border-b-highlight mt-2 w-[20rem] border-b-[1px] backdrop-blur-lg sm:w-[28rem] md:w-[35rem] lg:w-[40rem]"
          : "mt-0 w-[25rem] border-b-0 border-b-transparent bg-transparent shadow-none sm:w-[32rem] md:w-[38rem] lg:w-[45rem]"
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export default NavbarClient;
