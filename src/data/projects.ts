export interface Project {
    id: number;
    title: string;
    description: string;
    href: string;
    githubHref?: string;
    photoURL: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description: "A modern, responsive portfolio built with Next.js 16, Tailwind CSS, and Framer Motion. Features cinematic animations, interactive UI components, and optimized performance.",
        href: "https://umeh-kingsley-portfolio.netlify.app/",
        githubHref: "https://github.com/lordkign2/Portfolio",
        photoURL: "/portfolio.jpg"
    },
    {
        id: 2,
        title: "City Explorer Platform",
        description: "A comprehensive city exploration platform built with Socket.io, Node.js, Tailwind CSS, and MongoDB. Features real-time updates, API integrations, and admin management dashboard.",
        href: "https://city-explorer-full.onrender.com",
        githubHref: "https://github.com/lordkign2/city-explorer-full",
        photoURL: "/cityExplorer.jpg"
    },
    {
        id: 3,
        title: "MIL Hub",
        description: "A comprehensive media literacy and fact-checking platform for youth. Built with Flutter and Firebase, featuring interactive lessons, real-time link verification, and community engagement. Implements Clean Architecture with BLoC state management.",
        href: "/app-release.apk",
        githubHref: "https://github.com/lordkign2/MIL_Hub",
        photoURL: "/milhub.jpeg"
    },
    {
        id: 4,
        title: "StarnumX Technology Website",
        description: "Official corporate website for StarnumX technology built with Next.js 16, Tailwind CSS, and TypeScript. Features modern UI design, responsive layouts, and optimized performance.",
        href: "https://starnumx.netlify.app/",
        githubHref: "https://github.com/lordkign2/starnumX",
        photoURL: "/starnumx.jpg"
    },
    {
        id: 5,
        title: "Palette Pigeon UI Kit",
        description: "A comprehensive UI component library with complex UI structuring. Built with Next.js, Tailwind CSS, and TypeScript featuring reusable components and design system.",
        href: "https://palette-pigeon.netlify.app/",
        githubHref: "https://github.com/lordkign2/UI-projects",
        photoURL: "/palette-pigeon.png"
    },
    {
        id: 6,
        title: "Weather Dashboard Application",
        description: "A feature-rich weather forecasting application using OpenWeather API and React. Features real-time data visualization, location-based forecasts, and responsive design.",
        href: "https://lds-weather.netlify.app/",
        githubHref: "https://github.com/lordkign2/weather_app",
        photoURL: "/weather.jpg"
    },
    {
        id: 7,
        title: "Housing Waitlist Platform",
        description: "A waitlist platform for housing platform launch, featuring TypeScript with Next.js. Implements user registration, waitlist management, and email notifications.",
        href: "https://campsite-waitlist.netlify.app/",
        githubHref: "https://github.com/lordkign2/CampSite-Waitlist",
        photoURL: "/waitlist.jpg"
    },
    {
        id: 8,
        title: "Freelancers pricing guide",
        description: "A pricing guide for freelancers built with Next.js, Tailwind CSS, and TypeScript. Features modern UI design, responsive layouts, and optimized performance.",
        href: "https://pricewiseui.netlify.app/",
        githubHref: "https://github.com/lordkign2/UI-projects",
        photoURL: "/pricewiseui.jpg"
    },
    {
        id: 9,
        title: "AI Task Manager",
        description: "Full-stack web application with AI integration for daily planning. Built with Python backend, React frontend, and machine learning algorithms for task prioritization.",
        href: "https://life-pilot-lds.netlify.app/",
        githubHref: "https://github.com/lordkign2/AI-focus-guideApp",
        photoURL: "/lifePilot.jpg"
    },
];
