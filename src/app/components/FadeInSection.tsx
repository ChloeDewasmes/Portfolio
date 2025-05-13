"use client";
import { motion } from "framer-motion";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = "py-[4vh]",
  delay = 0.15,
  id,
}) => {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
