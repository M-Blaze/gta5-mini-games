import React, { useEffect, useState } from 'react'

import { Coordinates } from '../bankHack.types'
import AudioPlayer from '@/app/components/AudioPlayer'
import Codes from './Codes'

const DEFAULT_COORDINATE:Coordinates = {
  x: 18,
  y: 0
}

type DEFAULTSETTINGS = {
  numberOfCodesOnLeft: number,
  numberOfCodesOnRight: number,
}


interface RightCodeProps {
  codes: string[],
  targetCoordinates: Coordinates,
  onSubmit: (value: boolean) => void
}

const ACCEPTABLE_KEYS = new Set(['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'Enter'])
const RightCode:React.FC<RightCodeProps> = ({ codes, targetCoordinates, onSubmit }) => {
  const initialCoordinate = {...DEFAULT_COORDINATE}
  const settingsJSON = localStorage.getItem('settings')
  const settings = (settingsJSON ? JSON.parse(settingsJSON) : {}) as DEFAULTSETTINGS 
  
  initialCoordinate.x = initialCoordinate.x - (settings.numberOfCodesOnRight || 4)
  const [coordinates, setCoordinates] = useState<Coordinates>(initialCoordinate)
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
      if (key === 'Enter') {
        return checkCoordinates()
      }
      if ((key === 'ArrowUp') && (currentCoordinate.y > 0)) {
        currentCoordinate.y -= 1
      }
      if ((key === 'ArrowDown') && (currentCoordinate.y < 9)) {
        currentCoordinate.y += 1
      }
      if ((key === 'ArrowLeft') && (currentCoordinate.x > 0)) {
        currentCoordinate.x -= 1
      }
      if ((key === 'ArrowRight') && (currentCoordinate.x < 14)) {
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

export default RightCode