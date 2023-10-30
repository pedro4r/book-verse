import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { Sidebar } from '../../components/Sidebar'
import {
    Book,
    Container,
    FilterAnswer,
    FilterBar,
    FilterButton,
    FormContainer,
    PageTitle,
    PopularBookInfo,
    Reviews,
} from './styles'
import Image from 'next/image'
import hobbit from '../../../public/hobbit.png'
import { Avatar } from '../../components/Avatar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import horizontalBar from '../../../public/horizontal-icon-bar.svg'
import { StarRater } from '../../components/StarRater'

export default function Explore() {
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
                    <Binoculars size={32} />
                    <h2>Explore</h2>
                    <FormContainer>
                        <input type='text' placeholder='Search Content' />
                        <MagnifyingGlass size={20} />
                    </FormContainer>
                </PageTitle>

                <FilterBar>
                    <FilterButton active={true}>All</FilterButton>
                    <FilterButton active={false}>Computer</FilterButton>
                    <FilterButton active={false}>Education</FilterButton>
                    <FilterButton active={false}>Fansaty</FilterButton>
                    <FilterButton active={false}>Sci-Fi</FilterButton>
                    <FilterButton active={false}>Horror</FilterButton>
                    <FilterButton active={false}>HQs</FilterButton>
                    <FilterButton active={false}>Suspense</FilterButton>
                </FilterBar>
            </Reviews>
            <FilterAnswer>
                <Book>
                    <Image src={hobbit} priority alt='' />
                    <PopularBookInfo>
                        <strong>The Hobbit</strong>
                        <span>J.R.R. Tolkien</span>
                        <StarRater />
                    </PopularBookInfo>
                </Book>
                <Book>
                    <Image src={hobbit} priority alt='' />
                    <PopularBookInfo>
                        <strong>The Hobbit</strong>
                        <span>J.R.R. Tolkien</span>
                        <StarRater />
                    </PopularBookInfo>
                </Book>
                <Book>
                    <Image src={hobbit} priority alt='' />
                    <PopularBookInfo>
                        <strong>The Hobbit</strong>
                        <span>J.R.R. Tolkien</span>
                        <StarRater />
                    </PopularBookInfo>
                </Book>
                <Book>
                    <Image src={hobbit} priority alt='' />
                    <PopularBookInfo>
                        <strong>The Hobbit</strong>
                        <span>J.R.R. Tolkien</span>
                        <StarRater />
                    </PopularBookInfo>
                </Book>
                <Book>
                    <Image src={hobbit} priority alt='' />
                    <PopularBookInfo>
                        <strong>The Hobbit</strong>
                        <span>J.R.R. Tolkien</span>
                        <StarRater />
                    </PopularBookInfo>
                </Book>
                <Book>
                    <Image src={hobbit} priority alt='' />
                    <PopularBookInfo>
                        <strong>The Hobbit</strong>
                        <span>J.R.R. Tolkien</span>
                        <StarRater />
                    </PopularBookInfo>
                </Book>
                <Book>
                    <Image src={hobbit} priority alt='' />
                    <PopularBookInfo>
                        <strong>The Hobbit</strong>
                        <span>J.R.R. Tolkien</span>
                        <StarRater />
                    </PopularBookInfo>
                </Book>
                <Book>
                    <Image src={hobbit} priority alt='' />
                    <PopularBookInfo>
                        <strong>The Hobbit</strong>
                        <span>J.R.R. Tolkien</span>
                        <StarRater />
                    </PopularBookInfo>
                </Book>
                <Book>
                    <Image src={hobbit} priority alt='' />
                    <PopularBookInfo>
                        <strong>The Hobbit</strong>
                        <span>J.R.R. Tolkien</span>
                        <StarRater />
                    </PopularBookInfo>
                </Book>
                <Book>
                    <Image src={hobbit} priority alt='' />
                    <PopularBookInfo>
                        <strong>The Hobbit</strong>
                        <span>J.R.R. Tolkien</span>
                        <StarRater />
                    </PopularBookInfo>
                </Book>
                <Book>
                    <Image src={hobbit} priority alt='' />
                    <PopularBookInfo>
                        <strong>The Hobbit</strong>
                        <span>J.R.R. Tolkien</span>
                        <StarRater />
                    </PopularBookInfo>
                </Book>
            </FilterAnswer>
        </Container>
    )
}
