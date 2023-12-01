import { List, X } from 'phosphor-react'
import { Container } from './styles'
import { useContext } from 'react'
import { BookVerseContext } from '../../context/BookVerseContext'

export function ToggleMenu() {
    const { isMenuOpen, toggleMenuStatus } = useContext(BookVerseContext)
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
