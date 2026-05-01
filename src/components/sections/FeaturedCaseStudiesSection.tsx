"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

const FeaturedCaseStudiesSection = () => {
  const featured = projects.filter((project) => project.caseStudyHref).slice(0, 3);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Case Studies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start with engineering-first project breakdowns covering architecture choices, auth strategy, data modeling, and production trade-offs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <motion.article
              key={project.id}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {(project.problemContext || project.description).length > 150 
                  ? `${(project.problemContext || project.description).substring(0, 150)}...` 
                  : (project.problemContext || project.description)}
              </p>
              {project.complexityTags && project.complexityTags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.complexityTags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.complexityTags.length > 3 && (
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700/40 dark:text-gray-400">
                      +{project.complexityTags.length - 3} more
                    </span>
                  )}
                </div>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 italic">
                Detailed technical analysis available in case study →
              </p>
              <Link
                href={project.caseStudyHref!}
                className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                Read Case Study
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/case-studies"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl cursor-target"
          >
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudiesSection;
