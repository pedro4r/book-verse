import { ChartLineUp, Star } from 'phosphor-react'
import { Sidebar } from '../../components/Sidebar'
import {
    Body,
    Book,
    BookInfo,
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
import Image from 'next/image'
import hobbit from '../../../public/hobbit.png'
import { Avatar } from '../../components/Avatar'
import { StarRater } from '../../components/StarRater'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

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

export default function Home() {
    const [reviewsList, setReviewsList] = useState<ReviewListInterface[]>()

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
                setReviewsList([...data])
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchInitialBooks()
    }, [])
    return (
        <>
            <Container>
                <Sidebar />
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
                                    <Image
                                        src={review.cover_url}
                                        width={300}
                                        height={300}
                                        alt={review.name}
                                    />
                                    <BookInfo>
                                        <strong>{review.author}</strong>
                                        <span>{review.name}</span>
                                        <p>
                                            {review.comment}{' '}
                                            <a href='#' title=''>
                                                read more
                                            </a>
                                        </p>
                                    </BookInfo>
                                </Body>
                            </Reviews>
                        )
                    })}
                </Feed>
                <PopularBooks>
                    <TitleContainer>
                        <span>Popular Books</span>
                        <a href='http://'>See more</a>
                    </TitleContainer>
                    <Book>
                        <Image src={hobbit} priority alt='' />
                        <PopularBookInfo>
                            <strong>The Hobbit</strong>
                            <span>J.R.R. Tolkien</span>
                            <StarRater rate={1} />
                        </PopularBookInfo>
                    </Book>
                    <Book>
                        <Image src={hobbit} priority alt='' />
                        <PopularBookInfo>
                            <strong>The Hobbit</strong>
                            <span>J.R.R. Tolkien</span>
                            <StarRater rate={1} />
                        </PopularBookInfo>
                    </Book>
                </PopularBooks>
            </Container>
        </>
    )
}
