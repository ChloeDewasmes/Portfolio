"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type AnimatedEmojiProps = {
  word: string;
  emoji: string;
  animation?: "spinZ" | "spinY" | "bump";
};

export const AnimatedEmoji = ({
  word,
  emoji,
  animation = "bump",
}: AnimatedEmojiProps) => {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 5 };
  const springZ = useSpring(
    useTransform(x, [-100, 100], [-180, 180]),
    springConfig
  );
  const springY = useSpring(
    useTransform(x, [-100, 100], [-180, 180]),
    springConfig
  );
  const rotate =
    animation === "spinZ"
      ? springZ
      : animation === "spinY"
      ? springY
      : undefined;

  const handleMouseMove = (event: React.MouseEvent<HTMLSpanElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <span
      className="inline-flex items-center gap-1 font-bold cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Le mot clé avec le style du gradient */}
      <span className="bg-gradient-to-r from-light-grey to-dark-grey bg-clip-text text-transparent">
        {word}
      </span>

      {/* L'emoji qui ne sera pas affecté par le gradient (normal color) */}
      <motion.span
        className="select-none"
        style={{
          rotate: animation === "spinZ" ? rotate : undefined,
          rotateY: animation === "spinY" ? rotate : undefined,
        }}
        animate={
          hovered && animation === "bump"
            ? {
                y: [-2, 0, -2],
                transition: { duration: 0.3, repeat: Infinity },
              }
            : hovered && animation === "spinY"
            ? {
                rotateY: [0, 360],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                },
              }
            : {}
        }
      >
        {emoji}
      </motion.span>
    </span>
  );
};
