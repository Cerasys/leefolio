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
        {resume && <Button variant='warning'>Get in touch</Button>}
      </div>
    </section>
  )
}

export default About
