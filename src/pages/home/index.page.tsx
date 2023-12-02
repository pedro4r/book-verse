import { ChartLineUp, List } from 'phosphor-react'
import {
    Body,
    Book,
    BookInfo,
    BooksContainer,
    Container,
    Feed,
    Header,
    InfoContainer,
    PageTitle,
    PopularBookInfo,
    PopularBooks,
    Reviews,
    TitleContainer,
} from './styles'

import { Avatar } from '../../components/Avatar'
import { StarRater } from '../../components/StarRater'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { ParagraphControlled } from '../../components/ParagraphWithLengthControl'
import { BookImage } from '../../components/BookImage'
import { ToggleMenu } from '../../components/ToggleMenu'
import { Sidebar } from '../../components/Sidebar'

interface ReviewListInterface {
    id: string
    name: string
    author: string
    cover_url: string
    comment: string
    rating: 0 | 1 | 2 | 3 | 4 | 5
    created_at: Date
    userName: string
    userAvatarUrl: string
}

interface PopularBooksInterface {
    id: string
    name: string
    author: string
    cover_url: string
    ratingAverage: 0 | 1 | 2 | 3 | 4 | 5 | undefined
}

export default function Home() {
    const [reviewsList, setReviewsList] = useState<ReviewListInterface[]>()
    const [popularBooksList, setPopularBooksList] =
        useState<PopularBooksInterface[]>()

    const [togglePopularBooks, setTogglePopularBooks] = useState(false)

    useEffect(() => {
        const fetchInitialBooks = async () => {
            try {
                const response = await api.get('/home-feed', {
                    params: {
                        textInput: '',
                        category: 'all',
                    },
                })
                const { data } = response
                setReviewsList([...data.reviews])
                setPopularBooksList([...data.popularBooks])
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchInitialBooks()
    }, [])

    function togglePopularBooksButton() {
        setTogglePopularBooks(!togglePopularBooks)
    }

    return (
        <Container>
            <Sidebar />
            <ToggleMenu />
            <Feed>
                <PageTitle>
                    <ChartLineUp size={32} />
                    <h2>Home</h2>
                </PageTitle>
                <span>Recent Reviews</span>

                {reviewsList?.map((review) => {
                    dayjs.extend(relativeTime)
                    const createdAt = dayjs(review.created_at).fromNow()
                    return (
                        <Reviews key={review.id}>
                            <Header>
                                <Avatar
                                    avatarUrl={review.userAvatarUrl}
                                    avatarSize='sm'
                                />
                                <InfoContainer>
                                    <strong>{review.userName}</strong>
                                    <span>{createdAt}</span>
                                </InfoContainer>
                                <StarRater rate={review.rating} />
                            </Header>
                            <Body>
                                <BookImage
                                    height={152}
                                    width={108}
                                    imgUrl={review.cover_url}
                                />
                                <BookInfo>
                                    <strong>{review.author}</strong>
                                    <span>{review.name}</span>
                                    <ParagraphControlled
                                        textParagraph={review.comment}
                                    />
                                </BookInfo>
                            </Body>
                        </Reviews>
                    )
                })}
            </Feed>
            <PopularBooks>
                <TitleContainer>
                    <span>Popular Books</span>
                    <button
                        onClick={() => {
                            togglePopularBooksButton()
                        }}
                    >
                        {togglePopularBooks ? 'See less' : 'See more'}
                    </button>
                </TitleContainer>
                <BooksContainer>
                    {popularBooksList?.map((book, i) => {
                        if (i === 3 && !togglePopularBooks) {
                            return null
                        }
                        return (
                            <Book key={book.id}>
                                <BookImage
                                    height={84}
                                    width={54}
                                    imgUrl={book.cover_url}
                                />
                                <PopularBookInfo>
                                    <strong>{book.name}</strong>
                                    <span>{book.author}</span>
                                    <StarRater rate={book.ratingAverage} />
                                </PopularBookInfo>
                            </Book>
                        )
                    })}
                </BooksContainer>
            </PopularBooks>
        </Container>
    )
}
