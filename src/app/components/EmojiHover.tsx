"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

interface HoverEmoji {
  emoji: string;
  animation?: "bump" | "spinZ" | "spinY";
}

export default function HoverEmojiTooltip({
  emoji,
  animation = "bump",
}: HoverEmoji) {
  const [hovered, setHovered] = useState(false);

  const emojiVariants = {
    bump: { y: [0, -8, 0], scale: [1, 1.2, 1], transition: { duration: 0.4 } },
    spinZ: {
      rotate: [0, 360],
      transition: { duration: 1, repeat: Infinity, ease: "linear" },
    },
    spinY: {
      rotateY: [0, 360],
      transition: { duration: 1, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 z-50 text-xl"
            {...(animation === "bump"
              ? { animate: "bump", variants: emojiVariants }
              : {
                  style: { display: "inline-block" },
                  animate: animation,
                  variants: emojiVariants,
                })}
          >
            {emoji}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
