"use client";

import FuzzyText from "@/components/fuzzy-text";
import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import { StaticImageData } from "next/image";
import SuperproxyThumbnail from "@/../public/superproxy/superproxy-1.png";
import ThryveThumbnail from "@/../public/thryve/thryve-1.png";
import HuefitThumbnail from "@/../public/huefit/huefit-1.png";
import PasabuyThumbnail from "@/../public/pasabuy/pasabuy-1.png";
import Badge from "@/components/badge";
import Image from "next/image";
import { CompanyIcon, UniversityIcon, PersonalIcon } from "@/components/icons";
import { useEffect, useState } from "react";

type ProjectType = "Company" | "University" | "Personal";

interface Project {
  title: string;
  type: ProjectType;
  description: string;
  technologies: string[];
  images?: StaticImageData[];
}

const projectTypeIconMap: Record<ProjectType, React.ReactNode> = {
  Company: <CompanyIcon className="size-4 text-muted-foreground" />,
  University: <UniversityIcon className="size-4 text-muted-foreground" />,
  Personal: <PersonalIcon className="size-4 text-muted-foreground" />,
};

export default function Projects() {
  const primaryColor = useGetCSSVariable("--primary");
  const [showFuzzy, setShowFuzzy] = useState(false);

  useEffect(() => {
    setShowFuzzy(true);
  }, []);

  const projects: Project[] = [
    {
      title: "Superproxy",
      type: "Company",
      description:
        "Modern CRM with realtime analytics and currency, contacts, companies, and products inventory, quotation and invoice management, email composer, ai chatbot, and ai cold calling",
      technologies: ["Next.js", "Supabase", "Prisma"],
      images: [SuperproxyThumbnail],
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
      title: "Huefit",
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
    },
    {
      title: "PasaBuy",
      type: "University",
      description:
        "Android Application with location based pasabuy request posts, community platform, and ordering.",
      technologies: ["Android Studio", "Java", "Firebase"],
      images: [PasabuyThumbnail],
    },
  ];

  const ProjectItem = ({ project }: { project: Project }) => (
    <div className="flex gap-8">
      <div className="space-y-2">
        <div className="flex justify-between">
          <h2 className="text-primary font-semibold">{project.title}</h2>
          <div className="flex items-center gap-2 bg-muted px-2 py-0.5">
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
            width={project.images[0].width}
            height={project.images[0].height}
            src={project.images[0]}
            className="max-w-96"
            alt="Company Logo"
            priority
          />
        )}
      </div>
    </div>
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
          Projects
        </FuzzyText>
      ) : (
        <h1
          className="leading-6"
          style={{
            fontSize: 30,
            fontWeight: 900,
            color: primaryColor,
          }}
        >
          Projects
        </h1>
      )}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
