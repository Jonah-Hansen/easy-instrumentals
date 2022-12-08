import { Pause, PlayArrow, Stop, VolumeDown, VolumeUp } from "@mui/icons-material";
import { CircularProgress, Slider } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ReactHowler from 'react-howler';
import './PlayerControls.scss';

export default function PlayerControls({ allFiles, trackVolumes }) {
  const { melodyFile, chordsFile, bassFile, drumsFile } = allFiles
  let prevMelody = useRef(melodyFile)
  let prevChords = useRef(chordsFile)
  let prevBass = useRef(bassFile)
  let prevDrums = useRef(drumsFile)

  const [masterVolume, setMasterVolume] = useState(1)

  const [isPlaying, setIsPlaying] = useState(false)
  const [hiddenPlay, setHiddenPlay] = useState(false)

  useEffect(() => {
    window.Howler.mute(true)
    setIsPlaying(false)
    if (melodyFile || chordsFile || bassFile || drumsFile)
      setHiddenPlay(true)
    if ((prevMelody.current && !melodyFile) || (prevChords.current && !chordsFile) || (prevBass.current && !bassFile) || (prevDrums.current && !drumsFile)) {
      onLoad()
    }
    prevMelody.current = melodyFile
    prevChords.current = chordsFile
    prevBass.current = bassFile
    prevDrums.current = drumsFile
  }, [melodyFile, chordsFile, bassFile, drumsFile])

  const onLoad = () => {
    window.Howler.stop()
    setHiddenPlay(false)
    window.Howler.mute(false)
  }

  const handleVolume = (e) => {
    window.Howler.volume([e.target.value / 100])
    setMasterVolume(window.Howler.volume)
  }

  return (
    <div className='player-controls'>
      <div className='player-controls__volume'>
        <VolumeDown />
        <Slider aria-label='volume' value={masterVolume * 100} onChange={handleVolume} />
        <VolumeUp />
      </div>
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
      {melodyFile && <ReactHowler html5={true} src={melodyFile} playing={isPlaying || hiddenPlay} onLoad={onLoad} volume={trackVolumes.melody} />}
      {chordsFile && <ReactHowler html5={true} src={chordsFile} playing={isPlaying || hiddenPlay} onLoad={onLoad} volume={trackVolumes.chords} />}
      {bassFile && <ReactHowler html5={true} src={bassFile} playing={isPlaying || hiddenPlay} onLoad={onLoad} volume={trackVolumes.bass} />}
      {drumsFile && <ReactHowler html5={true} src={drumsFile} playing={isPlaying || hiddenPlay} onLoad={onLoad} volume={trackVolumes.drums} />}
    </div >
  )
}