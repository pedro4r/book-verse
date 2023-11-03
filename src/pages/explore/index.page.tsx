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
    BookCard,
    BookContainer,
    BookDetail,
    BookInfo,
    ButtonContainer,
    CardHeader,
    CardInfo,
    CloseButton,
    Container,
    Databox,
    ExploreContainer,
    FilterAnswer,
    FilterBar,
    FilterButton,
    FormContainer,
    Info,
    InfoContainer,
    Mask,
    NewReview,
    NewReviewButton,
    NewReviewHeader,
    PageTitle,
    ReadLabel,
    ReviewButton,
    ReviewCard,
    ReviewContainer,
    ReviewFormContainer,
    SuperContainer,
    TextAreaContainer,
} from './styles'
import Image from 'next/image'
import hobbit from '../../../public/hobbit.png'
import { Avatar } from '../../components/Avatar'
import { ChangeEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { StarRater } from '../../components/StarRater'

export default function Explore() {
    const router = useRouter()
    const session = useSession()

    const [filter, setFilter] = useState('all')

    const [isBookContainerOpen, setIsBookContainerOpen] =
        useState<boolean>(false)

    const [reviewTextAreaLength, setReviewTextAreaLength] = useState<number>(0)

    const [isNewReviewContainerOpen, setIsNewReviewContainerOpen] =
        useState<boolean>(false)

    useEffect(() => {
        if (router.asPath.includes('#')) {
            router.replace(router.asPath.split('#')[0])
        }
    }, [router])

    function handleChangeFilter(filterName: string) {
        setFilter(filterName)
    }

    function handleOpenBookContainer(status: boolean) {
        setIsBookContainerOpen(status)
    }

    function handleOnChangeNewReview(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setReviewTextAreaLength(event.target.value.length)
    }

    function handleNewReviewContainerOpen(status: boolean) {
        setIsNewReviewContainerOpen(status)
    }

    return (
        <SuperContainer>
            <BookContainer open={isBookContainerOpen}>
                <CloseButton onClick={() => handleOpenBookContainer(false)}>
                    <X size={24} weight='thin' />
                </CloseButton>
                <BookCard>
                    <BookDetail>
                        <Image src={hobbit} alt='' />
                        <Info>
                            <strong>The Hobbit</strong>
                            <span>J.R.R. Tolkien</span>
                            <StarRater />
                            <small>3 Reviews</small>
                        </Info>
                    </BookDetail>
                    <CardInfo>
                        <Databox>
                            <BookmarkSimple size={24} />
                            <div>
                                <span>Category</span>
                                <strong>Fantasy</strong>
                            </div>
                        </Databox>
                        <Databox>
                            <BookOpen size={24} />
                            <div>
                                <span>Pages</span>
                                <strong>160</strong>
                            </div>
                        </Databox>
                    </CardInfo>
                </BookCard>
                <ReviewContainer>
                    <span>
                        <span>Reviews</span>
                        <NewReviewButton
                            show={!isNewReviewContainerOpen}
                            onClick={() => handleNewReviewContainerOpen(true)}
                        >
                            Rate this book
                        </NewReviewButton>
                    </span>
                    <NewReview open={isNewReviewContainerOpen}>
                        <NewReviewHeader>
                            <Avatar avatarSize='sm' />
                            <strong>{session.data?.user.name}</strong>
                            <StarRater size={'md'} />
                        </NewReviewHeader>
                        <ReviewFormContainer>
                            <TextAreaContainer>
                                <textarea
                                    maxLength={450}
                                    onChange={handleOnChangeNewReview}
                                    placeholder='Share your thoughts and light the way for fellow readers!'
                                />
                                <span>{reviewTextAreaLength}/450</span>
                            </TextAreaContainer>
                            <ButtonContainer>
                                <ReviewButton
                                    type='button'
                                    color={'red'}
                                    onClick={() =>
                                        handleNewReviewContainerOpen(false)
                                    }
                                >
                                    <X size={24} weight='thin' />
                                </ReviewButton>
                                <ReviewButton type='submit' color={'green'}>
                                    <Check size={24} weight='thin' />
                                </ReviewButton>
                            </ButtonContainer>
                        </ReviewFormContainer>
                    </NewReview>
                    <ReviewCard>
                        <CardHeader>
                            <Avatar avatarSize={'sm'} />
                            <p>
                                <strong>Pedro Requião</strong>
                                <span>2 days ago</span>
                            </p>
                            <StarRater />
                        </CardHeader>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quibusdam optio cupiditate suscipit atque
                            aperiam mollitia, debitis quam saepe rerum rem
                            consectetur quod blanditiis quis possimus aspernatur
                            enim assumenda ipsa ratione!
                        </p>
                    </ReviewCard>
                    <ReviewCard>
                        <CardHeader>
                            <Avatar avatarSize={'sm'} />
                            <p>
                                <strong>Pedro Requião</strong>
                                <span>2 days ago</span>
                            </p>
                            <StarRater />
                        </CardHeader>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quibusdam optio cupiditate suscipit atque
                            aperiam mollitia, debitis quam saepe rerum rem
                            consectetur quod blanditiis quis possimus aspernatur
                            enim assumenda ipsa ratione!
                        </p>
                    </ReviewCard>
                    <ReviewCard>
                        <CardHeader>
                            <Avatar avatarSize={'sm'} />
                            <p>
                                <strong>Pedro Requião</strong>
                                <span>2 days ago</span>
                            </p>
                            <StarRater />
                        </CardHeader>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quibusdam optio cupiditate suscipit atque
                            aperiam mollitia, debitis quam saepe rerum rem
                            consectetur quod blanditiis quis possimus aspernatur
                            enim assumenda ipsa ratione!
                        </p>
                    </ReviewCard>
                </ReviewContainer>
            </BookContainer>
            <Mask open={isBookContainerOpen}></Mask>
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
                    <Book onClick={() => handleOpenBookContainer(true)}>
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
        </SuperContainer>
    )
}
