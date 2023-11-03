import { Star } from 'phosphor-react'
import { Container, StarButton } from './styles'
import { useState } from 'react'

interface StarRaterSize {
    size?: 'sm' | 'md'
}

export function StarRater({ size = 'sm' }: StarRaterSize) {
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
            <StarButton
                onClick={() => handleStarRatingEnable(1)}
                onMouseOver={() => handleOnMouseOver(1)}
            >
                <Star weight={starRateCount >= 1 ? 'fill' : 'thin'} />
            </StarButton>
            <StarButton
                onClick={() => handleStarRatingEnable(2)}
                onMouseOver={() => handleOnMouseOver(2)}
            >
                <Star weight={starRateCount >= 2 ? 'fill' : 'thin'} />
            </StarButton>
            <StarButton
                onClick={() => handleStarRatingEnable(3)}
                onMouseOver={() => handleOnMouseOver(3)}
            >
                <Star weight={starRateCount >= 3 ? 'fill' : 'thin'} />
            </StarButton>
            <StarButton
                onClick={() => handleStarRatingEnable(4)}
                onMouseOver={() => handleOnMouseOver(4)}
            >
                <Star weight={starRateCount >= 4 ? 'fill' : 'thin'} />
            </StarButton>
            <StarButton
                onClick={() => handleStarRatingEnable(5)}
                onMouseOver={() => handleOnMouseOver(5)}
            >
                <Star weight={starRateCount === 5 ? 'fill' : 'thin'} />
            </StarButton>
        </Container>
    )
}
