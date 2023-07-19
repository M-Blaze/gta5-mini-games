"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { BiSolidCog } from 'react-icons/bi'
import { VscDebugStart } from 'react-icons/vsc'

import Speaker from './components/Speaker'
import Timer from './components/Timer'
import Characters from './components/Characters'
import Loader from './components/Loader'

const BankHack = () => {
  const [hackState, setHackState] = useState<string>('')

  const startHack = () => {
    setHackState('started')

    setTimeout(() => {
      setHackState('hacking')
    }, 4000)
  }

  return (
    <div className='game__bank-hack'>
      <Image src='/bank-hack-bg.jpg' alt='bank hack background image' className='-z-10' fill />
      <div className="h-screen flex justify-center items-center">
        <div className='phone bg-zinc-800 relative' style={{ height: '484px', width: '967px', borderRadius: '50px' }}>
          <Speaker className='left-8'/>
          <Speaker className='right-8'/>
          <div className="camera w-4 h-4 bg-zinc-900 rounded-full absolute left-8 top-3/4"></div>
          <div className="screen absolute top-6 bottom-6 left-24 right-24 bg-black">
            {
              hackState === '' && 
              (
                <div className="actions-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center text-center z-10">
                  <div className="button-holder hover:bg-red-500 border-2 border-red-500 py-2 px-4 rounded-md mr-4">
                    <button className='flex items-center'><BiSolidCog className='mr-1' /> Settings</button>
                  </div>
                  <div className="button-holder">
                    <button className='hover:bg-red-500 border-2 border-red-500 py-2 px-4 rounded-md flex items-center' onClick={startHack}><VscDebugStart className='mr-1' /> Start</button>
                  </div>
                </div>
              )
            }
            {
              hackState === 'started' && <Loader />
            }
            {
              hackState === 'hacking' && 
              (
                <>
                  <Timer />
                  <Characters />
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankHack