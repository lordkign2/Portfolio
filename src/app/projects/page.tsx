"use client";
import { projects } from "../../data/projects";
import SpotlightCard from '../../components/ui/SpotlightCard'; 
import TargetCursor from '../../components/ui/TargetCursor';
import DotGrid from '../../components/ui/DotGrid';
    
export default function ProjectsPage() {
  return (
    <section className="min-h-screen pt-32 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
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
       <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <div className="max-w-6xl mx-auto z-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <a href={proj.href} key={proj.id}>
            <SpotlightCard
              key={proj.id}
              className="h-[400px] custom-spotlight-card cursor-target bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden"
              spotlightColor="rgba(100, 151, 200, 0.3)"
            >
              <div className=" dark:bg-gray-700" />
              <img src={proj.photoURL} alt={proj.title} />
              <div className="h-full p-6">
                <h3 className="font-semibold text-xl mb-2">{proj.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{proj.description}</p>
              </div>
            </SpotlightCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
    
  