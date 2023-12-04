import { List, X } from 'phosphor-react'
import { Container } from './styles'
import { useContext, useEffect } from 'react'
import { BookVerseContext } from '../../context/BookVerseContext'
import { disableBodyScroll, enableBodyScroll } from '../../styles/global'

export function ToggleMenu() {
    const { isMenuOpen, toggleMenuStatus } = useContext(BookVerseContext)

    useEffect(() => {
        if (isMenuOpen) {
            disableBodyScroll()
        } else {
            enableBodyScroll()
        }
    }, [isMenuOpen])
    return (
        <Container
            isMenuOpen={isMenuOpen}
            onClick={() => {
                toggleMenuStatus()
            }}
        >
            {isMenuOpen ? (
                <X size={25} weight='regular' />
            ) : (
                <List size={25} weight='regular' />
            )}
        </Container>
    )
}
