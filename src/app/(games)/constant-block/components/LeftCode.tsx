import React, { useEffect, useState } from 'react'

import { Coordinates } from '../constantBlock.types'
import AudioPlayer from '@/app/components/AudioPlayer'
import Codes from './Codes'

const DEFAULT_COORDINATE:Coordinates = {
  x: 0,
  y: 0
}

interface LeftCodeProps {
  codes: string[],
  targetCoordinates: Coordinates,
  onSubmit: (value: boolean) => void
}

const ACCEPTABLE_KEYS = new Set(['w', 'a', 's', 'd', 'W', 'A', 'S', 'D', ' '])
const LeftCode:React.FC<LeftCodeProps> = ({ codes, targetCoordinates, onSubmit }) => {
  const [coordinates, setCoordinates] = useState<Coordinates>(DEFAULT_COORDINATE)
  const [isLocked, setIsLocked] = useState<boolean>(false)
  const [isFlickering, setIsFlickering] = useState<boolean>(false)
  
  useEffect(() => {
    if (isLocked) return

    const checkCoordinates = () => {
      const { x:targetX, y:targetY } = targetCoordinates
      const { x, y } = coordinates
      const coordinatesMatched = (x === targetX && (y - 1) === targetY)
      
      if (coordinatesMatched) {
        setIsFlickering(true)
        setIsLocked(true)

        setTimeout(() => {
          setIsFlickering(false)
        }, 300)
      }
      onSubmit(coordinatesMatched)
      window.removeEventListener('keydown', moveCodeBlock)
    }

    const moveCodeBlock = (e: KeyboardEvent) => {
      const key = e.key
      const currentCoordinate = { ...coordinates }

      if (!ACCEPTABLE_KEYS.has(key)) return
      if (key === ' ') {
        return checkCoordinates()
      }
      if (['w', 'W'].includes(key) && (currentCoordinate.y > 0)) {
        currentCoordinate.y -= 1
      }
      if (['s', 'S'].includes(key) && (currentCoordinate.y < 9)) {
        currentCoordinate.y += 1
      }
      if (['a', 'A'].includes(key) && (currentCoordinate.x > 0)) {
        currentCoordinate.x -= 1
      }
      if (['d', 'D'].includes(key) && (currentCoordinate.x < 14)) {
        currentCoordinate.x += 1
      }

      setCoordinates(currentCoordinate)
    }

    window.addEventListener('keydown', moveCodeBlock)

    return (() => {
      window.removeEventListener('keydown', moveCodeBlock)
    })
  }, [coordinates, targetCoordinates, onSubmit, isLocked])

  return <>
    <Codes classNames={`z-20 transition-colors duration-150 ${isFlickering ? 'bg-black text-black' : 'bg-white text-lime-500'}`} codes={codes} coordinates={coordinates} />
    {
      isLocked && <AudioPlayer src='/audio/hack-success.mp3' />
    }
  </>
}

export default LeftCode