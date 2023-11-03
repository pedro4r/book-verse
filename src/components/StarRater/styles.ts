import { styled } from '../../styles'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '$2',

    variants: {
        size: {
            sm: {
                svg: {
                    width: 16,
                    height: 16,
                },
            },
            md: {
                svg: {
                    width: 28,
                    height: 28,
                },
            },
        },
        enable: {
            true: {},
            false: {},
        },
    },
})

export const StarButton = styled('button', {
    all: 'unset',
    cursor: 'pointer',

    svg: {
        color: '$purple100',
    },

    ':active': {
        color: '$purple200',
    },
})
