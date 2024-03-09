import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import { about, business } from '../../portfolio'
import { Instagram } from '@material-ui/icons'

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
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}
            <a
              href={business}
              aria-label='resume'
              className='link link--icon'
              target='_blank'
              rel='noreferrer'
            >
              <ContactPageIcon />
            </a>
            {social.instagram && (
              <a
                href={social.instagram}
                aria-label='instagram'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <InstagramIcon />
              </a>
            )}
          </>
        )}
      </div>
    </footer>
  )
}

export default Footer
