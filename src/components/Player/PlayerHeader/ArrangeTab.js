import { ReactComponent as ArrangeIcon } from '../../../assets/images/icons/arrange.svg'

export default function ArrangeTab({ activeTab }) {
  return (
    <div className={`player-header__tab
    ${activeTab === 'arrange' ? ' active' : ''}`
    }>
      <ArrangeIcon className="player-header__icon" />
      <span className="player-header__label">Arrange</span>
    </div>
  )
}