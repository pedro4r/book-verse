import { styled } from '../../styles'

export const BookContainer = styled('div', {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',

    top: 0,
    right: 0,

    padding: '$10',

    backgroundColor: '$gray800',
    backgroundOpacity: '0.3',

    zIndex: 999,

    overflowY: 'scroll',

    '@media(max-width: 1279px)': {
        width: '100%',
        height: '100%',
    },

    '@media(min-width: 1280px)': {
        width: '41.25rem',
        height: '100%',
    },

    variants: {
        open: {
            true: {
                display: 'block',
            },
            false: {
                display: 'none',
            },
        },
    },
})

export const CloseButton = styled('button', {
    all: 'unset',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '$2',

    backgroundColor: '$gray600',
    borderRadius: 4,

    marginLeft: 'auto',
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: '$gray500',
    },
})

export const BookCard = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    marginTop: '$4',

    borderRadius: '10px',
    backgroundColor: '$gray700',
})

export const BookDetail = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    padding: '$5',
    gap: '$4',
})

export const CardInfo = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

    gap: '$8',

    width: '90%',
    marginTop: '$10',
    padding: '$6 0 $6 0',

    borderTop: '1px solid $gray600',

    alignSelf: 'center',
})

export const Databox = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$4',

    svg: {
        color: '$green100',
    },

    div: {
        display: 'flex',
        flexDirection: 'column',

        span: {
            fontSize: '$sm',
            color: '$gray300',
        },

        strong: {
            fontSize: '$lg',
            textTransform: 'capitalize',
        },
    },
})

export const Info = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 'auto',

    strong: {
        fontSize: '$xl',
        color: '$gray100',
        alignSelf: 'flex-start',
    },

    span: {
        fontSize: '$md',
        color: '$gray400',
        flex: 1,
    },

    small: {
        fontSize: '$sm',
        color: '$gray400',
        marginTop: '$1',
    },
})

export const ReviewContainer = styled('div', {
    marginTop: '$10',
    gap: '$6',

    span: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export const NewReviewButton = styled('button', {
    all: 'unset',
    fontWeight: 'bold',
    color: '$purple100',

    cursor: 'pointer',

    '&:hover': {
        color: '$gray300',
    },

    variants: {
        show: {
            true: {
                display: 'block',
            },
            false: {
                display: 'none',
            },
        },
    },
})

export const NewReview = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '$4',

    padding: '$6',

    backgroundColor: '$gray700',
    borderRadius: '8px',

    variants: {
        open: {
            true: {
                display: 'block',
            },
            false: {
                display: 'none',
            },
        },
    },
})

export const NewReviewHeader = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '@media(max-width: 1279px)': {
        flexDirection: 'column',
    },

    '@media(min-width: 1280px)': {
        flexDirection: 'row',
    },

    gap: '$4',

    strong: {
        flex: 1,
    },
})

export const ReviewFormContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    marginTop: '$6',
})

export const TextAreaContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    height: '10.25rem',
    width: '100%',

    backgroundColor: '$gray800',
    border: '1px solid $gray500',
    borderRadius: '4px',

    '&:focus-within': {
        border: '1px solid $green200',
    },

    textarea: {
        all: 'unset',
        height: '100%',
        maxWidth: '100%',
        margin: '$5 $5 $1 $5',
        outline: 'none',
        lineHeight: '1.4',
        resize: 'none',
    },

    span: {
        alignSelf: 'flex-end',
        fontSize: '$sm',
        color: '#7C7C8A',
        margin: '$1 $2 $1 0',
    },
})

export const ButtonContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: '$2',

    marginTop: '$3',

    width: '100%',
})

export const ReviewButton = styled('button', {
    all: 'unset',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '$2',

    backgroundColor: '$gray600',
    borderRadius: 4,

    cursor: 'pointer',

    '&:hover': {
        backgroundColor: '$gray500',
    },

    variants: {
        color: {
            green: {
                svg: {
                    color: '$green100',
                },
            },
            red: {
                svg: {
                    color: '$red',
                },
            },
        },
    },
})

export const ReviewCard = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    gap: '$5',

    width: '100%',
    padding: '$6',
    marginTop: '$4',

    borderRadius: '8px',

    p: {
        display: 'block',
    },

    variants: {
        commentFromTheUserInSession: {
            true: {
                backgroundColor: '$gray600',
            },
            false: {
                backgroundColor: '$gray700',
            },
        },
    },
})

export const CardHeader = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex',

    gap: '$4',
    width: '100%',

    p: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,

        span: {
            color: '$gray400',
        },
    },
})

export const Mask = styled('div', {
    variants: {
        open: {
            true: {
                position: 'fixed',
                height: '100%',
                width: '100%',
                margin: 0,
                top: 0,
                left: 0,
                zIndex: 899,
                backgroundColor: '$blackTransparent',
            },
            false: {
                display: 'none',
            },
        },
    },
})
