import { PlayArrow } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { getTracksByType } from '../../../supabase/supabase'
import './BrowserCategory.scss'

export default function BrowserCategory({ title }) {

  const [tracks, setTracks] = useState([])

  useEffect(() => {
    getTracksByType(title)
      .then(data => setTracks(data))
  }, [title])

  return (
    <section className='browser-category'>
      <h3 className='browser-category__heading'>{title}</h3>
      <ul className='browser-catergory__track-list'>
        {tracks.map(track =>
          <li key={track.id} className='browser-category__track' >
            <PlayArrow />
            <span>{track.title}</span>
          </li>
        )}
      </ul>
    </section>
  )
}