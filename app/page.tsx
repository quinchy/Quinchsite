"use client";

import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import AppointmentSystem from "@/public/images/appointment_system.png";
import PeerToPeerDeliverySystem from "@/public/images/peer_to_peer_delivery_system.png";
import Zentry from "@/public/images/zentry_hris.png";
import HueFit from "@/public/images/huefit_web.png";

import MainWrapper from "@/components/layout/main-wrapper";
import TypewriterText from "@/components/ui/typewriter-text";
import Footer from "@/components/layout/footer";
import ScrollToButton from "@/components/button/move-to-project-button";
import SocialMediaList from "@/components/ui/social-media-list";
import ProjectCard from "@/components/ui/project-card";
import ViewMoreProjectsLink from "@/components/link/view-more-projects-link";

import ProjectData from "@/data/projects.json";
import ProfilePicture from "@/components/ui/profile-picture";
import useInView from "@/hooks/useInView";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/layout/navbar"), {
  ssr: false,
});

// Map thumbnail keys to imports
const thumbnails: Record<string, StaticImageData> = {
  AppointmentSystem,
  Zentry,
  HueFit,
  PeerToPeerDeliverySystem,
};

// Fade-in variants for Hero section
const heroContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
};
const heroItem = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Home() {
  const { ref: projectsRef, isInView: hasReachedProjects } =
    useInView<HTMLDivElement>();

  return (
    <>
      <Navbar />

      <MainWrapper>
        {/* 1. Hero Section */}

        <motion.section
          className="flex items-center gap-5 md:items-start"
          initial="hidden"
          animate="visible"
          variants={heroContainer}
        >
          <></>
          <div className="flex flex-col items-center gap-10 lg:items-start">
            <motion.figure
              className="flex flex-col items-center gap-4 md:flex-row md:items-start lg:gap-8 xl:gap-8"
              variants={heroItem}
            >
              <ProfilePicture />
              <figcaption>
                <div className="flex min-w-[10.75rem] flex-col items-center gap-1 select-none md:items-start lg:min-w-[20rem] lg:gap-4">
                  <h1 className="text-highlight text-shadow-highlight flex text-[3rem] leading-none font-semibold tracking-[-0.08em] text-shadow-lg/25 md:text-[4.5rem]">
                    qu<p className="tracking-[-0.55rem]">i</p>nch
                  </h1>
                  <p className="ml-1 text-[1rem] tracking-tighter opacity-90 md:text-[1.40rem] lg:ml-2">
                    Software Developer.
                  </p>
                  <SocialMediaList />
                </div>
              </figcaption>
            </motion.figure>

            <motion.article variants={heroItem}>
              <p className="max-w-[20rem] text-center text-base sm:max-w-[25rem] md:max-w-[32rem] lg:max-w-[40rem] xl:text-start">
                Hi! My name is{" "}
                <span className="text-highlight">Cyril James De Guzman</span>{" "}
                and I'm a Full-stack Software Developer that specializes in Web
                and Mobile Development based in the Philippines.
                <br />
                <br />
                I'm a Developer with a passion for creating stunning visuals and
                solving problems. Whether it's a website, mobile application, or
                other solutions, I strive to deliver software that's both
                pleasing and efficient to use.
                <br />
                <br />
                Aside from coding and tech, I enjoy Art, Gaming, Photography,
                Animation, and more.
              </p>
            </motion.article>

            <motion.div variants={heroItem}>
              <ScrollToButton />
            </motion.div>
          </div>
        </motion.section>

        {/* 2. Projects Section (unchanged) */}
        <section
          id="projects-section"
          ref={projectsRef}
          className="flex w-full scroll-mt-40 flex-col items-center gap-5"
        >
          {hasReachedProjects && (
            <>
              <TypewriterText label="code:projects" />
              <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2">
                {ProjectData.slice(0, 4).map((project, index) => (
                  <ProjectCard
                    key={index}
                    thumbnail={thumbnails[project.thumbnail]}
                    title={project.title}
                    description={project.description}
                    longDescription={project.longDescription}
                    technologies={project.technologies}
                    githubLink={project.githubLink}
                    websiteLink={project.websiteLink}
                  />
                ))}
              </div>

              <ViewMoreProjectsLink
                href="/projects"
                label="View more projects"
              />
            </>
          )}
        </section>
      </MainWrapper>

      <Footer />
    </>
  );
}
