import { Metadata } from "next";
import ProjectCard from "@/components/ui/project-card";
import ProjectData from "@/data/projects.json";
import { Project } from "@/lib/types";
import { thumbnails } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects - Cyril James De Guzman | Quinch",
  description:
    "Explore the projects and work of Cyril James De Guzman. Full-stack Software Developer showcasing web and mobile development projects.",
  keywords: [
    "projects",
    "portfolio",
    "web development",
    "mobile development",
    "software projects",
  ],
  openGraph: {
    title: "Projects - Cyril James De Guzman | Quinch",
    description:
      "Explore the projects and work of Cyril James De Guzman. Full-stack Software Developer showcasing web and mobile development projects.",
    type: "website",
    url: "https://quinchy.dev/projects",
  },
};

export default function Projects() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {(ProjectData as Project[]).map((project, index) => (
          <ProjectCard
            key={index}
            thumbnail={thumbnails[project.thumbnail]}
            title={project.title}
            description={project.description}
            longDescription={project.longDescription}
            technologies={project.technologies}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            type={project.type}
          />
        ))}
      </div>
    </>
  );
}
