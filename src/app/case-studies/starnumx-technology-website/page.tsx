import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/case-study/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Case Study | StarnumX Technology Website",
  description:
    "Engineering case study for StarnumX corporate website built with Next.js, covering modern UI design, responsive layouts, and performance optimization.",
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/case-studies/starnumx-technology-website",
  },
};

export default function StarnumXCaseStudyPage() {
  return (
    <CaseStudyTemplate
      title="StarnumX Technology Website"
      subtitle="Corporate website engineered for modern tech company with responsive design, optimized performance, and professional brand presence."
      readingMinutes={4}
      tags={["Next.js", "TypeScript", "Corporate Design", "Responsive Layout", "Performance Optimization"]}
      actions={[
        { label: "View Live Project", href: "https://starnumx.netlify.app/", external: true },
        { label: "View Source Code", href: "https://github.com/lordkign2/starnumX", variant: "secondary", external: true },
      ]}
      sections={[
        {
          title: "1) Problem Context",
          content: <p>StarnumX Technology required a professional corporate web presence that would effectively communicate their brand, showcase services, and establish credibility in the competitive tech industry. The existing digital presence was fragmented and didn't reflect the company's technical capabilities.</p>,
        },
        {
          title: "2) Solution Overview",
          content: <p>Developed a modern, responsive corporate website using Next.js 16 with TypeScript for type safety. Implemented a clean, professional design system with optimized performance for fast loading times and smooth user interactions across all devices.</p>,
        },
        {
          title: "3) Core Features",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Responsive design with mobile-first approach</li>
              <li>Modern UI components with smooth animations</li>
              <li>Optimized performance with lazy loading</li>
              <li>SEO-friendly structure with metadata optimization</li>
              <li>Professional branding and consistent design language</li>
            </ul>
          ),
        },
        {
          title: "4) Technical Implementation",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Framework:</span> Next.js 16 with App Router for optimal performance and SEO.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Styling:</span> Tailwind CSS for rapid, consistent styling with responsive design patterns.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Type Safety:</span> TypeScript throughout the codebase for maintainability and error prevention.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Performance:</span> Image optimization, code splitting, and lazy loading for fast page loads.</p>
            </>
          ),
        },
        {
          title: "5) Engineering Decisions and Trade-offs",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> Next.js over static site generators.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Better performance, SEO optimization, and future scalability.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> More complex build process compared to static sites.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> Tailwind CSS over custom CSS.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Faster development, consistent design system, smaller bundle size.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> Learning curve for team members unfamiliar with utility-first CSS.</p>
            </>
          ),
        },
        {
          title: "6) Deployment and Operations",
          content: (
            <>
              <p>Deployed on Netlify with automatic deployments from Git, ensuring seamless updates and rollback capabilities.</p>
              <p>Implemented monitoring for performance metrics and uptime tracking to maintain high availability.</p>
            </>
          ),
        },
        {
          title: "7) Outcomes",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Professional brand presence that accurately reflects company capabilities</li>
              <li>Improved user engagement with responsive, mobile-friendly design</li>
              <li>Fast loading times contributing to better user experience and SEO rankings</li>
              <li>Scalable architecture for future feature additions and content updates</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
