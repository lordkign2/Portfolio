"use client";
import { motion } from "framer-motion";
import React, { Suspense } from "react";

// Dynamically import UI components for better code splitting
const TextType = React.lazy(() => import('../ui/TextType'));
const ShinyText = React.lazy(() => import('../ui/ShinyText'));
const LetterGlitch = React.lazy(() => import('../ui/LetterGlitch'));

// Loading fallback component
const ComponentLoader = () => (
  <div className="inline-block w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
);

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Suspense fallback={<ComponentLoader />}>
          <LetterGlitch
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
            glitchSpeed={70}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </Suspense>
      </div>

      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 z-10 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Suspense fallback={<ComponentLoader />}>
          <TextType
            text={[
              "Hi, I'm Kingsley Umeh",
              "Senior Full-Stack Developer",
              "Creating Digital Excellence"
            ]}
            typingSpeed={10}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </Suspense>
      </motion.h1>

      <motion.div
        className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Suspense fallback={<ComponentLoader />}>
          <ShinyText
            text="I craft exceptional digital experiences with cutting-edge web technologies, transforming ideas into powerful, scalable solutions."
            disabled={false}
            speed={3}
            className='shiny-text shine'
          />
        </Suspense>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href="#projects"
          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl cursor-target font-semibold"
          onClick={() => {
            import('../../utils/eventTracker').then(({ trackLinkClick }) => {
              trackLinkClick('View My Work', '#projects');
            });
          }}
        >
          View My Work
        </a>
        <a
          href="/KingsleyUmehResume.pdf"
          download
          className="border-2 border-gray-300 dark:border-gray-600 px-8 py-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all transform hover:scale-105 cursor-target font-semibold"
          onClick={() => {
            import('../../utils/eventTracker').then(({ trackEvent }) => {
              trackEvent('file_download', {
                event_category: 'engagement',
                event_label: 'Download Resume',
                file_name: 'KingsleyUmehResume.pdf',
                file_type: 'pdf'
              });
            });
          }}
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a href="#projects" className="text-white/70 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;