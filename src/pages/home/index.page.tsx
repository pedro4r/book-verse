import { Sidebar } from '../../components/sidebar'
import { Container, Feed, PopularBooks } from './styles'

export default function home() {
    return (
        <Container>
            <Sidebar />
            <Feed>Inicio</Feed>
            <PopularBooks>Livros Populares</PopularBooks>
        </Container>
    )
}
