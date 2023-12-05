import Image from 'next/image'
import { Box, CloseButton, LoginContainer, Mask } from './styles'
import { signIn, signOut, useSession } from 'next-auth/react'
import { X } from 'phosphor-react'
import googleIcon from '../../../public/logos_google-icon.png'
import githubIcon from '../../../public/akar-icons_github-fill.png'
import { useContext, useEffect } from 'react'
import { BookVerseContext } from '../../context/BookVerseContext'
import { useRouter } from 'next/router'
import { disableBodyScroll, enableBodyScroll } from '../../styles/global'

export function SignInBox() {
    const session = useSession()
    const router = useRouter()

    async function handleConnectGoogle() {
        await signIn('google')
    }

    async function handleConnectGithub() {
        if (session.status !== 'unauthenticated') {
            await signOut()
        }
        await signIn('github', { callbackUrl: '/home' })
    }

    const { isSignInBoxOpen, changeSignInBoxOpenStatus } =
        useContext(BookVerseContext)

    useEffect(() => {
        if (isSignInBoxOpen) {
            disableBodyScroll()
        } else {
            enableBodyScroll()
        }
    }, [isSignInBoxOpen])

    return (
        <>
            <Box open={isSignInBoxOpen}>
                <CloseButton onClick={() => changeSignInBoxOpenStatus(false)}>
                    <X size={24} weight='thin' />
                </CloseButton>
                <LoginContainer>
                    <strong>Sign in to review this book</strong>
                    <button
                        onClick={() => {
                            handleConnectGoogle()
                        }}
                    >
                        <Image src={googleIcon} priority alt='' />
                        <strong>Sign up with Google</strong>
                    </button>
                    <button
                        onClick={() => {
                            handleConnectGithub()
                        }}
                    >
                        <Image src={githubIcon} alt='' />
                        <strong>Sign up with Github</strong>
                    </button>
                </LoginContainer>
            </Box>
            <Mask open={isSignInBoxOpen}></Mask>
        </>
    )
}
