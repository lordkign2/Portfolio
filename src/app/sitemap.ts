import { MetadataRoute } from 'next'

// Dynamic case studies data - in a real app, this would come from a CMS or database
const caseStudies = [
    {
        slug: 'ai-task-manager',
        lastModified: '2024-01-15',
        priority: 0.8,
        changeFrequency: 'monthly' as const
    },
    {
        slug: 'city-explorer-platform',
        lastModified: '2024-01-10',
        priority: 0.8,
        changeFrequency: 'monthly' as const
    },
    {
        slug: 'freelancers-pricing-guide',
        lastModified: '2024-01-12',
        priority: 0.8,
        changeFrequency: 'monthly' as const
    },
    {
        slug: 'housing-waitlist-platform',
        lastModified: '2024-01-08',
        priority: 0.8,
        changeFrequency: 'monthly' as const
    },
    {
        slug: 'mil-hub',
        lastModified: '2024-01-05',
        priority: 0.8,
        changeFrequency: 'monthly' as const
    },
    {
        slug: 'palette-pigeon-ui-kit',
        lastModified: '2024-01-14',
        priority: 0.8,
        changeFrequency: 'monthly' as const
    },
    {
        slug: 'personal-portfolio-website',
        lastModified: '2024-01-20',
        priority: 0.8,
        changeFrequency: 'monthly' as const
    },
    {
        slug: 'starnumx-technology-website',
        lastModified: '2024-01-18',
        priority: 0.8,
        changeFrequency: 'monthly' as const
    },
    {
        slug: 'weather-dashboard-application',
        lastModified: '2024-01-22',
        priority: 0.8,
        changeFrequency: 'monthly' as const
    }
];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://umeh-kingsley-portfolio.netlify.app';
    const lastModified = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    // Core pages
    const corePages = [
        {
            url: `${baseUrl}/`,
            lastModified: lastModified,
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/case-studies`,
            lastModified: lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: lastModified,
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        },
    ];

    // Generate case study pages dynamically
    const caseStudyPages = caseStudies.map(study => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: study.lastModified,
        changeFrequency: study.changeFrequency,
        priority: study.priority,
    }));

    return [...corePages, ...caseStudyPages];
}

// Generate sitemap index for multiple sitemaps (if needed in future)
export function sitemapIndex(): MetadataRoute.Sitemap {
    const baseUrl = 'https://umeh-kingsley-portfolio.netlify.app';
    
    return [
        {
            url: `${baseUrl}/sitemap.xml`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/case-studies-sitemap.xml`,
            lastModified: new Date(),
        },
    ];
}
