import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://umeh-kingsley-portfolio.netlify.app';
    const lastModified = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    return [
        {
            url: `${baseUrl}/`,
            lastModified: lastModified,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: lastModified,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
    ]
}
