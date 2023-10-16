import Image from 'next/image'
import { Container, Explore, Home, LoginButton, MenuOptions } from './styles'
import logo from '../../../public/logo.svg'

import { Binoculars, ChartLineUp, SignOut } from 'phosphor-react'

export function Sidebar() {
    return (
        <Container>
            <Image src={logo} priority alt='Book verse logo' />
            <MenuOptions>
                <Home>
                    <ChartLineUp size={24} />
                    Home
                </Home>
                <Explore>
                    <Binoculars size={24} />
                    Explore
                </Explore>
            </MenuOptions>
            <LoginButton>
                Login
                <SignOut size={24} />
            </LoginButton>
        </Container>
    )
}
