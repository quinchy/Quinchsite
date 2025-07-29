"use client";

import React from "react";
import Image from "next/image";
import ResumeIcon from "@/public/images/resume_icon.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ResumeDialog: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scale, setScale] = React.useState(0.75);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = () => {
    setScale(0.75);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 0.75) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 0.75) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale > 0.75) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && scale > 0.75) {
      e.preventDefault();
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setIsOpen(true)}
              className="group group hover:bg-muted text-foreground h-12 w-12 scale-75 rounded-xl p-3 duration-500 ease-in-out hover:brightness-125 xl:h-14 xl:w-14"
              aria-label="Resume"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Resume</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 backdrop-blur-sm">
          <div className="relative h-full w-full max-w-7xl">
            <div className="absolute top-2 right-2 z-10 flex gap-1 sm:top-4 sm:right-4 sm:gap-2">
              <button
                onClick={handleZoomIn}
                className="bg-background border-border text-foreground hover:bg-muted hover:text-highlight flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 sm:h-8 sm:w-8"
                aria-label="Zoom in"
              >
                <svg
                  width="20"
                  height="20"
                  className="sm:h-4 sm:w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                  <path d="M11 8v6" />
                  <path d="M8 11h6" />
                </svg>
              </button>
              <button
                onClick={handleZoomOut}
                className="bg-background border-border text-foreground hover:bg-muted hover:text-highlight flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 sm:h-8 sm:w-8"
                aria-label="Zoom out"
              >
                <svg
                  width="20"
                  height="20"
                  className="sm:h-4 sm:w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                  <path d="M8 11h6" />
                </svg>
              </button>
              <button
                onClick={handleReset}
                className="bg-background border-border text-foreground hover:bg-muted hover:text-highlight flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 sm:h-8 sm:w-8"
                aria-label="Reset zoom"
              >
                <svg
                  width="20"
                  height="20"
                  className="sm:h-4 sm:w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
              </button>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/documents/de_guzman_resume.pdf";
                  link.download = "Cyril_James_De_Guzman_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="bg-background border-border text-foreground hover:bg-muted hover:text-highlight flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 sm:h-8 sm:w-8"
                aria-label="Download resume"
              >
                <svg
                  width="20"
                  height="20"
                  className="sm:h-4 sm:w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-background border-border text-foreground hover:bg-muted hover:text-highlight flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 sm:h-8 sm:w-8"
                aria-label="Close resume"
              >
                <svg
                  width="20"
                  height="20"
                  className="sm:h-4 sm:w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div
              className="h-full w-full overflow-hidden rounded-lg bg-transparent p-2 sm:p-4"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex h-full w-full items-center justify-center"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <div
                  style={{
                    transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                    transition: isDragging ? "none" : "transform 0.2s ease-out",
                  }}
                >
                  <Image
                    src="/images/de_guzman_resume.svg"
                    alt="Cyril James De Guzman Resume"
                    width={800}
                    height={1000}
                    className="h-auto max-h-full w-auto max-w-full bg-white object-contain select-none"
                    draggable={false}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeDialog;
