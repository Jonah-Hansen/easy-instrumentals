import { useState } from 'react'
import ArrangeView from './ArrangeView/ArrangeView'
import PlayerHeader from './PlayerHeader/PlayerHeader'

export default function Player() {

  const [activeTab, setActiveTab] = useState('arrange')

  return (
    <div>
      <PlayerHeader tabState={{ activeTab, setActiveTab }} />
      <ArrangeView />
      {/* controls */}
    </div>
  )
}