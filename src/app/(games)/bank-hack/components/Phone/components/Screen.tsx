import React from 'react'

import Timer from './Timer'
import CharacterBox from './CharacterBox'

const Screen = () => {
  const boxRows = new Array(18).fill(0)
  const boxColumns = new Array(9).fill(0)

  return (
    <div className="screen absolute top-6 bottom-6 left-24 right-24 bg-black">
      <Timer />
      <div className="characters pt-12">
        {
          boxColumns.map((_, rowIndex) => {
            return (
              <div className='flex rowIndex' key={rowIndex}>
                {
                  boxRows.map((_, index) => {
                    return <CharacterBox key={index} />
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Screen

