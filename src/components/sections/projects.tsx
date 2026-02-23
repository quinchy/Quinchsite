"use client";

import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { StaticImageData } from "next/image";
import SuperproxyThumbnail from "@/../public/superproxy/superproxy-1.webp";
import ThryveThumbnail from "@/../public/thryve/thryve-1.webp";
import HuefitThumbnail from "@/../public/huefit/huefit-1.webp";
import PasabuyThumbnail from "@/../public/pasabuy/pasabuy-1.webp";
import SmilecareThumbnail from "@/../public/smilecare/smilecare-1.webp";
import OnlyfundsThumbnail from "@/../public/onlyfunds/onlyfunds-1.webp";
import AniquinchThumbnail from "@/../public/aniquinch/aniquinch-1.webp";
import Badge from "@/components/badge";
import Image from "next/image";
import {
  CompanyIcon,
  UniversityIcon,
  PersonalIcon,
  GithubIcon,
  GlobeIcon,
} from "@/components/icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { StaticTitle } from "@/components/static-title";

const FuzzyText = dynamic(() => import("@/components/fuzzy-text"), {
  ssr: false,
  loading: () => (
    <StaticTitle
      text="Projects"
      translate="translate-x-[54px] -translate-y-[3px]"
      fontSize={31}
      color="var(--primary)"
    />
  ),
});

type ProjectType = "Company" | "University" | "Personal";

interface Project {
  title: string;
  type: ProjectType;
  description: string;
  technologies: string[];
  images?: StaticImageData[];
  websiteLink?: string;
  githubLink?: string;
}

interface ProjectsProps {
  limit?: number;
}

const projectTypeIconMap: Record<ProjectType, React.ReactNode> = {
  Company: <CompanyIcon className="size-4 text-muted-foreground" />,
  University: <UniversityIcon className="size-4 text-muted-foreground" />,
  Personal: <PersonalIcon className="size-4 text-muted-foreground" />,
};

export default function Projects({ limit }: ProjectsProps = {}) {
  const primaryColor = useGetCSSVariable("--primary");
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const projects: Project[] = [
    {
      title: "Superproxy",
      type: "Company",
      description:
        "Modern CRM with realtime analytics and currency, contacts, companies, and products inventory, quotation and invoice management, email composer, ai chatbot, and ai cold calling",
      technologies: ["Next.js", "Supabase", "Prisma"],
      images: [SuperproxyThumbnail],
      websiteLink: "https://www.superproxy.com/",
    },
    {
      title: "Thryve",
      type: "Company",
      description:
        "Dating Site with gender-based matching, profile management, like profiles, affiliate program, realtime messaging, and video calling.",
      technologies: ["Next.js", "Supabase", "Prisma"],
      images: [ThryveThumbnail],
    },
    {
      title: "HueFit",
      type: "University",
      description:
        "Modern E-commerce platform with web and mobile application, inventory system, order management for store owners, and shop, ai-powered recommendation for customers.",
      technologies: [
        "Next.js",
        "Supabase",
        "Prisma",
        "React Native Expo",
        "FastAPI",
      ],
      images: [HuefitThumbnail],
      websiteLink: "https://hue-fit.quinchy.dev/",
      githubLink: "https://github.com/quinchy/Hue-Fit",
    },
    {
      title: "PasaBuy",
      type: "University",
      description:
        "Android Application with location based pasabuy request posts, community platform, and ordering.",
      technologies: ["Android Studio", "Java", "Firebase"],
      images: [PasabuyThumbnail],
      githubLink: "https://github.com/quinchy/Pasabuy",
    },
    {
      title: "SmileCare",
      type: "University",
      description:
        "Website for a local dental clinic with an appointment system dashboard.",
      technologies: ["Laravel", "MySQL", "Heroku"],
      images: [SmilecareThumbnail],
      githubLink:
        "https://github.com/quinchy/Donna-Mae-Jorge-Hollman-Dental-Clinic-Scheduling-System",
    },
    {
      title: "OnlyFunds",
      type: "University",
      description:
        "Basic mock-up of a Desktop Banking Application for OOP course.",
      technologies: ["C#", "WinForms", "MySQL"],
      images: [OnlyfundsThumbnail],
      githubLink: "https://github.com/quinchy/BankingSystem",
    },
    {
      title: "AniQuinch",
      type: "University",
      description:
        "Basic Website built using HTML and CSS only mimicking an e-commerce website.",
      technologies: ["HTML", "CSS"],
      images: [AniquinchThumbnail],
      websiteLink: "https://quinchx.github.io/AniQuinch/",
      githubLink: "https://github.com/QuinchX/AniQuinch",
    },
  ];

  const ProjectItem = ({ project }: { project: Project }) => (
    <div className="flex flex-col lg:flex-row gap-8 outline-dashed outline outline-border/0 hover:outline-border outline-offset-14 duration-300 transition-all">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-primary font-semibold flex gap-2 items-center">
            {project.title}
            {project.websiteLink && (
              <Link
                href={project.websiteLink}
                aria-label={`${project.title} Link`}
                title={`${project.title} Link`}
                className="hover:text-foreground text-foreground/75 hover:scale-[105%] duration-300 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon className="size-4" />
              </Link>
            )}
            {project.githubLink && (
              <Link
                href={project.githubLink}
                aria-label={`${project.title} Github Link`}
                title={`${project.title} Github Link`}
                className="hover:text-foreground hover:scale-[105%] text-foreground/75 duration-300 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="size-4" />
              </Link>
            )}
          </h2>
          <div
            className="flex items-center gap-2 bg-muted px-2 py-0.5 text-sm select-none"
            title={project.type}
          >
            {projectTypeIconMap[project.type]}
            <span>{project.type}</span>
          </div>
        </div>
        <p>{project.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((tech, index) => (
            <Badge key={index} name={tech} />
          ))}
        </div>
      </div>
      <div>
        {project.images?.[0] && (
          <Image
            width={384}
            height={174}
            src={project.images[0]}
            draggable={false}
            className="select-none min-w-96"
            placeholder="blur"
            alt="Company Logo"
            priority
          />
        )}
      </div>
    </div>
  );

  return (
    <section className="space-y-8">
      <header className="relative flex items-center">
        <h1
          className={`leading-6 text-primary transition-opacity duration-300 ${
            isMounted && !isMobile ? "opacity-0" : "opacity-100"
          }`}
          style={{
            fontSize: 30,
            fontWeight: 900,
            color: primaryColor,
          }}
        >
          Projects
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
              Projects
            </FuzzyText>
          </div>
        )}
      </header>

      <div className="space-y-8">
        {projects.slice(0, limit).map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>

      {limit && limit < projects.length && (
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="text-primary border-dashed text-sm hover:bg-muted/50 hover:border-primary transition-all duration-300 border w-full text-center py-2.5 border-border"
          >
            View All Projects
          </Link>
        </div>
      )}
    </section>
  );
}
