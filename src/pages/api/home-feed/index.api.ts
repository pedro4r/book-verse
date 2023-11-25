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
                    cover_url: true,
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

    const activity = await Promise.all(
        recentReviews.map(async (obj) => {
            const params = {
                Bucket: bucketname,
                Key: obj.books.id + '.jpg',
            }

            const command = new GetObjectCommand(params)
            const url = await getSignedUrl(s3, command, { expiresIn: 3600 })

            return {
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
        })
    )

    return res.json(activity)
}
