"use client"
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { BiSolidCog } from 'react-icons/bi'

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

const DEFAULT_SETTINGS = {
  timer: 15,
  numberOfCodesOnLeft: 4,
  numberOfCodesOnRight: 4,
}

type SETTINGSTYPE = typeof DEFAULT_SETTINGS
const SettingsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState({ ...DEFAULT_SETTINGS })

  useEffect(() => {
    const settingsJSON = localStorage.getItem('settings')
    const initialSettings = (settingsJSON ? JSON.parse(settingsJSON) : DEFAULT_SETTINGS) as SETTINGSTYPE

    setSettings(initialSettings)
  }, [])

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings(prevSettings => {
      return {
        ...prevSettings,
        [e.target.name]: e.target.value
      }
    })
  }

  const saveSettings = () => {
    localStorage.setItem('settings', JSON.stringify(settings))
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="button-holder">
        <button className='hover:bg-orange-500 border-2 border-orange-500 py-2 px-4 rounded-md mr-4 flex items-center' onClick={() => setIsModalOpen(true)}><BiSolidCog className='mr-1' /> Settings</button>
      </div>
      <Modal style={ModalContentStyles} isOpen={isModalOpen} ariaHideApp={false} onRequestClose={() => setIsModalOpen(false)}>
        <form id='settings-form'>
          <div className="select-group mb-3">
            <label htmlFor="#timer">Timer (in seconds)</label> <br />
            <select id='timer' name='timer' className='p-2 text-black w-full' value={settings.timer} onChange={selectHandler}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
            </select>
          </div>
          <div className="select-group mb-3">
            <label htmlFor="#left-code">Number of codes (left)</label> <br />
            <select id='left-code' name='numberOfCodesOnLeft' className='p-2 text-black w-full' value={settings.numberOfCodesOnLeft} onChange={selectHandler}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="select-group mb-5">
            <label htmlFor="#right-code">Number of codes (right)</label> <br />
            <select id='right-code' name='numberOfCodesOnRight' className='p-2 text-black w-full' value={settings.numberOfCodesOnRight} onChange={selectHandler}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="button-holder text-center flex justify-center items-center">
            <button className='bg-lime-500 border-2 border-lime-500 text-white py-2 px-4 rounded-md mr-4' onClick={saveSettings}>Save Settings</button>
            <button className='bg-red-500 border-2 border-red-500 text-white py-2 px-4 rounded-md' onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default SettingsModal