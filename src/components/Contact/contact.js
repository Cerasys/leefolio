import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button, Form, Modal } from 'react-bootstrap'
import './contact.css'

export const ContactUs = () => {
  const form = useRef()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [showError, setShowError] = useState(false)
  const handleCloseError = () => setShowError(false)
  const handleShowError = () => setShowError(true)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_q08qn5p',
        'template_9noztr1',
        form.current,
        'kqLp1zhQ6X_RlWhzH'
      )
      .then(
        (result) => {
          console.log(result.text)
          handleShow()
        },
        (error) => {
          console.log(error.text)
          handleShowError()
        }
      )
  }

  return (
    <div className='contact-form'>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className='mb-9'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' name='user_name' required />
        </Form.Group>
        <Form.Group className='mb-9'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' name='user_email' required />
        </Form.Group>
        <Form.Group className='mb-6'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' name='message' required />
        </Form.Group>
        <br />
        <Button
          type='submit'
          variant='warning'
          value='send'
          className='text-center'
        >
          Contact
        </Button>
      </Form>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop={false}
        className='modal-backdrop'
      >
        <Modal.Header closeButton className='modal-header'>
          <Modal.Title>Successfully sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          Your email was successfully sent. We'll be in touch soon.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showError}
        onHide={handleCloseError}
        className='modal-backdrop'
      >
        <Modal.Header closeButton className='modal-header-error'>
          <Modal.Title>Email Failed!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body-error'>
          Something went wrong while sending your email. Please check the inputs
          and try again.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
