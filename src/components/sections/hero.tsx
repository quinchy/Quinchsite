"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  GithubIcon,
  LinkedinIcon,
  ResumeIcon,
  LocationIcon,
  SuitcaseIcon,
} from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import { useIsMobile } from "@/hooks/use-is-mobile";
import ProfilePicture from "@/../public/profile-picture.webp";
import { StaticTitle } from "@/components/static-title";

const FuzzyText = dynamic(() => import("@/components/fuzzy-text"), {
  ssr: false,
  loading: () => (
    <StaticTitle
      text="Cyril James"
      translate="translate-x-[126px] -translate-y-[2.5px] scale-[102%]"
      fontSize={35}
      color="var(--primary)"
    />
  ),
});

export default function Hero() {
  const primaryColor = useGetCSSVariable("--primary");
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="flex flex-col items-start gap-2 lg:gap-6">
      <div className="flex items-center gap-6">
        <Image
          src={ProfilePicture}
          width={96}
          height={96}
          draggable={false}
          className="select-none"
          alt="Cyril James - Software Engineer"
          placeholder="blur"
          priority
        />

        <div className="flex flex-col justify-center gap-2">
          <div className="relative flex items-center">
            <h1
              className={`leading-8 text-primary -translate-y-0.5 tracking-[-0.5px] translate-x-px  transition-opacity duration-300 ${
                isMounted && !isMobile ? "opacity-0" : "opacity-100"
              }`}
              style={{
                fontSize: 35,
                fontWeight: 900,
                color: primaryColor,
              }}
            >
              Cyril James
            </h1>
            {isMounted && !isMobile && (
              <div className="absolute left-0 -ml-30.5">
                <FuzzyText
                  baseIntensity={0.01}
                  hoverIntensity={0.05}
                  fuzzRange={100}
                  color={primaryColor}
                  fontSize={35}
                  fontFamily="inherit"
                  enableHover
                >
                  Cyril James
                </FuzzyText>
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
            <p className="flex gap-2">
              <SuitcaseIcon className="size-5" />
              Software Engineer
            </p>
            <p className="flex gap-2">
              <LocationIcon className="size-5" />
              Philippines
            </p>
          </div>
        </div>
      </div>

      <nav
        className="flex flex-row gap-4 mt-4 md:mt-0"
        aria-label="Social and Resume links"
      >
        <Link
          href="https://github.com/quinchy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center border px-2 py-1 font-semibold hover:bg-primary hover:text-background"
        >
          <GithubIcon className="size-5" />
          GitHub
        </Link>

        <Link
          href="https://www.linkedin.com/in/quinchy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center border px-2 py-1 font-semibold hover:bg-primary hover:text-background"
        >
          <LinkedinIcon className="size-5" />
          LinkedIn
        </Link>

        <a
          href="/cyril-james-resume.pdf"
          target="_blank"
          aria-label="Download Cyril James Resume PDF"
          className="flex gap-2 items-center border px-2 py-1 font-semibold hover:bg-primary hover:text-background"
          rel="noopener noreferrer"
        >
          <ResumeIcon className="size-5" />
          Resume
        </a>
      </nav>
    </header>
  );
}
