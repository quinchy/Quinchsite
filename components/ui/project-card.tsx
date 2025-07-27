"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import SiteLink from "@/components/link/site-link";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  thumbnail: string | StaticImageData;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubLink?: string;
  websiteLink?: string;
  type?: Project["type"];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  title,
  description,
  longDescription,
  technologies,
  githubLink,
  websiteLink,
  type,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="border-border bg-background hover:border-highlight hover:bg-muted flex h-96 w-80 cursor-pointer flex-col gap-5 rounded-3xl border-[1px] p-7 duration-500 ease-in-out"
      >
        <Image
          src={thumbnail}
          alt={title}
          width={300}
          height={300}
          priority={true}
          quality={100}
          className="rounded-xl"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-highlight text-lg font-bold">{title}</p>
            {type && (
              <Badge className="bg-highlight/10 text-highlight border-highlight/30 text-xs">
                {type === "company" ? "Company" : "Personal"}
              </Badge>
            )}
          </div>
          <p>{description}</p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="flex h-[70vh] flex-col lg:min-w-[40rem]">
          <DialogHeader>
            <DialogTitle asChild>
              <div className="text-highlight flex flex-col items-start gap-4 text-base lg:flex-row lg:items-center">
                <div className="flex items-center gap-2">
                  {title}
                  {type && (
                    <Badge className="bg-highlight/10 text-highlight border-highlight/30 text-xs">
                      {type === "company" ? "Company" : "Personal"}
                    </Badge>
                  )}
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div
            data-lenis-prevent
            className="flex flex-col gap-4 overflow-y-auto"
          >
            <div className="px-5 pt-5">
              <Image
                src={thumbnail}
                alt={title}
                width={600}
                height={400}
                quality={100}
                priority={true}
                className="border-border h-auto w-full rounded-xl border-[1px]"
              />
            </div>
            <div className="flex flex-row gap-2 px-5">
              {githubLink && <SiteLink href={githubLink}>Github</SiteLink>}
              {websiteLink && <SiteLink href={websiteLink}>Website</SiteLink>}
            </div>
            <div className="mb-10 flex flex-col gap-4 px-5">
              <p className="text-base">{longDescription}</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    className="bg-muted text-foreground hover:bg-highlight hover:text-background transition-all duration-500 ease-in-out"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
