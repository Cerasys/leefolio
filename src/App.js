import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/About/About'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'
import Profile from './components/Profile/Profile'
import ReactGA from 'react-ga'
import QA from './components/QA/QA'
import { ContactUs } from './components/Contact/contact'

ReactGA.initialize('G-HRJXZGL9JT')
ReactGA.pageview(window.location.pathname + window.location.search)

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`dark app`}>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

function MainPage() {
  return (
    <div>
      <About />
      <Profile />
      <QA />
    </div>
  )
}

export default App
