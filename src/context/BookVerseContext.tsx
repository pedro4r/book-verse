import { createContext, ReactNode, useState } from 'react'

interface BookProfileModal {
    openStatus: boolean
    id: string
    imagUrl: string
}

interface BookVerseContextType {
    bookProfileState: BookProfileModal
    changeBookProfileState: (obj: BookProfileModal) => void
    isSignInBoxOpen: boolean
    changeSignInBoxOpenStatus: (status: boolean) => void
    isMenuOpen: boolean
    toggleMenuStatus: () => void
}

interface BookVerseContextProviderProps {
    children: ReactNode
}

export const BookVerseContext = createContext({} as BookVerseContextType)

export function BookVerseContextProvider({
    children,
}: BookVerseContextProviderProps) {
    const [bookProfileState, setBookProfileState] = useState<BookProfileModal>({
        openStatus: false,
        id: '',
        imagUrl: '',
    })
    const [isSignInBoxOpen, setIsSignInBoxOpen] = useState<boolean>(false)
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    function changeBookProfileState({
        openStatus,
        id,
        imagUrl,
    }: BookProfileModal) {
        setBookProfileState((prevState) => ({
            ...prevState,
            openStatus,
            id,
            imagUrl,
        }))
    }

    function changeSignInBoxOpenStatus(status: boolean) {
        setIsSignInBoxOpen(status)
    }

    function toggleMenuStatus() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <BookVerseContext.Provider
            value={{
                bookProfileState,
                changeBookProfileState,
                isSignInBoxOpen,
                changeSignInBoxOpenStatus,
                isMenuOpen,
                toggleMenuStatus,
            }}
        >
            {children}
        </BookVerseContext.Provider>
    )
}
