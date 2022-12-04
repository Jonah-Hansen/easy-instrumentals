import PlayerRuler from '../../PlayerRuler/PlayerRuler'
import ArrangeCanvas from '../ArrangeCanvas/ArrangeCanvas'
import './ArrangeEditor.scss'

export default function ArrangeEditor() {
  return (
    <div className='arrange-editor'>
      <ul className='arrange-editor__tracks'>
        <li className='arrange-editor__spacer--top' />
        <li className='arrange-editor__track'><span>Melody</span></li>
        <li className='arrange-editor__track'><span>Chords</span></li>
        <li className='arrange-editor__track'><span>Bass</span></li>
        <li className='arrange-editor__track'><span>Drums</span></li>
      </ul>
      <div className='arrange-editor__canvas-container'>
        <PlayerRuler />
        <ArrangeCanvas />
      </div>
    </div>
  )
}