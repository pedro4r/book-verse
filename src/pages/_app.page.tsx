import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { BookVerseContextProvider } from '../context/BookVerseContext'
import { SignInBox } from '../components/SignInBox'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/react-query'

globalStyles()

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <SessionProvider session={session}>
                <BookVerseContextProvider>
                    <SignInBox />
                    <Component {...pageProps} />
                </BookVerseContextProvider>
            </SessionProvider>
        </QueryClientProvider>
    )
}
