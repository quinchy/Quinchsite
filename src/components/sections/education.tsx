"use client";

import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useEffect, useState } from "react";
import BPSU from "@/../public/bpsu.webp";
import Image from "next/image";
import dynamic from "next/dynamic";
import { StaticTitle } from "@/components/static-title";

const FuzzyText = dynamic(() => import("@/components/fuzzy-text"), {
  ssr: false,
  loading: () => (
    <StaticTitle
      text="Education"
      translate="translate-x-[54px] -translate-y-[3px]"
      fontSize={31}
      color="var(--primary)"
    />
  ),
});

export default function Experiences() {
  const primaryColor = useGetCSSVariable("--primary");
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="space-y-8">
      <header className="relative flex items-center">
        <h1
          className={`leading-7 text-primary transition-opacity -translate-y-[2.5px] tracking-[-0.55px] translate-x-[0.5px] duration-300 ${
            isMounted && !isMobile ? "opacity-0" : "opacity-100"
          }`}
          style={{
            fontSize: 31,
            fontWeight: 900,
            color: primaryColor,
          }}
        >
          Education
        </h1>

        {isMounted && !isMobile && (
          <div className="absolute left-0 -ml-13.5">
            <FuzzyText
              baseIntensity={0.01}
              hoverIntensity={0.2}
              fuzzRange={30}
              color={primaryColor}
              fontSize={30}
              fontFamily="inherit"
              enableHover
            >
              Education
            </FuzzyText>
          </div>
        )}
      </header>
      <article className="space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-1.5">
          <Image
            width={80}
            height={80}
            src={BPSU}
            placeholder="blur"
            draggable={false}
            className="select-none border border-border outline-dashed outline group-hover:outline-border outline-offset-4 outline-border/0 transition-all duration-300"
            alt="Company Logo"
            priority
          />
          <div className="pb-4 lg:pl-4 flex flex-col w-full">
            <section className="flex flex-col lg:flex-row justify-between">
              <h1 className="font-semibold text-primary">
                Bataan Peninsula State University - Main Campus
              </h1>
              <time className="text-primary">September 2021 – August 2025</time>
            </section>
            <section className="flex flex-col lg:flex-row justify-between">
              <h1>BS in Computer Science, Major in Software Development</h1>
              <address>Bataan, Philippines</address>
            </section>
          </div>
        </div>
        <p>
          As early as my first year, I developed a strong interest in software
          engineering; consequently, I took the initiative to be the lead
          developer on every academic project, eventually graduating with Latin
          honors and securing a developer role ahead of schedule.
        </p>
      </article>
    </section>
  );
}
