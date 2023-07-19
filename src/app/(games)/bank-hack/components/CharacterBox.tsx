interface CharacterBoxProps {
  character: string
}

const CharacterBox = ({ character }:CharacterBoxProps) => {
  return (
    <div className='character-box flex justify-center items-center border-2 border-neutral-400 font-bold text-xl' style={{ width: '43px', height: '43px' }}>
      {character}
    </div>
  )
}

export default CharacterBox