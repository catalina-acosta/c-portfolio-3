import React from 'react'
import "../styles/Contact.css"
import ContactForm from '../helpers/ContactForm'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1>Get in touch!</h1>
      <div className='contact-container'>
        <img src='' alt=''/>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact
