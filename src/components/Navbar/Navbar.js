import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, contact, business, portfolio } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  // const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {business && (
          <li className='nav__list-item'>
            <a
              href={business}
              onClick={toggleNavList}
              className='link link--nav'
              target='_blank'
              rel='noopener noreferrer'
            >
              For investors ONLY!
            </a>
          </li>
        )}
        {/*
        {portfolio && (
          <li className='nav__list-item'>
            <a
              href={portfolio}
              onClick={toggleNavList}
              className='link link--nav'
              target='_blank'
              rel='noopener noreferrer'
            >
              Portfolio
            </a>
          </li>
        )}
        */}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href={`/contact`}
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      {/* <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button> */}

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
