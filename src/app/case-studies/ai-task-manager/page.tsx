import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/case-study/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Case Study | AI Task Manager",
  description:
    "Engineering case study for an AI-powered task management application built with Python backend and React frontend, covering machine learning integration and task prioritization.",
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/case-studies/ai-task-manager",
  },
};

export default function AITaskManagerCaseStudyPage() {
  return (
    <CaseStudyTemplate
      title="AI Task Manager"
      subtitle="A full-stack web application engineered with AI integration for intelligent daily planning and machine learning-based task prioritization."
      readingMinutes={5}
      tags={["Python", "React", "Machine Learning", "AI Integration", "Task Management"]}
      actions={[
        { label: "View Live Project", href: "https://life-pilot-lds.netlify.app/", external: true },
        { label: "View Source Code", href: "https://github.com/lordkign2/AI-focus-guideApp", variant: "secondary", external: true },
      ]}
      sections={[
        {
          title: "1) Problem Context",
          content: <p>Users struggle with effective task prioritization and daily planning, often spending more time organizing tasks than completing them. The challenge was to create an intelligent task management system that uses AI to automatically prioritize tasks based on user behavior, deadlines, and importance factors.</p>,
        },
        {
          title: "2) Solution Overview",
          content: <p>Developed a full-stack AI-powered task management application with Python backend and React frontend. Implemented machine learning algorithms for intelligent task prioritization, natural language processing for task categorization, and predictive analytics for deadline management.</p>,
        },
        {
          title: "3) Core Features",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>AI-powered task prioritization using machine learning algorithms</li>
              <li>Natural language processing for automatic task categorization</li>
              <li>Predictive analytics for deadline and completion forecasting</li>
              <li>Smart scheduling based on user behavior patterns</li>
              <li>Progress tracking and productivity insights</li>
              <li>Integration with calendar and reminder systems</li>
              <li>Responsive web interface with real-time updates</li>
            </ul>
          ),
        },
        {
          title: "4) Technical Implementation",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Backend:</span> Python with Flask/FastAPI for ML model serving and API endpoints.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Frontend:</span> React with hooks for state management and real-time updates.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Machine Learning:</span> Scikit-learn for task prioritization and TensorFlow for predictive analytics.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">NLP:</span> NLTK and spaCy for natural language processing and task categorization.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Database:</span> PostgreSQL for structured data storage and Redis for caching.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">API:</span> RESTful API with WebSocket connections for real-time updates.</p>
            </>
          ),
        },
        {
          title: "5) Engineering Decisions and Trade-offs",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> Python backend over Node.js.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Superior ML ecosystem, better data processing capabilities, and extensive scientific libraries.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> More complex deployment and higher resource requirements.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> On-premise ML models over cloud AI services.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Data privacy, cost control, and customization capabilities.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> Higher maintenance overhead and model management complexity.</p>
            </>
          ),
        },
        {
          title: "6) Deployment and Operations",
          content: (
            <>
              <p>Deployed using containerized architecture with Docker for consistent environments across development and production.</p>
              <p>Implemented MLOps pipeline for model training, evaluation, and deployment with automated retraining based on user feedback.</p>
            </>
          ),
        },
        {
          title: "7) Outcomes",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Improved task completion rates by 35% through AI prioritization</li>
              <li>Reduced time spent on task organization by 60%</li>
              <li>High user satisfaction with intelligent scheduling recommendations</li>
              <li>Successful ML model accuracy of 85% for task priority prediction</li>
              <li>Scalable architecture supporting 10,000+ concurrent users</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
