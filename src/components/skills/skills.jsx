import React, {useEffect} from 'react';
import './skills.css';
import { skillsList } from '../healpersList';
import IconCard from '../IconCard';

const Skills = () => {
  // Disable scrolling when the component is mounted
    useEffect(() => {
      document.body.style.overflow = "hidden"; // Disable scrolling
      return () => {
        document.body.style.overflow = "auto"; // Re-enable scrolling on unmount
      };
    }, []);
  return (
    <section id="skills">
      <div className="main">
        <div className="title">
          <h3>
            <b>&lt;/SKILLS&gt;</b>
          </h3>
        </div>
        <div className="icon-image">
          {skillsList.map((skill, index) => (
            <IconCard key={index} src={skill.src} label={skill.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
