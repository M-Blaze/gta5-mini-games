"use client"
import React, { useEffect, useState } from 'react'

const CHARACTERS = '0123456789ABCDEF';

const CharacterBox = () => {
  const [ character, setCharacter ] = useState<string>('')
  
  useEffect(() => {
    setInterval(() => {
      const initialIndex = Math.floor(Math.random() * CHARACTERS.length)
      const initialCharacter = CHARACTERS[initialIndex]
      
      setCharacter(initialCharacter)
    }, 200)
  }, [])

  return (
    <div className='character-box flex justify-center items-center text-lime-500 border-2 border-neutral-400 font-bold text-xl' style={{ width: '43px', height: '43px' }}>
      {character}
    </div>
  )
}

export default CharacterBox