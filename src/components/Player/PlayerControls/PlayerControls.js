import { Pause, PlayArrow, Stop } from "@mui/icons-material";
import { useState } from "react";
import ReactHowler from 'react-howler';

import './PlayerControls.scss';

export default function PlayerControls({ allFiles }) {

  const { melodyFile, chordsFile, bassFile, drumsFile } = allFiles

  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className='player-controls'>
      <button className='player-controls__button'
        onClick={() => {
          setIsPlaying(false)
          window.Howler.stop()
        }}>
        <Stop />
      </button>
      <button className='player-controls__button--play-pause'
        onClick={() => {
          setIsPlaying(!isPlaying)
        }} >
        {isPlaying ? <Pause /> : <PlayArrow />}
      </button>
      {melodyFile && <ReactHowler html5={true} src={melodyFile} playing={isPlaying} />}
      {chordsFile && <ReactHowler html5={true} src={chordsFile} playing={isPlaying} />}
      {bassFile && <ReactHowler html5={true} src={bassFile} playing={isPlaying} />}
      {drumsFile && <ReactHowler html5={true} src={drumsFile} playing={isPlaying} />}
    </div >
  )
}