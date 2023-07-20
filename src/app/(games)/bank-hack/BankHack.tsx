"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { VscDebugStart } from 'react-icons/vsc'

import { generateCharacter } from './helpers/bank-hack.helpers'

import AudioPlayer from '@/app/components/AudioPlayer'
import Speaker from './components/Speaker'
import Timer from './components/Timer'
import Characters from './components/Characters'
import Loader from './components/Loader'
import Codes from './components/Codes'
import LeftCode from './components/LeftCode'
import RightCode from './components/RightCode'
import SettingsModal from './components/SettingsModal'

type HackStates = '' | 'hack-started' | 'hacking' | 'failure' | 'success'
type Coordinates = {
  x: number,
  y: number
}

const DEFAULT_COORDINATE:Coordinates = {
  x: 0,
  y: 0
}

const CODE_LENGTH = 4, X_MIN = 0, X_MAX = 17, Y_MIN = 0, Y_MAX = 8
const BankHack = () => {
  const [hackState, setHackState] = useState<HackStates>('')
  const [leftCodes, setLeftCodes] = useState<string[]>([])
  const [leftCoordinates, setLeftCoordinates] = useState<Coordinates>(DEFAULT_COORDINATE)
  const [rightCoordinates, setRightCoordinates] = useState<Coordinates>(DEFAULT_COORDINATE)
  const [rightCodes, setRightCodes] = useState<string[]>([])
  const [successCount, setSuccessCount] = useState<number>(0)

  const generateCodes = (length:number) => {
    const codes = new Array(length).fill(0).map(() => {
      return generateCharacter()
    })

    return codes
  }

  const generateRandomCoordinate = (min:number, max:number) => {
    const range = max - min + 1
    const randomDecimal = Math.random()
    const randomCoordinate = Math.floor(randomDecimal * range) + min
    
    return randomCoordinate
  }

  const startHack = () => {
    setHackState('hack-started')

    const leftCodes = generateCodes(CODE_LENGTH)
    const rightCodes = generateCodes(CODE_LENGTH)
    const leftCoordinates = {
      x: generateRandomCoordinate(X_MIN, X_MAX - CODE_LENGTH),
      y: generateRandomCoordinate(Y_MIN, Y_MAX)
    }
    const rightCoordinates = {
      x: generateRandomCoordinate(X_MIN, X_MAX - CODE_LENGTH),
      y: generateRandomCoordinate(Y_MIN, Y_MAX)
    }

    while (leftCoordinates.x === rightCoordinates.x) {
      rightCoordinates.x = generateRandomCoordinate(X_MIN, X_MAX - CODE_LENGTH)
    }

    while (leftCoordinates.y === rightCoordinates.y) {
      rightCoordinates.y = generateRandomCoordinate(Y_MIN, Y_MAX)
    }

    setLeftCoordinates(leftCoordinates)
    setRightCoordinates(rightCoordinates)
    setLeftCodes(leftCodes)
    setRightCodes(rightCodes)
    setTimeout(() => {
      setHackState('hacking')
    }, 4000)
  }

  const failedToHack = () => {
    setSuccessCount(0)
    setHackState('failure')
  }
  
  const submitHandler = (isSuccess: boolean) => {
    if (!isSuccess) {
      setSuccessCount(0)
      return setHackState('failure')
    }
    
    if (successCount) {
      setSuccessCount(0)
      setHackState('success')
      return
    }

    setSuccessCount(successCount + 1)
  }

  return (
    <div className='game__bank-hack relative'>
      <Image src='/bank-hack-bg.jpg' alt='bank hack background image' className='-z-10' fill />
      <div className="min-h-screen flex justify-center items-center">
        <div className='phone bg-zinc-800 relative' style={{ height: '476px', width: '967px', borderRadius: '50px' }}>
          <Speaker className='left-8'/>
          <Speaker className='right-8'/>
          <div className="camera w-4 h-4 bg-zinc-900 rounded-full absolute left-8 top-3/4" />
          <div className="screen absolute top-6 bottom-6 left-24 right-24 bg-black select-none text-white"  style={{ paddingTop: '42px' }}>
            {
              (hackState === '' || hackState === 'failure' || hackState === 'success') && 
              (
                <div className="actions-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center text-center z-10">
                  <SettingsModal />
                  <div className="button-holder">
                    <button className='hover:bg-red-500 border-2 border-red-500 py-2 px-4 rounded-md flex items-center' onClick={startHack}><VscDebugStart className='mr-1' /> Start</button>
                  </div>
                </div>
              )
            }
            {
              hackState === 'failure' &&
              (
                <>
                  <AudioPlayer src='/audio/hack-failure.mp3' />
                  <div className='text-center text-red-500 text-xl py-3'>Hack Failed</div>
                </>
              )
            }
            
            {
              hackState === 'success' && 
              (
                <>
                  <AudioPlayer src='/audio/hack-success.mp3' />
                  <div className='text-center text-lime-500 text-xl py-3'>Success</div>
                </>
              )
            }
            {
              hackState === 'hack-started' && 
              (
                <>
                  <AudioPlayer src='/audio/hack-start.mp3' />
                  <Loader />
                </>
              )
            }
            {
              hackState === 'hacking' && 
              (
                <>
                  <AudioPlayer src='/audio/hacking.mp3' loop />
                  <Timer onFailure={failedToHack} />
                  <LeftCode targetCoordinates={leftCoordinates} codes={leftCodes} onSubmit={submitHandler} />
                  <RightCode targetCoordinates={rightCoordinates} codes={rightCodes} onSubmit={submitHandler} />
                </>
              )
            }
            <Characters isVisible={hackState === 'hacking'}>
              <Codes codes={leftCodes} classNames='bg-black' coordinates={leftCoordinates} />
              <Codes codes={rightCodes} classNames='bg-black' coordinates={rightCoordinates} />
            </Characters>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankHack