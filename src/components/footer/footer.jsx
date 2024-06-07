import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'><b>SIDDHANT</b></a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>  
      </ul>
      
      <div className="foot_social">
      <a href='https://www.linkedin.com/in/siddhant-mishra-43584b198/' target='_blank' rel="noreferrer"><AiFillLinkedin/></a>
        <a href='mailto:siddhantmishra1002@gmail.com' target='_blank' rel="noreferrer"><AiOutlineMail/></a>
        <a href='https://github.com/mishrasiddhant001' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://x.com/_m_siddhant_?t=ol1LyVMJQjrMen-2fPRIVQ&s=08' target='_blank' rel="noreferrer"><AiOutlineTwitter/></a>
        <a href='https://instagram.com/_mishra_siddhant_?igshid=MzMyNGUyNmU2YQ==' target='_blank' rel="noreferrer"><BsInstagram/></a>
      </div>

      <div className="copyrights">
        <h3>Thank you!</h3>
        <small>
          &copy; Siddhant Mishra.<br/> All Rights Reserved 
        </small>
      </div>
    </footer>
  )
}

export default footer
