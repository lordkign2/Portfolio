"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
import TextType from './ui/TextType';
import ShinyText from './ui/ShinyText';
import TargetCursor from './ui/TargetCursor';
import SpotlightCard from './ui/SpotlightCard';
import LetterGlitch from './ui/LetterGlitch';
import Particles from './ui/Particles';
import { FiCode, FiUser, FiAward } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Orbitron } from 'next/font/google';
import { skills } from "../data/skills-data";
import { experiences } from "../data/experiences";
import { projects } from "../data/projects";

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'], // choose weights
});
const stats = [
  { label: "Projects Completed", value: 10, icon: <FiCode size={32} /> },
  { label: "Happy Clients", value: 5, icon: <FiUser size={32} /> },
  { label: "Years in the field", value: 4, icon: <FiAward size={32} /> },
];
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const PortfolioHome: React.FC = () => {
  const ref = useRef(null);
  // Scroll progress for animated vertical line
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const displayedProjects = projects.slice(0, 3);

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
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
    <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <LetterGlitch
              glitchColors = {["#2b4539", "#61dca3", "#61b3dc"]}
              glitchSpeed={200}
              centerVignette={true}
              outerVignette={false}
              smooth={true}
            />
          </div>
          
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TextType 
            text={[ "Am Umeh Kingsley from Nigeria.", "I Build Engaging, High-Impact Web Experiences.", "Check out my projects below."]}
            typingSpeed={10}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
            
        </motion.h1>
        <div className="max-w-xl text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 z-10">
        <ShinyText text="Full-stack developer with a passion for design and detail." disabled={false} speed={3} className='shiny-text shine' />  
        </div>
        <div className="flex gap-4 z-10">
        <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
          <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-target">View My Work</a>
          <a href="/KingsleyUmehResume.pdf" download className="border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-target">Download Resume</a>
   
        </div>
      </section>

      {/* Stats */}
      <section className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 py-16 px-4 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 transition-colors">
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={2000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div> 
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg text-center cursor-target"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4 text-blue-500">{stat.icon}</div>
            <p
              className={`${orbitron.className} text-4xl font-bold text-white drop-shadow-sm`}
            >
              {counts[i]}
            </p>
            <p className="text-gray-200">{stat.label}</p>
          </motion.div>
        ))}
        
        </section>

      {/* Experience - Animated Timeline */}
      <section id="experience" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Experience
      </h2>

      <div ref={ref} className="relative max-w-3xl mx-auto">
        {/* Static Track */}
        <div className="absolute left-4 top-0 w-1 h-full bg-blue-600/30 dark:bg-blue-400/30 rounded-full" />

        {/* Animated Fill */}
        <motion.div
          className="absolute left-4 top-0 w-1 bg-blue-600 dark:bg-blue-400 rounded-full origin-top"
          style={{ height }}
        />

        <div className="space-y-10 relative z-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              className="pl-10 relative bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Timeline Dot */}
              <span className="absolute left-0 top-6 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

              {/* Year */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{exp.year}</p>

              {/* Role & Company */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {exp.role} –{" "}
                <span className="text-blue-600 dark:text-blue-400">{exp.company}</span>
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-16 px-4  bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 transition-colors">
      <div  className="w-full h-full absolute inset-0 z-0" >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={2000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
        <h2 className="text-3xl font-bold mb-8 text-center z-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 max-w-4xl mx-auto z-10">
        {skills.map((skill) => (
          <motion.div
            key={skill.label}
            className="flex flex-col items-center bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg text-center cursor-target"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="mb-3">{skill.icon}</div>
            <p className="text-white font-medium mb-2">{skill.label}</p>

            {/* Level Meter */}
            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2 }}
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
              />
            </div>
            <span className="text-white text-xs mt-1">{skill.level}%</span>
          </motion.div>
        ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedProjects.map((proj, index) => (
          <motion.div
            key={proj.id}
            className=" bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-3xl shadow hover:shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a href={proj.href}>
              <SpotlightCard
                className="custom-spotlight-card cursor-target"
                spotlightColor="rgba(100, 151, 200, 0.3)"
              >
              <div className="h-full bg-gray-700" />
              
              <Image src={proj.photoURL} alt={proj.title} layout="responsive" width={800} height={200} />
              <div className="h-full p-4">
                <h3 className="font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {proj.description}
                </p>
              </div>
            </SpotlightCard>
            </a>
          </motion.div>
        ))}
        <div className="text-center mt-10">
          <a
            href="/projects"
            className="inline-block px-6 py-2 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition cursor-target"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>

      {/* Contact CTA */}
      <section className="relative py-20 bg-blue-600 text-white text-center  bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 transition-colors">
      <div  className="w-full h-full absolute inset-0 z-0 pointer-events-none" >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
        <h2 className="text-3xl font-bold mb-4 z-10">Let’s Build Something Amazing</h2>
        <p className="max-w-xl mx-auto mb-6 z-10">
          Have a project in mind or looking to collaborate? Let’s connect and bring your vision to life.
        </p>
        <a href="mailto:you@example.com" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition cursor-target z-10">
          Contact Me
        </a>
      </section>
    </main>
  );
};

export default PortfolioHome;
