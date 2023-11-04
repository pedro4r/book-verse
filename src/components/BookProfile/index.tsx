import Image from 'next/image'
import {
    BookCard,
    BookContainer,
    BookDetail,
    ButtonContainer,
    CardHeader,
    CardInfo,
    CloseButton,
    Databox,
    Info,
    Mask,
    NewReview,
    NewReviewButton,
    NewReviewHeader,
    ReviewButton,
    ReviewCard,
    ReviewContainer,
    ReviewFormContainer,
    TextAreaContainer,
} from './styles'
import { BookOpen, BookmarkSimple, Check, X } from 'phosphor-react'
import { StarRater } from '../StarRater'
import { Avatar } from '../Avatar'
import { ChangeEvent, useContext, useState } from 'react'
import hobbit from '../../../public/hobbit.png'
import { useSession } from 'next-auth/react'
import { BookVerseContext } from '../../context/BookVerseContext'

export function BookProfile() {
    const session = useSession()

    const [reviewTextAreaLength, setReviewTextAreaLength] = useState<number>(0)

    const [isNewReviewContainerOpen, setIsNewReviewContainerOpen] =
        useState<boolean>(false)

    function handleOnChangeNewReview(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setReviewTextAreaLength(event.target.value.length)
    }

    function handleNewReviewContainerOpen(status: boolean) {
        setIsNewReviewContainerOpen(status)
    }

    const { isBookContainerOpen, changeBookContainerOpenStatus } =
        useContext(BookVerseContext)

    return (
        <>
            <BookContainer open={isBookContainerOpen}>
                <CloseButton
                    onClick={() => changeBookContainerOpenStatus(false)}
                >
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
                        {session.data?.user ? (
                            <NewReviewButton
                                show={!isNewReviewContainerOpen}
                                onClick={() =>
                                    handleNewReviewContainerOpen(true)
                                }
                            >
                                Rate this book
                            </NewReviewButton>
                        ) : null}
                    </span>
                    <NewReview open={isNewReviewContainerOpen}>
                        <NewReviewHeader>
                            <Avatar avatarSize='sm' />
                            <strong>{session.data?.user.name}</strong>
                            <StarRater size={'md'} enableChange={true} />
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
        </>
    )
}
