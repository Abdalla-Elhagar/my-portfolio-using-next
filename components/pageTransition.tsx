"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1.5, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen bg-primary fixed top-0 left-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}
