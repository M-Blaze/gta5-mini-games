import React, { useContext } from 'react'

import { BankHackContext } from '../../BankHackContext'
import Speaker from './components/Speaker'
import Timer from './components/Timer'
import Characters from './components/Characters'
import Loader from './components/Loader'

const GAME_STATE = ''
const Phone = () => {
  return (
    <div className='phone bg-zinc-800 relative' style={{ height: '484px', width: '967px', borderRadius: '50px' }}>
      <Speaker className='left-8'/>
      <Speaker className='right-8'/>
      <div className="camera w-4 h-4 bg-zinc-900 rounded-full absolute left-8 top-3/4"></div>
      <div className="screen absolute top-6 bottom-6 left-24 right-24 bg-black">
        {
          GAME_STATE === '' ? <Loader /> :
          (<>
            <Timer />
            <Characters />
          </>)
        }
      </div>
    </div>
  )
}

export default Phone