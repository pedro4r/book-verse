/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
    images: {
        domains: [
            'localhost',
            'aws-book-verse-bucket.s3.us-east-1.amazonaws.com',
            'lh3.googleusercontent.com',
            'books.google.com',
            'aws-book-verse-bucket.s3.amazonaws.com',
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
            {
                protocol: 'https',
                hostname: 'aws-book-verse-bucket.s3.amazonaws.com/',
            },
        ],
    },
}

module.exports = nextConfig
