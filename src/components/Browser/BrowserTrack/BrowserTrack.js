import { PlayArrow } from '@mui/icons-material'
import { useDrag } from 'react-dnd'
import './BrowserTrack.scss'

export default function BrowserTrack({ track }) {
  const { title, type } = track

  const [{ isDragging }, dragRef] = useDrag({
    type: type,
    item: { track },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <li className='browser-track' ref={dragRef} style={isDragging ? { filter: 'opacity(.5)' } : {}} >
      <PlayArrow />
      <span>{title}</span>
    </li>
  )
}