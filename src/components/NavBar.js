import "../styles/NavBar.css"
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Router>
        <ul className="links">
          <li><HashLink smooth to='#projects'>projects</HashLink></li>
          <li><HashLink to='#about'>about</HashLink></li>
          <li><HashLink to='#contact'>contact</HashLink></li>
        </ul>
        <div className="logo-container">
          <HashLink to='#home' id="logo"> C.</HashLink>
        </div>
      </Router>
    </div>
  );
}

export default NavBar;
