import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { RiMessengerLine } from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_eio5kiu',
        'template_npcxsgi',
        form.current,
        `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact' className='container'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='contactContainer'>
        <div className='contactOptions'>
          <article className='options'>
            <MdOutlineEmail className='icon' />
            <h4>Email</h4>
            <h5>cherylreuichun@gmail.com</h5>
            <a href='mailto:cherylreuichun@gmail.com'>Send me a message</a>
          </article>
          <article className='options'>
            <BsLinkedin />
            <h4>LinkedIn</h4>
            <h5>Cheryl Li</h5>
            <a href='https://www.linkedin.com/in/cheryl-li-75500b165/'>
              Send me a message
            </a>
          </article>
          <article className='options'>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Cheryl Li</h5>
            <a href='http://m.me/cheryl.lee.33671'>Send me a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h4>Contact Form</h4>
          <input
            type='text'
            name='subject'
            placeholder='Your subject'
            required
          />
          <input
            type='text'
            name='name'
            placeholder='Your full name'
            required
          />
          <input type='email' name='email' placeholder='Your email' required />
          <textarea
            name='message'
            rows='8'
            placeholder='Please leave your message here'
            required
          ></textarea>
          <button type='submit' className='btn btnPrimary'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
