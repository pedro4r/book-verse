import { styled } from '../../styles'
import sidebarBackground from '../../../public/bg.png'

export const Container = styled('aside', {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',

    height: 'calc(100vh - 2.5rem)',
    width: '232px',

    alignItems: 'center',
    gap: '$10',

    paddingTop: '$10',
    paddingBottom: '$6',
    margin: '$5',
    borderRadius: '12px',

    background: `url(${sidebarBackground.src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',
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

    variants: {
        color: {
            green: {
                svg: { color: '$green100' },
            },
            red: {
                svg: { color: '$red' },
            },
        },
    },
})
