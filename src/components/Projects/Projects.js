import { projects } from '../../portfolio'
import ProjectContainer from './ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      {/* <ProjectContainer /> */}
      <h2>See my Portfolio</h2>
    </section>
  )
}

export default Projects
