import './Browser.scss'
import BrowserCategory from './BrowserCategory/BrowserCategory'

export default function Browser() {
  return (
    <section className='browser' >
      <h2 className='browser__heading'>Track Browser</h2>
      {/* filter */}
      <div className='browser__library'>
        <BrowserCategory title='Melody' />
        <BrowserCategory title='chords' />
        <BrowserCategory title='bass' />
        <BrowserCategory title='drums' />
      </div>

    </section>
  )
}