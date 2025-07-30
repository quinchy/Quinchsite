
import ProjectCard from "@/components/ui/project-card";
import ProjectData from "@/data/projects.json";
import { Project } from "@/lib/types";
import { thumbnails } from "@/lib/utils";

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
