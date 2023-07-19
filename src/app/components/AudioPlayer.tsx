import React, { useEffect, useRef } from 'react'

interface AudioPlayerProps {
  src: string
}

const AudioPlayer:React.FC<AudioPlayerProps> = ({ src }) => {
  const audioPlayerRef = useRef<HTMLAudioElement>(null)

  const playAudio = () => {
    const audioPlayer = audioPlayerRef.current

    if (audioPlayer) {
      audioPlayer.play()
    }
  }

  useEffect(() => {
    playAudio()
  }, [])

  return (
    <>
      <audio ref={audioPlayerRef}>
        <source src={src} />
      </audio>
    </>
  )
}

export default AudioPlayer