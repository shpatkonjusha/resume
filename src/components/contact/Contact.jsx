import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rwk5iwd', 'template_0ijy93c', form.current, 'ibGbxjmRGIInvB2sD')
      e.target.reset()
      };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_icon'/>
            <h4>Email</h4>
            <h5>shpatkonjusha@gmail.com</h5>
            <a href="mailto:shpatkonjusha@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_icon'/>
            <h4>messenger</h4>
            <h5>shpatkonjusha</h5>
            <a href="https://m.me/shpat.konjusha/" target='blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <RiWhatsappLine className='contact_icon'/>
            <h4>WhatsApp</h4>
            <h5>+383 45 426 868</h5>
            <a href="https://api.whatsapp.com/send?phone=38345426868" target="_blank" >Send a message</a>
          </article>
        </div>

        {/*  ========== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact



