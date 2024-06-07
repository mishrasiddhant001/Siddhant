import React from 'react';
import './about.css';
import ME from '../../assets/me_about.png';
import { BsFillAwardFill } from 'react-icons/bs';
import { GiBookshelf } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';
import {BiSolidUser} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <div className="about_head">
        <h4><b>Get to know</b></h4>
        <h1 style={{ color: 'var(--color-primary)' }}><b><BiSolidUser/></b></h1>
        <h1 style={{ color: 'var(--color-primary)' }}><b>   About me</b></h1>
      </div>
      <div className="container about__container" style={{marginTop: '50px'}}>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='Profile_img' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

          <article className="about__card">
              <MdSchool className='about_icon' />
              <h5>Graduation</h5>
              <small>B.Tech-CSE (Final-Year)</small>
            </article>

            <article className="about__card">
              <BsFillAwardFill className='about_icon' />
              <h5>Experience</h5>
              <small>Entry Level</small>
            </article>

            <article className="about__card">
              <GiBookshelf className='about_icon' />
              <h5>Projects</h5>
              <small>10+ projects</small>
            </article>

          </div>

          <div className="about__paragraph">
            <p>
              I'm a final-year B.Tech undergrad (Computer Science & Engineering) at United College of Engineering and
              research.<br />
              I started as a web developer with (Devslopes & IBM) and made a few web projects.
              I Want To Learn More Technology , Sharpen My Coding & communication Skills.
              I'm currently learning about React & Machine Learning (CodingBlocks).<br />
              I also have a decent hold on Problem-Solving and DSA. Have 5 stars in Database management using SQL and 3
              stars in problem-solving and Python. 200+ questions on LeetCode.<br />
              I'm an NSS (National Service Scheme) volunteer.<br />
              I love to read novels and poetries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
