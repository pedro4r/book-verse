import { styled } from '../../styles'

export const Container = styled('main', {
    display: 'grid',
    gridTemplateColumns: '5fr 2fr',
    gap: '4rem',
    height: '100vh',

    padding: '6rem',

    alignItems: 'flex-start',
    justifyContent: 'center',
})

export const Feed = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

    paddingLeft: '10rem',

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

    strong: {
        fontSize: '$sm',
    },

    span: {
        fontSize: '$sm',
        color: '$gray400',
    },
})

export const StarRater = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '$2',
    marginLeft: 'auto',
    marginTop: 'auto',

    svg: {
        color: '$purple100',
    },
})

export const Body = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '$4',

    img: {
        width: '6.75rem',
        height: 'auto',
    },
})

export const BookInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'auto',

    strong: {
        fontSize: '$xs',
        color: '$gray100',
    },

    span: {
        fontSize: '$sm',
        color: '$gray400',
    },

    p: {
        fontSize: '$sm',
        marginTop: 'auto',
        color: '$gray300',

        a: {
            all: 'unset',
            fontWeight: 'bold',
            color: '$purple100',
        },
    },
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

    a: {
        all: 'unset',
        fontWeight: 'bold',
        color: '$purple100',
    },
})

export const Book = styled('div', {
    display: 'flex',
    flexDirection: 'row',

    gap: '$4',

    padding: '$5',
    minHeight: '8rem',
    marginTop: '$4',

    borderRadius: '8px',
    backgroundColor: '$gray700',

    img: {
        height: '5.8rem',
        width: '4rem',
    },
})

export const PopularBookInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'auto',

    strong: {
        fontSize: '$xs',
        color: '$gray100',
    },

    span: {
        fontSize: '$sm',
        color: '$gray400',
    },

    p: {
        fontSize: '$sm',
        marginTop: 'auto',
        color: '$gray300',

        a: {
            all: 'unset',
            fontWeight: 'bold',
            color: '$purple100',
        },
    },
})
