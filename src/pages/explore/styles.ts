import { styled } from '../../styles'

export const Container = styled('main', {
    display: 'flex',
    flexDirection: 'column',

    width: 'calc(100vw - 232px - 96px)',
    gap: '4rem',

    margin: '6rem',
    paddingLeft: '232px',

    alignItems: 'flex-start',
    justifyContent: 'center',
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

export const PageTitle = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

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

    marginLeft: 'auto',

    height: '3rem',
    width: '27rem',

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

export const FilterBar = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '$3',

    marginTop: '$10',
})

export const FilterButton = styled('button', {
    all: 'unset',
    padding: '$1 $4 $1 $4',

    border: '1px solid $purple100',
    borderRadius: '999px',

    color: '$purple100',

    cursor: 'pointer',

    variants: {
        active: {
            true: {
                backgroundColor: '$purple200',
                color: '$gray100',
                border: 'none',
            },
            false: {
                backgroundColor: 'transparent',
            },
        },
    },
})

export const FilterAnswer = styled('div', {
    display: 'grid',
    gridTemplateRows: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '10px',
})

export const Book = styled('div', {
    display: 'flex',
    flexDirection: 'row',

    gap: '$4',

    padding: '$5',
    height: '11.5rem',
    marginTop: '$4',
    width: '20rem',

    borderRadius: '8px',
    backgroundColor: '$gray700',

    img: {
        height: '9.5rem',
        width: '6.75rem',
    },
})

export const PopularBookInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 'auto',

    strong: {
        fontSize: '$md',
        color: '$gray100',
        alignSelf: 'flex-start',
    },

    span: {
        fontSize: '$sm',
        color: '$gray400',
        flex: 1,
    },
})
