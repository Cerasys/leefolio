import React from 'react'
import './Profile.css' // Import your CSS file
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { about, business } from '../../portfolio'

const Profile = () => {
  const { photo } = about

  return (
    <section className='portfolio-description'>
      <Container>
        <Row>
          <Col sm={6} xl={5}>
            <Image
              src={photo}
              alt='Portfolio'
              className='portfolio-image'
              rounded
            />
          </Col>
          <Col sm={6} xl={7}>
            <Row>
              <div className='text-container'>
                <p>
                  Having started my first business in college, I’ve been
                  fascinated by the physics of business-the universal rules that
                  are true across industries and business models.
                </p>
                <p>
                  A CEO and Product Leader for over 4 years, I’ve founded
                  multiple companies and supported business leaders ranging from
                  global nonprofits to AI startups.
                </p>
                <p>Some of my proudest work accomplishments include:</p>

                <ul className='ul-profile'>
                  <li>
                    <b>
                      <a
                        href={business}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        [CURRENTLY BUILDING]: The ultimate bootcamp for
                        therapreneurs (therapist entrepreneur) to launch their
                        private practice.
                      </a>
                    </b>{' '}
                  </li>
                  <li>
                    Launching{' '}
                    <a
                      href='https://nblee.notion.site/PersonaAI-CPO-CoFounder-fd3ccabef7cc4d22a084b984a5dfa444'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      PersonaAI
                    </a>{' '}
                    (startup), an AI interview tool for recruiting agencies.
                  </li>
                  <li>
                    Overhauling{' '}
                    <a
                      href='https://nblee.notion.site/Healing-Rooms-Ministries-PM-cca22ee3243e4c5488918ba006ca1927'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Healing Rooms Ministries
                    </a>
                    , a Christian ministry whose techstack hadn’t been touched
                    in nearly 25 years.
                  </li>
                  <li>
                    Created and Kickstarted a board game called{' '}
                    <a
                      href='https://nblee.notion.site/JailBird-CEO-CoFounder-847c7ba0591543cb80648771d831e754'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      JailBird
                    </a>{' '}
                    while in college, selling over 5-figures of product in our
                    first year.
                  </li>
                </ul>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Profile
