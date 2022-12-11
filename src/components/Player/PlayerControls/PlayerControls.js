import { Pause, PlayArrow, Stop, VolumeDown, VolumeUp } from "@mui/icons-material";
import { CircularProgress, Slider } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactHowler from 'react-howler';
import './PlayerControls.scss';

export default function PlayerControls({ allFiles, trackVolumes }) {
  //deconstruct file urls from props
  const { melodyFile, chordsFile, bassFile, drumsFile } = allFiles
  //initialize refs for the previous file url
  let prevMelody = useRef(melodyFile)
  let prevChords = useRef(chordsFile)
  let prevBass = useRef(bassFile)
  let prevDrums = useRef(drumsFile)

  //states for tracking global play, master volume, and hidden play which gives new tracks a chance to load. 
  const [masterVolume, setMasterVolume] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hiddenPlay, setHiddenPlay] = useState(false)

  //function for keyboard controls
  const handleKeyPress = useCallback(event => {
    if (event.key === ' ') {
      setIsPlaying(!isPlaying)
    }
    if (event.key === 'Enter') {
      window.Howler.stop()
      setIsPlaying(false)
    }
  }, [isPlaying])

  //bind keyboard controls
  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  //any time the file urls change, load them in. 
  useEffect(() => {
    window.Howler.mute(true)
    setIsPlaying(false)
    if (melodyFile || chordsFile || bassFile || drumsFile)
      setHiddenPlay(true)
    //force reload of null file if prev file was valid but current is null. this stops a removed track from still playing. 
    if ((prevMelody.current && !melodyFile) || (prevChords.current && !chordsFile) || (prevBass.current && !bassFile) || (prevDrums.current && !drumsFile)) {
      onLoad()
    }
    prevMelody.current = melodyFile
    prevChords.current = chordsFile
    prevBass.current = bassFile
    prevDrums.current = drumsFile
  }, [melodyFile, chordsFile, bassFile, drumsFile])

  //stop hidden play once file is loaded
  const onLoad = () => {
    window.Howler.stop()
    setHiddenPlay(false)
    window.Howler.mute(false)
  }

  //handle master volume changes
  const handleVolume = (e) => {
    window.Howler.volume([e.target.value / 100])
    setMasterVolume(window.Howler.volume())
  }

  //when a track ends, stop all tracks
  const handleEnd = () => {
    window.Howler.stop()
    setIsPlaying(false)
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
      {/* show play, pause or loading depending on states */}
      <button className={`player-controls__button--play-pause${hiddenPlay ? ' disabled' : ''}`}
        onClick={() => !hiddenPlay && setIsPlaying(!isPlaying)} >
        {isPlaying ? <Pause /> : hiddenPlay ? <CircularProgress /> : <PlayArrow />}
      </button>
      {/* load a reactHowler for each valid file */}
      {melodyFile && <ReactHowler html5={true} src={melodyFile} playing={isPlaying || hiddenPlay} onLoad={onLoad} volume={trackVolumes.melody} onEnd={handleEnd} />}
      {chordsFile && <ReactHowler html5={true} src={chordsFile} playing={isPlaying || hiddenPlay} onLoad={onLoad} volume={trackVolumes.chords} onEnd={handleEnd} />}
      {bassFile && <ReactHowler html5={true} src={bassFile} playing={isPlaying || hiddenPlay} onLoad={onLoad} volume={trackVolumes.bass} onEnd={handleEnd} />}
      {drumsFile && <ReactHowler html5={true} src={drumsFile} playing={isPlaying || hiddenPlay} onLoad={onLoad} volume={trackVolumes.drums} onEnd={handleEnd} />}
    </div >
  )
}