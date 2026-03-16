"use client";

import { motion } from "framer-motion";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  amount?: number;
  duration?: number;
}

const getInitial = (direction: AnimateInProps["direction"]) => {
  switch (direction) {
    case "up":
      return { opacity: 0, y: 32 };
    case "left":
      return { opacity: 0, x: -40 };
    case "right":
      return { opacity: 0, x: 40 };
    default:
      return { opacity: 0 };
  }
};

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  amount = 0.15,
  duration = 0.65,
}: AnimateInProps) {
  return (
    <motion.div
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
