import React, {useEffect} from 'react';
import './about.css';
import ME from '../../assets/me_about.png';
import intro from '../../assets/intro.gif'
import { BsFillAwardFill } from 'react-icons/bs';
import { GiBookshelf } from 'react-icons/gi';
import { MdSchool } from 'react-icons/md';
import {BiSolidUser} from 'react-icons/bi'
import { DiCode } from "react-icons/di";


const About = () => {
  // Disable scrolling when the component is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling on unmount
    };
  }, []);
  return (
    <section id='about'>
      <div className="about_head">
        {/* <h4><b>Get to know</b></h4> */}
        {/* <h1 style={{ color: 'var(--color-primary)' }}><b><BiSolidUser/></b></h1> */}
        <h1 className="hover-effect"><b>About me</b></h1>

      </div>
      <div className="container about__container" style={{marginTop: '50px'}}>
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={intro} alt='Profile_img' />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">

          <article className="about__card">
              <MdSchool className='about_icon' />
              <h5><b>Education</b></h5>
              <small><b>B.Tech-CSE (2024)</b></small>
            </article>

            <article className="about__card">
               <DiCode  className='about_icon' />
               <h5><b>Role</b></h5>
              {/* <h5></h5> */}
              <small><b>Devops Engineer</b></small>
            </article>

            <article className="about__card">
              <BsFillAwardFill className='about_icon' />
              <h5><b>Experience</b></h5>
              <small><b>07/2024 - Present</b></small>
            </article>

           

          </div>

<div className="about__paragraph">
  <p>
    <strong>As a DevOps Engineer,</strong> I specialize in creating efficient CI/CD pipelines, automating workflows, and managing robust cloud infrastructures to deliver seamless, scalable solutions. 
    <br /><br />
    With a passion for innovation and a knack for optimization, I’ve developed Python-based automation tools and implemented strategies like Blue-Green deployments to ensure minimal downtime and enhance user experience. 
    <br /><br />
    Whether it’s crafting custom APK build processes, streamlining deployments on AWS and GCP, or automating backends and APIs, I thrive at the intersection of technology and efficiency. 
    <br /><br />
    <strong>Let’s connect and do some DevOps together!</strong>
  </p>
</div>

        </div>
        <div className="image">
            <img src={intro} alt='Profile_img' />
          </div>
      </div>
    </section>
  );
};

export default About;
