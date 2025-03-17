import React from "react";
import { motion } from "motion/react";
export default function SlideUpText(props: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        variants={{
          exit: { opacity: 0, y: "-100%" },
          hidden: { opacity: 0, y: "100%" },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.35, delay: 0.25 }}
      >
        {props.children}
      </motion.div>
    </div>
  );
}
