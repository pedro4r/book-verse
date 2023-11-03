import { globalCss } from '.'

export const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,

        '&::-webkit-scrollbar': {
            width: '6px',
        },

        '&::-webkit-scrollbar-track': {
            background: '$gray700',
        },

        '&::-webkit-scrollbar-thumb': {
            background: '$gray600',
        },

        scrollbarWidth: 'thin',

        '&': {
            scrollbarColor: '$gray600 $gray700',
        },
    },

    body: {
        backgroundColor: '#0E1116',
        color: 'White',
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
    },
})
