import { styled } from '../../styles'

export const Container = styled('div', {
    '@media(max-width: 1279px)': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
    },

    '@media(min-width: 1280px)': {
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
        marginLeft: '9rem',
        padding: '1rem',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
})

export const Feed = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    maxWidth: '38rem',
    minWidth: '20rem',
    marginTop: '2.5rem',
})

export const PageTitle = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$3',

    marginBottom: '4rem',

    svg: {
        color: '$green100',
    },
})

export const Reviews = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '$8',

    width: '100%',
    padding: '$6',
    marginTop: '$4',

    borderRadius: '8px',
    backgroundColor: '$gray700',
})

export const Header = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '$4',
})

export const InfoContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$1',
    flex: 1,

    strong: {
        fontSize: '$sm',
    },

    span: {
        fontSize: '$sm',
        color: '$gray400',
    },
})

export const Body = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '$4',
})

export const BookInfo = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    height: 'auto',

    strong: {
        fontSize: '$xs',
        color: '$gray100',
    },

    span: {
        fontSize: '$sm',
        color: '$gray400',
    },

    div: { marginTop: '$6' },
})

export const PopularBooks = styled('aside', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '@media(max-width: 1279px)': {
        width: '25rem',
        marginTop: '2rem',
    },

    '@media(min-width: 1280px)': {
        maxWidth: '20rem',
        marginTop: '8.5rem',
    },
})

export const TitleContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%',

    button: {
        all: 'unset',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: '$purple100',
        '&:hover': {
            color: '$gray400',
        },
    },
})

export const BooksContainer = styled('div', {
    marginTop: '1rem',
    '@media(max-width: 1279px)': {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
    },

    '@media(min-width: 1280px)': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
})

export const Book = styled('button', {
    all: 'unset',
    display: 'flex',
    flexDirection: 'row',

    '@media(max-width: 1279px)': {
        width: '45%',
        padding: '$2',
        gap: '$1',
    },

    '@media(min-width: 1280px)': {
        padding: '$5',
        gap: '$4',
    },

    borderRadius: '8px',
    backgroundColor: '$gray700',
})

export const PopularBookInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 'auto',

    strong: {
        fontSize: '$xs',
        color: '$gray100',
        alignSelf: 'flex-start',
    },

    span: {
        fontSize: '$sm',
        color: '$gray400',
        flex: 1,
    },
})
