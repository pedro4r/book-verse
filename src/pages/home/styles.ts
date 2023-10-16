import { styled } from '../../styles'

export const Container = styled('main', {
    display: 'grid',
    gridTemplateColumns: '2fr 7fr 4fr',
    gap: '4rem',
    width: '100vw',
    height: '100vh',

    alignItems: 'flex-start',
    justifyContent: 'center',
})

export const Feed = styled('div', {
    height: '100vh',
    backgroundColor: '$gray700',
})

export const PopularBooks = styled('div', {
    height: '100vh',
    backgroundColor: '$gray400',
})
