"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "../LangContext";
import translations from "../translations";

export default function QualityMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollSpeed = 1;

  const { lang } = useLang();
  const text = translations[lang].page;

  const qualities = text.about.qualities;

  // Auto-scroll
  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let animationFrameId: number;
    const contentWidth = content.scrollWidth / 2;

    const scroll = () => {
      if (!container || !content || isHovered || isDragging) {
        animationFrameId = requestAnimationFrame(scroll);
        return;
      }

      container.scrollLeft =
        (container.scrollLeft + scrollSpeed) % contentWidth;

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  // Drag-to-scroll handlers
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // multiplier = vitesse
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDragging, scrollLeft, startX]);

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-x-auto whitespace-nowrap border-y border-dark-salmon py-4 cursor-${
        isDragging ? "grabbing" : "grab"
      } select-none`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
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
