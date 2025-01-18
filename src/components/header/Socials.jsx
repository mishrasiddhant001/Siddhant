import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsSnapchat } from 'react-icons/bs'
import { BsQuora } from 'react-icons/bs'
import { BsStackOverflow } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import './Socials.css'; // You can style the navbar in this file


const Socials = () => {
  return (
    <div className='Socials'>
      <a href='https://www.linkedin.com/in/siddhant-mishra-43584b198/' target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
      <a href='https://mail.google.com/mail/?view=cm&to=siddhantmishra1002@gmail.com' target='_blank' rel="noreferrer"><AiOutlineMail /></a>
      <a href='https://github.com/mishrasiddhant001' target='_blank' rel="noreferrer"><BsGithub /></a>
      {/* <a href='https://x.com/_m_siddhant_?t=ol1LyVMJQjrMen-2fPRIVQ&s=08' target='_blank' rel="noreferrer"><AiOutlineTwitter/></a> */}
      {/* <a href='https://www.facebook.com/mishrasiddhant0/' target='_blank' rel="noreferrer"><BsFacebook/></a> */}
      <a href='https://instagram.com/_mishra_siddhant_?igshid=MzMyNGUyNmU2YQ==' target='_blank' rel="noreferrer"><BsInstagram /></a>
      {/* <a href='https://www.snapchat.com/add/mrg5868?share_id=iS_ndNqaMUo&locale=en-GB' target='_blank' rel="noreferrer"><BsSnapchat/></a> */}
      {/* <a href='https://www.quora.com/profile/Siddhant-158' target='_blank' rel="noreferrer"><BsQuora/></a> */}
      {/* <a href='https://stackoverflow.com/users/18800624/siddhant-mishra' target='_blank' rel="noreferrer"><BsStackOverflow/></a> */}
    </div>
  )
}

export default Socials
