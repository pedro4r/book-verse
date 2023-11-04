import { createContext, ReactNode, useState } from 'react'

interface BookVerseContextType {
    isBookContainerOpen: boolean
    changeBookContainerOpenStatus: (status: boolean) => void
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

    return (
        <BookVerseContext.Provider
            value={{
                isBookContainerOpen,
                changeBookContainerOpenStatus,
            }}
        >
            {children}
        </BookVerseContext.Provider>
    )
}
