"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function SplashScreen() {
  const gifDuration =4000;
  const slideDuration = 1000;
  const highlightDelayOffset = 0.05;

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
        <Image
          src="/gifs/animated-quinch-logo.gif"
          alt="Animated Quinch logo"
          width={200}
          height={200}
          unoptimized
          priority
          className="w-[200px] h-[200px] object-contain will-change-transform"
        />
      </motion.div>
    </>
  );
}
