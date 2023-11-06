import { Star } from 'phosphor-react'
import { Container, StarButton } from './styles'
import { useState } from 'react'

interface StarRating {
    size?: 'sm' | 'md'
    enableChange?: boolean
}

export function StarRater({ size = 'sm', enableChange = false }: StarRating) {
    const [starRateCount, setStarRateCount] = useState<number>(0)
    const [starRateCountPreview, setStarRateCountPreview] = useState<number>(0)
    const [isStarRatingEnable, setIsStarRatingEnable] = useState<boolean>(true)

    function handleOnMouseOver(starNumber: number) {
        if (isStarRatingEnable) {
            setStarRateCountPreview(starNumber)
        }
    }

    function handleStarRatingEnable(starNumber: number) {
        setIsStarRatingEnable(false)
        setStarRateCount(starNumber)
        setStarRateCountPreview(starNumber)
    }

    function resetStarRateCount() {
        setStarRateCountPreview(0)
    }

    return (
        <Container size={size} onMouseLeave={() => resetStarRateCount()}>
            {Array.from(Array(5).keys()).map((star) => (
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
                    <Star
                        weight={
                            starRateCount
                                ? starRateCount >= star
                                    ? 'fill'
                                    : 'thin'
                                : starRateCountPreview >= star
                                ? 'fill'
                                : 'thin'
                        }
                    />
                </StarButton>
            ))}
        </Container>
    )
}
