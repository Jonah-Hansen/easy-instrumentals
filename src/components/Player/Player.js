import { useEffect, useState } from 'react'
import { getMidiURL } from '../../supabase/supabase'
import ArrangeView from './ArrangeView/ArrangeView'
import './Player.scss'
import PlayerControls from './PlayerControls/PlayerControls'
import PlayerHeader from './PlayerHeader/PlayerHeader'

export default function Player({ tracksState, setModalOpen }) {

  //unused state for tracking which tab is active. right now only one tab exists: arrangement view
  const [activeTab, setActiveTab] = useState('arrange')

  //state for tracking volumes of each track type
  const [trackVolumes, setTrackVolumes] = useState(
    { melody: .5, chords: .5, bass: .5, drums: .5 }
  )
  //obj to pass volume state as props more easily
  const volumesState = { trackVolumes, setTrackVolumes }

  //states for tracking the audio file url of each current track
  const [melodyFile, setMelodyFile] = useState(null)
  const [chordsFile, setChordsFile] = useState(null)
  const [bassFile, setBassFile] = useState(null)
  const [drumsFile, setDrumsFile] = useState(null)
  //objs for passing files and functions more easily as props
  const allFiles = { melodyFile, chordsFile, bassFile, drumsFile }
  const setFiles = { melody: setMelodyFile, chords: setChordsFile, bass: setBassFile, drums: setDrumsFile }

  //state for tracking details about current active tracks
  const [currentTracks, setCurrentTracks] = useState(
    { melody: {}, chords: {}, bass: {}, drums: {} }
  )
  //obj to pass state easier
  const currentTracksState = { currentTracks, setCurrentTracks }

  //as tracks are dropped in, retrieve the file url for each one that exists
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
    <div className='player'>
      <PlayerHeader tabState={{ activeTab, setActiveTab }} setModalOpen={setModalOpen} />
      <ArrangeView tracksState={tracksState} currentTracksState={currentTracksState} setFiles={setFiles} volumesState={volumesState} />
      <PlayerControls allFiles={allFiles} trackVolumes={trackVolumes} />
    </div>
  )
}