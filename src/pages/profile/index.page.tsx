import {
    BookOpen,
    BookmarkSimple,
    Books,
    ChartLineUp,
    MagnifyingGlass,
    Star,
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
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import horizontalBar from '../../../public/horizontal-icon-bar.svg'
import { StarRater } from '../../components/StarRater'

export default function Profile() {
    const router = useRouter()
    const session = useSession()
    useEffect(() => {
        if (router.asPath.includes('#')) {
            router.replace(router.asPath.split('#')[0])
        }
    }, [router])

    return (
        <Container>
            <Sidebar />
            <Reviews>
                <PageTitle>
                    <User size={32} />
                    <h2>Profile</h2>
                </PageTitle>
                <FormContainer>
                    <input type='text' placeholder='Search Content' />
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
                                <StarRater />
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
                    <Avatar avatarSize={'md'} />
                    <strong>{session?.data?.user.name}</strong>
                    <span>member since 2023</span>
                </ProfileInfo>
                <Image src={horizontalBar} alt='' />
                <StatsContainer>
                    <ReadingStats>
                        <BookOpen size={32} />
                        <Stats>
                            <strong>839</strong>
                            <span>Pages Read</span>
                        </Stats>
                    </ReadingStats>
                    <ReadingStats>
                        <Books size={32} />
                        <Stats>
                            <strong>3</strong>
                            <span>Reviewed Books</span>
                        </Stats>
                    </ReadingStats>
                    <ReadingStats>
                        <UserList size={32} />
                        <Stats>
                            <strong>6</strong>
                            <span>Authors Read</span>
                        </Stats>
                    </ReadingStats>
                    <ReadingStats>
                        <BookmarkSimple size={32} />
                        <Stats>
                            <strong>1</strong>
                            <span>Most Read Category</span>
                        </Stats>
                    </ReadingStats>
                </StatsContainer>
            </UserInfoContainer>
        </Container>
    )
}
