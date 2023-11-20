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

export default function Home() {
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
                    <Reviews>
                        <Header>
                            <Avatar />
                            <InfoContainer>
                                <strong>Pedro Requião</strong>
                                <span>Data</span>
                            </InfoContainer>
                            <StarRater rate={3} />
                        </Header>
                        <Body>
                            <Image src={hobbit} priority alt='' />
                            <BookInfo>
                                <strong>The Hobbit</strong>
                                <span>J.R.R. Tolkien</span>
                                <p>
                                    Semper et sapien proin vitae nisi. Feugiat
                                    neque integer donec et aenean posuere amet
                                    ultrices. Cras fermentum id pulvinar varius
                                    leo a in. Amet libero pharetra nunc
                                    elementum fringilla velit ipsum. Sed
                                    vulputate massa velit nibh...{' '}
                                    <a href='#' title=''>
                                        read more
                                    </a>
                                </p>
                            </BookInfo>
                        </Body>
                    </Reviews>
                    <Reviews>
                        <Header>
                            <Avatar />
                            <InfoContainer>
                                <strong>Pedro Requião</strong>
                                <span>Data</span>
                            </InfoContainer>
                            <StarRater rate={3} />
                        </Header>
                        <Body>
                            <Image src={hobbit} priority alt='' />
                            <BookInfo>
                                <strong>The Hobbit</strong>
                                <span>J.R.R. Tolkien</span>
                                <p>
                                    Semper et sapien proin vitae nisi. Feugiat
                                    neque integer donec et aenean posuere amet
                                    ultrices. Cras fermentum id pulvinar varius
                                    leo a in. Amet libero pharetra nunc
                                    elementum fringilla velit ipsum. Sed
                                    vulputate massa velit nibh...{' '}
                                    <a href='#' title=''>
                                        read more
                                    </a>
                                </p>
                            </BookInfo>
                        </Body>
                    </Reviews>
                    <Reviews>
                        <Header>
                            <Avatar />
                            <InfoContainer>
                                <strong>Pedro Requião</strong>
                                <span>Data</span>
                            </InfoContainer>
                            <StarRater rate={3} />
                        </Header>
                        <Body>
                            <Image src={hobbit} priority alt='' />
                            <BookInfo>
                                <strong>The Hobbit</strong>
                                <span>J.R.R. Tolkien</span>
                                <p>
                                    Semper et sapien proin vitae nisi. Feugiat
                                    neque integer donec et aenean posuere amet
                                    ultrices. Cras fermentum id pulvinar varius
                                    leo a in. Amet libero pharetra nunc
                                    elementum fringilla velit ipsum. Sed
                                    vulputate massa velit nibh...{' '}
                                    <a href='#' title=''>
                                        read more
                                    </a>
                                </p>
                            </BookInfo>
                        </Body>
                    </Reviews>
                    <Reviews>
                        <Header>
                            <Avatar />
                            <InfoContainer>
                                <strong>Pedro Requião</strong>
                                <span>Data</span>
                            </InfoContainer>
                            <StarRater rate={3} />
                        </Header>
                        <Body>
                            <Image src={hobbit} priority alt='' />
                            <BookInfo>
                                <strong>The Hobbit</strong>
                                <span>J.R.R. Tolkien</span>
                                <p>
                                    Semper et sapien proin vitae nisi. Feugiat
                                    neque integer donec et aenean posuere amet
                                    ultrices. Cras fermentum id pulvinar varius
                                    leo a in. Amet libero pharetra nunc
                                    elementum fringilla velit ipsum. Sed
                                    vulputate massa velit nibh...{' '}
                                    <a href='#' title=''>
                                        read more
                                    </a>
                                </p>
                            </BookInfo>
                        </Body>
                    </Reviews>
                    <Reviews>
                        <Header>
                            <Avatar />
                            <InfoContainer>
                                <strong>Pedro Requião</strong>
                                <span>Data</span>
                            </InfoContainer>
                            <StarRater rate={3} />
                        </Header>
                        <Body>
                            <Image src={hobbit} priority alt='' />
                            <BookInfo>
                                <strong>The Hobbit</strong>
                                <span>J.R.R. Tolkien</span>
                                <p>
                                    Semper et sapien proin vitae nisi. Feugiat
                                    neque integer donec et aenean posuere amet
                                    ultrices. Cras fermentum id pulvinar varius
                                    leo a in. Amet libero pharetra nunc
                                    elementum fringilla velit ipsum. Sed
                                    vulputate massa velit nibh...{' '}
                                    <a href='#' title=''>
                                        read more
                                    </a>
                                </p>
                            </BookInfo>
                        </Body>
                    </Reviews>
                    <Reviews>
                        <Header>
                            <Avatar />
                            <InfoContainer>
                                <strong>Pedro Requião</strong>
                                <span>Data</span>
                            </InfoContainer>
                            <StarRater rate={3} />
                        </Header>
                        <Body>
                            <Image src={hobbit} priority alt='' />
                            <BookInfo>
                                <strong>The Hobbit</strong>
                                <span>J.R.R. Tolkien</span>
                                <p>
                                    Semper et sapien proin vitae nisi. Feugiat
                                    neque integer donec et aenean posuere amet
                                    ultrices. Cras fermentum id pulvinar varius
                                    leo a in. Amet libero pharetra nunc
                                    elementum fringilla velit ipsum. Sed
                                    vulputate massa velit nibh...{' '}
                                    <a href='#' title=''>
                                        read more
                                    </a>
                                </p>
                            </BookInfo>
                        </Body>
                    </Reviews>
                    <Reviews>
                        <Header>
                            <Avatar />
                            <InfoContainer>
                                <strong>Pedro Requião</strong>
                                <span>Data</span>
                            </InfoContainer>
                            <StarRater rate={3} />
                        </Header>
                        <Body>
                            <Image src={hobbit} priority alt='' />
                            <BookInfo>
                                <strong>The Hobbit</strong>
                                <span>J.R.R. Tolkien</span>
                                <p>
                                    Semper et sapien proin vitae nisi. Feugiat
                                    neque integer donec et aenean posuere amet
                                    ultrices. Cras fermentum id pulvinar varius
                                    leo a in. Amet libero pharetra nunc
                                    elementum fringilla velit ipsum. Sed
                                    vulputate massa velit nibh...{' '}
                                    <a href='#' title=''>
                                        read more
                                    </a>
                                </p>
                            </BookInfo>
                        </Body>
                    </Reviews>
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
