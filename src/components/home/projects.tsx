"use client";
import FuzzyText from "@/components/fuzzy-text";
import { useGetCSSVariable } from "@/hooks/use-get-css-variable";
import Badge from "@/components/badge";

interface Project {
  title: string;
  type: string;
  description: string;
  technologies: string[];
}

export default function Projects() {
  const primaryColor = useGetCSSVariable("--primary");

  const projects: Project[] = [
    {
      title: "Superproxy",
      type: "Company",
      description:
        "Modern CRM with realtime analytics and currency, contacts, companies, and products inventory, quotation and invoice management, email composer, ai chatbot, and ai cold calling",
      technologies: ["Next.js", "Supabase", "Prisma"],
    },
    {
      title: "Thryve",
      type: "Company",
      description:
        "Dating Site with gender-based matching, profile management, like profiles, affiliate program, realtime messaging, and video calling.",
      technologies: ["Next.js", "Supabase", "Prisma"],
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
    },
    {
      title: "PasaBuy",
      type: "University",
      description:
        "Android Application with location based pasabuy request posts, community platform, and ordering.",
      technologies: ["Android Studio", "Java", "Firebase"],
    },
  ];

  const ProjectItem = ({ project }: { project: Project }) => (
    <div className="space-y-2">
      <div className="flex justify-between">
        <h2 className="text-primary font-semibold">{project.title}</h2>
        <p>{project.type}</p>
      </div>
      <p>{project.description}</p>
      <div className="flex gap-2 flex-wrap">
        {project.technologies.map((tech, index) => (
          <Badge key={index} name={tech} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="space-y-8">
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
      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
