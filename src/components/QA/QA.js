import Accordion from 'react-bootstrap/Accordion'
import './QA.css'
import { about, resume, contact, portfolio } from '../../portfolio'
import { Container, Row } from 'react-bootstrap'

const QA = () => {
  return (
    <section className='section contact center' id='contact'>
      <Container>
        <Row className='qa_title'>
          <h2 className='section__title'>More on my experience...</h2>
        </Row>
        <br />
        <Row className='qa_accordian'>
          <Accordion className='accordian'>
            <hr />
            <Accordion.Item eventKey='0'>
              <Accordion.Header>My skillsets</Accordion.Header>
              <Accordion.Body>
                <ul className='qa__ul'>
                  <li>
                    <strong>Marketing:</strong> Business has physics. The only
                    way you can get people to buy your stuff is if you get
                    people to find your stuff;
                  </li>
                  <br />
                  <li>
                    <strong>Growth:</strong> Get new customers, help them spend
                    more, and make them stay longer. Boom baby🦙;
                  </li>
                  <br />
                  <li>
                    <strong>Coaching:</strong> I'll go slow enough that you
                    never get overwhelmed, but fast enough that we get results;
                  </li>
                  <br />
                  <li>
                    <strong>Engineering:</strong> I'm a closet code 🐵. Let's
                    build something together;
                  </li>
                </ul>
                <br />

                <p>
                  I'm committed to helping business owners win, and I'll do
                  whatever it takes to get them there.
                </p>
              </Accordion.Body>
            </Accordion.Item>{' '}
            <hr />
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Why I do what I do</Accordion.Header>
              <Accordion.Body>
                <p>When I die, I want people to say these things about me: </p>
                <ul className='qa__ul'>
                  <li>
                    - That I was a maverick and thought outside the box and
                    taught others to do the same
                  </li>
                  <li>- I was extremely influential in their lives</li>
                  <li>- That I was gentle, joyful, and a powerful leader</li>
                  <li>
                    - That money was a tool, not an idol, that I used well
                  </li>
                  <li>- I was forward thinking and left a legacy</li>
                  <li>- I was obsessed with personal growth</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <hr />
            <Accordion.Item eventKey='2'>
              <Accordion.Header>
                My life tragically crammed onto a few documents
              </Accordion.Header>
              <Accordion.Body>
                <ul className='qa__ul'>
                  <li>
                    <strong>
                      <a
                        href={about.resume}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        - Resume
                      </a>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <a
                        href={portfolio}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        - Portfolio
                      </a>
                    </strong>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <hr />
            <Accordion.Item eventKey='3'>
              <Accordion.Header>Connect with me here 👇🏻 </Accordion.Header>
              <Accordion.Body>
                <ul className='qa__ul'>
                  <li>
                    <strong>
                      <a
                        href={about.social.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        - LinkedIn
                      </a>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <a
                        href={about.social.instagram}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        - Instagram
                      </a>
                    </strong>
                  </li>
                  <li>
                    <strong>
                      <a
                        href={about.social.github}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        - Github
                      </a>
                    </strong>
                  </li>{' '}
                  <li>
                    <strong>
                      <a
                        href={about.social.spotify}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        - Spotify
                      </a>
                    </strong>
                  </li>
                  {contact.email && (
                    <li>
                      <strong>
                        <a href={`/contact`}>- Email</a>
                      </strong>
                    </li>
                  )}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </section>
  )
}

export default QA
