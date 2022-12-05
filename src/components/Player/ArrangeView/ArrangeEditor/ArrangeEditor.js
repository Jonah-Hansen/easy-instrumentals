import ArrangeEditorRow from '../ArrangeEditorRow/ArrangeEditorRow'
import './ArrangeEditor.scss'

export default function ArrangeEditor({ tracksState }) {

  const trackTypes = ['melody', 'chords', 'bass', 'drums',]

  return (
    <ul className='arrange-editor'>
      {trackTypes.map((trackType, index) => <ArrangeEditorRow key={index} title={trackType} tracksState={tracksState} />)}
    </ul>
  )
}