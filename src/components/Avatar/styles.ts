import { styled } from '../../styles'

export const AvatarContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '$full',
    overflow: 'hidden',
    padding: '1px',

    variants: {
        avatarMode: {
            withAvatar: {
                backgroundImage: 'linear-gradient(90deg, #7FD0CC, #9694F5)',
            },
            withoutAvatar: {
                backgroundColor: '$purple200',
                svg: {
                    color: '$purple100',
                },
            },
        },

        sizeOfAvatar: {
            sm: {
                height: '2.5rem',
                width: '2.5rem',
            },
            md: {
                height: '4.5rem',
                width: '4.5rem',
            },
        },
    },

    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 'inherit',
    },
})
