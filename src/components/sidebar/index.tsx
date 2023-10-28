import Image from 'next/image'
import { Container, LoginButton, MenuButton, MenuOptions } from './styles'
import logo from '../../../public/logo.svg'
import iconBar from '../../../public/menu-icon-bar.svg'

import { Binoculars, ChartLineUp, SignOut, User } from 'phosphor-react'
import { useSession } from 'next-auth/react'
import { Avatar } from '../Avatar'
import { useRouter } from 'next/router'

export function Sidebar() {
    const session = useSession()
    const router = useRouter()

    const isSignedIn = session.status === 'authenticated'

    async function handleHome() {
        await router.push('/home')
    }

    async function handleExplore() {
        await router.push('/explore')
    }

    async function handleProfile() {
        await router.push('/profile')
    }

    return (
        <Container>
            <Image src={logo} priority alt='Book verse logo' />
            <MenuOptions>
                <MenuButton
                    onClick={handleHome}
                    selector={router.asPath === '/home'}
                >
                    <Image src={iconBar} priority alt='' />
                    <ChartLineUp size={24} />
                    Home
                </MenuButton>

                <MenuButton
                    onClick={handleExplore}
                    selector={router.asPath === '/explore'}
                >
                    <Image src={iconBar} priority alt='' />
                    <Binoculars size={24} />
                    Explore
                </MenuButton>

                {isSignedIn ? (
                    <MenuButton
                        onClick={handleProfile}
                        selector={router.asPath === '/profile'}
                    >
                        <Image src={iconBar} priority alt='' />
                        <User size={24} />
                        Profile
                    </MenuButton>
                ) : (
                    <></>
                )}
            </MenuOptions>
            {isSignedIn ? (
                <LoginButton color='red'>
                    <Avatar />
                    <span>Pedro</span>
                    <SignOut size={24} />
                </LoginButton>
            ) : (
                <LoginButton color='green'>
                    Sign In
                    <SignOut size={24} />
                </LoginButton>
            )}
        </Container>
    )
}
