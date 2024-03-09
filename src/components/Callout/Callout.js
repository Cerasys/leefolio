import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import './Callout.css'

const Callout = (second) => {
  return (
    <section className='callout'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col sm={8} xl={10}>
            <div className='text-container-highlight'>
              <strong>
                <h5>
                  I'm working on something NEW! <br />
                  If you're a therapist who wants to fill your private practice,
                  keep it full forever, and do it all hassle-free, let's talk!
                </h5>
              </strong>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Callout
