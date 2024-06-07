import React, { useState } from 'react';
import './nav.css';

import { AiTwotoneHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import { GiBookshelf } from 'react-icons/gi';
import { LiaSchoolSolid } from 'react-icons/lia';
import { AiFillMessage } from 'react-icons/ai';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <div>
      <nav>
        <a href='#'onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome /></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
        <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><AiFillSetting /></a>
        <a href='#education' onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><LiaSchoolSolid /></a>
        <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><GiBookshelf /></a>
        <a href='#contact'  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
      </nav>
    </div>
  );
};

export default Nav;
