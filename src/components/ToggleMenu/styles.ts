import { styled } from '../../styles'

export const Container = styled('button', {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: '1px solid $purple100',
    borderRadius: '$full',
    padding: '$3',

    svg: {
        color: '$gray100',
    },

    '@media(min-width: 1280px)': {
        display: 'none',
    },

    variants: {
        isMenuOpen: {
            true: {
                alignSelf: 'flex-end',
            },
            false: {
                alignSelf: 'flex-start',
            },
        },
    },
})
