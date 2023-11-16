import { Star } from 'phosphor-react'
import { Container, RadioGroupItem, RadioGroupRoot, Stars } from './styles'
import { useState, ComponentProps, ChangeEvent } from 'react'
import { Controller, useForm, useFormContext } from 'react-hook-form'

interface StarRating {
    size?: 'sm' | 'md'
    enableChange?: boolean
    rate?: number
    onChange?: (...event: any[]) => void
}

export type CheckStarsProps = ComponentProps<typeof RadioGroupRoot>

export function StarRater({
    size = 'sm',
    enableChange = false,
    rate = 0,
    onChange,
}: StarRating) {
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

    function handleOnChange() {
        if (onChange) {
            onChange(starRateCount + 1) // Passar o novo valor ou a informação relevante para onChange
        }
    }

    return (
        <>
            {enableChange ? (
                <RadioGroupRoot
                    size={size}
                    onMouseLeave={() => resetStarRateCount()}
                    aria-label='Stars'
                    name='stars'
                    onChange={handleOnChange}
                >
                    {Array.from(Array(5).keys()).map((star) => (
                        <RadioGroupItem
                            value={String(star + 1)}
                            key={star}
                            onClick={() => handleStarRatingEnable(star)}
                            onMouseOver={() => handleOnMouseOver(star)}
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
                        </RadioGroupItem>
                    ))}
                </RadioGroupRoot>
            ) : (
                <Container
                    size={size}
                    onMouseLeave={() => resetStarRateCount()}
                >
                    <Stars>
                        {Array.from(Array(5).keys()).map((star) => (
                            <Star
                                key={star}
                                weight={rate >= star ? 'fill' : 'thin'}
                            />
                        ))}
                    </Stars>
                </Container>
            )}
        </>
    )
}
