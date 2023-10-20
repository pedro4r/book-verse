import { styled } from '../../styles'
import sidebarBackground from '../../../public/bg.png'

export const Container = styled('aside', {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',

    height: 'calc(100vh - 2.5rem)',

    alignItems: 'center',
    gap: '$10',

    padding: '$5',
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
})

export const Home = styled(BaseButton, {})

export const Explore = styled(BaseButton, {})

export const LoginButton = styled(BaseButton, {
    margin: 'auto $3',

    svg: {
        color: '$green100',
    },
})
