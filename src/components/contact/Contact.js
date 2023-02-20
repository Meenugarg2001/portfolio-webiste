import React from 'react';
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
const Contact = () => {
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>

    <div className="container contact__container">
      <div className="contact__options">
      <article className="contact__option">
      <MdEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>ravimangal2884@gmail.com</h5>
        <a href="mail to : ravimangal2884@gmail.com" target="_blank">Send a Message</a>
      </article>


      <article className="contact__option">
      <BsWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>Ravi Mangal</h5>
        <a href="https://api.whatsapp.com/send?phone=+916350428940" target="_blank">Send a Message</a>
      </article>

      <article className="contact__option">
      <BsLinkedin className='contact__option-icon'/>
        <h4>LinkedIN</h4>
        <h5>My LinkedIN Profile</h5>
        <a href="LinkedIN:https://www.linkedin.com/in/iamravimangal" target="_blank">Check Here..</a>
      </article>
      </div>

       {/*end of contact options */}

      <form action="">
        <input type="text" name="name" placeholder='our Full Name' required />
        <input type="email" name="email" placeholder='Your Email' required/>
        <textarea type="message" rows="7" placeholder='Your Message' required></textarea>
        <button type="submit" className='btn btn-primary'>Send message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact


