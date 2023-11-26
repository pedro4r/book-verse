import { useState } from 'react'
import { TextContainer } from './styles'

interface ParagraphInterface {
    textParagraph: string
}

export function ParagraphControlled({ textParagraph }: ParagraphInterface) {
    const [showFullText, setShowFullText] = useState(false)
    const toggleText = () => {
        setShowFullText(!showFullText)
    }
    return (
        <TextContainer>
            <p>
                {showFullText
                    ? textParagraph
                    : `${textParagraph.slice(0, 300)}${
                          textParagraph.length > 300 ? '...' : ''
                      }`}{' '}
                {textParagraph.length > 300 && (
                    <button onClick={toggleText}>
                        {showFullText ? 'see less' : 'see more'}
                    </button>
                )}
            </p>
        </TextContainer>
    )
}
