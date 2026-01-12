export default function JsonLd() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Kingsley Umeh Development",
        "url": "https://umeh-kingsley-portfolio.netlify.app",
        "logo": "https://umeh-kingsley-portfolio.netlify.app/me.jpeg",
        "description": "Senior Full-Stack Development services specializing in React, Next.js, Node.js, and cutting-edge web technologies.",
        "founder": {
            "@type": "Person",
            "name": "Kingsley Umeh"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "lordkign1@gmail.com",
            "contactType": "customer service",
            "areaServed": "Worldwide",
            "availableLanguage": "en"
        },
        "sameAs": [
            "https://github.com/lordkign2",
            "https://www.linkedin.com/in/umeh-kingsley-43a322369",
            "https://twitter.com/lordkign2",
            "https://www.facebook.com/share/1D7ew99sD8",
            "https://www.instagram.com/lordkign?igsh=NHhiYmdzNzZ1eHIy"
        ]
    };

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Kingsley Umeh",
        "url": "https://umeh-kingsley-portfolio.netlify.app",
        "image": "https://umeh-kingsley-portfolio.netlify.app/me.jpeg",
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
        },
        "worksFor": {
            "@type": "Organization",
            "name": "Kingsley Umeh Development"
        }
    };

    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Kingsley Umeh Development",
        "image": "https://umeh-kingsley-portfolio.netlify.app/me.jpeg",
        "url": "https://umeh-kingsley-portfolio.netlify.app",
        "telephone": "+2347069939337",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "NG"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.5244,
            "longitude": 3.3792
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
        },
        "sameAs": [
            "https://github.com/lordkign2",
            "https://www.linkedin.com/in/umeh-kingsley-43a322369",
            "https://twitter.com/lordkign2",
            "https://www.facebook.com/share/1D7ew99sD8",
            "https://www.instagram.com/lordkign?igsh=NHhiYmdzNzZ1eHIy"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Kingsley Umeh Portfolio",
        "url": "https://umeh-kingsley-portfolio.netlify.app",
        "description": "Portfolio of Kingsley Umeh, Senior Full-Stack Developer specializing in React, Next.js, Node.js, and cutting-edge web technologies.",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://umeh-kingsley-portfolio.netlify.app/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        },
        "author": {
            "@type": "Person",
            "name": "Kingsley Umeh",
            "url": "https://umeh-kingsley-portfolio.netlify.app"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
            />
        </>
    );
}
