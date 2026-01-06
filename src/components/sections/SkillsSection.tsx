"use client";
import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import React, { Suspense } from "react";

// Dynamically import UI components for better code splitting
const Particles = React.lazy(() => import('../ui/Particles'));

// Loading fallback component
const ComponentLoader = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 px-4 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 transition-colors">
      <div className="w-full h-full absolute inset-0 z-0">
        <Suspense fallback={<ComponentLoader />}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            maxParticles={300}
            reducedMotion={false}
          />
        </Suspense>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 z-10"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Technical Expertise
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Proficient in a wide range of cutting-edge technologies and frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 max-w-6xl mx-auto z-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              className="flex flex-col items-center bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg text-center cursor-target hover:bg-white/20 transition-all duration-300"
              whileHover={{
                scale: 1.1,
                y: -10
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                type: "spring",
                stiffness: 200
              }}
            >
              <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="text-white font-semibold mb-3">{skill.label}</p>

              {/* Level Meter */}
              <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + index * 0.05
                  }}
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                />
              </div>
              <span className="text-blue-200 text-sm mt-2 font-medium">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;