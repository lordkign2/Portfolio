import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/case-study/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Case Study | MIL Hub",
  description:
    "Engineering case study for MIL Hub, a media literacy platform built with Flutter, BLoC, and Firebase using Clean Architecture.",
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/case-studies/mil-hub",
  },
};

export default function MilHubCaseStudyPage() {
  return (
    <CaseStudyTemplate
      title="MIL Hub"
      subtitle="A mobile media-literacy and fact-checking platform for youth, designed with Clean Architecture and scalable Firebase services."
      readingMinutes={2}
      tags={["Flutter", "BLoC", "Clean Architecture", "Firebase Auth", "Realtime Verification"]}
      actions={[
        { label: "Download APK", href: "/app-release.apk" },
        { label: "View Source Code", href: "https://github.com/lordkign2/MIL_Hub", variant: "secondary", external: true },
      ]}
      sections={[
        {
          title: "1) Problem Context",
          content: <p>Young users needed an accessible way to learn media literacy and validate online information in real time. Existing resources were fragmented and not interactive enough for continuous engagement.</p>,
        },
        {
          title: "2) Solution Overview",
          content: <p>Built a mobile-first learning platform combining structured modules, fact-checking workflows, and community interaction. The architecture emphasizes maintainability and predictable state transitions as features expand.</p>,
        },
        {
          title: "3) Core Features",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Structured educational modules with progressive learning flow</li>
              <li>Realtime link-verification interactions</li>
              <li>Community-oriented participation features</li>
              <li>Authenticated user access and protected content routes</li>
            </ul>
          ),
        },
        {
          title: "4) Technical Implementation",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Architecture:</span> Flutter UI -&gt; BLoC state layer -&gt; Firebase services.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Auth strategy:</span> Firebase authentication with feature-level guards for signed-in users.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Data model:</span> Document structures for users, modules, engagement records, and verification outputs.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Service pattern:</span> Clear separation between presentation, domain logic, and data access layers.</p>
            </>
          ),
        },
        {
          title: "5) Engineering Decisions and Trade-offs",
          content: <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> Clean Architecture with BLoC over simpler direct service calls.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Better scalability and easier onboarding as the app grows.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> Higher upfront complexity and additional boilerplate.</p>,
        },
        {
          title: "6) Deployment and Operations",
          content: (
            <>
              <p>Distributed as an Android APK with Firebase-backed runtime configuration and managed cloud services.</p>
              <p>Operational focus centered on stable state handling, auth reliability, and incremental feature rollout.</p>
            </>
          ),
        },
        {
          title: "7) Proof of Complexity",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Integrated educational workflows with realtime verification logic</li>
              <li>Maintained robust client state via BLoC across multi-screen flows</li>
              <li>Applied layered architecture for long-term maintainability</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
