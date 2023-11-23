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
import hobbit from '../../../public/hobbit.png'
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

interface UserProfileInterface {
    created_at: Date
    numberOfBooksRead: number
    totalPagesRead: number
    totalOfAuthorsRead: number
    mostCategoryRead: string
}

const searchFormSchema = z.object({
    query: z.string(),
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

    const dateJoined = dayjs(userInfo.created_at)
    const yearJoined = dateJoined.format('YYYY')
    console.log(yearJoined)
    // const memberSince = dateJoined.from(dayjs(), true)

    const session = useSession()

    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            query: '',
        },
    })

    function handleSearch(data: SearchFormInput) {
        const searchQuery = {
            data: data.query,
        }
    }

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
                setUserInfo(data)
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchInitialBooks()
    }, [])

    return (
        <Container>
            <Sidebar />
            <Reviews>
                <PageTitle>
                    <User size={32} />
                    <h2>Profile</h2>
                </PageTitle>
                <FormContainer
                    onSubmit={handleSubmit((data) => handleSearch(data))}
                >
                    <input
                        type='text'
                        placeholder='Search Content'
                        {...register('query')}
                    />
                    <MagnifyingGlass size={20} />
                </FormContainer>

                <ReviewContainer>
                    <span>2 days ago</span>
                    <ReviewBody>
                        <Header>
                            <Image src={hobbit} alt='' />
                            <TitleInfo>
                                <strong>The Hobbit</strong>
                                <span>J.R.R. Tolkien</span>
                                <StarRater rate={3} />
                            </TitleInfo>
                        </Header>
                        <p>
                            Tristique massa sed enim lacinia odio. Congue ut
                            faucibus nunc vitae non. Nam feugiat vel morbi
                            viverra vitae mi. Vitae fringilla ut et suspendisse
                            enim suspendisse vitae. Leo non eget lacus
                            sollicitudin tristique pretium quam. Mollis et
                            luctus amet sed convallis varius massa sagittis.
                            Proin sed proin at leo quis ac sem. Nam donec
                            accumsan curabitur amet tortor quam sit. Bibendum
                            enim sit dui lorem urna amet elit rhoncus ut.
                            Aliquet euismod vitae ut turpis. Aliquam amet
                            integer pellentesque.
                        </p>
                    </ReviewBody>
                </ReviewContainer>
                <ReviewContainer>
                    <span>2 days ago</span>
                    <ReviewBody>
                        <Header>
                            <Image src={hobbit} alt='' />
                            <TitleInfo>
                                <strong>The Hobbit</strong>
                                <span>J.R.R. Tolkien</span>
                                <StarRater rate={3} />
                            </TitleInfo>
                        </Header>
                        <p>
                            Tristique massa sed enim lacinia odio. Congue ut
                            faucibus nunc vitae non. Nam feugiat vel morbi
                            viverra vitae mi. Vitae fringilla ut et suspendisse
                            enim suspendisse vitae. Leo non eget lacus
                            sollicitudin tristique pretium quam. Mollis et
                            luctus amet sed convallis varius massa sagittis.
                            Proin sed proin at leo quis ac sem. Nam donec
                            accumsan curabitur amet tortor quam sit. Bibendum
                            enim sit dui lorem urna amet elit rhoncus ut.
                            Aliquet euismod vitae ut turpis. Aliquam amet
                            integer pellentesque.
                        </p>
                    </ReviewBody>
                </ReviewContainer>
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
                            <strong>{userInfo.numberOfBooksRead}</strong>
                            <span>Reviewed Books</span>
                        </Stats>
                    </ReadingStats>
                    <ReadingStats>
                        <UserList size={32} />
                        <Stats>
                            <strong>{userInfo.totalOfAuthorsRead}</strong>
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
        </Container>
    )
}
