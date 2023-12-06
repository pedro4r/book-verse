import Image from 'next/image'
import homePageImage from '../../../public/home-page-image.png'
import googleIcon from '../../../public/logos_google-icon.png'
import githubIcon from '../../../public/akar-icons_github-fill.png'
import rocketLaunch from '../../../public/RocketLaunch.png'
import { Container, ImageContainer, LoginContainer } from './styles'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Register() {
    const session = useSession()
    const router = useRouter()

    async function handleConnectGoogle() {
        if (session.status !== 'unauthenticated') {
            await signOut()
        }
        await signIn('google', { callbackUrl: '/home' })
    }

    async function handleConnectGithub() {
        if (session.status !== 'unauthenticated') {
            await signOut()
        }
        await signIn('github', { callbackUrl: '/home' })
    }

    async function handleOpenHomePage() {
        await router.push('/home')
    }

    if (session.data) {
        handleOpenHomePage()
    } else {
        return (
            <Container>
                <ImageContainer>
                    <Image
                        src={homePageImage}
                        // width='598'
                        // height='912'
                        priority
                        alt='Book verse logo'
                    />
                </ImageContainer>

                <LoginContainer>
                    <div>
                        <h1>Welcome!</h1>
                        <span>Sign up or access as guest</span>
                    </div>

                    <button
                        onClick={() => {
                            handleConnectGoogle()
                        }}
                    >
                        <Image
                            src={googleIcon}
                            priority
                            alt='Book verse logo'
                        />
                        <strong>Sign up with Google</strong>
                    </button>
                    <button
                        onClick={() => {
                            handleConnectGithub()
                        }}
                    >
                        <Image src={githubIcon} alt='Book verse logo' />
                        <strong>Sign up with Github</strong>
                    </button>
                    <button onClick={handleOpenHomePage}>
                        <Image
                            src={rocketLaunch}
                            priority
                            alt='Book verse logo'
                        />
                        <strong>Access as Guest</strong>
                    </button>
                </LoginContainer>
            </Container>
        )
    }
}
