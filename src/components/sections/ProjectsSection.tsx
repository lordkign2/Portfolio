"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../../data/projects";
import React, { Suspense } from "react";
import { FiGithub } from 'react-icons/fi';

// Dynamically import UI components for better code splitting
const SpotlightCard = React.lazy(() => import('../ui/SpotlightCard'));

// Loading fallback component
const ComponentLoader = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const ProjectsSection = () => {
  const displayedProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions and cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((proj, index) => (
            <motion.div
              key={proj.id}
              className="bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
             
                <Suspense fallback={<ComponentLoader />}>
                  <SpotlightCard
                    className="custom-spotlight-card cursor-target h-full"
                    spotlightColor="rgba(100, 151, 200, 0.3)"
                  >
                    <div className="h-48 bg-gray-700 relative overflow-hidden">
                      <Image 
                        src={proj.photoURL} 
                        alt={proj.title} 
                        fill
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{proj.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {proj.description}
                      </p>
                      <div className="flex justify-between">
                        <a 
                          href={proj.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 dark:text-blue-400 font-medium"
                        >
                          <span>View Project</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                        {proj.githubHref && (
                          <a 
                            href={proj.githubHref} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white"
                          >
                            <FiGithub className="h-5 w-5 mr-1" />
                            <span>Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </Suspense>
              
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="/projects"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl cursor-target"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;