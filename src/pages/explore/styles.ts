import { styled } from '../../styles'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const BookContainer = styled('div', {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',

    width: '41.25rem',
    height: '100%',
    top: 0,
    right: 0,

    padding: '$10',

    backgroundColor: '$gray800',
    backgroundOpacity: '0.3',

    zIndex: 2,

    overflowY: 'scroll',

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

    img: {
        height: '15rem',
        width: '10rem',
    },
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

export const NewReview = styled('div', {
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    gap: '$4',

    strong: {
        flex: 1,
    },
})

export const ReviewFormContainer = styled('form', {
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

    backgroundColor: '$gray700',
    borderRadius: '8px',

    p: {
        display: 'block',
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
                position: 'absolute',
                height: '100vh',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
                backgroundColor: '$blackTransparent',
            },
            false: {
                display: 'none',
            },
        },
    },
})

export const Container = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',

    margin: '4.5rem 6rem 3rem 20.5rem ',

    alignItems: 'flex-start',
    justifyContent: 'center',
})

export const ExploreContainer = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

    width: '100%',

    overflow: 'auto',

    '> span': {
        marginTop: '$10',
    },
})

export const PageTitle = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    gap: '$3',

    svg: {
        color: '$green100',
    },
})

export const FormContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 'auto',

    height: '3rem',
    width: '27rem',

    padding: '$4',

    border: '1px solid $gray500',
    borderRadius: '4px',

    input: {
        all: 'unset',
        width: '100%',
        height: '100%',
        background: 'transparent',
        outline: 'none',

        '&::placeholder': {
            color: '$gray400',
        },
    },

    svg: {
        color: '$gray500',
    },

    '&:focus-within': {
        border: '1px solid $green200',
        svg: {
            color: '$green200',
        },
    },
})

export const RadioGroupRoot = styled(RadioGroup.Root, {
    display: 'flex',
    flexDirection: 'row',
    gap: '$3',

    marginTop: '$10',
})

export const RadioGroupItem = styled(RadioGroup.Item, {
    all: 'unset',
    padding: '$1 $4 $1 $4',

    border: '1px solid $purple100',
    borderRadius: '999px',

    color: '$purple100',

    backgroundColor: 'transparent',

    '&[data-state="checked"]': {
        backgroundColor: '$purple200',
        color: '$gray100',
        border: '1px solid $purple200',
    },
})

export const RadioGroupIndicator = styled(RadioGroup.Indicator, {})

export const Label = styled('label', {
    cursor: 'pointer',
})

export const FilterAnswer = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '$5',
})

export const Book = styled('div', {
    all: 'unset',
    cursor: 'pointer',

    height: '11.5rem',
    width: '20rem',

    borderRadius: '8px',
    backgroundColor: '$gray700',

    border: '1px solid transparent',

    '&:hover': {
        border: '1px solid $purple100',
        transform: 'scale(1.01)',
        transition: 'transform 0.5s',
    },
})

export const InfoContainer = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',

    padding: '$5',

    gap: '$4',

    img: {
        height: '9.5rem',
        width: '6.75rem',
    },
})

export const ReadLabel = styled('div', {
    position: 'absolute',
    right: 0,
    top: 0,

    backgroundColor: '$green300',

    padding: '$1 $3 $1 $3',
    borderRadius: '0 8px 0 4px',

    strong: {
        color: '$green100',
    },
})

export const BookInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 'auto',

    strong: {
        fontSize: '$md',
        color: '$gray100',
        alignSelf: 'flex-start',
        maxWidth: '6.3rem',
    },

    span: {
        fontSize: '$sm',
        color: '$gray400',
        flex: 1,
    },

    small: {
        fontSize: '$sm',
        color: '$gray400',
        marginTop: '$1',
    },
})
