import BrowserTrack from '../BrowserTrack/BrowserTrack';
import './BrowserCategory.scss';

export default function BrowserCategory({ title, tracks }) {

  return (
    <section className='browser-category'>
      <h3 className='browser-category__heading'>{title}</h3>
      <ul className='browser-category__track-list'>
        {tracks.map(track =>
          <BrowserTrack key={track.id} track={track} />
        )}
      </ul>
    </section>
  )
}