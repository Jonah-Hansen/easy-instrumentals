import ArrangeEditorRow from '../ArrangeEditorRow/ArrangeEditorRow'
import './ArrangeEditor.scss'

export default function ArrangeEditor() {

  const tracks = ['melody', 'chords', 'bass', 'drums',]

  return (
    <ul className='arrange-editor'>
      {tracks.map((track, index) => <ArrangeEditorRow key={index} title={track} />)}
    </ul>
  )
}