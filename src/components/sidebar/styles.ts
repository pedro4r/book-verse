import { styled } from '../../styles'
import sidebarBackground from '../../../public/bg.png'

export const Container = styled('aside', {
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',
    gap: '$10',

    padding: '$5',

    height: '100vh',
    width: '100%',
    background: `url(${sidebarBackground.src}) no-repeat center center`,
})

export const MenuOptions = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
})

export const Home = styled('button', {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    gap: '$2',

    marginBottom: '$3',
})
export const Explore = styled('button', {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    gap: '$2',

    marginBottom: '$3',
})

export const LoginButton = styled('button', {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    gap: '$2',

    marginBottom: '$3',

    marginTop: 'auto',

    svg: {
        color: '$green100',
    },
})
