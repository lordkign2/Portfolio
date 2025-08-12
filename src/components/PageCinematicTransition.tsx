"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageCinematicTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>

        {/* First Layer - Dark Wipe */}
        <motion.div
          key={pathname + "-wipe-dark"}
          className="fixed top-0 left-0 w-full h-full z-50"
          initial={{ x: "100%" }}
          animate={{ x: "100%" }}
          exit={{ x: 0 }}
          transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
          style={{
            backgroundColor: "#0f172a", // slate-900
          }}
        />

        {/* Second Layer - Gradient Curve */}
        <motion.div
          key={pathname + "-wipe-gradient"}
          className="fixed top-0 left-0 w-full h-full z-50"
          initial={{ x: "100%" }}
          animate={{ x: "100%" }}
          exit={{ x: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.83, 0, 0.17, 1],
            delay: 0.15,
          }}
          style={{
            background: "linear-gradient(135deg, #1e40af, #3b82f6)",
            clipPath: "ellipse(150% 100% at 50% 0%)",
          }}
        />
      </AnimatePresence>
    </div>
  );
}
