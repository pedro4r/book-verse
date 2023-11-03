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

    let userName = session.data?.user?.name
    if (userName && userName.length > 6) {
        userName = userName?.slice(0, 5) + '...'
    }

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
            <Image src={logo} alt='Book verse logo' />
            <MenuOptions>
                <MenuButton
                    onClick={handleHome}
                    selector={router.asPath === '/home'}
                >
                    <Image src={iconBar} alt='' />
                    <ChartLineUp size={24} />
                    Home
                </MenuButton>

                <MenuButton
                    onClick={handleExplore}
                    selector={router.asPath === '/explore'}
                >
                    <Image src={iconBar} alt='' />
                    <Binoculars size={24} />
                    Explore
                </MenuButton>

                {isSignedIn ? (
                    <MenuButton
                        onClick={handleProfile}
                        selector={router.asPath === '/profile'}
                    >
                        <Image src={iconBar} alt='' />
                        <User size={24} />
                        Profile
                    </MenuButton>
                ) : (
                    <></>
                )}
            </MenuOptions>
            {isSignedIn ? (
                <LoginButton color='red'>
                    <Avatar avatarSize={'sm'} />
                    <span>{userName}</span>
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
