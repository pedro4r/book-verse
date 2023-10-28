/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
        ],
    },
}

module.exports = nextConfig
