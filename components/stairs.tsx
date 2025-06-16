"use client";

import { motion } from "framer-motion";

const stairsAnimation = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
  exit: {
    y: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalStairs = 6;
  return totalStairs - index - 1;
};

export default function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairsAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            delay: reverseIndex(index) * 0.1,
            ease: "easeInOut",
          }}
          className="w-full h-full bg-[#fff] relative"
        />
      ))}
    </>
  );
}
