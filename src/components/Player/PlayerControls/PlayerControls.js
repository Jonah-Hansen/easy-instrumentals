import { Pause, PlayArrow, Stop } from "@mui/icons-material"
import { useState } from "react"
import './PlayerControls.scss'

export default function PlayerControls() {

  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className='player-controls'>
      <button className='player-controls__button'
        onClick={() => setIsPlaying(false)}>
        <Stop />
      </button>
      <button className='player-controls__button--play-pause'
        onClick={() => setIsPlaying(!isPlaying)} >
        {isPlaying ? <Pause /> : <PlayArrow />}
      </button>
    </div >
  )
}