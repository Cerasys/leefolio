import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { logo } = header

  return (
    <header className='header center'>
      {logo && (
        <a href='/'>
          <img height='50px' alt='Avatar placeholder' src={logo} />
        </a>
      )}
      <Navbar />
    </header>
  )
}

export default Header
