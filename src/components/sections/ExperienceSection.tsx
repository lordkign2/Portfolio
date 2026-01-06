"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../../data/experiences";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const ExperienceSection = () => {
  const ref = useRef(null);
  // Scroll progress for animated vertical line
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Highlights of my career and key milestones in my professional development
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Static Track */}
          <div className="absolute left-4 top-0 w-1 h-full bg-blue-600/30 dark:bg-blue-400/30 rounded-full" />

          {/* Animated Fill */}
          <motion.div
            className="absolute left-4 top-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full origin-top"
            style={{ height }}
          />

          <div className="space-y-12 relative z-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                className="pl-10 relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/30 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Timeline Dot */}
                <span className="absolute left-0 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />

                {/* Year */}
                <div className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-3">
                  {exp.year}
                </div>

                {/* Role & Company */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp.role}
                </h3>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  {exp.company}
                </h4>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;