"use client";
import { ReactNode } from "react";
import { useTransition } from "@/providers/transition-provider";

interface TransitionWrapperProps {
  children: ReactNode;
}

export default function TransitionWrapper({
  children,
}: TransitionWrapperProps) {
  const { isTransitioning } = useTransition();

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isTransitioning ? "opacity-0 blur-sm" : "opacity-100 blur-none"
      }`}
    >
      {children}
    </div>
  );
}
