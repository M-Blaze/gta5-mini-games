import React from 'react'
import Image from 'next/image'

import Phone from './components/Phone/Phone'

const bankHack = () => {
  return (
    <div className='game__bank-hack'>
      <Image src='/bank-hack-bg.jpg' alt='bank hack background image' className='-z-10' fill />
      <div className="h-screen flex justify-center items-center">
        <Phone />
      </div>
    </div>
  )
}

export default bankHack