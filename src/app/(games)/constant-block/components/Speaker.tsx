import React from 'react'

interface SpeakerProps {
  className: string
}

const Speaker:React.FC<SpeakerProps> = ({ className }) => {
  return (
    <div className={`speaker h-1/3 w-4 bg-zinc-900 rounded-full absolute top-1/2 -translate-y-1/2 ${className}`}></div>
  )
}

export default Speaker