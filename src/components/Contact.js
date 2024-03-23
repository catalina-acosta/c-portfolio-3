import React from 'react'
import "../styles/Contact.css"
import ContactForm from '../helpers/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='contact-container'>
        <h1 className='contact-title'>let's chat!</h1>
        <ContactForm/>
      </div>
      <div className="button-container">
          <button>
            <a
              href='https://github.com/catalina-acosta'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </button>
          <button>
            <a
              href='https://www.linkedin.com/in/catalina-acosta-rivera/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </button>
        </div>
    </div>
  )
}

export default Contact
