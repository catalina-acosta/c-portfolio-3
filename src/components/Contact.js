import React from 'react'
import "../styles/Contact.css"
import ContactForm from '../helpers/ContactForm'

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='contact-container'>
        <h1 className='contact-title'>let's chat!</h1>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact
