"use client";

export default function ScanLineOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden opacity-20 mix-blend-exclusion backdrop-hue-rotate-30">
      {/* CRT Scan Lines */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(100,150,255,0.15) 2px, rgba(100,150,255,0.15) 4px)",
        }}
      />

      {/* CRT Curvature Effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.3) 100%)",
          borderRadius: "50%",
          transform: "scale(1.1)",
        }}
      />

      {/* CRT Screen Glow */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* CRT Phosphor Effect */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.02) 1px, rgba(255,255,255,0.02) 2px)",
        }}
      />

      {/* CRT Flicker */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "rgba(255,255,255,0.02)",
          animation: "crt-flicker 0.15s infinite",
        }}
      />

      {/* CRT Static Noise */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9Im5vbmUiLz4KPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0icmdiYSgxMDAsMTUwLDI1NSwwLjEpIi8+CjxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9InJnYmEoMTAwLDE1MCwyNTUsMC4xKSIvPgo8cmVjdCB4PSI4IiB5PSI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iMTIiIHk9IjEyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iMTYiIHk9IjE2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iMjQiIHk9IjI0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iMjgiIHk9IjI4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iMzIiIHk9IjMyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iMzYiIHk9IjM2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iNDAiIHk9IjQwIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iNDQiIHk9IjQ0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iNDgiIHk9IjQ4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iNTIiIHk9IjUyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iNTYiIHk9IjU2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iNjAiIHk9IjYwIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iNjQiIHk9IjY0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iNjgiIHk9IjY4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iNzIiIHk9IjcyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iNzYiIHk9Ijc2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iODAiIHk9IjgwIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iODQiIHk9Ijg0IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iODgiIHk9Ijg4IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iOTIiIHk9IjkyIiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPHJlY3QgeD0iOTYiIHk9Ijk2IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDEwMCwxNTAsMjU1LDAuMSkiLz4KPC9zdmc+')",
          animation: "crt-static 0.1s steps(1) infinite",
          borderRadius: "50%",
          transform: "scale(1.1)",
        }}
      />
    </div>
  );
}
