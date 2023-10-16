import Image from 'next/image'
import homePageImage from '../../../public/home-page-image.png'
import googleIcon from '../../../public/logos_google-icon.png'
import githubIcon from '../../../public/akar-icons_github-fill.png'
import rocketLaunch from '../../../public/RocketLaunch.png'
import { Container, ImageContainer, LoginContainer } from './styles'

export default function Home() {
    return (
        <Container>
            <ImageContainer>
                <Image src={homePageImage} priority alt='Book verse logo' />
            </ImageContainer>

            <LoginContainer>
                <div>
                    <h1>Welcome!</h1>
                    <span>Sign up or access as guest</span>
                </div>

                <button>
                    <Image src={googleIcon} priority alt='Book verse logo' />
                    <strong>Sign up with Google</strong>
                </button>
                <button>
                    <Image src={githubIcon} priority alt='Book verse logo' />
                    <strong>Sign up with Github</strong>
                </button>
                <button>
                    <Image src={rocketLaunch} priority alt='Book verse logo' />
                    <strong>Access as Guest</strong>
                </button>
            </LoginContainer>
        </Container>
    )
}
