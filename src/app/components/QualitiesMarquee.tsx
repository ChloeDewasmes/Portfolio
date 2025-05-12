"use client";

import { useEffect, useRef, useState } from "react";

const qualities = [
  "Pluridisciplinaire",
  "Adaptable",
  "Curieuse",
  "Enthousiaste",
  "Esprit d'équipe",
  "Impliquée",
  "Autonome",
  "Rigoureuse",
  "Persévérante",
];

export default function QualityMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 1;

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let animationFrameId: number;
    const contentWidth = content.scrollWidth / 2;

    const scroll = () => {
      if (!container || !content || isHovered) {
        animationFrameId = requestAnimationFrame(scroll);
        return;
      }

      container.scrollLeft =
        (container.scrollLeft + scrollSpeed) % contentWidth;

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div
      className="w-full overflow-hidden border-y border-dark-salmon py-4"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={contentRef} className="flex w-max gap-16">
        {[...qualities, ...qualities].map((q, i) => (
          <span
            key={`${q}-${i}`}
            className="px-6 py-2 bg-salmon-pink text-white rounded-xl text-sm font-medium shadow"
          >
            {q}
          </span>
        ))}
      </div>
    </div>
  );
}
