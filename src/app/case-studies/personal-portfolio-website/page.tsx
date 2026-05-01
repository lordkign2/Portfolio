import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/case-study/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Case Study | Personal Portfolio Website",
  description:
    "Engineering case study for a conversion-focused portfolio built with Next.js, covering performance optimization, analytics instrumentation, and SEO architecture.",
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/case-studies/personal-portfolio-website",
  },
};

export default function PortfolioCaseStudyPage() {
  return (
    <CaseStudyTemplate
      title="Personal Portfolio Website"
      subtitle="A positioning-first portfolio engineered to communicate domain specialization, showcase technical depth, and drive hiring conversion."
      readingMinutes={3}
      tags={["Next.js", "TypeScript", "SEO Architecture", "Conversion UX", "Analytics Tracking"]}
      actions={[
        { label: "View Live Project", href: "https://umeh-kingsley-portfolio.netlify.app/", external: true },
        { label: "View Source Code", href: "https://github.com/lordkign2/Portfolio", variant: "secondary", external: true },
      ]}
      sections={[
        {
          title: "1) Problem Context",
          content: <p>Generic portfolios often fail to signal specialization, engineering depth, and production readiness fast enough for recruiters and clients. The objective was to reposition the portfolio as a targeted professional asset rather than a generic showcase.</p>,
        },
        {
          title: "2) Solution Overview",
          content: <p>Designed a section-based, high-performance portfolio with explicit specialization messaging, case-study-driven projects, and conversion-centered CTAs. Content architecture was aligned to hiring evaluation criteria: problem-solving, system thinking, and delivery readiness.</p>,
        },
        {
          title: "3) Core Features",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Problem-oriented hero positioning and specialization layer</li>
              <li>Engineering-depth sections (architecture, auth, data model, API patterns)</li>
              <li>Case-study project presentation with proof-of-complexity tags</li>
              <li>Dedicated CTA stack for hiring and project inquiries</li>
              <li>Credibility and system-design snapshot sections</li>
            </ul>
          ),
        },
        {
          title: "4) Technical Implementation",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Architecture:</span> Next.js App Router with section-level lazy loading and reusable UI modules.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Data structure:</span> Centralized typed content models for projects, experiences, and skills.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Analytics:</span> Event tracking wrappers for CTA clicks, project views, and download actions.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">SEO:</span> Rich metadata, OpenGraph/Twitter tags, and canonical URL strategy.</p>
            </>
          ),
        },
        {
          title: "5) Engineering Decisions and Trade-offs",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> Typed static content modules over immediate CMS integration.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Faster iteration and stronger code-level control.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> Manual updates required for new content.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> Motion-heavy UI with lazy-loaded components.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Preserve experience quality while reducing initial load cost.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> More component orchestration complexity.</p>
            </>
          ),
        },
        {
          title: "6) Deployment and Operations",
          content: (
            <>
              <p>Deployed on Netlify with production metadata strategy, optimized assets, and environment-aware tracking configuration.</p>
              <p>Operational priorities: page performance, maintainable section composition, and consistent conversion pathways.</p>
            </>
          ),
        },
        {
          title: "7) Outcomes",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Clearer recruiter categorization through specialization-first messaging</li>
              <li>Stronger technical signaling through case-study and architecture narratives</li>
              <li>Improved action intent with explicit hiring CTAs</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
