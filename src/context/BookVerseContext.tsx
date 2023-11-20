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

    const [isSignInBoxOpen, setIsSignInBoxOpen] = useState<boolean>(false)

    function changeSignInBoxOpenStatus(status: boolean) {
        setIsSignInBoxOpen(status)
    }

    return (
        <BookVerseContext.Provider
            value={{
                bookProfileState,
                changeBookProfileState,
                isSignInBoxOpen,
                changeSignInBoxOpenStatus,
            }}
        >
            {children}
        </BookVerseContext.Provider>
    )
}
