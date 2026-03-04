/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
        minimumCacheTTL: 60 * 60 * 24 * 7, // Cache 7 ngày
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: '/**',
            },
        ],
    },
    // Redirect crypto/forex content to homepage (Google Ads compliance)
    async redirects() {
        return [
            {
                source: '/blog/crypto',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/blog/crypto/:slug*',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/blog/forex',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/blog/forex/:slug*',
                destination: '/blog',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
