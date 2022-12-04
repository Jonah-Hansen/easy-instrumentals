import './ArrangeEditorRow.scss'

export default function ArrangeEditorRow({ title }) {
  return (
    <li className='arrange-editor-row'>
      <div className='arrange-editor-row__label'>
        {title}
      </div>
      <div className='arrange-editor-row__track' />
    </li>
  )
}