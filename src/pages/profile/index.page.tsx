import {
    BookOpen,
    BookmarkSimple,
    Books,
    MagnifyingGlass,
    User,
    UserList,
} from 'phosphor-react'
import { Sidebar } from '../../components/Sidebar'
import {
    Container,
    FormContainer,
    Header,
    PageTitle,
    ProfileInfo,
    ReadingStats,
    ReviewBody,
    ReviewContainer,
    Reviews,
    Stats,
    StatsContainer,
    TitleInfo,
    UserInfoContainer,
} from './styles'
import Image from 'next/image'
import { Avatar } from '../../components/Avatar'
import { useSession } from 'next-auth/react'
import horizontalBar from '../../../public/horizontal-icon-bar.svg'
import { StarRater } from '../../components/StarRater'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { BookImage } from '../../components/BookImage'
import { ToggleMenu } from '../../components/ToggleMenu'
import { useWindowSize } from '../../utils/useWindowSize'

interface UserProfileInterface {
    created_at: Date
    numberOfBooksRead: number
    totalPagesRead: number
    totalOfAuthorsRead: number
    mostCategoryRead: string
}

interface UserActivity {
    id: string
    name: string
    author: string
    cover_url: string
    comment: string
    rating: 0 | 1 | 2 | 3 | 4 | 5
    created_at: Date
}

const searchFormSchema = z.object({
    textInput: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export default function Profile() {
    const [userInfo, setUserInfo] = useState<UserProfileInterface>({
        created_at: new Date(),
        numberOfBooksRead: 0,
        totalPagesRead: 0,
        totalOfAuthorsRead: 0,
        mostCategoryRead: '',
    })
    const [userActivity, setUserActivity] = useState<UserActivity[]>([])

    const yearJoined = dayjs(userInfo.created_at).format('YYYY')

    const session = useSession()

    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            textInput: '',
        },
    })

    useEffect(() => {
        const fetchInitialBooks = async () => {
            try {
                const response = await api.get('/user-profile', {
                    params: {
                        textInput: '',
                        category: 'all',
                    },
                })

                const { data } = response
                setUserInfo(data.bio)
                setUserActivity(data.activity)
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchInitialBooks()
    }, [])

    const handleFilterActivity = async (data: SearchFormInput) => {
        const filter = {
            textInput: data.textInput,
            userId: session.data?.user.id,
        }
        if (filter.textInput === '') {
            try {
                const response = await api.get('/user-profile', {
                    params: {
                        textInput: '',
                        category: 'all',
                    },
                })
                const { data } = response
                setUserActivity(data.activity)
            } catch (error) {
                console.error('Error:', error)
            }
        } else {
            if (data) {
                try {
                    const response = await api.get('/filter-user-activity', {
                        params: filter,
                    })

                    const { data } = response
                    setUserActivity([...data])
                    return data
                } catch (error) {
                    console.error('Error:', error)
                }
            }
        }
    }

    const windowSize = useWindowSize()
    const widthSize = windowSize.width

    return (
        <Container>
            <Sidebar />
            <ToggleMenu />

            {widthSize && widthSize >= 1280 ? (
                <>
                    <Reviews>
                        <PageTitle>
                            <User size={32} />
                            <h2>Profile</h2>
                        </PageTitle>
                        <FormContainer
                            onSubmit={handleSubmit((data) =>
                                handleFilterActivity(data)
                            )}
                        >
                            <input
                                type='text'
                                placeholder='Search Content'
                                {...register('textInput')}
                            />
                            <MagnifyingGlass size={20} />
                        </FormContainer>

                        {userActivity.map((review) => {
                            dayjs.extend(relativeTime)
                            const createdAt = dayjs(review.created_at).fromNow()
                            return (
                                <ReviewContainer key={review.id}>
                                    <span>{createdAt}</span>
                                    <ReviewBody>
                                        <Header>
                                            <BookImage
                                                height={134}
                                                width={98}
                                                imgUrl={review.cover_url}
                                            />
                                            <TitleInfo>
                                                <strong>{review.name}</strong>
                                                <span>{review.author}</span>
                                                <StarRater
                                                    rate={review.rating}
                                                />
                                            </TitleInfo>
                                        </Header>
                                        <p>{review.comment}</p>
                                    </ReviewBody>
                                </ReviewContainer>
                            )
                        })}
                    </Reviews>
                    <UserInfoContainer>
                        <ProfileInfo>
                            <Avatar
                                avatarUrl={session.data?.user.avatar_url}
                                avatarSize={'md'}
                            />
                            <strong>{session?.data?.user.name}</strong>
                            <span>member since {yearJoined}</span>
                        </ProfileInfo>
                        <Image src={horizontalBar} alt='' />
                        <StatsContainer>
                            <ReadingStats>
                                <BookOpen size={32} />
                                <Stats>
                                    <strong>{userInfo.totalPagesRead}</strong>
                                    <span>Pages Read</span>
                                </Stats>
                            </ReadingStats>
                            <ReadingStats>
                                <Books size={32} />
                                <Stats>
                                    <strong>
                                        {userInfo.numberOfBooksRead}
                                    </strong>
                                    <span>Reviewed Books</span>
                                </Stats>
                            </ReadingStats>
                            <ReadingStats>
                                <UserList size={32} />
                                <Stats>
                                    <strong>
                                        {userInfo.totalOfAuthorsRead}
                                    </strong>
                                    <span>Authors Read</span>
                                </Stats>
                            </ReadingStats>
                            <ReadingStats>
                                <BookmarkSimple size={32} />
                                <Stats>
                                    <strong>{userInfo.mostCategoryRead}</strong>
                                    <span>Most Read Category</span>
                                </Stats>
                            </ReadingStats>
                        </StatsContainer>
                    </UserInfoContainer>
                </>
            ) : (
                <>
                    <UserInfoContainer>
                        <ProfileInfo>
                            <Avatar
                                avatarUrl={session.data?.user.avatar_url}
                                avatarSize={'md'}
                            />
                            <strong>{session?.data?.user.name}</strong>
                            <span>member since {yearJoined}</span>
                        </ProfileInfo>
                        <Image src={horizontalBar} alt='' />
                        <StatsContainer>
                            <ReadingStats>
                                <BookOpen size={32} />
                                <Stats>
                                    <strong>{userInfo.totalPagesRead}</strong>
                                    <span>Pages Read</span>
                                </Stats>
                            </ReadingStats>
                            <ReadingStats>
                                <Books size={32} />
                                <Stats>
                                    <strong>
                                        {userInfo.numberOfBooksRead}
                                    </strong>
                                    <span>Reviewed Books</span>
                                </Stats>
                            </ReadingStats>
                            <ReadingStats>
                                <UserList size={32} />
                                <Stats>
                                    <strong>
                                        {userInfo.totalOfAuthorsRead}
                                    </strong>
                                    <span>Authors Read</span>
                                </Stats>
                            </ReadingStats>
                            <ReadingStats>
                                <BookmarkSimple size={32} />
                                <Stats>
                                    <strong>{userInfo.mostCategoryRead}</strong>
                                    <span>Most Read Category</span>
                                </Stats>
                            </ReadingStats>
                        </StatsContainer>
                    </UserInfoContainer>
                    <Reviews>
                        <PageTitle>
                            <User size={32} />
                            <h2>Profile</h2>
                        </PageTitle>
                        <FormContainer
                            onSubmit={handleSubmit((data) =>
                                handleFilterActivity(data)
                            )}
                        >
                            <input
                                type='text'
                                placeholder='Search Content'
                                {...register('textInput')}
                            />
                            <MagnifyingGlass size={20} />
                        </FormContainer>

                        {userActivity.map((review) => {
                            dayjs.extend(relativeTime)
                            const createdAt = dayjs(review.created_at).fromNow()
                            return (
                                <ReviewContainer key={review.id}>
                                    <span>{createdAt}</span>
                                    <ReviewBody>
                                        <Header>
                                            <BookImage
                                                height={134}
                                                width={98}
                                                imgUrl={review.cover_url}
                                            />
                                            <TitleInfo>
                                                <strong>{review.name}</strong>
                                                <span>{review.author}</span>
                                                <StarRater
                                                    rate={review.rating}
                                                />
                                            </TitleInfo>
                                        </Header>
                                        <p>{review.comment}</p>
                                    </ReviewBody>
                                </ReviewContainer>
                            )
                        })}
                    </Reviews>
                </>
            )}
        </Container>
    )
}
