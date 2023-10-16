import { styled } from '../../styles'

export const Container = styled('main', {
    width: '100vw',
    height: '100vh',

    display: 'grid',
    gridTemplateColumns: '3fr 5fr',
    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'hidden',

    '@media(max-width: 768px)': {
        gridTemplateColumns: '1fr',
    },
})

export const ImageContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: 'calc(100vh - 2.5rem)',

    paddingLeft: '1.25rem',

    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    '@media(max-width: 768px)': {
        display: 'none',
    },
})

export const LoginContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    div: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '23.25rem',
        marginBottom: '2.5rem',
    },

    button: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '1.25rem',
        borderRadius: '8px',

        marginTop: '0.5rem',
        paddingLeft: '1.5rem',

        width: '23.25rem',
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
