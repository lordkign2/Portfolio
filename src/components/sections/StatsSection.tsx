"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCode, FiUser, FiAward, FiCoffee } from "react-icons/fi";
import { Orbitron } from 'next/font/google';
import React, { Suspense } from "react";

// Dynamically import UI components for better code splitting
const Particles = React.lazy(() => import('../ui/Particles'));

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const stats = [
  { label: "Projects Delivered", value: 15, icon: <FiCode size={32} />, suffix: "+" },
  { label: "Happy Clients", value: 8, icon: <FiUser size={32} />, suffix: "+" },
  { label: "Years Experience", value: 4, icon: <FiAward size={32} />, suffix: "+" },
  { label: "Cups of Coffee", value: 1000, icon: <FiCoffee size={32} />, suffix: "+" },
];

// Loading fallback component
const ComponentLoader = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const StatsSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(start);
          return updated;
        });
      }, 16);
    });
  }, []);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 transition-colors">
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg text-center cursor-target hover:bg-white/20 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -10
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: i * 0.1
              }}
            >
              <div className="flex justify-center mb-6 text-blue-400">
                {stat.icon}
              </div>
              <p
                className={`${orbitron.className} text-5xl font-bold text-white drop-shadow-sm mb-2`}
              >
                {counts[i]}{stat.suffix}
              </p>
              <p className="text-blue-200 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;