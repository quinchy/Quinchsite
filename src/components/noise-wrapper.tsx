import { lazy, Suspense, useEffect, useState } from "react";

const Noise = lazy(() => import("@/components/noise"));

export default function NoiseWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    setIsMobile(mobile);
  }, []);

  if (isMobile) return null;

  return (
    <Suspense fallback={null}>
      <Noise />
    </Suspense>
  );
}
