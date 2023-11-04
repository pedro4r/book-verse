import {
    Binoculars,
    BookOpen,
    BookmarkSimple,
    Check,
    MagnifyingGlass,
    X,
} from 'phosphor-react'
import { Sidebar } from '../../components/Sidebar'
import {
    Book,
    BookInfo,
    Container,
    ExploreContainer,
    FilterAnswer,
    FilterBar,
    FilterButton,
    FormContainer,
    InfoContainer,
    PageTitle,
    ReadLabel,
} from './styles'
import Image from 'next/image'
import hobbit from '../../../public/hobbit.png'
import { Avatar } from '../../components/Avatar'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { StarRater } from '../../components/StarRater'
import { BookProfile } from '../../components/BookProfile'
import { BookVerseContext } from '../../context/BookVerseContext'

export default function Explore() {
    const router = useRouter()
    const session = useSession()

    const [filter, setFilter] = useState('all')

    useEffect(() => {
        if (router.asPath.includes('#')) {
            router.replace(router.asPath.split('#')[0])
        }
    }, [router])

    function handleChangeFilter(filterName: string) {
        setFilter(filterName)
    }

    const { isBookContainerOpen, changeBookContainerOpenStatus } =
        useContext(BookVerseContext)

    return (
        <>
            <BookProfile />
            <Container>
                <Sidebar />
                <ExploreContainer>
                    <PageTitle>
                        <Binoculars size={32} />
                        <h2>Explore</h2>
                        <FormContainer>
                            <input type='text' placeholder='Search Content' />
                            <MagnifyingGlass size={20} />
                        </FormContainer>
                    </PageTitle>
                    <FilterBar>
                        <FilterButton
                            onClick={() => handleChangeFilter('all')}
                            active={filter === 'all'}
                        >
                            All
                        </FilterButton>
                        <FilterButton
                            onClick={() => handleChangeFilter('computer')}
                            active={filter === 'computer'}
                        >
                            Computer
                        </FilterButton>
                        <FilterButton
                            onClick={() => handleChangeFilter('education')}
                            active={filter === 'education'}
                        >
                            Education
                        </FilterButton>
                        <FilterButton
                            onClick={() => handleChangeFilter('fansaty')}
                            active={filter === 'fansaty'}
                        >
                            Fansaty
                        </FilterButton>
                        <FilterButton
                            onClick={() => handleChangeFilter('scifi')}
                            active={filter === 'scifi'}
                        >
                            Sci-Fi
                        </FilterButton>
                        <FilterButton
                            onClick={() => handleChangeFilter('horror')}
                            active={filter === 'horror'}
                        >
                            Horror
                        </FilterButton>
                        <FilterButton
                            onClick={() => handleChangeFilter('hqs')}
                            active={filter === 'hqs'}
                        >
                            HQs
                        </FilterButton>
                        <FilterButton
                            onClick={() => handleChangeFilter('suspense')}
                            active={filter === 'suspense'}
                        >
                            Suspense
                        </FilterButton>
                    </FilterBar>
                </ExploreContainer>
                <FilterAnswer>
                    <Book onClick={() => changeBookContainerOpenStatus(true)}>
                        <InfoContainer>
                            <ReadLabel>
                                <strong>Read</strong>
                            </ReadLabel>
                            <Image src={hobbit} alt='' />
                            <BookInfo>
                                <strong>The Hobbit</strong>
                                <span>J.R.R. Tolkien</span>
                                <StarRater />
                            </BookInfo>
                        </InfoContainer>
                    </Book>
                </FilterAnswer>
            </Container>
        </>
    )
}
