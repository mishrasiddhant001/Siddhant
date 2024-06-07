import React, { useState, useEffect, useMemo } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import Socials from './Socials';

const Header = () => {
  // Define an array of professions.
  const professions = useMemo(() => ['Engineer', 'Web Developer', 'Programmer', 'Java Developer'], []);

  // State variables for controlling the profession animation.
  const [displayedProfession, setDisplayedProfession] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    // Function for typing and erasing the profession.
    const typeAndErase = () => {
      if (isTyping) {
        if (charIndex <= professions[index].length) {
          // Display the profession character by character.
          setDisplayedProfession((prevProfession) => professions[index].substring(0, charIndex));
          setCharIndex((prevCharIndex) => prevCharIndex + 1);
          timeout = setTimeout(typeAndErase, 3); // Increase typing speed
        } else {
          timeout = setTimeout(() => setIsTyping(false), 30); // Reduced pause before erasing
        }
      } else {
        if (charIndex >= 0) {
          // Erase the profession character by character.
          setDisplayedProfession((prevProfession) => professions[index].substring(0, charIndex));
          setCharIndex((prevCharIndex) => prevCharIndex - 1);
          timeout = setTimeout(typeAndErase, 1); // Increase erasing speed
        } else {
          setCharIndex(0);
          // Switch to the next profession in the array in a circular manner.
          setIndex((prevIndex) => (prevIndex + 1) % professions.length);
          setTimeout(() => setIsTyping(true), 15); // Reduced pause before typing the next profession
        }
      }
    };

    timeout = setTimeout(typeAndErase, 100); // Initial delay before starting the animation

    // Clear the timeout to prevent memory leaks.
    return () => clearTimeout(timeout);
  }, [index, isTyping, charIndex,professions  ]);

  useEffect(() => {
    // You can add additional logic here that depends on the change in 'index' if needed
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h2><b>Hello </b><span role="img" aria-label="Waving Hand" style={{ animation: "wave 2s infinite", fontSize: "2em" }}>👋</span></h2>
        <h1>I'm Siddhant Mishra</h1>
        <h3 className="text-light"><b>{`I'm a ${displayedProfession}`}</b></h3>
        <CTA />
        <Socials />
        <div className="me">
          <img src={ME} alt='my_img' />
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
