import { useEffect, useState } from 'react'
import { getMidiURL } from '../../supabase/supabase'
import ArrangeView from './ArrangeView/ArrangeView'
import PlayerControls from './PlayerControls/PlayerControls'
import PlayerHeader from './PlayerHeader/PlayerHeader'

export default function Player({ tracksState }) {

  const [activeTab, setActiveTab] = useState('arrange')

  const [melodyFile, setMelodyFile] = useState(null)
  const [chordsFile, setChordsFile] = useState(null)
  const [bassFile, setBassFile] = useState(null)
  const [drumsFile, setDrumsFile] = useState(null)
  const allFiles = { melodyFile, chordsFile, bassFile, drumsFile }
  const setFiles = { melody: setMelodyFile, chords: setChordsFile, bass: setBassFile, drums: setDrumsFile }

  const [currentTracks, setCurrentTracks] = useState(
    { melody: {}, chords: {}, bass: {}, drums: {} }
  )
  const currentTracksState = { currentTracks, setCurrentTracks }

  useEffect(() => {
    if (currentTracks.melody.id) {
      getMidiURL(currentTracks.melody.id)
        .then(file => setMelodyFile(file))
    }
    if (currentTracks.chords.id) {
      getMidiURL(currentTracks.chords.id)
        .then(file => setChordsFile(file))
    }
    if (currentTracks.bass.id) {
      getMidiURL(currentTracks.bass.id)
        .then(file => setBassFile(file))
    }
    if (currentTracks.drums.id) {
      getMidiURL(currentTracks.drums.id)
        .then(file => setDrumsFile(file))
    }
  }, [currentTracks])


  return (
    <div>
      <PlayerHeader tabState={{ activeTab, setActiveTab }} />
      <ArrangeView tracksState={tracksState} currentTracksState={currentTracksState} setFiles={setFiles} />
      <PlayerControls allFiles={allFiles} />
    </div>
  )
}