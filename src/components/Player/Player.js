import { Midi } from '@tonejs/midi'
import { useEffect, useState } from 'react'
import { getMidiURL } from '../../supabase/supabase'
import ArrangeView from './ArrangeView/ArrangeView'
import PlayerControls from './PlayerControls/PlayerControls'
import PlayerHeader from './PlayerHeader/PlayerHeader'

export default function Player({ tracksState }) {

  const [activeTab, setActiveTab] = useState('arrange')

  const [melodyMidi, setMelodyMidi] = useState({})
  const [chordsMidi, setChordsMidi] = useState({})
  const [bassMidi, setBassMidi] = useState({})
  const [drumsMidi, setDrumsdMidi] = useState({})
  const allMidi = { melody: melodyMidi, chords: chordsMidi, bass: bassMidi, drums: drumsMidi }

  const [currentTracks, setCurrentTracks] = useState(
    { melody: {}, chords: {}, bass: {}, drums: {} }
  )
  const currentTracksState = { currentTracks, setCurrentTracks }

  useEffect(() => {
    if (currentTracks.melody.id) {
      getMidiURL(currentTracks.melody.id)
        .then(data =>
          Midi.fromUrl(data)
            .then(midi => setMelodyMidi(midi))
        )
    }
    if (currentTracks.chords.id) {
      getMidiURL(currentTracks.chords.id)
        .then(data =>
          Midi.fromUrl(data)
            .then(midi => setChordsMidi(midi))
        )
    }
    if (currentTracks.bass.id) {
      getMidiURL(currentTracks.bass.id)
        .then(data =>
          Midi.fromUrl(data)
            .then(midi => setBassMidi(midi))
        )
    }


  }, [currentTracks])


  return (
    <div>
      <PlayerHeader tabState={{ activeTab, setActiveTab }} />
      <ArrangeView tracksState={tracksState} currentTracksState={currentTracksState} />
      <PlayerControls allMidi={allMidi} />
    </div>
  )
}