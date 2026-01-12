'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Orb from '../../components/ui/Orb';
import CategorizedSkills from '../../components/CategorizedSkills';

export default function AboutClient() {
  return (
    <section className="relative min-h-screen pt-32 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="w-full h-full absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 pb-20">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        {/* Profile Image */}
        <motion.div
          className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/me.jpeg"
            alt="Kingsley Umeh - Senior Full-Stack Developer Portrait"
            fill
            className="object-cover"
            priority
            title="Kingsley Umeh - Professional Developer Photo"
          />
        </motion.div>

        {/* Introduction */}
        <motion.p
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hi, I&apos;m Kingsley Umeh, a passionate Senior Full-Stack Developer based in Nigeria with over 4 years of experience creating exceptional digital experiences.
        </motion.p>

        {/* Bio */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I specialize in building scalable web applications using modern technologies like React, Next.js, Node.js, and TypeScript. My journey in tech began with a curiosity for how things work, which evolved into a passion for creating elegant solutions to complex problems. I thrive in collaborative environments and enjoy turning ideas into reality through clean, efficient code.
        </motion.p>

        {/* Personal Interests */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Outside of coding, I enjoy drumming, playing basketball, listening to music, and contributing to open-source projects. I believe in continuous learning and staying updated with the latest industry trends to deliver cutting-edge solutions.
        </motion.p>

        {/* Skills & Interests */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              label: "Frontend Expertise",
              desc: "React, Next.js, TypeScript, Tailwind CSS, and modern UI/UX principles"
            },
            {
              label: "Backend Power",
              desc: "Node.js, Express, NestJS, PostgreSQL, MongoDB, and RESTful APIs"
            },
            {
              label: "Creative Innovation",
              desc: "UI/UX Design, Music, Open-source contributions, and problem-solving"
            },
          ].map((card, idx) => (
            <motion.div
              key={card.label}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/30 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-target"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 + 1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{card.label}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="backdrop-blur-sm border border-white/30 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ y: -5 }}
        >
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-bold hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl cursor-target"
          >
            Get In Touch
          </a>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a 
              href="/projects"
              className="cursor-target text-blue-300 hover:text-blue-100 transition-colors duration-300 font-medium underline decoration-blue-300 hover:decoration-blue-100"
            >
              View My Projects
            </a>
            <span className="cursor-target text-gray-400 mx-2">|</span>
            <a 
              href="/services"
              className="cursor-target text-blue-300 hover:text-blue-100 transition-colors duration-300 font-medium underline decoration-blue-300 hover:decoration-blue-100"
            >
              Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="relative z-10">
        <CategorizedSkills />
      </div>
    </section>
  );
}