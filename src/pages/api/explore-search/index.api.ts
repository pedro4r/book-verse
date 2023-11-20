import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

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

    const { category, textInput }: BookSearchInterface = req.query

    console.log(category + '----' + textInput)

    let response = []

    if (category === 'all' && textInput === '') {
        response = await prisma.book.findMany()
    } else if (textInput !== '' && category === 'all') {
        response = await prisma.book.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: textInput,
                        },
                    },
                    {
                        author: {
                            contains: textInput,
                        },
                    },
                ],
            },
        })
    } else if (textInput !== '') {
        response = await prisma.book.findMany({
            where: {
                category,
                OR: [
                    {
                        name: {
                            contains: textInput,
                        },
                    },
                    {
                        author: {
                            contains: textInput,
                        },
                    },
                ],
            },
        })
    } else {
        response = await prisma.book.findMany({
            where: { category },
        })
    }

    const books = await Promise.all(
        response.map(async (book) => {
            const params = {
                Bucket: bucketname,
                Key: book.id + '.jpg',
            }

            const command = new GetObjectCommand(params)
            const url = await getSignedUrl(s3, command, { expiresIn: 3600 })
            return {
                id: book.id,
                name: book.name,
                author: book.author,
                summary: book.summary,
                cover_url: url,
                total_pages: book.total_pages,
                category: book.category,
            }
        })
    )

    return res.json(books)
}
