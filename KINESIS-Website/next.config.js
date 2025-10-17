/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        optimizePackageImports: ['lucide-react', 'framer-motion'],
    },
    images: {
        domains: ['kinesisnow.com'],
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    compress: true,
    poweredByHeader: false,
    generateEtags: false,
    httpAgentOptions: {
        keepAlive: true,
    },
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Optimize bundle size
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': __dirname,
        };

        return config;
    },
    env: {
        SITE_NAME: 'KINESIS',
        SITE_DESCRIPTION: 'Professional Leadership Development and Team Coaching',
        SITE_URL: 'https://kinesisnow.com',
    },
}

module.exports = nextConfig