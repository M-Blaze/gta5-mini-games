import React, { useEffect, useRef } from 'react'

interface AudioPlayerProps {
  src: string,
  loop?: boolean
}

const AudioPlayer:React.FC<AudioPlayerProps> = ({ src, loop }) => {
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
      <audio ref={audioPlayerRef} loop={loop}>
        <source src={src} />
      </audio>
    </>
  )
}

export default AudioPlayer