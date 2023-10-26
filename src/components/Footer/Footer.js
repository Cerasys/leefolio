import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ContactPageIcon from '@mui/icons-material/ContactPage'
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
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}
            <a
              href='https://drive.google.com/file/d/1wlu5zUxQfA3eyNtvGQ-cn7LMwt1uxG4k/view?usp=sharing'
              aria-label='resume'
              className='link link--icon'
              target='_blank'
              rel='noreferrer'
            >
              <ContactPageIcon />
            </a>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
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
