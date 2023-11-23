import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'

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

interface BookSearchInterface {
    textInput?: string
    category?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    const session = await getServerSession(
        req,
        res,
        buildNextAuthOptions(req, res)
    )

    if (!session) {
        return res.status(401).end()
    }

    const userInfo = await prisma.user.findUnique({
        where: {
            id: String(session?.user.id),
        },
    })

    const userBooks = await prisma.reviews.findMany({
        where: {
            user_id: String(session?.user.id),
        },
        select: {
            books: {
                select: {
                    id: true,
                    name: true,
                    author: true,
                    summary: true,
                    cover_url: true,
                    total_pages: true,
                    category: true,
                },
            },
        },
    })

    const totalPagesRead = userBooks.reduce((acc, obj) => {
        return (acc += obj.books.total_pages)
    }, 0)

    const totalOfAuthorsRead = userBooks.reduce((acc: string[], obj) => {
        const author = obj.books.author
        if (!acc.includes(author)) {
            acc.push(author)
        }
        return acc
    }, [])

    interface CategoryCount {
        [category: string]: number
    }

    const categoriesRead = userBooks.reduce((acc: CategoryCount, obj) => {
        const category = obj.books.category
        acc[category] = (acc[category] || 0) + 1
        return acc
    }, {})

    const categoriesKeysArray = Object.keys(categoriesRead)

    const mostCategoryRead = categoriesKeysArray.reduce((max, category) =>
        categoriesRead[category] > categoriesRead[max] ? category : max
    )

    const response = {
        created_at: userInfo?.created_at,
        numberOfBooksRead: userBooks.length,
        totalPagesRead,
        totalOfAuthorsRead: totalOfAuthorsRead.length,
        mostCategoryRead,
    }

    return res.json(response)
}
