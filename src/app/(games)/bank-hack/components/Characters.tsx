import React from 'react'

import CharacterBox from './CharacterBox'

const ROWS = new Array(18).fill(0)
const Columns = new Array(9).fill(0)

const Characters = () => {
  return (
    <div className="characters pt-12">
        {
          Columns.map((_, columnIndex) => {
            return (
              <div className='flex rowIndex' key={columnIndex}>
                {
                  ROWS.map((_, index) => {
                    return <CharacterBox key={index} />
                  })
                }
              </div>
            )
          })
        }
      </div>
  )
}

export default Characters