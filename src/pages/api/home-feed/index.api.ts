import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'
import { text } from 'stream/consumers'

dotenv.config()
const bucketname = process.env.BUCKET_NAME || 'defaultBucketName'
const accesskey = process.env.ACCESS_KEY || 'defaultAccessKey'
const secretaccesskey =
    process.env.SECRET_ACCESS_KEY || 'defaultSecretAccessKey'
const bucketregion = process.env.BUCKET_REGION || 'defaultBucketRegion'

const s3 = new S3Client({
    credentials: {
        accessKeyId: accesskey,
        secretAccessKey: secretaccesskey,
    },
    region: bucketregion,
})

interface ActivitySearchInterface {
    textInput?: string
    userId?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    const recentReviews = await prisma.reviews.findMany({
        orderBy: { created_at: 'desc' },
        select: {
            comment: true,
            rating: true,
            created_at: true,
            books: {
                select: {
                    id: true,
                    name: true,
                    author: true,
                },
            },
            user: {
                select: {
                    name: true,
                    avatar_url: true,
                },
            },
        },
    })

    const reviews = await Promise.all(
        recentReviews.map(async (obj) => {
            const params = {
                Bucket: bucketname,
                Key: obj.books.id + '.jpg',
            }

            const command = new GetObjectCommand(params)
            const url = await getSignedUrl(s3, command, { expiresIn: 3600 })

            const reviews = {
                id: obj.books.id,
                name: obj.books.name,
                author: obj.books.author,
                cover_url: url,
                comment: obj.comment,
                rating: obj.rating,
                created_at: obj.created_at,
                userName: obj.user.name,
                userAvatarUrl: obj.user.avatar_url,
            }

            return reviews
        })
    )

    const mostReviewedBooks = await prisma.reviews.groupBy({
        by: ['book_id'],
        _count: {
            book_id: true,
        },
        orderBy: {
            _count: {
                book_id: 'desc',
            },
        },
    })

    const popularBooks = await Promise.all(
        mostReviewedBooks.map(async (book) => {
            const reviewForRatingCalc = await prisma.reviews.findMany({
                where: { book_id: book.book_id },
                select: {
                    rating: true,
                },
            })

            const ratingSum = reviewForRatingCalc.reduce((acc, review) => {
                return (acc += review.rating)
            }, 0)

            const ratingAverage = Math.ceil(
                ratingSum / reviewForRatingCalc.length
            )

            const bookInfo = await prisma.books.findUnique({
                where: { id: book.book_id },
            })

            const params = {
                Bucket: bucketname,
                Key: book.book_id + '.jpg',
            }

            const command = new GetObjectCommand(params)
            const url = await getSignedUrl(s3, command, { expiresIn: 3600 })

            return {
                id: book.book_id,
                name: bookInfo?.name,
                author: bookInfo?.author,
                cover_url: url,
                ratingAverage,
            }
        })
    )

    const response = {
        reviews,
        popularBooks,
    }

    return res.json(response)
}
