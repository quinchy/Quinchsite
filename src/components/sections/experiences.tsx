"use client";

import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import { useIsMobile } from "@/hooks/use-is-mobile";
import Badge from "@/components/badge";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Kynatech from "@/../public/kynatech.webp";
import AppQuant from "@/../public/appquant.webp";
import PioneerDevAI from "@/../public/pioneer-dev-ai.webp";
import { useEffect, useState } from "react";
import { CompanyIcon } from "@/components/icons";
import Link from "next/link";
import dynamic from "next/dynamic";
import { StaticTitle } from "@/components/static-title";

const FuzzyText = dynamic(() => import("@/components/fuzzy-text"), {
  ssr: false,
  loading: () => (
    <StaticTitle
      text="Experiences"
      translate="translate-x-[54px] -translate-y-[2px]"
      fontSize={31}
      color="var(--primary)"
    />
  ),
});

interface Experience {
  title: string;
  period: string;
  company: string;
  companyLogo?: StaticImageData;
  companyLink?: string;
  employmentType: string;
  location: string;
  workMode: string;
  descriptions: string[];
  technologies: string[];
}

export default function Experiences() {
  const primaryColor = useGetCSSVariable("--primary");
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const experiences: Experience[] = [
    {
      title: "Full-Stack Engineer",
      period: "March 2026 - Present",
      company: "Pioneer Dev AI",
      companyLink: "https://pioneerdev.ai/",
      companyLogo: PioneerDevAI,
      employmentType: "Full-time",
      location: "Boulder, Colorado, United States",
      workMode: "Remote",
      descriptions: [
        "Working as a Full-Stack Engineer across different products, including AI-powered ones, contributing end-to-end across frontend, backend, and infrastructure. Across the projects I work on, my contributions span from crafting sleek and intuitive UIs, building scalable backend systems and APIs, optimizing databases, and improving application performance",
        "Collaborate with experienced developers across different projects in a professional, fast-moving team environment, working within AI-assisted workflows, ticket-based development, PR-based code reviews, regular dev meetings, and disciplined engineering practices around commits, PRs, and code quality.",
      ],
      technologies: [
        "Next.js",
        "Prisma",
        "Supabase",
        "tRPC",
        "Trigger.dev",
        "Cloudflare",
        "Redis",
        "Sentry",
        "Langfuse",
        "Infisical",
        "AI",
      ],
    },
    {
      title: "Software Developer",
      period: "May 2025 - Feb 2026",
      company: "AppQuant Technologies Inc.",
      companyLogo: AppQuant,
      employmentType: "Full-time",
      location: "Pasig City, Philippines",
      workMode: "Remote",
      descriptions: [
        "Worked as a sole Founding Engineer for a startup, I led the end-to-end infrastructure and development of their core software products including a modern AI-Powered CRM. I developed products using Next.js, Prisma, Supabase and Vercel, while integrating various third-party services such as Stripe, Twilio, Resend and AI-integrations such as ElevenLabs and OpenAI.",
        "Collaborate personally with the founder, translating business requirements into technical solutions while adapting quickly to frequent shifts in direction.",
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
      title: "Software Developer Intern",
      period: "May 2025 - Feb 2026",
      company: "Kynatech",
      companyLogo: Kynatech,
      companyLink: "https://kynatech.ph/",
      employmentType: "Internship",
      location: "Taguig City, Philippines",
      workMode: "Remote",
      descriptions: [
        "Interned in a mid-sized software development company, working within a multidisciplinary team of designers, full-stack developers, QA testers, DevOps engineers, project managers, and specialists across web, and mobile development.",
        "Completed a Timesheet Application project designed to develop industry-ready full-stack skills, with guidance and mentorship from senior engineers. Translated complex Figma designs into responsive, pixel-accurate interfaces while applying security standards, technical documentation, product testing, Agile practices, and established software development best practices.",
      ],
      technologies: ["Next.js", "Supabase", "Prisma", "Shadcn"],
    },
  ];

  const ExperienceItem = ({ experience }: { experience: Experience }) => (
    <article className="space-y-4 group">
      <div className="flex flex-col lg:flex-row gap-1.5 lg:items-center">
        {experience.companyLogo ? (
          <Image
            width={80}
            height={80}
            src={experience.companyLogo}
            placeholder="blur"
            draggable={false}
            className="select-none border border-border outline-dashed outline group-hover:outline-border outline-offset-4 outline-border/0 transition-all duration-300"
            alt="Company Logo"
            priority
          />
        ) : (
          <div className="min-w-20 min-h-20 bg-muted border border-border flex items-center justify-center">
            <CompanyIcon className="text-primary/50 size-10" />
          </div>
        )}
        <header className="pb-4 lg:pl-4 border-border/0 group-hover:border-border border-b border-dashed w-full transtion-all duration-300">
          <div className="flex flex-col lg:flex-row justify-between">
            <h2 className="text-primary font-semibold">{experience.title}</h2>
            <time className="text-primary">{experience.period}</time>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex gap-2">
              {experience.companyLink ? (
                <Link
                  href={experience.companyLink}
                  className="text-primary underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.company}
                </Link>
              ) : (
                <span className="text-primary">{experience.company}</span>
              )}
              <span>|</span>
              <span>{experience.employmentType}</span>
            </div>
            <address className="flex gap-2 not-italic">
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
          Experiences
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
              Experiences
            </FuzzyText>
          </div>
        )}
      </header>

      <div className="space-y-10">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
}
