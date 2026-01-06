import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable image optimization
  images: {
    // Add domains for external images if needed
    domains: [],
    // Optimize image formats
    formats: ['image/webp'],
  },
  // Enable compression
  compress: true,
  // Enable react strict mode
  reactStrictMode: true,
  // Enable webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Reduce bundle size by excluding unused locales from moment.js if used
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Optimize for production
    if (!dev) {
      // Enable tree shaking
      config.optimization.usedExports = true;
    }

    return config;
  },
  // Enable experimental features for better performance
  experimental: {
    // Enable server actions
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // Optimize css
    optimizeCss: true,
  },
  // Enable turbopack explicitly (or silence webpack error in Next.js 16)
  turbopack: {
    // Set root to current directory to avoid incorrect inference from parent folders
    root: process.cwd(),
  },
};

export default nextConfig;