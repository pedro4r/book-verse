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
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { BookVerseContext } from '../../context/BookVerseContext'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

interface BookInfoInterface {
    name: string
    author: string
    summary: string
    totalPages: number
    category: string
    ratingAverage: 0 | 1 | 2 | 3 | 4 | 5
    reviews: {
        comment: string
        rating: 0 | 1 | 2 | 3 | 4 | 5
        created_at: Date
        user: { name: string; avatar_url: string }
    }[]
}

const rateFormSchema = z.object({
    comment: z.string(),
    stars: z.number(),
})

type RateFormInputs = z.infer<typeof rateFormSchema>

export function BookProfile() {
    const session = useSession()

    const [bookInfo, setBookInfo] = useState<BookInfoInterface>({
        name: '',
        author: '',
        summary: '',
        totalPages: 0,
        category: '',
        ratingAverage: 0,
        reviews: [],
    })

    const { register, handleSubmit, control } = useForm<RateFormInputs>({
        resolver: zodResolver(rateFormSchema),
        defaultValues: {
            comment: '',
            stars: 1,
        },
    })

    const [resetKey, setResetKey] = useState(uuidv4())

    const [reviewTextAreaLength, setReviewTextAreaLength] = useState<number>(0)

    const [isNewReviewContainerOpen, setIsNewReviewContainerOpen] =
        useState<boolean>(false)

    const { changeSignInBoxOpenStatus } = useContext(BookVerseContext)

    const { bookProfileState, changeBookProfileState } =
        useContext(BookVerseContext)

    function handleOnChangeNewReview(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setReviewTextAreaLength(event.target.value.length)
    }

    function handleNewReviewContainerOpen(status: boolean) {
        setIsNewReviewContainerOpen(status)
        setResetKey(uuidv4())
    }

    function handleCloseBookProfile() {
        changeBookProfileState({ openStatus: false, id: '', imagUrl: '' })
    }

    async function handleSubmitReview(review: RateFormInputs) {
        try {
            await api.post('/create-review', {
                params: {
                    bookId: bookProfileState.id,
                    userId: session.data?.user.id,
                    comment: review.comment,
                    rating: review.stars,
                },
            })

            setBookInfo({
                name: '',
                author: '',
                summary: '',
                totalPages: 0,
                category: '',
                ratingAverage: 0,
                reviews: [],
            })
        } catch (error) {
            console.error('Error:', error)
        }

        setIsNewReviewContainerOpen(false)
    }

    useEffect(() => {
        const fetchInitialBooks = async () => {
            try {
                const response = await api.get('/book-profile', {
                    params: { id: bookProfileState.id },
                })
                const { data } = response
                const { bookInfo, reviews } = data

                setBookInfo((prevState) => ({
                    ...prevState,
                    name: bookInfo.name,
                    author: bookInfo.author,
                    summary: bookInfo.summary,
                    totalPages: bookInfo.total_pages,
                    category: bookInfo.category,
                    ratingAverage: bookInfo.ratingAverage,
                    reviews,
                }))
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchInitialBooks()
    }, [bookProfileState, isNewReviewContainerOpen])

    return (
        <>
            <BookContainer open={bookProfileState.openStatus}>
                <CloseButton onClick={() => handleCloseBookProfile()}>
                    <X size={24} weight='thin' />
                </CloseButton>
                <BookCard>
                    <BookDetail>
                        <Image
                            src={bookProfileState.imagUrl}
                            alt=''
                            width={250}
                            height={250}
                        />
                        <Info>
                            <strong>{bookInfo.name}</strong>
                            <span>{bookInfo.author}</span>
                            <StarRater rate={bookInfo.ratingAverage} />
                            <small>{bookInfo.reviews.length} Reviews</small>
                        </Info>
                    </BookDetail>
                    <CardInfo>
                        <Databox>
                            <BookmarkSimple size={24} />
                            <div>
                                <span>Category</span>
                                <strong>{bookInfo.category}</strong>
                            </div>
                        </Databox>
                        <Databox>
                            <BookOpen size={24} />
                            <div>
                                <span>Pages</span>
                                <strong>{bookInfo.totalPages}</strong>
                            </div>
                        </Databox>
                    </CardInfo>
                </BookCard>
                <ReviewContainer>
                    <span>
                        <span>Reviews</span>

                        <NewReviewButton
                            show={!isNewReviewContainerOpen}
                            onClick={() =>
                                session.data?.user
                                    ? handleNewReviewContainerOpen(true)
                                    : changeSignInBoxOpenStatus(true)
                            }
                        >
                            Rate this book
                        </NewReviewButton>
                    </span>
                    <NewReview
                        onSubmit={handleSubmit((data) =>
                            handleSubmitReview(data)
                        )}
                        open={isNewReviewContainerOpen}
                    >
                        <NewReviewHeader>
                            <Avatar avatarSize='sm' />
                            <strong>{session.data?.user.name}</strong>
                            <Controller
                                name='stars'
                                control={control}
                                render={({ field: { onChange } }) => {
                                    return (
                                        <StarRater
                                            onValueChange={onChange}
                                            key={resetKey}
                                            size={'md'}
                                            enableChange={true}
                                        />
                                    )
                                }}
                            />
                        </NewReviewHeader>
                        <ReviewFormContainer>
                            <TextAreaContainer>
                                <textarea
                                    key={resetKey}
                                    maxLength={450}
                                    {...register('comment')}
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
                    {bookInfo.reviews.map((review) => {
                        dayjs.extend(relativeTime)
                        const createdAt = dayjs(review.created_at).fromNow()
                        console.log(createdAt)
                        return (
                            <ReviewCard
                                commentFromTheUserInSession={true}
                                key={uuidv4()}
                            >
                                <CardHeader>
                                    <Avatar
                                        avatarSize={'sm'}
                                        altName={review.user.name}
                                        avatarUrl={review.user.avatar_url}
                                    />
                                    <p>
                                        <strong>{review.user.name}</strong>
                                        <span>{createdAt}</span>
                                    </p>
                                    <StarRater rate={review.rating} />
                                </CardHeader>

                                <p>{review.comment}</p>
                            </ReviewCard>
                        )
                    })}
                </ReviewContainer>
            </BookContainer>
            <Mask open={bookProfileState.openStatus}></Mask>
        </>
    )
}
