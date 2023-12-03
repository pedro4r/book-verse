import { styled } from '../../styles'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Container = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',

    justifyContent: 'center',

    '@media(max-width: 1279px)': {
        marginTop: '6rem',
        padding: '1rem',
        alignItems: 'center',
    },

    '@media(min-width: 1280px)': {
        margin: '4.5rem 6rem 3rem 20.5rem ',
    },
})

export const ExploreContainer = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

    width: '100%',

    '> span': {
        marginTop: '$10',
    },

    '@media(min-width: 1280px)': {
        overflow: 'auto',
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

    h2: {
        '@media(max-width: 1279px)': {
            marginRight: '$7',
        },
    },
})

export const FormContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 'auto',

    height: '3rem',

    padding: '$4',

    border: '1px solid $gray500',
    borderRadius: '4px',

    '@media(max-width: 1279px)': {
        flex: 1,
        alignSelf: 'flex-end',
    },

    '@media(min-width: 1280px)': {
        width: '27rem',
    },

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

export const RadioGroupRoot = styled(RadioGroup.Root, {
    marginTop: '$10',

    '@media(max-width: 1279px)': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '$3',
    },

    '@media(min-width: 1280px)': {
        display: 'flex',
        flexDirection: 'row',
        gap: '$3',
    },
})

export const RadioGroupItem = styled(RadioGroup.Item, {
    all: 'unset',
    padding: '$1 $4 $1 $4',

    border: '1px solid $purple100',
    borderRadius: '999px',

    color: '$purple100',

    backgroundColor: 'transparent',
    cursor: 'pointer',

    '&[data-state="checked"]': {
        backgroundColor: '$purple200',
        color: '$gray100',
        border: '1px solid $purple200',
    },
})

export const RadioGroupIndicator = styled(RadioGroup.Indicator, {})

export const Label = styled('label', {
    cursor: 'pointer',
})

export const FilterAnswer = styled('div', {
    '@media(max-width: 1279px)': {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '$5',
    },

    '@media(min-width: 1280px)': {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '$5',
    },
})

export const Book = styled('div', {
    all: 'unset',
    cursor: 'pointer',

    height: '11.5rem',
    width: '20rem',

    borderRadius: '8px',
    backgroundColor: '$gray700',

    border: '1px solid transparent',

    '&:hover': {
        border: '1px solid $purple100',
        transform: 'scale(1.01)',
        transition: 'transform 0.5s',
    },
})

export const InfoContainer = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    padding: '$5',
    gap: '$4',
})

export const ReadLabel = styled('div', {
    position: 'absolute',
    right: 0,
    top: 0,

    backgroundColor: '$green300',

    padding: '$1 $3 $1 $3',
    borderRadius: '0 8px 0 4px',

    strong: {
        color: '$green100',
    },
})

export const BookInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 'auto',

    strong: {
        fontSize: '$md',
        color: '$gray100',
        alignSelf: 'flex-start',
        maxWidth: '6.3rem',
    },

    span: {
        fontSize: '$sm',
        color: '$gray400',
        flex: 1,
    },

    small: {
        fontSize: '$sm',
        color: '$gray400',
        marginTop: '$1',
    },
})
