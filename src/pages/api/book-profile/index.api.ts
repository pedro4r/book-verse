import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

interface BookProfileInterface {
    id?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).end()
    }

    const { id }: BookProfileInterface = req.query

    const bookInfo = await prisma.books.findUnique({
        where: { id },
    })

    const reviews = await prisma.reviews.findMany({
        where: { book_id: id },
        orderBy: { created_at: 'desc' },
        include: { user: true },
    })

    const response = {
        bookInfo,
        reviews,
    }

    return res.json(response)
}
