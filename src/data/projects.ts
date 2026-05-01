export interface Project {
    id: number;
    title: string;
    description: string;
    problemContext?: string;
    solutionOverview?: string;
    coreFeatures?: string[];
    architectureOverview?: string;
    authStrategy?: string;
    dataModelStructure?: string;
    apiDesignPatterns?: string;
    engineeringDecisions?: string;
    deploymentStrategy?: string;
    complexityTags?: string[];
    href: string;
    caseStudyHref?: string;
    githubHref?: string;
    photoURL: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description: "A modern, responsive portfolio built with Next.js 16, Tailwind CSS, and Framer Motion. Features cinematic animations, interactive UI components, and optimized performance.",
        problemContext: "Needed a high-conversion portfolio that communicates engineering capability, not just visual polish.",
        solutionOverview: "Built a performance-first Next.js application with reusable UI blocks, analytics tracking, and SEO-focused metadata.",
        coreFeatures: [
            "Section-based architecture with reusable components",
            "Interaction tracking for project views and CTA clicks",
            "Animated, responsive UI with dark mode support"
        ],
        architectureOverview: "Next.js App Router client/server split with lazy-loaded sections and component-level code splitting.",
        authStrategy: "No user auth required for this marketing-style application.",
        dataModelStructure: "Structured static data modules for projects, skills, and experiences to keep content maintainable.",
        apiDesignPatterns: "Analytics utility wrappers isolate event calls from UI components.",
        engineeringDecisions: "Prioritized fast page loads and maintainability over a CMS integration for initial release speed.",
        deploymentStrategy: "Deployed to Netlify with static assets and production metadata optimization.",
        complexityTags: ["Performance optimization", "Analytics instrumentation", "SEO architecture"],
        href: "https://umeh-kingsley-portfolio.netlify.app/",
        caseStudyHref: "/case-studies/personal-portfolio-website",
        githubHref: "https://github.com/lordkign2/Portfolio",
        photoURL: "/portfolio.jpg"
    },
    {
        id: 2,
        title: "City Explorer Platform",
        description: "A comprehensive city exploration platform built with Socket.io, Node.js, Tailwind CSS, and MongoDB. Features real-time updates, API integrations, and admin management dashboard.",
        problemContext: "Users needed a single platform to discover city resources with real-time updates and moderation controls.",
        solutionOverview: "Implemented a full-stack platform with role-aware admin tooling, real-time channels, and API-driven resource discovery.",
        coreFeatures: [
            "Role-based flows for admins and end users",
            "Admin dashboard with moderated CRUD workflows",
            "Real-time updates via Socket.io and API integrations"
        ],
        architectureOverview: "Client UI consumes a Node/Express API layer with middleware-driven request handling and MongoDB persistence.",
        authStrategy: "JWT-based route protection and role checks for sensitive admin actions.",
        dataModelStructure: "MongoDB collections designed for users, locations, resources, and activity metadata.",
        apiDesignPatterns: "REST endpoints grouped by domain with middleware for validation, auth, and error handling.",
        engineeringDecisions: "Balanced real-time features with maintainable API boundaries to simplify scaling and troubleshooting.",
        deploymentStrategy: "Hosted full stack on Render with environment-based configuration for API keys and database access.",
        complexityTags: ["RBAC", "Real-time updates", "Admin dashboard", "Multi-actor workflow"],
        href: "https://city-explorer-full.onrender.com",
        caseStudyHref: "/case-studies/city-explorer-platform",
        githubHref: "https://github.com/lordkign2/city-explorer-full",
        photoURL: "/cityExplorer.jpg"
    },
    {
        id: 3,
        title: "MIL Hub",
        description: "A comprehensive media literacy and fact-checking platform for youth. Built with Flutter and Firebase, featuring interactive lessons, real-time link verification, and community engagement. Implements Clean Architecture with BLoC state management.",
        problemContext: "Youth users needed accessible media-literacy training with practical fact-checking tools.",
        solutionOverview: "Delivered a mobile-first education platform with modular architecture, verification tooling, and scalable Firebase services.",
        coreFeatures: [
            "Structured learning modules and progress workflows",
            "Real-time link verification interactions",
            "Community engagement and content distribution"
        ],
        architectureOverview: "Clean Architecture with feature separation, BLoC state management, and Firebase-backed services.",
        authStrategy: "Firebase authentication with guarded feature access by signed-in state.",
        dataModelStructure: "Document-oriented Firebase structures for users, modules, and verification records.",
        apiDesignPatterns: "Service abstraction layer between UI state and Firebase operations.",
        engineeringDecisions: "Chose Clean Architecture + BLoC for long-term maintainability and predictable state transitions.",
        deploymentStrategy: "Android APK distribution with cloud-backed Firebase runtime configuration.",
        complexityTags: ["Clean Architecture", "State management", "Realtime verification"],
        href: "/app-release.apk",
        caseStudyHref: "/case-studies/mil-hub",
        githubHref: "https://github.com/lordkign2/MIL_Hub",
        photoURL: "/milhub.jpeg"
    },
    {
        id: 4,
        title: "StarnumX Technology Website",
        description: "Official corporate website for StarnumX technology built with Next.js 16, Tailwind CSS, and TypeScript. Features modern UI design, responsive layouts, and optimized performance.",
        href: "https://starnumx.netlify.app/",
        caseStudyHref: "/case-studies/starnumx-technology-website",
        githubHref: "https://github.com/lordkign2/starnumX",
        photoURL: "/starnumx.jpg"
    },
    {
        id: 5,
        title: "Palette Pigeon UI Kit",
        description: "A comprehensive UI component library with complex UI structuring. Built with Next.js, Tailwind CSS, and TypeScript featuring reusable components and design system.",
        href: "https://palettepigeon.netlify.app/",
        caseStudyHref: "/case-studies/palette-pigeon-ui-kit",
        githubHref: "https://github.com/lordkign2/UI-projects",
        photoURL: "/palette-pigeon.png"
    },
    {
        id: 6,
        title: "Weather Dashboard Application",
        description: "A feature-rich weather forecasting application using OpenWeather API and React. Features real-time data visualization, location-based forecasts, and responsive design.",
        href: "https://lds-weather.netlify.app/",
        caseStudyHref: "/case-studies/weather-dashboard-application",
        githubHref: "https://github.com/lordkign2/weather_app",
        photoURL: "/weather.jpg"
    },
    {
        id: 7,
        title: "Housing Waitlist Platform",
        description: "A waitlist platform for housing platform launch, featuring TypeScript with Next.js. Implements user registration, waitlist management, and email notifications.",
        href: "https://campsite-waitlist.netlify.app/",
        caseStudyHref: "/case-studies/housing-waitlist-platform",
        githubHref: "https://github.com/lordkign2/CampSite-Waitlist",
        photoURL: "/waitlist.jpg"
    },
    {
        id: 8,
        title: "Freelancers pricing guide",
        description: "A pricing guide for freelancers built with Next.js, Tailwind CSS, and TypeScript. Features modern UI design, responsive layouts, and optimized performance.",
        href: "https://pricewiseui.netlify.app/",
        caseStudyHref: "/case-studies/freelancers-pricing-guide",
        githubHref: "https://github.com/lordkign2/UI-projects",
        photoURL: "/pricewiseui.jpg"
    },
    {
        id: 9,
        title: "AI Task Manager",
        description: "Full-stack web application with AI integration for daily planning. Built with Python backend, React frontend, and machine learning algorithms for task prioritization.",
        href: "https://life-pilot-lds.netlify.app/",
        caseStudyHref: "/case-studies/ai-task-manager",
        githubHref: "https://github.com/lordkign2/AI-focus-guideApp",
        photoURL: "/lifePilot.jpg"
    },
];
