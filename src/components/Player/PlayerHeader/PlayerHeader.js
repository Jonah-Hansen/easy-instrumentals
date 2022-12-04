import { Help as HelpIcon } from "@mui/icons-material"
import { ReactComponent as ArrangeIcon } from '../../../assets/images/icons/arrange.svg'
import { ReactComponent as PianoIcon } from '../../../assets/images/icons/piano.svg'
import './PlayerHeader.scss'

export default function PlayerHeader({ tabState }) {

  const { activeTab, setActiveTab } = tabState

  return (
    <header className="player-header">
      <nav className="player-header__nav">
        <div
          onClick={() => setActiveTab('arrange')}
          className={`player-header__tab
            ${activeTab === 'arrange' ? ' active' : ''}`
          }
        >
          <ArrangeIcon className="player-header__icon" />
          <span className="player-header__label">Arrange</span>
        </div>

        <div
          onClick={() => setActiveTab('piano')}
          className={`player-header__tab
            ${activeTab === 'piano' ? ' active' : ''}`
          }
        >
          <PianoIcon className="player-header__icon" />
          <span className="player-header__label">Piano Roll</span>
        </div>
      </nav>
      <div className="player-header__tab">
        <HelpIcon className="player-header__icon" />
        <span className="player-header__label">Help</span>
      </div>
    </header>
  )
}