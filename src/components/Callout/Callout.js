import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import './Callout.css'

const Callout = (second) => {
  return (
    <section className='callout'>
      <Container className='text-center'>
        <Row className='justify-content-md-center'>
          <Col sm={10} className='text-center'>
            <div className='text-container-highlight'>
              <strong>
                <h5 className='text-center'>
                  I'm working on something NEW! <br />
                  If you're a real estate investor who wants to get more deals,
                  let's talk!
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
