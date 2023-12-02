import { keyframes, styled } from '../../styles'
import sidebarBackground from '../../../public/bg.png'

export const Container = styled('aside', {
    position: 'absolute',

    '@media(max-width: 1279px)': {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        marginTop: '-20rem',
    },

    zIndex: 100,
    overflowX: 'hidden',
    overflowY: 'hidden',

    transition: 'opacity 0.5s ease-in -out, visibility 0.5s ease -in -out',

    variants: {
        showContainer: {
            false: {
                '@media(max-width: 1279px)': {
                    visibility: 'hidden',
                },
                '@media(min-width: 1280px)': {
                    visibility: 'visible',
                },
            },
            true: {
                visibility: 'visible',
            },
        },
    },
})

export const Menu = styled('div', {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',

    top: 0,

    zIndex: 899,

    height: 'calc(100vh - 2.5rem)',
    width: '232px',

    alignItems: 'center',
    gap: '$10',

    paddingTop: '$10',
    paddingBottom: '$6',
    margin: '$4',
    borderRadius: '12px',

    background: `url(${sidebarBackground.src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',

    transition: '0.5s',

    variants: {
        showContainer: {
            true: {
                left: 0,
            },
            false: {
                left: -300,
                '@media(max-width: 1279px)': {
                    left: -300,
                },
                '@media(min-width: 1280px)': {
                    left: 0,
                },
            },
        },
    },
    defaultVariants: {
        showContainer: false,
    },
})

export const MenuOptions = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '$4',
    flex: 1,
})

const BaseButton = styled('button', {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    gap: '$4',

    marginBottom: '$3',
    cursor: 'pointer',

    '&:hover': {
        color: '$purple100',
    },
})

export const MenuButton = styled(BaseButton, {
    variants: {
        selector: {
            true: {
                color: '$gray100',
            },
            false: {
                color: '$gray400',
                img: { visibility: 'hidden' },
            },
        },
    },
})

export const LoginButton = styled(BaseButton, {
    margin: 'auto $3',
    '&:hover': {
        color: '$gray400',
        svg: {
            color: '$green200',
        },
    },

    variants: {
        color: {
            green: {
                svg: {
                    color: '$green100',
                },
            },
            red: {
                svg: { color: '$red' },
            },
        },
    },
})
