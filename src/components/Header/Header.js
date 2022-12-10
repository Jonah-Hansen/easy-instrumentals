import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/images/icons/piano.svg'
import './Header.scss'

export default function Header() {
  return (
    <header className='header'>
      <Link className='header__title' to={'/'}>
        <Logo className='header__logo' />
        <h1 className='header__heading'>Easy Instrumentals</h1>
      </Link>

      <nav className='header__nav'>
        <NavLink className='header__link' to={'/'}>
          <span className='header__link-text'>Home</span>
        </NavLink>
        <NavLink className='header__link' to={'/create'}>
          <span className='header__link-text'>Create</span>
        </NavLink>
      </nav>
    </header>
  )
}