import { prisma } from '../../../lib/prisma'

interface BookSearchInterface {
    textInput?: string
    category?: string
}

export interface UserSessionInterface {
    id: string
    name: string
    email: string
    avatar_url: string
}

interface UserBioResponseInterface {
    created_at?: Date
    numberOfBooksRead: number
    totalPagesRead: number
    totalOfAuthorsRead: number
    mostCategoryRead: string
}

export async function userBio(
    user: UserSessionInterface
): Promise<UserBioResponseInterface> {
    const userInfo = await prisma.user.findUnique({
        where: {
            id: String(user.id),
        },
    })

    const userBooks = await prisma.reviews.findMany({
        where: {
            user_id: String(user.id),
        },
        select: {
            books: {
                select: {
                    id: true,
                    name: true,
                    author: true,
                    summary: true,
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

    const mostCategoryRead = categoriesKeysArray.reduce(
        (max, category) =>
            categoriesRead[category] > categoriesRead[max] ? category : max,
        categoriesKeysArray[0]
    )

    const response = {
        created_at: userInfo?.created_at,
        numberOfBooksRead: userBooks.length,
        totalPagesRead,
        totalOfAuthorsRead: totalOfAuthorsRead.length,
        mostCategoryRead,
    }

    return response
}
