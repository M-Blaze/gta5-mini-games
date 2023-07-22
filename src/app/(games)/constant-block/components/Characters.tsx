import React, { ReactNode } from 'react'

import UnStableCharacter from './UnStableCharacter'

const ROWS = new Array(18).fill(0)
const COLUMNS = new Array(9).fill(0)

interface CharactersProps {
  isVisible: boolean,
  children?: ReactNode
}

const Characters:React.FC<CharactersProps> = ({ isVisible, children }) => {
  return (
    <div className={`characters relative text-lime-500 ${ !isVisible && 'hidden' }`}>
      {
        COLUMNS.map((_, columnIndex) => {
          return (
            <div className='flex rowIndex' key={columnIndex}>
              {
                ROWS.map((_, index) => {
                  return <UnStableCharacter key={index} />
                })
              }
            </div>
          )
        })
      }
      { children }
    </div>
  )
}

export default Characters