import React from 'react'


const Loader = () => {
  return (
    <div className='loader w-full h-full text-center text-lime-500 flex items-center justify-center'>
      <div className="text-wrap">
        <h3 className='w-full text-3xl mb-2'>Starting Hack...</h3>
        <p className='w-full'>Find the constant code blocks</p>
      </div>
    </div>
  )
}

export default Loader