import React from 'react';
import './projects.css';
import { BiLibrary } from "react-icons/bi";
const projects = () => {
  return (
    <section id='projects'>
      <div>
      <div className="icon">
          <BiLibrary />
        </div>
        <div className="text">
          <h1 style={{ fontSize: '2rem' }}><b>Projects</b></h1>
        </div>
      </div>
    </section>
  )
}

export default projects
