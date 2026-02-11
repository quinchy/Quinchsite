"use client";

import { useEffect, useState } from "react";
import FuzzyText from "@/components/fuzzy-text";
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
import ProfilePicture from "@/../public/profile-picture.webp";

export default function Hero() {
  const primaryColor = useGetCSSVariable("--primary");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="flex flex-col items-start gap-6">
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
              className={`leading-8 -translate-y-0.5 tracking-[-0.5px] translate-x-px  transition-opacity duration-300 ${
                isMounted ? "opacity-0" : "opacity-100"
              }`}
              style={{
                fontSize: 36,
                fontWeight: 900,
                color: primaryColor,
              }}
            >
              Cyril James
            </h1>

            {/* FUZZY TEXT: Overlaid absolutely */}
            {isMounted && (
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

          <div className="flex flex-row items-center gap-4">
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
          className="flex gap-2 items-center border px-2 py-1"
        >
          <GithubIcon className="size-5" />
          GitHub
        </Link>

        <Link
          href="https://www.linkedin.com/in/quinchy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center border px-2 py-1"
        >
          <LinkedinIcon className="size-5" />
          LinkedIn
        </Link>

        <a
          href="/cyril-james-resume.pdf"
          target="_blank"
          aria-label="Download Cyril James Resume PDF"
          className="flex gap-2 items-center border px-2 py-1"
          rel="noopener noreferrer"
        >
          <ResumeIcon className="size-5" />
          Resume
        </a>
      </nav>
    </header>
  );
}
