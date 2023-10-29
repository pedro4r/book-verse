import { Star } from 'phosphor-react'
import { Container } from './styles'

export function StarRater() {
    return (
        <Container>
            <Star weight='fill' size={14} />
            <Star size={14} />
            <Star size={14} />
            <Star size={14} />
            <Star size={14} />
        </Container>
    )
}
