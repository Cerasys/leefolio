import './About.css'
import Button from 'react-bootstrap/Button'
import { about } from '../../portfolio'

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
          href='https://nblee.notion.site/bd37d0430b3c4ca5b057ac968a57b7d1?v=4de55da4101147b5a8ad7b9841cf34cb&pvs=4'
          target='_blank'
          rel='noopener noreferrer'
        >
          Portfolio
        </Button>
        <Button
          className='mb-2'
          variant='danger'
          href='mailto:nathanblee@gmail.com'
        >
          Get in touch
        </Button>
      </div>
    </section>
  )
}

export default About
