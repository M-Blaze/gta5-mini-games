"use client"
import React, { useEffect, useState } from 'react'

import { generateCharacter } from '../helpers/constantBlock.helpers'
import CharacterBox from './CharacterBox'

const UnStableCharacter = () => {
  const [ character, setCharacter ] = useState<string>('')
  
  useEffect(() => {
    const characterInterval = setInterval(() => {
      const character = generateCharacter()
      
      setCharacter(character)
    }, 200)

    return (() => {
      clearInterval(characterInterval)
    })
  }, [])

  return (
    <CharacterBox character={character} />
  )
}

export default UnStableCharacter