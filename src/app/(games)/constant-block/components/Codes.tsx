import React from 'react'

import CharacterBox from './CharacterBox'
import { Coordinates } from '../constantBlock.types'

interface CodesProps {
  codes: string[],
  classNames?: string,
  coordinates?: Coordinates
}

const Codes:React.FC<CodesProps> = ({ codes, classNames, coordinates }) => {
  const top = (coordinates?.y || 0) * 43 + 'px'
  const left = (coordinates?.x || 0) * 43  + 'px'

  return (
    <div className={`codes flex z-10 ${classNames} absolute`} style={{ left, top }}>
      {
        codes.map((code, index) => <CharacterBox character={code} key={index} />)
      }
    </div>
  )
}

export default Codes