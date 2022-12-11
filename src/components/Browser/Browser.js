import './Browser.scss';
import BrowserCategory from './BrowserCategory/BrowserCategory';

export default function Browser({ tracks }) {

  return (
    <section className='browser' >
      <h2 className='browser__heading'>Track Browser</h2>
      {/* filter */}
      <div className='browser__library'>
        <BrowserCategory title='Melody' tracks={tracks.filter(track => track.type === 'melody')} />
        <BrowserCategory title='chords' tracks={tracks.filter(track => track.type === 'chords')} />
        <BrowserCategory title='bass' tracks={tracks.filter(track => track.type === 'bass')} />
        <BrowserCategory title='drums' tracks={tracks.filter(track => track.type === 'drums')} />
      </div>

    </section>
  )
}