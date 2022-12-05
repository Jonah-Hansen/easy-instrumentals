import { PlayArrow } from '@mui/icons-material'
import { useState } from 'react'
import { useDrag } from 'react-dnd'
import './BrowserTrack.scss'

export default function BrowserTrack({ track, type }) {
  const { id, title } = track

  const [dropped, setDropped] = useState(false)

  const [{ isDragging }, dragRef] = useDrag({
    type: type,
    item: { title },
    end: (_track, { didDrop }) => { if (didDrop) setDropped(true) },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <li className='browser-track' ref={dragRef} style={isDragging ? { filter: 'opacity(.5)' } : dropped ? { display: 'none' } : {}} >
      <PlayArrow />
      <span>{title}</span>
    </li>
  )
}