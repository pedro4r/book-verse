import { globalCss } from '.'

export const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
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
