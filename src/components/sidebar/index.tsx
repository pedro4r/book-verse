import Image from 'next/image'
import { Container, Explore, Home, LoginButton, MenuOptions } from './styles'
import logo from '../../../public/logo.svg'
import iconBar from '../../../public/menu-icon-bar.svg'

import { Binoculars, ChartLineUp, SignOut } from 'phosphor-react'
import { useSession } from 'next-auth/react'

export function Sidebar() {
    const session = useSession()
    const isSignedIn = session.status === 'authenticated'
    return (
        <Container>
            <Image src={logo} priority alt='Book verse logo' />
            <MenuOptions>
                <Home>
                    <Image src={iconBar} priority alt='' />
                    <ChartLineUp size={24} />
                    Home
                </Home>
                <Explore>
                    <Image src={iconBar} priority alt='' />
                    <Binoculars size={24} />
                    Explore
                </Explore>
            </MenuOptions>
            {isSignedIn ? (
                <LoginButton>
                    Sign Out
                    <SignOut size={24} />
                </LoginButton>
            ) : (
                <LoginButton>
                    Sign In
                    <SignOut size={24} />
                </LoginButton>
            )}
        </Container>
    )
}
