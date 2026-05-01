import type { Metadata } from "next";
import CaseStudyTemplate from "@/components/case-study/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Case Study | Weather Dashboard Application",
  description:
    "Engineering case study for a weather forecasting application built with React and OpenWeather API, covering real-time data visualization, API integration, and responsive design.",
  alternates: {
    canonical: "https://umeh-kingsley-portfolio.netlify.app/case-studies/weather-dashboard-application",
  },
};

export default function WeatherDashboardCaseStudyPage() {
  return (
    <CaseStudyTemplate
      title="Weather Dashboard Application"
      subtitle="A feature-rich weather forecasting application engineered for real-time data visualization, location-based forecasts, and responsive user experience."
      readingMinutes={4}
      tags={["React", "OpenWeather API", "Data Visualization", "Responsive Design", "API Integration"]}
      actions={[
        { label: "View Live Project", href: "https://lds-weather.netlify.app/", external: true },
        { label: "View Source Code", href: "https://github.com/lordkign2/weather_app", variant: "secondary", external: true },
      ]}
      sections={[
        {
          title: "1) Problem Context",
          content: <p>Users needed a comprehensive weather application that provides accurate forecasts, real-time weather data, and intuitive visualization of weather patterns. The challenge was to create an engaging interface that handles complex weather data while maintaining fast performance and user-friendly navigation.</p>,
        },
        {
          title: "2) Solution Overview",
          content: <p>Developed a feature-rich weather dashboard using React with OpenWeather API integration. Implemented real-time data visualization, location-based forecasts, and responsive design patterns to deliver accurate weather information in an accessible and visually appealing format.</p>,
        },
        {
          title: "3) Core Features",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Real-time weather data from OpenWeather API</li>
              <li>Location-based weather forecasts and current conditions</li>
              <li>Interactive weather data visualization with charts and graphs</li>
              <li>5-day and 10-day forecast predictions</li>
              <li>Responsive design optimized for mobile and desktop</li>
              <li>Weather alerts and notifications system</li>
              <li>Search functionality for multiple locations</li>
            </ul>
          ),
        },
        {
          title: "4) Technical Implementation",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Frontend:</span> React with functional components and hooks for state management.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">API Integration:</span> OpenWeather API with proper error handling and rate limiting.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Data Visualization:</span> Chart.js for weather trend visualization and forecasting graphs.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Styling:</span> CSS Grid and Flexbox for responsive layouts with weather-themed design.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Performance:</span> Data caching and lazy loading for improved user experience.</p>
            </>
          ),
        },
        {
          title: "5) Engineering Decisions and Trade-offs",
          content: (
            <>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> React over vanilla JavaScript.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Component-based architecture, better state management, and ecosystem support.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> Larger bundle size and learning curve.</p>
              <p><span className="font-semibold text-gray-900 dark:text-white">Decision:</span> OpenWeather API over weather data scraping.<br /><span className="font-semibold text-gray-900 dark:text-white">Why:</span> Reliable data source, comprehensive documentation, and free tier availability.<br /><span className="font-semibold text-gray-900 dark:text-white">Trade-off:</span> API rate limits and dependency on external service.</p>
            </>
          ),
        },
        {
          title: "6) Deployment and Operations",
          content: (
            <>
              <p>Deployed on Netlify with continuous integration and automated testing for weather data accuracy.</p>
              <p>Implemented error monitoring and performance tracking to ensure reliable service delivery.</p>
            </>
          ),
        },
        {
          title: "7) Outcomes",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Accurate and timely weather information delivery</li>
              <li>Intuitive user interface with high engagement rates</li>
              <li>Reliable API integration with proper error handling</li>
              <li>Responsive design supporting multiple devices and screen sizes</li>
              <li>Scalable architecture for future weather feature additions</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
