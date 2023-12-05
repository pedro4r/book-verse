import { useEffect, useState } from 'react'

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : undefined,
        height: typeof window !== 'undefined' ? window.innerHeight : undefined,
    })

    useEffect(() => {
        function handleResize() {
            if (typeof window !== 'undefined') {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                })
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}
