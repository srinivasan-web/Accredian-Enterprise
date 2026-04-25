"use client";

import { useEffect, useState } from "react";

export default function useActiveSection(ids) {
  const [activeSection, setActiveSection] = useState(ids[0] ?? null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio);

        if (visibleEntries[0]?.target?.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-18% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [ids]);

  return activeSection;
}
