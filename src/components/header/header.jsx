import React, { useState, useEffect, useMemo } from 'react';
import './header.css';
import CTA from './CTA';
import Socials from './Socials';
import ME from '../../assets/me.png';

import logo from '../../assets/logo.png'; // Adjust the path if needed

const Header = () => {
  // Disable scrolling when the component is mounted
    useEffect(() => {
      document.body.style.overflow = "hidden"; // Disable scrolling
      return () => {
        document.body.style.overflow = "auto"; // Re-enable scrolling on unmount
      };
    }, []);
  
  
  const professions = useMemo(
    () => [
      "I'm a Devops Engineer",
      "I'm a Cloud Enthusiast",
      "I'm an Automation Engineer",
      "I'm a Python Developer",
      "I Read Manga"
    ],
    []
  );

  const [displayedProfession, setDisplayedProfession] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const updateProfession = () => {
      setDisplayedProfession(professions[index]);
      setIndex((prevIndex) => (prevIndex + 1) % professions.length);
    };

    const interval = setInterval(updateProfession, 1600); // Change every 1.6 seconds

    return () => clearInterval(interval);
  }, [index, professions]);

  return (
    <header>
      <div className="container">
        <div className="first">
          <Socials />
        </div>
        <div className="header">
          <h2>
            <b style={{ fontSize: '2.5rem' }}>Hello </b>
            <span role="img" aria-label="Waving Hand" style={{ animation: 'wave 2s infinite', fontSize: '3rem' }}>
              👋
            </span>
          </h2>
          <h1 style={{ fontSize: '3rem' }}>I'm Siddhant Mishra</h1>
          <h3 className="text-light">
            <b>{`${displayedProfession}`}</b>
          </h3>
          <CTA />
        </div>
        <div className="last">
        <div className="me">
          <img src={ME} alt='my_img' />
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
