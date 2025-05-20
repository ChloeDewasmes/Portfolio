"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    image: string;
  }[];
  size?: "sm" | "md" | "lg";
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                }}
                className="absolute flex justify-center items-center -top-16 z-50 rounded-md bg-black px-2 py-2 text-xs shadow-xl min-w-[115px] w-auto"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-salmon-pink to-transparent" />
                <div className="absolute -bottom-px z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-dark-salmon to-transparent" />
                <div className="relative z-30 text-base font-bold text-white text-center break-words">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            src={item.image}
            alt={item.name}
            className="
    relative 
    w-12 h-12 
    sm:min-w-14 sm:h-14
    md:min-w-15 md:h-15
    lg:min-w-16 lg:h-16
    rounded-full 
    bg-white 
    border border-light-grey 
    object-contain
    transition duration-500 
    group-hover:z-30 
    group-hover:scale-105
  "
          />
        </div>
      ))}
    </>
  );
};
