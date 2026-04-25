"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, nextProgress)));
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span className="scroll-progress__bar" style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  );
}
