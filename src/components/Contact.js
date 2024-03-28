import React from 'react'
import "../styles/Contact.css"
import ContactForm from '../helpers/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1 className='contact-title'>contact.</h1>
      <div className="contact-container">
        <div className='contact-form-container'>
          <ContactForm/>
        </div>
        <div className="button-container">
            <a
              href='https://github.com/catalina-acosta'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href='https://www.linkedin.com/in/catalina-acosta-rivera/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
