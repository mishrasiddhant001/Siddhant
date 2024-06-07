import React from 'react'
import './skills.css'
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { BiLogoJava } from 'react-icons/bi';
import { BiLogoPython } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import {SiMysql} from 'react-icons/si';
import {SiOpencv} from 'react-icons/si';
import {AiFillGitlab} from 'react-icons/ai';
import {PiGraphFill} from 'react-icons/pi';
import {SiPostman} from 'react-icons/si';
import {TbBrandVscode} from 'react-icons/tb';
import {LuBrainCircuit} from 'react-icons/lu';
import { TbHexagonLetterC } from 'react-icons/tb';
import {SiPandas} from 'react-icons/si';
import {SiNumpy} from 'react-icons/si';
import {SiJupyter} from 'react-icons/si'



const skills = () => {
  return (
    <section id='skills'>
       <h2><b>&lt;/SKILLS&gt;</b></h2>
       
       <div className="about__skills">
            
            <article className="skills_icon">
              <AiFillHtml5 className='about_icon' />
              <h5><b>HTML</b></h5>
            </article>
            
            <article className="skills_icon">
              <BiLogoCss3 className='about_icon' />
              <h5><b>CSS</b></h5>
            </article>
            
            <article className="skills_icon">
              <BiLogoJavascript className='about_icon' />
              <h5><b>JS</b></h5>
            </article>

            <article className="skills_icon">
              <FaReact className='about_icon' />
              <h5><b>ReactJS</b></h5>
            </article>
            
            <article className="skills_icon">
              <BiLogoJava className='about_icon' />
              <h5><b>Java</b></h5>
            </article>

            <article className="skills_icon">
              <BiLogoPython className='about_icon' />
              <h5><b>Python</b></h5>
            </article>

            <article className="skills_icon">
              <TbHexagonLetterC className='about_icon' />
              <h5><b>C</b></h5>
            </article>

            <article className="skills_icon">
              <BsGithub className='about_icon' />
              <h5><b>Github</b></h5>
            </article>

            <article className="skills_icon">
              <AiFillGitlab className='about_icon' />
              <h5><b>Git</b></h5>
            </article>
            
            <article className="skills_icon">
              <SiMysql className='about_icon' />
              <h5><b>MySQL</b></h5>
            </article>

            <article className="skills_icon">
              <TbBrandVscode className='about_icon' />
              <h5><b>VScode</b></h5>
            </article>

            <article className="skills_icon">
              <SiJupyter className='about_icon' />
              <div className="about_icon_except">
              <h5 ><b>Jupyter Notebook</b></h5>
              </div>
            </article>
            
            <article className="skills_icon">
              <LuBrainCircuit className='about_icon' />
            <div className="about_icon_except">           
              <h5><b>Machine Learning Algorithms</b></h5>
              </div>
            </article>
            

            <article className="skills_icon">
              <SiOpencv className='about_icon' />
              <h5><b>Opencv</b></h5>
            </article>

            <article className="skills_icon">
              <PiGraphFill className='about_icon' />
              <h5><b>Matplotlib</b></h5>
            </article>

            <article className="skills_icon">
              <SiPandas className='about_icon' />
              <h5><b>Pandas</b></h5>
            </article>

            <article className="skills_icon">
              <SiNumpy className='about_icon' />
              <h5><b>Numpy</b></h5>
            </article>

            <article className="skills_icon">
              <SiPostman className='about_icon' />
              <h5><b>Postman</b></h5>
            </article>
            

        </div>                
    
    </section>
  )
}
export default skills
