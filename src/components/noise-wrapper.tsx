"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Noise = dynamic(() => import("@/components/noise"), {
  ssr: false,
});

export default function NoiseWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    setIsMobile(mobile);
  }, []);

  if (isMobile) return null;

  return <Noise />;
}
