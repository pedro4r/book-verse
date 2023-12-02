import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import {
    BookVerseContext,
    BookVerseContextProvider,
} from '../context/BookVerseContext'
import { SignInBox } from '../components/SignInBox'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/react-query'
import { useContext, useEffect } from 'react'
import { Router, useRouter } from 'next/router'
import '../lib/dayjs'
import { Sidebar } from '../components/Sidebar'

globalStyles()

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    const router = useRouter()

    useEffect(() => {
        if (router.asPath.includes('#')) {
            router.replace(router.asPath.split('#')[0])
        }
    }, [router])

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
