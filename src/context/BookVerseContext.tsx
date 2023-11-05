import { createContext, ReactNode, useState } from 'react'

interface BookVerseContextType {
    isBookContainerOpen: boolean
    changeBookContainerOpenStatus: (status: boolean) => void
    isSignInBoxOpen: boolean
    changeSignInBoxOpenStatus: (status: boolean) => void
}

interface BookVerseContextProviderProps {
    children: ReactNode
}

export const BookVerseContext = createContext({} as BookVerseContextType)

export function BookVerseContextProvider({
    children,
}: BookVerseContextProviderProps) {
    const [isBookContainerOpen, setIsBookContainerOpen] =
        useState<boolean>(false)

    function changeBookContainerOpenStatus(status: boolean) {
        setIsBookContainerOpen(status)
    }

    const [isSignInBoxOpen, setIsSignInBoxOpen] = useState<boolean>(false)

    function changeSignInBoxOpenStatus(status: boolean) {
        setIsSignInBoxOpen(status)
    }

    return (
        <BookVerseContext.Provider
            value={{
                isBookContainerOpen,
                changeBookContainerOpenStatus,
                isSignInBoxOpen,
                changeSignInBoxOpenStatus,
            }}
        >
            {children}
        </BookVerseContext.Provider>
    )
}
