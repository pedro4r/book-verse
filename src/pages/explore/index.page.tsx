import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { Sidebar } from '../../components/Sidebar'
import {
    Book,
    BookInfo,
    Container,
    ExploreContainer,
    FilterAnswer,
    RadioGroupItem,
    FormContainer,
    InfoContainer,
    Label,
    PageTitle,
    RadioGroupRoot,
    ReadLabel,
} from './styles'
import Image from 'next/image'
import hobbit from '../../../public/hobbit.png'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { StarRater } from '../../components/StarRater'
import { BookProfile } from '../../components/BookProfile'
import { BookVerseContext } from '../../context/BookVerseContext'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const searchFormSchema = z.object({
    query: z.string(),
    gender: z.enum([
        'all',
        'computer',
        'education',
        'fantasy',
        'scifi',
        'horror',
        'hqs',
        'suspense',
    ]),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export default function Explore() {
    const router = useRouter()
    const session = useSession()

    const { register, handleSubmit, control } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            query: '',
            gender: 'all',
        },
    })

    useEffect(() => {
        if (router.asPath.includes('#')) {
            router.replace(router.asPath.split('#')[0])
        }
    }, [router])

    const { changeBookContainerOpenStatus } = useContext(BookVerseContext)

    function handleSearchByTextInput(data: SearchFormInputs) {
        const searchFilterQuery = {
            data: data.query,
            gender: data.gender,
        }
        console.log(searchFilterQuery)
    }

    function handleSearchByFilter(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        console.log(event.target.value.length)
    }

    return (
        <>
            <BookProfile />
            <Container>
                <Sidebar />
                <ExploreContainer
                    onSubmit={handleSubmit((data) =>
                        handleSearchByTextInput(data)
                    )}
                >
                    <PageTitle>
                        <Binoculars size={32} />
                        <h2>Explore</h2>
                        <FormContainer>
                            <input
                                type='text'
                                placeholder='Search Content'
                                {...register('query')}
                            />
                            <MagnifyingGlass size={20} />
                        </FormContainer>
                    </PageTitle>
                    <Controller
                        name='gender'
                        control={control}
                        render={({ field: { onChange } }) => {
                            return (
                                <RadioGroupRoot
                                    defaultValue='all'
                                    aria-label='Gender'
                                    onChange={(e) => {
                                        onChange(e)
                                        handleSearchByFilter(
                                            e as ChangeEvent<HTMLInputElement>
                                        )
                                    }}
                                >
                                    <RadioGroupItem value='all' id='1'>
                                        <Label htmlFor='1'>All</Label>
                                    </RadioGroupItem>
                                    <RadioGroupItem value='computer' id='2'>
                                        <Label htmlFor='2'>Computer</Label>
                                    </RadioGroupItem>
                                    <RadioGroupItem value='education' id='3'>
                                        <Label htmlFor='3'>Education</Label>
                                    </RadioGroupItem>
                                    <RadioGroupItem value='fantasy' id='4'>
                                        <Label htmlFor='4'>Fantasy</Label>
                                    </RadioGroupItem>
                                    <RadioGroupItem value='scifi' id='5'>
                                        <Label htmlFor='5'>Sci-Fi</Label>
                                    </RadioGroupItem>
                                    <RadioGroupItem value='horror' id='6'>
                                        <Label htmlFor='6'>Horror</Label>
                                    </RadioGroupItem>
                                    <RadioGroupItem value='hqs' id='7'>
                                        <Label htmlFor='7'>HQs</Label>
                                    </RadioGroupItem>
                                    <RadioGroupItem value='suspense' id='8'>
                                        <Label htmlFor='8'>Suspense</Label>
                                    </RadioGroupItem>
                                </RadioGroupRoot>
                            )
                        }}
                    />
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
                                <StarRater rate={3} />
                            </BookInfo>
                        </InfoContainer>
                    </Book>
                </FilterAnswer>
            </Container>
        </>
    )
}
