import React from "react";
import SocialMediaLink from "../link/social-media-link";
import GitHubIcon from "@/public/images/github_icon.svg";
import LinkedInIcon from "@/public/images/linkedin_icon.svg";
import ResumeDialog from "./resume-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SocialMediaList: React.FC = () => {
  return (
    <nav
      className="flex flex-row items-center gap-0"
      aria-label="Social Media Links"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <SocialMediaLink
              href="https://github.com/QuinchY"
              iconSrc={GitHubIcon}
              alt="GitHub Icon"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>GitHub</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <SocialMediaLink
              href="https://linkedin.com/in/cyril-james-de-guzman"
              iconSrc={LinkedInIcon}
              alt="LinkedIn Icon"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>LinkedIn</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <ResumeDialog />
    </nav>
  );
};

export default SocialMediaList;
