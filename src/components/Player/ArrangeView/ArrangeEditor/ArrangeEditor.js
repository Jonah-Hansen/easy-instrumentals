import ArrangeEditorRow from '../ArrangeEditorRow/ArrangeEditorRow'
import './ArrangeEditor.scss'

export default function ArrangeEditor({ tracksState, currentTracksState, setFiles, volumesState }) {

  //pull current tracks from tracksState
  const currentTracks = currentTracksState.currentTracks

  //creates a row in the editor for each track type
  return (
    <ul className='arrange-editor'>
      {Object.keys(currentTracks).map((type, index) => <ArrangeEditorRow key={index} title={type} setFile={setFiles[type]} tracksState={tracksState} currentTracksState={currentTracksState} volumesState={volumesState} />)}
    </ul>
  )
}