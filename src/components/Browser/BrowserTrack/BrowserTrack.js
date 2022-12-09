import { PlayArrow } from '@mui/icons-material'
import { Howl } from 'howler'
import { useState } from 'react'
import { useDrag } from 'react-dnd'
import gif from '../../../assets/images/sound.gif'
import { getMidiURL } from '../../../supabase/supabase'
import './BrowserTrack.scss'

export default function BrowserTrack({ track }) {
  const { title, type, id } = track

  const [playing, setPlaying] = useState(false)

  const [{ isDragging }, dragRef] = useDrag({
    type: type,
    item: { track },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const handleSample = async () => {
    const url = await getMidiURL(id)
    const sample = new Howl({
      src: [url],
      html5: true,
    })
    window.Howler.stop()
    window.Howler.mute(false)
    sample.play()
    setPlaying(true)
    setTimeout(() => {
      sample.stop()
      setPlaying(false)
    }, 5000)

  }

  return (
    <li className='browser-track' ref={dragRef} style={isDragging ? { filter: 'opacity(.5)' } : {}} >
      <button className='browser-track__play' onClick={handleSample}>
        <PlayArrow />
      </button>
      {playing && <img className='browser-track__playing' src={gif} alt="playing" />}
      <span>{title}</span>
    </li>
  )
}