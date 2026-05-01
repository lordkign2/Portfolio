import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/case-study/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Case Study | Housing Waitlist Platform",
  description:
    "Engineering case study for a waitlist platform built with Next.js and TypeScript, covering user registration, waitlist management, and email notifications.",
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/case-studies/housing-waitlist-platform",
  },
};

export default function HousingWaitlistCaseStudyPage() {
  return (
    <CaseStudyTemplate
      title="Housing Waitlist Platform"
      subtitle="A waitlist platform engineered for housing platform launch, featuring user registration, waitlist management, and automated email notifications."
      readingMinutes={4}
      tags={["Next.js", "TypeScript", "User Management", "Email Notifications", "Waitlist System"]}
      actions={[
        { label: "View Live Project", href: "https://campsite-waitlist.netlify.app/", external: true },
        { label: "View Source Code", href: "https://github.com/lordkign2/CampSite-Waitlist", variant: "secondary", external: true },
      ]}
      sections={[
        {
          title: "1) Problem Context",
          content: <p>A housing platform needed an effective waitlist system to manage user interest and build anticipation before launch. The challenge was to create a robust system that could handle user registration, provide clear communication, and maintain engagement while the platform was under development.</p>,
        },
        {
          title: "2) Solution Overview",
          content: <p>Developed a comprehensive waitlist platform using Next.js with TypeScript for type safety. Implemented user registration, waitlist management, automated email notifications, and an admin dashboard for managing user engagement and launch communications.</p>,
        },
        {
          title: "3) Core Features",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>User registration with email verification</li>
              <li>Waitlist position tracking and status updates</li>
              <li>Automated email notifications for status changes</li>
              <li>Admin dashboard for waitlist management</li>
              <li>Referral system for priority access</li>
              <li>Launch countdown and progress indicators</li>
              <li>Responsive design for mobile and desktop</li>
            </ul>
          ),
        },
        {
          title: "4) Technical Implementation",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Frontend:</span> Next.js 16 with TypeScript for type safety and better development experience.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Database:</span> Serverless database solution for user data and waitlist management.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Email Service:</span> Integrated email service for automated notifications and user communication.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Authentication:</span> JWT-based authentication for admin access and user session management.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">UI/UX:</span> Tailwind CSS for consistent styling and responsive design patterns.</p>
            </>
          ),
        },
        {
          title: "5) Engineering Decisions and Trade-offs",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> Serverless architecture over traditional server setup.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Scalability, cost-effectiveness, and reduced operational overhead.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> Limited control over infrastructure and potential vendor lock-in.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> TypeScript over JavaScript.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Better type safety, reduced runtime errors, and improved developer productivity.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> Additional build step and learning curve for team members.</p>
            </>
          ),
        },
        {
          title: "6) Deployment and Operations",
          content: (
            <>
              <p>Deployed on Netlify with continuous integration and automated testing for code quality assurance.</p>
              <p>Implemented monitoring for user registration metrics and email delivery rates to ensure system reliability.</p>
            </>
          ),
        },
        {
          title: "7) Outcomes",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Successful user acquisition with 1000+ waitlist signups before launch</li>
              <li>High engagement rates through regular status updates and communications</li>
              <li>Smooth transition from waitlist to full platform launch</li>
              <li>Scalable architecture supporting future user growth</li>
              <li>Effective user management tools for platform administrators</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
