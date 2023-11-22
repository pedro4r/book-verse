import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

interface NewReviewInterface {
    bookId: string
    userId: string
    comment: string
    rating: number
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).end('Method Not Allowed')
    }

    const { bookId, userId, comment, rating }: NewReviewInterface =
        req.body.params

    try {
        const newReview = await prisma.reviews.create({
            data: {
                rating,
                comment,
                user_id: userId,
                book_id: bookId,
            },
        })
        return res.status(201).json(newReview)
    } catch (error) {
        console.error('Error creating review:', error)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}
