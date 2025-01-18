import React, { useState } from 'react';
import './nav.css'; // You can style the navbar in this file
import logo from '../../assets/logo.png'; // Adjust the path if needed

function Nav() {
  const [activeLink, setActiveLink] = useState('#home'); // Default active link

  const handleNavClick = (link) => {
    setActiveLink(link); // Update active link on click
  };

  return (
    <nav className="navbar">
      {/* Add logo */}
      <a href="#home" className="navbar-logo-link">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </a>

      <ul className="navbar-links">
        <li>
          <a
            href="#home"
            className={activeLink === '#home' ? 'active' : ''}
            onClick={() => handleNavClick('#home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeLink === '#about' ? 'active' : ''}
            onClick={() => handleNavClick('#about')}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={activeLink === '#skills' ? 'active' : ''}
            onClick={() => handleNavClick('#skills')}
          >
            Skills
          </a>
        </li>
        {/* <li>
          <a
            href="#projects"
            className={activeLink === '#projects' ? 'active' : ''}
            onClick={() => handleNavClick('#projects')}
          >
            Projects
          </a>
        </li> */}
        <li>
          <a
            href="#contact"
            className={activeLink === '#contact' ? 'active' : ''}
            onClick={() => handleNavClick('#contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
