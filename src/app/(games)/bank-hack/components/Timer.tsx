"use client"
import React, { useEffect, useState } from 'react'

interface TimerProps {
  onFailure: () => void
}

const INTERVAL = 20
const Timer:React.FC<TimerProps> = ({ onFailure }) => {
  const [remainingMilliSeconds, setRemainingMilliSeconds] = useState(15000)
  const seconds = Math.floor((remainingMilliSeconds % 60000) / 1000);
  const milliSeconds = remainingMilliSeconds % 1000;

  useEffect(() => {
    let remainingMilliseconds = remainingMilliSeconds;
  
    const timerInterval = setInterval(() => {
      remainingMilliseconds -= INTERVAL

      if (remainingMilliseconds < 0) {
        remainingMilliseconds = 0
        clearInterval(timerInterval)
        onFailure()
      }

      setRemainingMilliSeconds(remainingMilliseconds)
    }, INTERVAL)

    return () => {
      clearInterval(timerInterval)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <span className='absolute top-2 left-1/2 -translate-x-1/2 text-lime-500 text-2xl font-bold'>{`${seconds.toString().padStart(2, '0')}.${milliSeconds.toString().padStart(2, '0')}`} s</span>
  )
}

export default Timer