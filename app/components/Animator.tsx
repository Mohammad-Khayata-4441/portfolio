"use client";
import React from "react";
import { motion, TargetAndTransition } from "motion/react";
import { HTMLMotionProps } from "framer-motion";

const variants: Record<
  string,
  { initial: TargetAndTransition; whileInView: TargetAndTransition }
> = {
  "blur-up": {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
      y: "50%",
    },
    whileInView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  },
  "blur-down": {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
      y: "-50%",
    },
    whileInView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  },
  "scale-up": {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
      scale: 0,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
  },
  "scale-down": {
    initial: {
      opacity: 0,
      filter: "blur(10px)",
      scale: 2,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
  },
};

export default function Animator(
  props: {
    children: React.ReactNode;
    className?: string;
    variant?: keyof typeof variants;
  } & HTMLMotionProps<"div">
) {
  const { variant = "blur-up", ...rest } = props;

  return (
    <motion.div
      className={props.className}
      initial={variants[variant].initial}
      whileInView={variants[variant].whileInView}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        ...rest.transition,
      }}
    >
      {props.children}
    </motion.div>
  );
}
