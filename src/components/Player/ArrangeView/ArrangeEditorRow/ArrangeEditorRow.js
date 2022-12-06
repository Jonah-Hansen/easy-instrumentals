import { useDrop } from 'react-dnd'
import './ArrangeEditorRow.scss'

export default function ArrangeEditorRow({ title, tracksState, currentTracksState }) {

  const { tracks, setTracks } = tracksState
  const { currentTracks, setCurrentTracks } = currentTracksState

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: title.toLowerCase(),
    drop: ({ track }) => {
      const newCurrentTracks = { ...currentTracks }
      newCurrentTracks[title] = track
      setCurrentTracks(newCurrentTracks)
      const newTracks = [...tracks]
      setTracks(newTracks.filter(browserTrack => browserTrack.id !== track.id))
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver()
    })
  })

  return (
    <li className='arrange-editor-row'>
      <div className='arrange-editor-row__label'>
        {title}
      </div>
      <div className='arrange-editor-row__track' ref={dropRef}
        style={isOver ? { filter: 'brightness(2)' } : canDrop ? { filter: 'brightness(1.5)' } : {}}
      >
        {currentTracks[title] && <span>{currentTracks[title].title}</span>}
      </div>
    </li>
  )
}