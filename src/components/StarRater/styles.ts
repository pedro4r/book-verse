import { styled } from '../../styles'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioGroupRoot = styled(RadioGroup.Root, {
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
    },
})

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
    },
})

export const RadioGroupItem = styled(RadioGroup.Item, {
    all: 'unset',

    svg: {
        color: '$purple100',
        '&:hover': {
            color: '$gray300',
        },
    },

    cursor: 'pointer',
    ':active': {
        color: '$purple200',
    },
})

export const Stars = styled('div', {
    all: 'unset',

    svg: {
        color: '$purple100',
    },
})
