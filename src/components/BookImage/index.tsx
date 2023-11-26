import Image from 'next/image'
import { ImageContainer } from './styles'

interface BookImageInterface {
    width: number
    height: number
    imgUrl: string
}

export function BookImage({ width, height, imgUrl }: BookImageInterface) {
    return (
        <ImageContainer>
            <Image src={imgUrl} alt='' width={width} height={height} />
        </ImageContainer>
    )
}
