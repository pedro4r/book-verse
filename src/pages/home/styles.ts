import { styled } from '../../styles'

export const Container = styled('main', {
    display: 'grid',
    gridTemplateColumns: '6fr 3fr',
    gap: '4rem',
    height: '100vh',

    margin: '6rem',

    paddingLeft: '232px',

    alignItems: 'flex-start',
    justifyContent: 'center',
})

export const Feed = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

    overflow: 'auto',

    '> span': {
        marginTop: '$10',
    },

    // '&::-webkit-scrollbar': {
    //     width: '0',
    //     height: '0',
    // },
})

export const PageTitle = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$3',

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

export const PopularBooks = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})

export const TitleContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: '4.5rem',

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

export const Book = styled('button', {
    all: 'unset',
    display: 'flex',
    flexDirection: 'row',
    gap: '$4',

    padding: '$5',
    // height: '8rem',
    marginTop: '$4',

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
