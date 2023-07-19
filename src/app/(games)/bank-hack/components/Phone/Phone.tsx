import React from 'react'

import Speaker from './components/Speaker'
import Camera from './components/Camera'
import Screen from './components/Screen'

const Phone = () => {
  return (
    <div className='phone bg-zinc-800 relative' style={{ height: '484px', width: '967px', borderRadius: '50px' }}>
      <Speaker className='left-8'/>
      <Speaker className='right-8'/>
      <Camera />
      <Screen />
    </div>
  )
}

export default Phone