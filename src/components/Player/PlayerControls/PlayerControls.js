import { Pause, PlayArrow, Stop } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Soundfont from 'soundfont-player';
import './PlayerControls.scss';

export default function PlayerControls({ allMidi }) {

  const { melody, chords, bass, drums } = allMidi

  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      const ac = new AudioContext()
      //initialize soundfont player
      Soundfont.instrument(ac, 'music_box')
        .then(player => {
          if (melody.tracks) {
            //play notes from midi
            player.schedule(ac.currentTime + .4, melody.tracks[0].notes)
          }
        })
      Soundfont.instrument(ac, 'electric_piano_2')
        .then(player => {
          if (chords.tracks) {
            //play notes from midi
            player.schedule(ac.currentTime + .1, chords.tracks[0].notes)
          }
        })
      Soundfont.instrument(ac, 'acoustic_bass')
        .then(player => {
          if (bass.tracks) {
            //play notes from midi
            player.schedule(0, bass.tracks[0].notes)
          }
        })
      // Soundfont.instrument(ac, 'acoustic_grand_piano')
      //   .then(player => {
      //     if (chords.tracks) {
      //       //play notes from midi
      //       player.schedule(0, chords.tracks[0].notes)
      //     }
      //   })
    }
  }, [isPlaying, chords, bass, melody])

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