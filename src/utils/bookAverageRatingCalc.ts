import { prisma } from '../lib/prisma'

export async function bookAverageRatingCalc(id: string) {
    const reviews = await prisma.reviews.findMany({
        where: { book_id: id },
    })

    const ratingSum = reviews.reduce((acc, review) => {
        return (acc += review.rating)
    }, 0)

    const ratingAverage = Math.ceil(ratingSum / reviews.length)

    return ratingAverage
}
