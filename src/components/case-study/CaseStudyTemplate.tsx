"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

type CaseStudyAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

type CaseStudySection = {
  title: string;
  content: ReactNode;
};

type CaseStudyTemplateProps = {
  title: string;
  subtitle: string;
  tags: string[];
  actions: CaseStudyAction[];
  sections: CaseStudySection[];
  readingMinutes?: number;
};

const getSectionId = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const CaseStudyTemplate = ({ title, subtitle, tags, actions, sections, readingMinutes }: CaseStudyTemplateProps) => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const sectionAnchors = useMemo(
    () => sections.map((section) => ({ ...section, id: getSectionId(section.title) })),
    [sections]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const elements = sectionAnchors
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((element) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.25, rootMargin: "-120px 0px -55% 0px" }
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionAnchors]);

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
          style={{ width: `${progress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.15 }}
        />
      </div>

      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[1fr_260px] lg:gap-8">
        <div className="space-y-6">
          <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-8 shadow-sm"
          >
            <p className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 mb-2">CASE STUDY</p>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-5">{subtitle}</p>
            {readingMinutes && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                Estimated reading time: {readingMinutes} min
              </p>
            )}

            <div className="lg:hidden mb-5">
              <button
                type="button"
                onClick={() => setMobileTocOpen((prev) => !prev)}
                className="w-full text-left px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {mobileTocOpen ? "Hide section navigation" : "Jump to section"}
              </button>
              {mobileTocOpen && (
                <nav className="mt-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 space-y-1">
                  {sectionAnchors.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={() => setMobileTocOpen(false)}
                        className={`block text-sm rounded-md px-2 py-1 transition-colors ${
                          isActive
                            ? "text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20"
                            : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {section.title}
                      </a>
                    );
                  })}
                </nav>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ y: -2 }}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {actions.map((action) => (
                <a
                  key={`${action.label}-${action.href}`}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  className={
                    action.variant === "secondary"
                      ? "inline-block px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                      : "inline-block px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300"
                  }
                >
                  {action.label}
                </a>
              ))}
            </div>
          </motion.header>

          {sectionAnchors.map((section, index) => (
            <motion.section
              key={section.title}
              id={section.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              className="scroll-mt-28 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{section.title}</h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-3">{section.content}</div>
            </motion.section>
          ))}
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-sm">
            <p className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase mb-3">On this page</p>
            <nav className="space-y-2">
              {sectionAnchors.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block text-sm rounded-md px-2 py-1 transition-colors ${
                      isActive
                        ? "text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {section.title}
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default CaseStudyTemplate;
