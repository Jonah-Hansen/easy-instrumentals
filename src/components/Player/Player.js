import { useState } from 'react'
import ArrangeView from './ArrangeView/ArrangeView'
import PlayerControls from './PlayerControls/PlayerControls'
import PlayerHeader from './PlayerHeader/PlayerHeader'

export default function Player({ tracksState }) {

  const [activeTab, setActiveTab] = useState('arrange')

  return (
    <div>
      <PlayerHeader tabState={{ activeTab, setActiveTab }} />
      <ArrangeView tracksState={tracksState} />
      <PlayerControls />
    </div>
  )
}