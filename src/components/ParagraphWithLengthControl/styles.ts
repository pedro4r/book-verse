import { styled } from '../../styles'

export const TextContainer = styled('div', {
    p: {
        fontSize: '$sm',
        marginTop: 'auto',
        color: '$gray300',
        button: {
            all: 'unset',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: '$purple100',
            '&:hover': {
                color: '$gray300',
            },
        },
    },
})
