"use client";
import React, { Suspense } from "react";
import { Orbitron } from 'next/font/google';

// Dynamically import sections for better code splitting
const HeroSection = React.lazy(() => import('./sections/HeroSection'));
const StatsSection = React.lazy(() => import('./sections/StatsSection'));
const ExperienceSection = React.lazy(() => import('./sections/ExperienceSection'));
const SkillsSection = React.lazy(() => import('./sections/SkillsSection'));
const ProjectsSection = React.lazy(() => import('./sections/ProjectsSection'));
const ContactCTASection = React.lazy(() => import('./sections/ContactCTASection'));

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
});

// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const PortfolioHome: React.FC = () => {
  return (
    <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ContactCTASection />
      </Suspense>
    </main>
  );
};

export default PortfolioHome;