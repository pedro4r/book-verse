import Image from 'next/image'
import {
    Container,
    LoginButton,
    Mask,
    Menu,
    MenuButton,
    MenuOptions,
} from './styles'
import logo from '../../../public/logo.svg'
import iconBar from '../../../public/menu-icon-bar.svg'

import { Binoculars, ChartLineUp, SignOut, User } from 'phosphor-react'
import { useSession, signOut } from 'next-auth/react'
import { Avatar } from '../Avatar'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { BookVerseContext } from '../../context/BookVerseContext'

export function Sidebar() {
    const session = useSession()
    const router = useRouter()

    const { changeSignInBoxOpenStatus, isMenuOpen } =
        useContext(BookVerseContext)

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

    async function handleSignOut() {
        if (router.pathname === '/profile') {
            await router.push('/home').then(() => {
                signOut()
            })
        } else {
            signOut()
        }
    }

    return (
        <>
            <Container>
                <Menu showContainer={isMenuOpen}>
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
                        <LoginButton
                            onClick={() => handleSignOut()}
                            color='red'
                        >
                            <Avatar
                                avatarUrl={session.data.user.avatar_url}
                                avatarSize={'sm'}
                            />
                            <span>{userName}</span>
                            <SignOut size={24} />
                        </LoginButton>
                    ) : (
                        <LoginButton
                            color='green'
                            onClick={() => changeSignInBoxOpenStatus(true)}
                        >
                            Sign In
                            <SignOut size={24} />
                        </LoginButton>
                    )}
                </Menu>
            </Container>
            <Mask showContainer={isMenuOpen} />
        </>
    )
}
