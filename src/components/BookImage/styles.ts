import { styled } from '../../styles'

export const ImageContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '4px',

    minHeight: '5.8rem',
    minWidth: '4rem',

    maxHeight: '15.12rem',
    maxWidth: '10.75rem',

    img: {
        objectFit: 'fill',
    },
})
