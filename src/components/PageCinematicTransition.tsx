"use client";

import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Image from "next/image";

export default function PageCinematicTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Solid, silent loading backdrop - Holds longer for a deliberate high-end process reveal (+1s)
  const backdropVariants: Variants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.55,
        delay: 1.85, // Holds for 1.85s while the progressive CAD vector drawing and scans finish
        ease: "easeInOut" as const
      }
    }
  };

  // SVG schematic HUD path drawing variants
  const pathVariants: Variants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: [0, 1, 1, 0],
      transition: {
        pathLength: { duration: 1.35, ease: "easeOut" as const, delay: 0.1 },
        opacity: { duration: 1.85, times: [0, 0.15, 0.85, 1.0], ease: "easeInOut" as const }
      }
    }
  };

  // Vector monogram CAD drawing path variants
  const monogramPathVariants: Variants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: [0, 1, 1, 0],
      transition: {
        pathLength: { duration: 1.25, ease: "easeInOut" as const, delay: 0.2 },
        opacity: { duration: 1.85, times: [0, 0.15, 0.85, 1.0], ease: "easeInOut" as const }
      }
    }
  };

  // Terminal dots at the vertices of the vector monogram
  const dotVariants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1.3, 1],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 1.85,
        times: [0, 0.75, 0.88, 1.0],
        ease: "easeOut" as const
      }
    }
  };

  // Laser scanner beam sweep
  const beamVariants: Variants = {
    initial: { y: "-10%", opacity: 0 },
    animate: {
      y: ["-10%", "110%", "-10%"],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 1.85,
        times: [0, 0.5, 1.0],
        ease: "easeInOut" as const
      }
    }
  };

  // Blueprint scanning image reveal (revealed progressively under the scan line)
  const imageRevealVariants: Variants = {
    initial: { opacity: 0, scale: 0.95, clipPath: "inset(100% 0% 0% 0%)" },
    animate: {
      opacity: [0, 1, 1, 0],
      scale: [0.95, 1, 1, 0.95],
      clipPath: ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(100% 0% 0% 0%)"],
      transition: {
        duration: 1.85,
        times: [0, 0.5, 0.85, 1.0],
        ease: "easeInOut" as const
      }
    }
  };

  // Primary page lift
  const contentVariants: Variants = {
    initial: { opacity: 0, scale: 0.985, y: 15 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: 1.75, // Lift page into view while the shutter fades
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <div key={pathname} className="relative w-full overflow-hidden">
      {/* Outer Loader Shutter Backdrop */}
      <motion.div
        variants={backdropVariants}
        initial="initial"
        animate="animate"
        className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center bg-[#09090b]" // Clean Zinc-950 solid loading state
      >
        {/* Core Calibration Scanning HUD (Center Screen) */}
        <div className="relative w-72 h-72 flex items-center justify-center">
          
          {/* Cybernetic CAD HUD SVG drawing */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            fill="none"
          >
            <defs>
              {/* Cyan Glow Filter */}
              <filter id="glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Pink Glow Filter */}
              <filter id="glow-pink" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Blue Glow Filter */}
              <filter id="glow-blue" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer dotted/dashed target calibration ring (Glowing Cyan) */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="#22d3ee"
              strokeWidth="0.5"
              strokeDasharray="2 3"
              filter="url(#glow-cyan)"
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />

            {/* Inner solid HUD calibration ring (Glowing Indigo) */}
            <motion.circle
              cx="50"
              cy="50"
              r="34"
              stroke="#6366f1"
              strokeWidth="0.5"
              filter="url(#glow-blue)"
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />

            {/* Horizontal schematic blueprint axis (Very subtle white) */}
            <motion.path
              d="M 10 50 L 90 50"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="0.25"
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />

            {/* Vertical schematic blueprint axis (Very subtle white) */}
            <motion.path
              d="M 50 10 L 50 90"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="0.25"
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />

            {/* Target bracket 1 (Glowing Pink) */}
            <motion.path
              d="M 15 25 L 15 15 L 25 15"
              stroke="#ec4899"
              strokeWidth="0.75"
              filter="url(#glow-pink)"
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
            {/* Target bracket 2 (Glowing Pink) */}
            <motion.path
              d="M 85 25 L 85 15 L 75 15"
              stroke="#ec4899"
              strokeWidth="0.75"
              filter="url(#glow-pink)"
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
            {/* Target bracket 3 (Glowing Pink) */}
            <motion.path
              d="M 15 75 L 15 85 L 25 85"
              stroke="#ec4899"
              strokeWidth="0.75"
              filter="url(#glow-pink)"
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
            {/* Target bracket 4 (Glowing Pink) */}
            <motion.path
              d="M 85 75 L 85 85 L 75 85"
              stroke="#ec4899"
              strokeWidth="0.75"
              filter="url(#glow-pink)"
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />

            {/* THE DYNAMIC VECTOR COLOR DRAWING OF THE MONOGRAM LOGO ("K") */}
            {/* 1. Left Vertical Stem (Vibrant Royal Blue) */}
            <motion.path
              d="M 44 32 L 44 68"
              stroke="#3b82f6"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#glow-blue)"
              variants={monogramPathVariants}
              initial="initial"
              animate="animate"
            />
            {/* 2. Upper Diagonal Arm (Neon Cyan/Teal) */}
            <motion.path
              d="M 44 50 L 56 32"
              stroke="#06b6d4"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#glow-cyan)"
              variants={monogramPathVariants}
              initial="initial"
              animate="animate"
            />
            {/* 3. Lower Diagonal Leg (Vivid Hot Pink) */}
            <motion.path
              d="M 44 50 L 56 68"
              stroke="#ec4899"
              strokeWidth="1.5"
              strokeLinecap="round"
              filter="url(#glow-pink)"
              variants={monogramPathVariants}
              initial="initial"
              animate="animate"
            />

            {/* Vertex Nodes (Micro-calibration dots matching colors) */}
            <motion.circle
              cx="44"
              cy="32"
              r="1"
              fill="#3b82f6"
              filter="url(#glow-blue)"
              variants={dotVariants}
              initial="initial"
              animate="animate"
            />
            <motion.circle
              cx="44"
              cy="68"
              r="1"
              fill="#3b82f6"
              filter="url(#glow-blue)"
              variants={dotVariants}
              initial="initial"
              animate="animate"
            />
            <motion.circle
              cx="56"
              cy="32"
              r="1"
              fill="#06b6d4"
              filter="url(#glow-cyan)"
              variants={dotVariants}
              initial="initial"
              animate="animate"
            />
            <motion.circle
              cx="56"
              cy="68"
              r="1"
              fill="#ec4899"
              filter="url(#glow-pink)"
              variants={dotVariants}
              initial="initial"
              animate="animate"
            />
          </svg>

          {/* The Monogram Image (fuses & reveals under the sweep scan line) */}
          <motion.div
            variants={imageRevealVariants}
            initial="initial"
            animate="animate"
            className="relative w-32 h-32 flex items-center justify-center z-10"
          >
            <div className="relative w-24 h-24 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              <Image
                src="/favicon.png"
                alt="Schematic brand K processing draw"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Horizontal scan line sweep */}
            <motion.div
              variants={beamVariants}
              initial="initial"
              animate="animate"
              className="absolute left-[-10%] right-[-10%] h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8),_0_0_20px_rgba(34,211,238,0.4)] pointer-events-none"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Lift Animation of primary page content */}
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
