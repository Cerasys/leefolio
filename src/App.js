import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'
import Profile from './components/Profile/Profile'
import ReactGA from 'react-ga'
import QA from './components/QA/QA'
ReactGA.initialize('G-HRJXZGL9JT')
ReactGA.pageview(window.location.pathname + window.location.search)

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Profile />
        <QA />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
