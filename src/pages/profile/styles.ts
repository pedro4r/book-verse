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

    overflow: 'auto',

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
    img: {
        width: '6.75rem',
        height: 'auto',
    },
})

export const TitleInfo = styled('div', {
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
    gap: '$8',

    marginTop: '4.4rem',

    borderLeft: '1px solid $gray700',
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
