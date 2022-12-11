import { Modal } from '@mui/material'
import { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Browser from "../../components/Browser/Browser"
import Player from "../../components/Player/Player"
import { getAllTracks } from '../../supabase/supabase'
import './CreatePage.scss'

function CreatePage() {

  //state to track modal
  const [modalOpen, setModalOpen] = useState(false)

  //state to store basic track info (id, type, title)
  const [tracks, setTracks] = useState([])
  //obj to store track state to be passed as props more easily
  const tracksState = { tracks, setTracks }

  //on page load, get all tracks and store in state
  useEffect(() => {
    getAllTracks()
      .then(data => setTracks(data))
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <main id='create'>
        <Player tracksState={tracksState} setModalOpen={setModalOpen} />
        <Browser tracks={tracks} />
      </main>
      {/* help modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} >
        <aside className='help-modal' >
          <section className='help-modal__section'>
            <h2 className='help-modal__heading'>How to Use Easy Instrumentals</h2>
            <p>to get started, simply drag and drop some tracks into the player.</p>
            <p>you can hear a sample of a track by clicking the play button next to its title in the track browser</p>
          </section>
          <section className='help-modal__section'>
            <h2 className='help-modal__heading'>keyboard bindings:</h2>
            <p><span className='help-modal__key'>space bar:</span> play and pause the song</p>
            <p><span className='help-modal__key'>Enter:</span> stop all sounds. on resume, tracks will start from the beginning.</p>
          </section>
        </aside>
      </Modal>
    </DndProvider >
  )
}

export default CreatePage