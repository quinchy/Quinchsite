// components/noise-wrapper.tsx
"use client";
import dynamic from "next/dynamic";

const Noise = dynamic(() => import("@/components/noise"), {
  ssr: false,
});

export default function NoiseWrapper() {
  return <Noise />;
}
