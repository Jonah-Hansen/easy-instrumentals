
import { useEffect, useState } from 'react'
import { getTracksByType } from '../../../supabase/supabase'
import BrowserTrack from '../BrowserTrack/BrowserTrack'
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
      <ul className='browser-category__track-list'>
        {tracks.map(track =>
          <BrowserTrack key={track.id} track={track} type={title.toLowerCase()} />
        )}
      </ul>
    </section>
  )
}