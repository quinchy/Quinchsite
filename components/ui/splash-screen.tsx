// components/ui/splash-screen.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SplashScreenProps {
  /** Called after the slide-up animation finishes */
  onSlideEnd: () => void;
}

export default function SplashScreen({ onSlideEnd }: SplashScreenProps) {
  const gifDuration = 3500;
  const slideDuration = 700;
  const highlightDelayOffset = 0.05;
  // once GIF + slide have run, tell parent to unmount
  useEffect(() => {
    const timer = setTimeout(onSlideEnd, gifDuration + slideDuration);
    return () => clearTimeout(timer);
  }, [onSlideEnd]);

  return (
    <>
      {/* Highlight layer: slides up slightly delayed with same curve */}
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          backgroundColor: "var(--color-highlight)",
          overflow: "hidden",
        }}
        initial={{ y: 0, borderRadius: "0px" }}
        animate={{
          y: "-100%",
        }}
        transition={{
          delay: gifDuration / 1000 + highlightDelayOffset,
          duration: slideDuration / 1000,
          ease: [0.22, 1, 0.36, 1],
          bounce: 0.75,
        }}
        exit={{ opacity: 0, y: -40, pointerEvents: "none" }}
      />

      {/* Main splash layer */}
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "var(--color-background)",
          overflow: "hidden",
        }}
        initial={{ y: 0, borderRadius: "0px" }}
        animate={{
          y: "-100%",
        }}
        transition={{
          delay: gifDuration / 1000,
          duration: slideDuration / 1000,
          ease: [0.22, 1, 0.36, 1],
          bounce: 0.75,
        }}
      >
        <video
          src="/videos/animated-quinch-logo.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "contain",
            willChange: "transform",
          }}
        />
      </motion.div>
    </>
  );
}
