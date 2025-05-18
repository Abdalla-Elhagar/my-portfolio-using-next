"use client";
import profileImage from "../public/assets/profileImage.webp";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.4, ease: "easeIn" }}
      >
        {/* profile photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.4, ease: "easeInOut" }}
          className="mx-auto size-[298px] rounded-full lg:size-[498px] mix-blend-lighten absolute"
        >
          <Image
            src={profileImage}
            alt="Profile image"
            priority
            quality={100}
            className="object-contain size-full rounded-full"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="size-[300px] lg:size-[506px] "
          fill="transparent"
          viewBox=" 0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
