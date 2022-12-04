import { useState } from 'react'
import PlayerHeader from './PlayerHeader/PlayerHeader'

export default function Player() {

  const [activeTab, setActiveTab] = useState('arrange')

  return (
    <div>
      <PlayerHeader tabState={{ activeTab, setActiveTab }} />
      {/* view */}
      {/* controls */}
    </div>
  )
}