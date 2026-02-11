"use client";
import { createContext, useContext, useState } from "react";

interface TransitionContextType {
  isTransitioning: boolean;
  triggerTransition: () => Promise<void>;
}

const TransitionContext = createContext<TransitionContextType | undefined>(
  undefined,
);

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerTransition = async () => {
    setIsTransitioning(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setIsTransitioning(false);
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, triggerTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within TransitionProvider");
  }
  return context;
}
