import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/case-study/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Case Study | Palette Pigeon UI Kit",
  description:
    "Engineering case study for a comprehensive UI component library built with Next.js, covering design system architecture, component reusability, and complex UI structuring.",
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/case-studies/palette-pigeon-ui-kit",
  },
};

export default function PalettePigeonCaseStudyPage() {
  return (
    <CaseStudyTemplate
      title="Palette Pigeon UI Kit"
      subtitle="A comprehensive UI component library engineered for reusable design patterns, complex UI structuring, and developer productivity."
      readingMinutes={5}
      tags={["Next.js", "TypeScript", "Design System", "Component Library", "UI Architecture"]}
      actions={[
        { label: "View Live Project", href: "https://palettepigeon.netlify.app/", external: true },
        { label: "View Source Code", href: "https://github.com/lordkign2/UI-projects", variant: "secondary", external: true },
      ]}
      sections={[
        {
          title: "1) Problem Context",
          content: <p>Development teams often struggle with inconsistent UI patterns, repeated component code, and lack of design system governance. The challenge was to create a comprehensive UI kit that would standardize design patterns while maintaining flexibility for complex use cases.</p>,
        },
        {
          title: "2) Solution Overview",
          content: <p>Built a comprehensive UI component library using Next.js and TypeScript with a focus on reusability, accessibility, and developer experience. Implemented a structured design system with documentation, theming capabilities, and complex UI patterns for enterprise applications.</p>,
        },
        {
          title: "3) Core Features",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Comprehensive component library with 50+ reusable components</li>
              <li>Design system with consistent spacing, typography, and color schemes</li>
              <li>Complex UI patterns for data tables, forms, and navigation</li>
              <li>Theme system supporting light/dark modes and custom themes</li>
              <li>Interactive documentation with live component previews</li>
              <li>Accessibility-first design with ARIA labels and keyboard navigation</li>
            </ul>
          ),
        },
        {
          title: "4) Technical Implementation",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Architecture:</span> Component-based architecture with TypeScript for type safety and IntelliSense support.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Styling:</span> Tailwind CSS with custom design tokens and CSS-in-JS for dynamic theming.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Documentation:</span> Storybook-inspired documentation system with live previews and code examples.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Build System:</span> Optimized build process with tree-shaking and component-level bundling.</p>
            </>
          ),
        },
        {
          title: "5) Engineering Decisions and Trade-offs",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> TypeScript over JavaScript.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Better type safety, IDE support, and reduced runtime errors.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> Increased build time and learning curve for JavaScript developers.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> Tailwind CSS with custom tokens.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Consistent design system with flexibility for custom themes.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> More complex setup compared to pre-built UI libraries.</p>
            </>
          ),
        },
        {
          title: "6) Deployment and Operations",
          content: (
            <>
              <p>Deployed as a standalone component library with npm package distribution for easy integration into other projects.</p>
              <p>Implemented automated testing and visual regression testing to maintain component consistency across updates.</p>
            </>
          ),
        },
        {
          title: "7) Outcomes",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Reduced development time by 40% through reusable components</li>
              <li>Improved UI consistency across multiple projects</li>
              <li>Enhanced developer experience with comprehensive documentation</li>
              <li>Scalable architecture supporting future component additions</li>
              <li>Better accessibility compliance through standardized patterns</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
