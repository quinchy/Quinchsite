"use client";

import MainWrapper from "@/components/layout/main-wrapper";
import Footer from "@/components/layout/footer";
import ProjectCard from "@/components/ui/project-card";
import ProjectData from "@/data/projects.json";
import { Project } from "@/lib/types";
import { thumbnails } from "@/lib/utils";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/layout/navbar"), {
  ssr: false,
});

export default function Projects() {
  return (
    <>
      <Navbar />
      <MainWrapper>
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
      </MainWrapper>
      <Footer />
    </>
  );
}
