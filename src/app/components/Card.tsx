import React from 'react'
import Image from 'next/image'

interface CardProps {
  imageUrl: string,
  title: string
}

const Card:React.FC<CardProps> = ({ imageUrl, title }) => {
  return (
    <div className='card text-center'>
      <div className="image-holder relative mb-2" style={{ paddingTop: '50%' }}>
        <Image src={imageUrl} fill alt='game image' />
      </div>
      <div className="text-wrap">
        <h3>{ title }</h3>
      </div>
    </div>
  )
}

export default Card