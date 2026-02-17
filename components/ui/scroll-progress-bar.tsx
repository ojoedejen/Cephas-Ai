"use client";

import { useScrollProgress } from "@/hooks/use-scroll-animation";

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#ff5c35] via-[#8b5cf6] to-[#d4e157] transition-all duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
