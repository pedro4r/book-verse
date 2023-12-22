import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import dotenv from 'dotenv'

import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'
import googleBooksApi from '../google-books-api/index.api'

dotenv.config()

interface BookSearchInterface {
    textInput?: string
    category?: string
}

interface Book {
    id: string
    volumeInfo: {
        title: string
        authors: string
        description: string
        imageLinks: {
            thumbnail: string
        }
        pageCount: number
        categories: []
        ratingAverage: number
        read: boolean
    }
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

    const { category, textInput }: BookSearchInterface = req.query

    let response = []

    if (category === 'all' && textInput === '') {
        response = await prisma.books.findMany()
    } else if (textInput !== '' && category === 'all') {
        response = await prisma.books.findMany({
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
        response = await prisma.books.findMany({
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
        response = await prisma.books.findMany({
            where: { category },
        })
    }

    const books = await Promise.all(
        response.map(async (book) => {
            const reviews = await prisma.reviews.findMany({
                where: { book_id: book.id },
            })

            const ratingSum = reviews.reduce((acc, review) => {
                return (acc += review.rating)
            }, 0)

            const ratingAverage = Math.ceil(ratingSum / reviews.length)

            const isBookReviewed = await prisma.reviews.findFirst({
                where: {
                    book_id: book.id,
                    user_id: String(session?.user.id),
                },
            })

            const hasBeenReviewed = !!isBookReviewed

            const coverUrl = `https://aws-book-verse-bucket.s3.amazonaws.com/${book.id}.jpg`

            return {
                id: book.id,
                name: book.name,
                author: book.author,
                summary: book.summary,
                cover_url: coverUrl,
                total_pages: book.total_pages,
                category: book.category,
                ratingAverage,
                read: session ? hasBeenReviewed : false,
            }
        })
    )

    if (textInput && category) {
        const googleBooksResponse = await googleBooksApi(textInput, category)
        const googleBooks = googleBooksResponse.items
            .filter(
                (item: Book) =>
                    item.volumeInfo.imageLinks &&
                    item.volumeInfo.imageLinks.thumbnail
            )
            .map((item: Book) => {
                return {
                    id: item.id,
                    name: item.volumeInfo.title,
                    author: item.volumeInfo.authors[0],
                    summary: item.volumeInfo.description,
                    cover_url: item.volumeInfo.imageLinks.thumbnail,
                    total_pages: item.volumeInfo.pageCount,
                    category: item.volumeInfo.categories,
                    ratingAverage: 0,
                    read: false,
                }
            })

        const newBooks = [...books, ...googleBooks]
        return res.json(newBooks)
    }

    return res.json(books)
}
