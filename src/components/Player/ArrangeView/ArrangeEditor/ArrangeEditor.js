import ArrangeEditorRow from '../ArrangeEditorRow/ArrangeEditorRow'
import './ArrangeEditor.scss'

export default function ArrangeEditor({ tracksState, currentTracksState, }) {

  const currentTracks = currentTracksState.currentTracks

  return (
    <ul className='arrange-editor'>
      {Object.keys(currentTracks).map((type, index) => <ArrangeEditorRow key={index} title={type} tracksState={tracksState} currentTracksState={currentTracksState} />)}
    </ul>
  )
}