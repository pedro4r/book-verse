import { styled } from '@stitches/react'

export const Container = styled('button', {
    all: 'unset',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: '1px solid $purple100',
    borderRadius: '$full',
    padding: '$3',

    zIndex: 200,
    alignSelf: 'flex-start',

    svg: {
        color: '$gray100',
    },

    '@media(min-width: 1280px)': {
        display: 'none',
    },

    variants: {
        isMenuOpen: {
            true: {
                left: 280,
                transition: 'left 0.5s',
                top: 0,
            },
            false: {
                left: 0,
                transition: 'left 0.5s',
            },
        },
    },
    defaultVariants: {
        isMenuOpen: false,
    },
})
