import ArrangeEditorRow from '../ArrangeEditorRow/ArrangeEditorRow'
import './ArrangeEditor.scss'

export default function ArrangeEditor({ tracksState, currentTracksState, setFiles }) {

  const currentTracks = currentTracksState.currentTracks

  return (
    <ul className='arrange-editor'>
      {Object.keys(currentTracks).map((type, index) => <ArrangeEditorRow key={index} title={type} setFile={setFiles[type]} tracksState={tracksState} currentTracksState={currentTracksState} />)}
    </ul>
  )
}