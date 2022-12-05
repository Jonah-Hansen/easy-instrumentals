import { useState } from 'react'
import { useDrop } from 'react-dnd'
import './ArrangeEditorRow.scss'

export default function ArrangeEditorRow({ title, tracksState }) {

  const { tracks, setTracks } = tracksState

  const [currentTrack, setCurrentTrack] = useState(null)

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: title.toLowerCase(),
    drop: ({ track }) => {
      setCurrentTrack(track)
      const newTracks = [...tracks]
      setTracks(newTracks.filter(browserTrack => browserTrack.id !== track.id))
      console.log(track);
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
        {currentTrack && <span>{currentTrack.title}</span>}
      </div>
    </li>
  )
}