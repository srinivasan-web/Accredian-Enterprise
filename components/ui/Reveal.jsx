"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function Reveal({
  className = "",
  children,
  delay = 0,
  immediate = false,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) {
      return undefined;
    }

    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [immediate]);

  return (
    <div
      ref={ref}
      className={cn("reveal", isVisible && "reveal--visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
