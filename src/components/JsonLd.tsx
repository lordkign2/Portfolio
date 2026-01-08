export default function JsonLd() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Kingsley Umeh",
        "url": "https://umeh-kingsley-portfolio.netlify.app",
        "image": "https://umeh-kingsley-portfolio.netlify.app/me.jpg",
        "jobTitle": "Senior Full-Stack Developer",
        "description": "Senior Full-Stack Developer specializing in React, Next.js, Node.js, and cutting-edge web technologies with 4+ years of experience.",
        "knowsAbout": [
            "Web Development",
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "JavaScript",
            "Full-Stack Development",
            "Frontend Development",
            "Backend Development",
            "Mobile Development",
            "Flutter",
            "React Native"
        ],
        "sameAs": [
            "https://github.com/lordkign2",
            "https://www.linkedin.com/in/umeh-kingsley-43a322369",
            "https://twitter.com/lordkign2",
            "https://www.facebook.com/share/1D7ew99sD8",
            "https://www.instagram.com/lordkign?igsh=NHhiYmdzNzZ1eHIy"
        ],
        "email": "lordkign1@gmail.com",
        "alumniOf": {
            "@type": "Organization",
            "name": "Software Engineering"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
