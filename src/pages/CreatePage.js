import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Browser from "../components/Browser/Browser"
import Player from "../components/Player/Player"

function CreatePage() {

  return (
    <DndProvider backend={HTML5Backend}>
      <main>
        <Player />
        <Browser />
      </main>
    </DndProvider>
  )
}

export default CreatePage