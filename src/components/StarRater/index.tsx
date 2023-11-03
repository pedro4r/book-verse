import { Star } from 'phosphor-react'
import { Container, StarButton } from './styles'
import { useState } from 'react'

interface StarRating {
    size?: 'sm' | 'md'
    enableChange?: boolean
}

export function StarRater({ size = 'sm', enableChange = false }: StarRating) {
    const [starRateCount, setStarRateCount] = useState<number>(1)
    const [isStarRatingEnable, setIsStarRatingEnable] = useState<boolean>(true)

    function handleOnMouseOver(starNumber: number) {
        if (isStarRatingEnable) {
            setStarRateCount(starNumber)
        }
    }

    function handleStarRatingEnable(starNumber: number) {
        setIsStarRatingEnable(false)
        setStarRateCount(starNumber)
    }

    return (
        <Container size={size}>
            {Array.from(Array(4).keys()).map((star) => (
                <StarButton
                    key={star}
                    ifEnableChange={enableChange}
                    onClick={() =>
                        enableChange ? handleStarRatingEnable(star) : ''
                    }
                    onMouseOver={() =>
                        enableChange ? handleOnMouseOver(star) : ''
                    }
                >
                    <Star weight={starRateCount >= star ? 'fill' : 'thin'} />
                </StarButton>
            ))}
        </Container>
    )
}
