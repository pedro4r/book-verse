/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
    images: {
        domains: [
            'localhost',
            'aws-book-verse-bucket.s3.us-east-1.amazonaws.com',
            'lh3.googleusercontent.com',
            'books.google.com',
        ],
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
            {
                protocol: 'https',
                hostname: 'books.google.com',
            },
        ],
    },
}

module.exports = nextConfig
