import { styled } from '../../styles'

export const Box = styled('div', {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$4',

    width: '25rem',
    height: '21.06rem',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%)',

    padding: '$4',

    backgroundColor: '$gray700',
    backgroundOpacity: '0.3',

    borderRadius: '8px',

    zIndex: 1001,

    variants: {
        open: {
            true: {
                display: 'block',
            },
            false: {
                display: 'none',
            },
        },
    },
})

export const CloseButton = styled('button', {
    all: 'unset',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '$2',

    backgroundColor: '$gray600',
    borderRadius: 4,

    marginLeft: 'auto',
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: '$gray500',
    },
})

export const LoginContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$4',

    marginTop: '$4',

    button: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '1.25rem',
        borderRadius: '8px',

        marginTop: '0.5rem',
        paddingLeft: '1.5rem',

        width: '100%',
        height: '4.5rem',
        backgroundColor: '$gray600',

        '&:hover': {
            backgroundColor: '$gray500',
        },

        border: 'none',
        cursor: 'pointer',

        strong: {
            color: '$gray100',
            fontSize: '$md',
        },
    },
})

export const Mask = styled('div', {
    variants: {
        open: {
            true: {
                position: 'fixed',
                height: '100vh',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1000,
                backgroundColor: '$blackTransparent',
            },
            false: {
                display: 'none',
            },
        },
    },
})
