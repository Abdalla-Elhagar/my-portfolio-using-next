"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./stairs";

export default function StairTransition() {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="w-screen h-screen fixed flex top-0 left-0 right-0 pointer-events-none z-40 ">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
}
