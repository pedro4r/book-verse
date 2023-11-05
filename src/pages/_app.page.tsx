import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { BookVerseContextProvider } from '../context/BookVerseContext'
import { SignInBox } from '../components/SignInBox'

globalStyles()

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <SessionProvider session={session}>
            <BookVerseContextProvider>
                <SignInBox />
                <Component {...pageProps} />
            </BookVerseContextProvider>
        </SessionProvider>
    )
}
