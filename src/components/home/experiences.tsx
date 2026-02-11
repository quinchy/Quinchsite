"use client";

import FuzzyText from "@/components/fuzzy-text";
import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import Badge from "@/components/badge";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Kynatech from "@/../public/kynatech.png";
import AppQuant from "@/../public/appquant.png";
import { useEffect, useState } from "react";

interface Experience {
  title: string;
  period: string;
  company: string;
  companyLogo: StaticImageData;
  employmentType: string;
  location: string;
  workMode: string;
  descriptions: string[];
  technologies: string[];
}

export default function Experiences() {
  const primaryColor = useGetCSSVariable("--primary");
  const [showFuzzy, setShowFuzzy] = useState(false);

  useEffect(() => {
    setShowFuzzy(true);
  }, []);

  const experiences: Experience[] = [
    {
      title: "Software Developer",
      period: "May 2025 - Feb 2026",
      company: "AppQuant Technologies Inc.",
      companyLogo: AppQuant,
      employmentType: "Full-time",
      location: "Pasig City, Philippines",
      workMode: "Remote",
      descriptions: [
        "Worked as an early engineer for a startup, I led the end-to-end architecture and development of our core software products. I spearheaded the full-stack implementation using Next.js and Supabase, while establishing a robust CI/CD pipeline via GitHub and Vercel.",
        "I deliver complex platforms including a modern CRM with collaboration and realtime analytics, as well as various integrations of third-party services and AI-driven features. This work occurs in a fast-changing environment with frequent direction shifts, requiring strong adaptability and close collaboration with the founder.",
      ],
      technologies: [
        "Next.js",
        "Supabase",
        "Prisma",
        "Vercel",
        "OpenAI",
        "Elevenlabs",
        "Stripe",
        "Resend",
        "Twilio",
        "Shadcn",
      ],
    },
    {
      title: "Software Developer",
      period: "May 2025 - Feb 2026",
      company: "Kynatech",
      companyLogo: Kynatech,
      employmentType: "Internship",
      location: "Taguig City, Philippines",
      workMode: "Remote",
      descriptions: [
        "I delivered full-stack features for a Timesheet Application, prioritizing security and industry best practices while translating complex Figma designs into responsive, pixel-perfect user interfaces.",
        "Beyond development, I drove the project's lifecycle by authoring technical documentation and conducting rigorous product testing. I thrived in a high-velocity Agile environment, maintaining constant alignment with the CTO and senior engineers to deliver high-quality, iterative software solutions.",
      ],
      technologies: ["Next.js", "Supabase", "Prisma", "Shadcn"],
    },
  ];

  const ExperienceItem = ({ experience }: { experience: Experience }) => (
    <article className="space-y-8">
      <div className="flex gap-4 items-center">
        <Image
          width={75}
          height={75}
          src={experience.companyLogo}
          alt="Company Logo"
          priority
        />
        <header className="border-border border-b border-dashed pb-4 w-full">
          <div className="flex justify-between">
            <h2 className="text-primary font-semibold">{experience.title}</h2>
            <time className="text-primary">{experience.period}</time>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <span className="text-primary">{experience.company}</span>
              <span>|</span>
              <span>{experience.employmentType}</span>
            </div>
            <address className="flex gap-2">
              <span>{experience.location}</span>
              <span>|</span>
              <span>{experience.workMode}</span>
            </address>
          </div>
        </header>
      </div>
      <section className="space-y-2">
        {experience.descriptions.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </section>
      <ul className="flex gap-2 flex-wrap">
        {experience.technologies.map((tech, index) => (
          <li key={index}>
            <Badge name={tech} />
          </li>
        ))}
      </ul>
    </article>
  );

  return (
    <section className="space-y-8">
      {showFuzzy ? (
        <FuzzyText
          baseIntensity={0.01}
          hoverIntensity={0.2}
          fuzzRange={30}
          color={primaryColor}
          fontSize={30}
          fontFamily="inherit"
          className="-ml-13.5"
          enableHover
        >
          Experiences
        </FuzzyText>
      ) : (
        <h1
          className="leading-7"
          style={{
            fontSize: 30,
            fontWeight: 900,
            color: primaryColor,
          }}
        >
          Experiences
        </h1>
      )}
      <div className="space-y-10">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
}
