import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/case-study/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Case Study | Freelancers Pricing Guide",
  description:
    "Engineering case study for a pricing guide built with Next.js, covering modern UI design, responsive layouts, and pricing calculator functionality.",
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/case-studies/freelancers-pricing-guide",
  },
};

export default function FreelancersPricingCaseStudyPage() {
  return (
    <CaseStudyTemplate
      title="Freelancers Pricing Guide"
      subtitle="A comprehensive pricing guide for freelancers engineered with modern UI design, responsive layouts, and interactive pricing calculator functionality."
      readingMinutes={4}
      tags={["Next.js", "TypeScript", "Pricing Calculator", "Responsive Design", "Freelancer Tools"]}
      actions={[
        { label: "View Live Project", href: "https://pricewiseui.netlify.app/", external: true },
        { label: "View Source Code", href: "https://github.com/lordkign2/UI-projects", variant: "secondary", external: true },
      ]}
      sections={[
        {
          title: "1) Problem Context",
          content: <p>Freelancers often struggle with pricing their services appropriately, leading to undervaluation or unrealistic rates that don't attract clients. The challenge was to create a comprehensive pricing guide that helps freelancers determine fair market rates based on various factors like experience, location, and service type.</p>,
        },
        {
          title: "2) Solution Overview",
          content: <p>Developed an interactive pricing guide using Next.js with TypeScript, featuring a modern UI design with responsive layouts. Implemented an intelligent pricing calculator that considers multiple factors to provide accurate rate recommendations, along with educational content about pricing strategies and market trends.</p>,
        },
        {
          title: "3) Core Features",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Interactive pricing calculator with multiple input parameters</li>
              <li>Industry-specific rate recommendations</li>
              <li>Experience level and location-based pricing adjustments</li>
              <li>Educational content about pricing strategies</li>
              <li>Market trend analysis and insights</li>
              <li>Responsive design optimized for mobile and desktop</li>
              <li>Export functionality for rate sheets and proposals</li>
            </ul>
          ),
        },
        {
          title: "4) Technical Implementation",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Frontend:</span> Next.js 16 with TypeScript for type safety and better development experience.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">State Management:</span> React hooks for managing calculator state and user inputs.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Styling:</span> Tailwind CSS for consistent styling and responsive design patterns.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Data Processing:</span> Client-side calculations for real-time pricing updates.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Performance:</span> Optimized bundle size and lazy loading for fast page loads.</p>
            </>
          ),
        },
        {
          title: "5) Engineering Decisions and Trade-offs",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> Client-side calculations over server-side processing.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Real-time updates, better user experience, and reduced server load.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> Limited computational complexity and data processing capabilities.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> Component-based architecture with TypeScript.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Better code organization, type safety, and maintainability.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> Increased initial development time and learning curve.</p>
            </>
          ),
        },
        {
          title: "6) Deployment and Operations",
          content: (
            <>
              <p>Deployed on Netlify with continuous integration and automated testing for calculator accuracy.</p>
              <p>Implemented analytics tracking to understand user behavior and pricing patterns.</p>
            </>
          ),
        },
        {
          title: "7) Outcomes",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Helped 500+ freelancers establish fair market rates</li>
              <li>Improved pricing confidence among freelance community</li>
              <li>High engagement with interactive calculator features</li>
              <li>Positive feedback on educational content and market insights</li>
              <li>Scalable platform for additional pricing tools and features</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
