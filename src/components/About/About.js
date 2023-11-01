import './About.css'
import Button from 'react-bootstrap/Button'
import { about, contact, portfolio } from '../../portfolio'

const About = () => {
  const { name, description, resume } = about

  return (
    <section className='about'>
      {name && <h1 className='about__gradient'>Hey, my name is {name} 👋</h1>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact'>
        {resume && (
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
        </Button>
        {contact.email && (
          <Button
            className='mb-2'
            variant='danger'
            href={`mailto:${contact.email}`}
          >
            Get in touch
          </Button>
        )}
      </div>
    </section>
  )
}

export default About
