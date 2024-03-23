import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <p> built by catalina acosta rivera 2024 </p>
      <button><a href='#home' rel='button up'><FontAwesomeIcon icon={faAngleUp} /></a></button>
    </div>
  );
}

export default Footer;
