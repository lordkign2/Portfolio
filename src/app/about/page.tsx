"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Orb from '../../components/ui/Orb';
import TargetCursor from '../../components/ui/TargetCursor';

export default function AboutPage() {
  return (
    <section className=" relative min-h-screen pt-32 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="w-full h-full absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        {/* Profile Image */}
        <motion.div
          className="mx-auto mb-8 w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 dark:border-blue-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/me.jpg" // replace with your profile image
            alt="Profile"
            width={160}
            height={160}
            className="object-cover"
          />
        </motion.div>

        {/* Intro */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I’m a <span className="font-semibold">full-stack developer</span> with
          4+ years of experience building scalable, high-performance web apps.
          My work blends technical expertise with a strong eye for design.
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Outside of coding, I enjoy drumming, playing basketball music, and contributing to
          open-source projects.
        </motion.p>

        {/* Interests */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Frontend Magic", desc: "React, Tailwind, animations" },
            { label: "Backend Power", desc: "Node.js, Express, PostgreSQL" },
            { label: "Creative Side", desc: "Design, Music, Open-source" },
          ].map((card, idx) => (
            <motion.div
              key={card.label}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{card.label}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
