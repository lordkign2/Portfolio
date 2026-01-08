'use client';
import { projects } from "../../data/projects";
import SpotlightCard from '@/components/ui/SpotlightCard';
import DotGrid from '@/components/ui/DotGrid';
import Image from "next/image";
import { FiGithub } from 'react-icons/fi';

export default function ProjectsClient() {
  return (
    <section className="min-h-screen pt-32 px-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="w-full h-full absolute inset-0 z-0">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="max-w-6xl mx-auto z-10 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my latest work showcasing innovative solutions and cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <SpotlightCard
                className="custom-spotlight-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/30 dark:border-gray-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl"
                spotlightColor="rgba(100, 151, 200, 0.3)"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={proj.photoURL}
                    alt={proj.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{proj.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {proj.description}
                  </p>
                </div>
                
                <div className="px-6 pb-6 flex justify-between">
                  <a 
                    href={proj.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center cursor-target text-blue-600 dark:text-blue-400 font-medium"
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
                      className="flex items-center cursor-target text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white"
                    >
                      <FiGithub className="h-5 w-5 mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}