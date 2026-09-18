"use client";

import { motion } from "framer-motion";

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairsAnimation}
            initial="initial"
            animate="animate"
            transition={{
              duration: 0.6,
              ease: [0.65, 0, 0.35, 1],
              delay: reverseIndex(index) * 0.12,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
