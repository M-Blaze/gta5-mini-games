"use client"
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { BiSolidHelpCircle } from 'react-icons/bi'

const ModalContentStyles = {
  overlay: {
    zIndex: 20
  },
  content: {
    background: '#000',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '30px',
    transform: 'translate(-50%, -50%)'
  }
}

const SettingsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="button-holder">
        <button className='hover:bg-blue-500 border-2 border-blue-500 py-2 px-4 rounded-md mr-4 flex items-center' onClick={() => setIsModalOpen(true)}><BiSolidHelpCircle className='mr-1' />Help</button>
      </div>
      <Modal style={ModalContentStyles} isOpen={isModalOpen} ariaHideApp={false} onRequestClose={() => setIsModalOpen(false)}>
        <p>
          Use the <span className='text-lime-500'>W</span>, <span className='text-lime-500'>A</span>, <span className='text-lime-500'>S</span>, <span className='text-lime-500'>D</span> keys to move the left code block and press <span className='text-lime-500'>Space</span> to confirm.
        </p>
        <br />
        <p>
          Use the <span className='text-lime-500'>ArrowUp</span>, <span className='text-lime-500'>ArrowLeft</span>, <span className='text-lime-500'>ArrowDown</span>, <span className='text-lime-500'>ArrowRight</span> keys to move the right code block and press <span className='text-lime-500'>Enter</span> to confirm.
        </p>
      </Modal>
    </>
  )
}

export default SettingsModal