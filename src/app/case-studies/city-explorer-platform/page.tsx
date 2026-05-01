import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/case-study/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Case Study | City Explorer Platform",
  description:
    "Detailed engineering case study for the City Explorer Platform, covering architecture, JWT auth strategy, MongoDB data modeling, API patterns, and deployment decisions.",
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/case-studies/city-explorer-platform",
  },
};

export default function CityExplorerCaseStudyPage() {
  return (
    <CaseStudyTemplate
      title="City Explorer Platform"
      subtitle="A multi-actor full-stack platform for city discovery and management, built with React, Node.js, Express, Socket.io, and MongoDB."
      readingMinutes={3}
      tags={["RBAC", "Admin Dashboard", "Real-Time Updates", "REST API", "MongoDB"]}
      actions={[
        { label: "View Live Project", href: "https://city-explorer-full.onrender.com", external: true },
        { label: "View Source Code", href: "https://github.com/lordkign2/city-explorer-full", variant: "secondary", external: true },
      ]}
      sections={[
        {
          title: "1) Problem Context",
          content: (
            <>
              <p>Users needed one platform to discover city resources while admins needed moderation control over published content. Existing workflows were fragmented and offered no real-time interaction for updates.</p>
              <p>Goal: deliver a production-ready system supporting user discovery and admin operations with maintainable backend boundaries.</p>
            </>
          ),
        },
        {
          title: "2) Solution Overview",
          content: <p>Built a full-stack application with role-aware routing, an admin dashboard, and a real-time update layer. The frontend handles discovery and interaction while the backend exposes domain-oriented REST APIs with middleware security.</p>,
        },
        {
          title: "3) Core Features",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Role-based authorization for admin and end-user paths</li>
              <li>Admin dashboard for moderation and CRUD workflows</li>
              <li>Protected backend routes for privileged operations</li>
              <li>Socket.io-powered real-time updates</li>
              <li>Third-party API integration for city information enrichment</li>
            </ul>
          ),
        },
        {
          title: "4) Technical Implementation",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Architecture:</span> React client -&gt; Node/Express API -&gt; JWT middleware -&gt; MongoDB.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Auth strategy:</span> JWT validation and role checks in middleware enforce route-level permissions.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Data model:</span> Collections for users, resources, and activity metadata with query-friendly fields.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">API design:</span> REST endpoints grouped by domain with reusable validation/auth/error middleware.</p>
            </>
          ),
        },
        {
          title: "5) Engineering Decisions and Trade-offs",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> Domain-separated API modules instead of a single broad controller layer.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Easier testing and incremental scaling.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> More initial structure and boilerplate.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> Socket.io for event-driven updates.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Better UX for rapidly changing data.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> Additional operational complexity for connection management.</p>
            </>
          ),
        },
        {
          title: "6) Deployment and Operations",
          content: (
            <>
              <p>Hosted full stack on Render with environment-driven configuration for secrets, third-party APIs, and database connections.</p>
              <p>Operational focus included stable error handling, secure auth middleware, and deployment consistency across updates.</p>
            </>
          ),
        },
        {
          title: "7) Proof of Complexity",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Implemented RBAC for multiple user roles and protected workflows</li>
              <li>Designed admin dashboard paths with full moderation controls</li>
              <li>Handled multi-actor system behavior across admin and user journeys</li>
              <li>Combined real-time updates with API-driven data flows</li>
            </ul>
          ),
        },
        {
          title: "8) Next Iteration",
          content: <p>Next improvements include integration tests for critical flows, richer observability (structured logs + metrics), and caching high-read endpoints for higher throughput.</p>,
        },
      ]}
    />
  );
}
