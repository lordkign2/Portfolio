export interface Project {
    id: number;
    title: string;
    description: string;
    href: string;
    photoURL: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description: "A modern, responsive portfolio built with Next.js 15, Tailwind CSS, and Framer Motion. Features cinematic animations, interactive UI components, and optimized performance.",
        href: "https://umeh-kingsley-portfolio.netlify.app/",
        photoURL: "/portfolio.jpg"
    },
    {
        id: 2,
        title: "City Explorer Platform",
        description: "A comprehensive city exploration platform built with Socket.io, Node.js, Tailwind CSS, and MongoDB. Features real-time updates, API integrations, and admin management dashboard.",
        href: "https://city-explorer-full.onrender.com",
        photoURL: "/cityExplorer.jpg"
    },
    {
        id: 3,
        title: "StarnumX Technology Website",
        description: "Official corporate website for StarnumX technology built with Next.js 15, Tailwind CSS, and TypeScript. Features modern UI design, responsive layouts, and optimized performance.",
        href: "https://starnumx.netlify.app/",
        photoURL: "/starnumx.jpg"
    },
    {
        id: 4,
        title: "Palette Pigeon UI Kit",
        description: "A comprehensive UI component library with complex UI structuring. Built with Next.js 15, Tailwind CSS, and TypeScript featuring reusable components and design system.",
        href: "https://palette-pigeon.netlify.app/",
        photoURL: "/palette-pigeon.png"
    },
    {
        id: 5,
        title: "Weather Dashboard Application",
        description: "A feature-rich weather forecasting application using OpenWeather API and React. Features real-time data visualization, location-based forecasts, and responsive design.",
        href: "https://lds-weather.netlify.app/",
        photoURL: "/weather.jpg"
    },
    {
        id: 6,
        title: "Housing Waitlist Platform",
        description: "A waitlist platform for housing platform launch, featuring TypeScript with Next.js 15. Implements user registration, waitlist management, and email notifications.",
        href: "https://campsite-waitlist.netlify.app/",
        photoURL: "/waitlist.jpg"
    },
    {
        id: 7,
        title: "Freelancers pricing guide",
        description: "A pricing guide for freelancers built with Next.js 15, Tailwind CSS, and TypeScript. Features modern UI design, responsive layouts, and optimized performance.",
        href: "https://pricewiseui.netlify.app/",
        photoURL: "/pricewiseui.jpg"
    },
    {
        id: 8,
        title: "AI Task Manager",
        description: "Full-stack web application with AI integration for daily planning. Built with Python backend, React frontend, and machine learning algorithms for task prioritization.",
        href: "https://life-pilot-lds.netlify.app/",
        photoURL: "/lifePilot.jpg"
    },
];
