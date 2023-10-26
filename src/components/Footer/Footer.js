import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'

const Footer = () => {
  const { social } = about

  return (
    <footer className='footer'>
      <div className='footer__contact footer-center'>
        {/* Apply the center class here */}
        {social && (
          <>
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}
          </>
        )}
      </div>
    </footer>
  )
}

export default Footer
