import { styled } from '../../styles'

export const Container = styled('main', {
    position: 'relative',
    '@media(max-width: 1279px)': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2rem',
    },

    '@media(min-width: 1280px)': {
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
        marginLeft: '9rem',
        marginTop: '2.5rem',
        padding: '1rem',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
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

export const FormContainer = styled('form', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    height: '3rem',
    width: '100%',

    marginTop: '$10',
    padding: '$4',

    border: '1px solid $gray500',
    borderRadius: '4px',

    input: {
        all: 'unset',
        width: '100%',
        height: '100%',
        background: 'transparent',
        outline: 'none',

        '&::placeholder': {
            color: '$gray400',
        },
    },

    svg: {
        color: '$gray500',
    },

    '&:focus-within': {
        border: '1px solid $green200',
        svg: {
            color: '$green200',
        },
    },
})

export const Reviews = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    maxWidth: '39rem',

    '> span': {
        marginTop: '$10',
    },
})

export const ReviewContainer = styled('div', {
    marginTop: '$8',
    width: '100%',

    span: {
        color: '$gray300',
    },
})

export const ReviewBody = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    marginTop: '$2',
    padding: '$6',

    backgroundColor: '$gray700',
    borderRadius: '8px',

    p: {
        marginTop: '$6',
        color: '$gray300',
    },
})

export const Header = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '$6',
    width: '100%',
})

export const TitleInfo = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // gap: '$6',
    width: '100%',

    strong: {
        alignSelf: 'flex-start',
        marginBottom: '0.1rem',
    },

    span: {
        alignSelf: 'flex-start',
        flex: 1,
        color: '$gray400',
    },
})

export const UserInfoContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$8',

    padding: '0 $10 0 $10',

    maxWidth: '19.25rem',

    '@media(max-width: 1279px)': {
        marginTop: '1rem',
    },

    '@media(min-width: 1280px)': {
        marginTop: '4.4rem',
        borderLeft: '1px solid $gray700',
    },
})

export const ProfileInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    strong: {
        marginTop: '$5',
    },

    span: {
        color: '$gray400',
    },
})

export const StatsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    gap: '$10',
})

export const ReadingStats = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    gap: '$5',

    svg: {
        color: '$green100',
    },
})

export const Stats = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    strong: {
        fontSize: '$lg',
        textTransform: 'capitalize',
    },

    span: {
        fontSize: '$sm',
    },
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
