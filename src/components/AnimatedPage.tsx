import { motion } from "framer-motion";
import React from "react";

const pageVariants = {
  initial: { opacity: 0, x: 50, rotateY: -10 },
  in: { opacity: 1, x: 0, rotateY: 0 },
  out: { opacity: 0, x: -50, rotateY: 10 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.4,
};

const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;