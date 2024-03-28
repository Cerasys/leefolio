import './About.css'
import Button from 'react-bootstrap/Button'
import { about, business, contact, portfolio } from '../../portfolio'
import Callout from '../Callout/Callout'

const About = () => {
  const { name, description, resume } = about

  return (
    <section className='about'>
      {name && <h1 className='about__gradient'>Hey, my name is {name} 👋</h1>}
      <p className='about__desc'>{description && description}</p>

      <Callout />
      <div className='about__contact'>
        {/* {resume && (
          <Button
            className='mb-2'
            variant='secondary'
            href={resume}
            target='_blank'
            rel='noopener noreferrer'
          >
            Resume
          </Button>
        )}
        <Button
          className='mb-2'
          variant='warning'
          href={portfolio}
          target='_blank'
          rel='noopener noreferrer'
        >
          Portfolio
        </Button> */}

        {/*
        {contact.email && (
          <Button className='mb-2' variant='danger' href={`/contact`}>
            Get in touch
          </Button>
        )}*/}
        {business && (
          <Button className='mb-2' variant='danger' href={business}>
            Yes! Help me grow my practice!
          </Button>
        )}
      </div>
    </section>
  )
}

export default About
