import React from 'react';

export default function JsonLd(): React.ReactElement {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Kingsley Umeh Development",
        "url": "https://umeh-kingsley-portfolio.netlify.app",
        "logo": "https://umeh-kingsley-portfolio.netlify.app/me.jpeg",
        "description": "Senior Full-Stack Development services specializing in React, Next.js, Node.js, and cutting-edge web technologies.",
        "founder": {
            "@type": "Person",
            "name": "Kingsley Umeh",
            "jobTitle": "Senior Full-Stack Developer",
            "alumniOf": "Software Engineering",
            "knowsAbout": ["Web Development", "React", "Next.js", "Node.js", "TypeScript", "Full-Stack Development", "Mobile Development", "Flutter", "React Native"],
            "email": "lordkign1@gmail.com"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "lordkign1@gmail.com",
            "contactType": "customer service",
            "areaServed": "Worldwide",
            "availableLanguage": "en",
            "hoursAvailable": "Mo-Fr 09:00-17:00"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "NG",
            "addressLocality": "Lagos"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.5244,
            "longitude": 3.3792
        },
        "sameAs": [
            "https://github.com/lordkign2",
            "https://www.linkedin.com/in/umeh-kingsley-43a322369",
            "https://twitter.com/lordkign2",
            "https://www.facebook.com/share/1D7ew99sD8",
            "https://www.instagram.com/lordkign?igsh=NHhiYmdzNzZ1eHIy"
        ],
        "serviceType": "Web Development Services",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Development Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Full-Stack Web Development",
                        "description": "Complete web application development from frontend to backend"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile App Development",
                        "description": "Native and cross-platform mobile application development"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "UI/UX Design",
                        "description": "User interface and user experience design services"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Business Optimization",
                        "description": "Business process optimization and automation services"
                    }
                }
            ]
        }
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
            "React Native",
            "Business optimization",
            "Project Management"
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
        "priceRange": "$5000 - $10000",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "NG",
            "addressLocality": "Lagos"
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
        "author": {
            "@type": "Person",
            "name": "Kingsley Umeh",
            "url": "https://umeh-kingsley-portfolio.netlify.app"
        }
    };

    // Breadcrumb schema for navigation
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://umeh-kingsley-portfolio.netlify.app/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Portfolio",
                "item": "https://umeh-kingsley-portfolio.netlify.app/projects"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Services",
                "item": "https://umeh-kingsley-portfolio.netlify.app/services"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "About",
                "item": "https://umeh-kingsley-portfolio.netlify.app/about"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Contact",
                "item": "https://umeh-kingsley-portfolio.netlify.app/contact"
            }
        ]
    };

    // FAQ schema for services section with additional questions
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What services do you offer as a full-stack developer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I offer comprehensive full-stack development services including React/Next.js frontend development, Node.js backend development, mobile app development with Flutter, database design, API development, and UI/UX design services."
                }
            },
            {
                "@type": "Question",
                "name": "How long does a typical project take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex web applications can take 2-6 months. I provide detailed timelines during initial consultation."
                }
            },
            {
                "@type": "Question",
                "name": "What technologies do you specialize in?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I specialize in React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Flutter, React Native, and modern web technologies including GraphQL, REST APIs, and cloud deployment platforms."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide ongoing maintenance and support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, I offer ongoing maintenance, bug fixes, feature updates, and technical support for all projects. Support packages can be customized based on your needs."
                }
            },
            {
                "@type": "Question",
                "name": "Why choose me as your developer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I have extensive experience in full-stack development with a proven track record of delivering high-quality projects on time. I stay updated with latest technologies and best practices to ensure optimal performance and user experience."
                }
            },
            {
                "@type": "Question",
                "name": "What services do you offer as a developer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I offer web development, mobile app development, UI/UX implementation, and custom software solutions tailored to businesses, startups, and individuals."
                }
            },
            {
                "@type": "Question",
                "name": "Do you build mobile applications?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, I develop mobile applications for both Android and iOS using modern frameworks, ensuring performance, scalability, and clean user experience."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to complete a project?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Project timelines vary depending on complexity. Simple websites may take 1–2 weeks, while more complex platforms or applications can take several weeks to months."
                }
            },
            {
                "@type": "Question",
                "name": "Do you work with startups or only established businesses?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I work with both startups and established businesses. I can help startups build MVPs quickly and assist businesses in scaling or improving their existing systems."
                }
            },
            {
                "@type": "Question",
                "name": "Can you redesign or improve an existing website or app?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, I can audit, redesign, and optimize existing platforms to improve performance, usability, and overall user experience."
                }
            },
            {
                "@type": "Question",
                "name": "What technologies do you specialize in?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I primarily work with React, Node.js, MongoDB, and modern frontend frameworks. I also build responsive interfaces using Tailwind CSS and integrate APIs for scalable applications."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide ongoing maintenance and support?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, I offer post-launch support, maintenance, and updates to ensure your application remains secure, fast, and up to date."
                }
            },
            {
                "@type": "Question",
                "name": "How much do your services cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pricing depends on scope and complexity of project. After understanding your requirements, I provide a clear and structured quote."
                }
            },
            {
                "@type": "Question",
                "name": "Can you help turn my idea into a working product?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, I specialize in turning ideas into functional products by planning, designing, and developing scalable MVPs and full applications."
                }
            },
            {
                "@type": "Question",
                "name": "How do we get started?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can reach out via email or my website with your project details. I will review your requirements and guide you through the next steps."
                }
            }
        ]
    };

    // HowTo schema for development process
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Hire a Full-Stack Developer",
        "description": "Step-by-step guide to hiring me as your full-stack developer for your next project",
        "image": "https://umeh-kingsley-portfolio.netlify.app/me.jpeg",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "Varies by project scope"
        },
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "Project requirements document"
            },
            {
                "@type": "HowToSupply",
                "name": "Budget range"
            },
            {
                "@type": "HowToSupply",
                "name": "Timeline preferences"
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "Email for initial contact"
            },
            {
                "@type": "HowToTool",
                "name": "Video conferencing for consultation"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "name": "Initial Consultation",
                "text": "Schedule a free consultation call to discuss your project requirements, goals, and timeline.",
                "image": "https://umeh-kingsley-portfolio.netlify.app/me.jpeg"
            },
            {
                "@type": "HowToStep",
                "name": "Project Proposal",
                "text": "Receive a detailed project proposal with timeline, deliverables, and cost breakdown.",
                "image": "https://umeh-kingsley-portfolio.netlify.app/me.jpeg"
            },
            {
                "@type": "HowToStep",
                "name": "Contract & Deposit",
                "text": "Sign project agreement and pay initial deposit to begin development.",
                "image": "https://umeh-kingsley-portfolio.netlify.app/me.jpeg"
            },
            {
                "@type": "HowToStep",
                "name": "Development Process",
                "text": "Regular updates and milestone deliveries throughout the development process.",
                "image": "https://umeh-kingsley-portfolio.netlify.app/me.jpeg"
            },
            {
                "@type": "HowToStep",
                "name": "Project Delivery",
                "text": "Final project delivery, testing, and deployment with ongoing support.",
                "image": "https://umeh-kingsley-portfolio.netlify.app/me.jpeg"
            }
        ]
    };

    // Video schema for project demos using your actual video file
    const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Kingsley Umeh - Full-Stack Developer Portfolio Showcase",
        "description": "Professional portfolio showcase demonstrating full-stack development expertise, React/Next.js projects, and technical skills. Includes project walkthroughs and development insights.",
        "thumbnailUrl": "https://umeh-kingsley-portfolio.netlify.app/me.jpeg",
        "uploadDate": "2024-01-15",
        "duration": "PT3M45S",
        "contentUrl": "https://umeh-kingsley-portfolio.netlify.app/ads_video.mp4",
        "embedUrl": "https://umeh-kingsley-portfolio.netlify.app/ads_video.mp4",
        "publisher": {
            "@type": "Organization",
            "name": "Kingsley Umeh Development",
            "logo": {
                "@type": "ImageObject",
                "url": "https://umeh-kingsley-portfolio.netlify.app/me.jpeg",
                "width": 1200,
                "height": 630
            }
        },
        "thumbnail": {
            "@type": "ImageObject",
            "url": "https://umeh-kingsley-portfolio.netlify.app/me.jpeg",
            "width": 1200,
            "height": 630
        },
        "interactionStatistic": {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/WatchAction"
        },
        "regionsAllowed": ["US", "NG", "GB", "CA", "AU"],
        "requiresSubscription": false,
        "isAccessibleForFree": true,
        "isFamilyFriendly": true,
        "genre": ["Technology", "Education", "Web Development"],
        "keywords": "full-stack developer, React, Next.js, Node.js, web development, portfolio, programming",
        "inLanguage": "en",
        "author": {
            "@type": "Person",
            "name": "Kingsley Umeh",
            "url": "https://umeh-kingsley-portfolio.netlify.app"
        },
        "creator": {
            "@type": "Person",
            "name": "Kingsley Umeh",
            "url": "https://umeh-kingsley-portfolio.netlify.app"
        }
    };

    const schemas = [
        personSchema,
        organizationSchema,
        websiteSchema,
        professionalServiceSchema,
        breadcrumbSchema,
        faqSchema,
        howToSchema,
        videoSchema
    ];

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}
