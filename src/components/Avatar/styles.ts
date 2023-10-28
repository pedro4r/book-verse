import { styled } from '../../styles'

export const AvatarContainer = styled('div', {
    display: 'inline-block',
    borderRadius: '$full',
    height: '2.5rem',
    width: '2.5rem',
    overflow: 'hidden',
    padding: '1px',
    backgroundImage: 'linear-gradient(90deg, #7FD0CC, #9694F5)',

    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 'inherit',
    },
})
