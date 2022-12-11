import { Help as HelpIcon } from "@mui/icons-material"
import { ReactComponent as ArrangeIcon } from '../../../assets/images/icons/arrange.svg'
// import { ReactComponent as PianoIcon } from '../../../assets/images/icons/piano.svg'
import './PlayerHeader.scss'

export default function PlayerHeader({ tabState, setModalOpen }) {

  //deconstruct tab state. currently not used as there is only one tab
  const { activeTab, setActiveTab } = tabState

  return (
    <header className="player-header">
      <nav className="player-header__nav">
        {/* arrange tab */}
        <div
          onClick={() => setActiveTab('arrange')}
          className={
            `player-header__tab ${activeTab === 'arrange' ? ' active' : ''}`
          }
        >
          <ArrangeIcon className="player-header__icon" />
          <span className="player-header__label">Arrange</span>
        </div>
        {/* piano roll tab */}
        {/* <div
          // onClick={() => setActiveTab('piano')}
          className={
            `player-header__tab ${activeTab === 'piano' ? ' active' : ''}`
          }
        >
          <PianoIcon className="player-header__icon" />
          <span className="player-header__label">Piano Roll</span>
        </div> */}
      </nav>
      {/* help button tab */}
      <div className="player-header__tab" onClick={() => setModalOpen(true)}>
        <HelpIcon className="player-header__icon" />
        <span className="player-header__label">Help</span>
      </div>
    </header>
  )
}