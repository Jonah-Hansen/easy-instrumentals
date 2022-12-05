import { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Browser from "../components/Browser/Browser"
import Player from "../components/Player/Player"
import { getAllTracks } from '../supabase/supabase'

function CreatePage() {

  const [tracks, setTracks] = useState([])
  const tracksState = { tracks, setTracks }

  useEffect(() => {
    getAllTracks()
      .then(data => setTracks(data))
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <main>
        <Player tracksState={tracksState} />
        <Browser tracks={tracks} />
      </main>
    </DndProvider>
  )
}

export default CreatePage