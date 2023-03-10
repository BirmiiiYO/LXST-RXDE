import { useEffect, useState } from 'react'

export const defaultDimension = 1920
export const mobileDimension = 1023

const useMobile = () => {
  const [screenResolution, setscreenResolution] = useState(defaultDimension)

  useEffect(() => {
    setscreenResolution(window.innerWidth)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setscreenResolution(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = screenResolution <= mobileDimension

  return isMobile
}

export default useMobile
