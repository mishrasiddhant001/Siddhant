import React from 'react';
import CV from '../../assets/Resume.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} target="_blank" rel="noopener noreferrer" className='btn'>Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  );
}

export default CTA;
