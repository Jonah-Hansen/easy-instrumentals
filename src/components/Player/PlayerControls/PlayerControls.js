import { Pause, PlayArrow, Stop } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import ReactHowler from 'react-howler';
import './PlayerControls.scss';

export default function PlayerControls({ allFiles }) {
  const { melodyFile, chordsFile, bassFile, drumsFile } = allFiles

  const [isPlaying, setIsPlaying] = useState(false)
  const [hiddenPlay, setHiddenPlay] = useState(true)

  useEffect(() => {
    window.Howler.mute(true)
    setIsPlaying(false)
    setHiddenPlay(true)
  }, [melodyFile, chordsFile, bassFile, drumsFile])

  const onLoad = () => {
    window.Howler.stop()
    setHiddenPlay(false)
    window.Howler.mute(false)
    console.log('loaded');
  }

  return (
    <div className='player-controls'>
      <button className='player-controls__button'
        onClick={() => {
          setIsPlaying(false)
          window.Howler.stop()
        }}>
        <Stop />
      </button>
      <button className={`player-controls__button--play-pause${hiddenPlay ? ' disabled' : ''}`}
        onClick={() => !hiddenPlay && setIsPlaying(!isPlaying)} >
        {isPlaying ? <Pause /> : hiddenPlay ? <CircularProgress /> : <PlayArrow />}
      </button>
      {melodyFile && <ReactHowler html5={true} src={melodyFile} playing={isPlaying || hiddenPlay} onLoad={onLoad} />}
      {chordsFile && <ReactHowler html5={true} src={chordsFile} playing={isPlaying || hiddenPlay} onLoad={onLoad} />}
      {bassFile && <ReactHowler html5={true} src={bassFile} playing={isPlaying || hiddenPlay} onLoad={onLoad} />}
      {drumsFile && <ReactHowler html5={true} src={drumsFile} playing={isPlaying || hiddenPlay} onLoad={onLoad} />}
    </div >
  )
}