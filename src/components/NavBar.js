import React, { useState } from 'react';
import "../styles/NavBar.css"
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function NavBar() {

  const [expandNavbar, setExpandNavbar] = useState(false);

  const handleLinkClick = () => {
    setExpandNavbar(false);
  }

  return (

    <div className="navbar">
      <Router>
        <div className="menu-icon" onClick={() => setExpandNavbar(!expandNavbar)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`links ${expandNavbar ? 'expanded' : ''}`}>
          <li><HashLink smooth to='#projects' onClick={handleLinkClick}>projects</HashLink></li>
          <li><HashLink to='#about' onClick={handleLinkClick}>about</HashLink></li>
          <li><HashLink to='#contact' onClick={handleLinkClick}>contact</HashLink></li>
        </ul>
        <div className="logo-container">
          <HashLink to='#home' id="logo"> c.</HashLink>
        </div>
      </Router>
    </div>
  );
}

export default NavBar;
