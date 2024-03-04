import "../styles/NavBar.css"
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import turtle from '../assets/turtle.png'

function NavBar() {
  return (
    <div className="navbar">
      <Router>
        <ul className="links">
          <li><HashLink to='#projects'>projects</HashLink></li>
          <li><HashLink to='#about'>about</HashLink></li>
          <li><HashLink to='#contact'>contact</HashLink></li>
        </ul>
        <span id='logo'><HashLink to='#home'> C.</HashLink></span>
      </Router>
    </div>
  );
}

export default NavBar;
