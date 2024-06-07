import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gg8gfza', 'template_6i08twf', form.current, 'welPP82cQXAjD_orD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2><b>Contact Me</b></h2>
      {/* style={{background:'var(--color-bg-variant)',display: 'inline-block', padding: '0.5rem'}} */}
      <div className="container contact_container">
        <div className="contact_options">
        <article className='contact_option'>
            <HiOutlineMail className='icon'/>
            <h4>Email</h4>
            <h5>siddhantmishra1002@gmail.com</h5>
            <a href="mailto:siddhantmishra1002@gmail.com" target='_blank'>Send a mail</a>
          </article>
          <article className='contact_option'>
            <AiFillLinkedin className='icon' />
            <h4>Linkedin</h4>
            <h5>Siddhant Mishra</h5>
            <a href="https://www.linkedin.com/in/siddhant-mishra-43584b198/" target='_blank'>Connet with me</a>
            <br/>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-6390287872</h5>
            <a href="https://api.whatsapp.com/send?phone=916390287872" target='_blank'>WhatsApp me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='name' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea type='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
