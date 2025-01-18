import React, { useEffect, useRef } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  // Disable scrolling when the component is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling on unmount
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gg8gfza', 'template_6i08twf', form.current, 'welPP82cQXAjD_orD')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="main">
        <div className='title'>
        <h5>Get in touch</h5>
        <h2>
          <b>Contact Me</b>
        </h2>  
        </div>
        
        <div className="container contact_container">
          <div className="contact_options">

          <a href="mailto:siddhantmishra1002@gmail.com" target="_blank" rel="noopener noreferrer">
            <article className="contact_option">
            <a href="mailto:siddhantmishra1002@gmail.com" target="_blank" rel="noopener noreferrer">
              <HiOutlineMail className="icon" />
            </a>
              <h4></h4>
              {/* <h5>siddhantmishra1002@gmail.com</h5> */}
              <a href="mailto:siddhantmishra1002@gmail.com" target="_blank" rel="noopener noreferrer">
              siddhantmishra1002@gmail.com 
              </a>
            </article>
          </a>

          <a
                href="https://www.linkedin.com/in/siddhant-mishra-43584b198/"
                target="_blank"
                rel="noopener noreferrer"
              >
            <article className="contact_option">
            <a
                href="https://www.linkedin.com/in/siddhant-mishra-43584b198/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="icon" />
              </a>
              <h4></h4>
              <h5></h5>
              <a
                href="https://www.linkedin.com/in/siddhant-mishra-43584b198/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <br />
            </article>
          </a>

          <a
                href="https://api.whatsapp.com/send?phone=916390287872"
                target="_blank"
                rel="noopener noreferrer"
              >
            <article className="contact_option">
            <a
                href="https://api.whatsapp.com/send?phone=916390287872"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp className="icon" />
              </a>
              <h4></h4>
              <h5></h5>
              <a
                href="https://api.whatsapp.com/send?phone=916390287872"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </article> 
          </a>

          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="name" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea type="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
