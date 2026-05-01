import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Case Studies | Kingsley Umeh",
  description:
    "Engineering case studies covering architecture, RBAC, API design, data modeling, and deployment decisions across full-stack projects.",
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/case-studies",
  },
};

export default function CaseStudiesPage() {
  const caseStudies = projects.filter((project) => project.caseStudyHref);

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Engineering Case Studies</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Structured breakdowns of real projects: problem context, architecture decisions, security patterns, and production trade-offs.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              {project.complexityTags && project.complexityTags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.complexityTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <Link
                href={project.caseStudyHref!}
                className="inline-block text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                Read Case Study
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
