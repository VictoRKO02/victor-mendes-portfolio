"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
};

const directions = {
  up: {
    x: 0,
    y: 35,
  },

  down: {
    x: 0,
    y: -35,
  },

  left: {
    x: 35,
    y: 0,
  },

  right: {
    x: -35,
    y: 0,
  },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const initialPosition = directions[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialPosition.x,
        y: initialPosition.y,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}