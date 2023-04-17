import React, { useState, useEffect, useCallback } from 'react';
import styles from '../styles/Contact.module.scss';
import { useTheme } from 'next-themes';
import facebook from '../public/social_media/facebook.svg';
import github from '../public/social_media/github.svg';
import linkedin from '../public/social_media/linkedin.svg';
import facebookDark from '../public/social_media/facebookDark.svg';
import githubDark from '../public/social_media/githubDark.svg';
import linkedinDark from '../public/social_media/linkedinDark.svg';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
const Contact = () => {
  const { resolvedTheme } = useTheme();
  //
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      message,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    });
  };

  return (
    <section
      id='contact'
      className={`${styles.contact_section} ${
        resolvedTheme === 'dark' ? styles.dark : styles.light
      }`}
    >
      <div className={styles.main_container}>
        <div className={styles.text_container}>
          <h1 className={styles.hello}>Say hello!</h1>
          <p className={styles.paragraph}>
            Currently open for new opportunities or people to share ideas with!
            For any other information about me or my work, feel free to reach
            out!
          </p>
          <h5 className={styles.find_here}>Or find me here</h5>
          <div className={styles.image_container}>
            <a href='https://www.linkedin.com/in/teodor-briceanu-24b395242/'>
              <Image
                src={resolvedTheme === 'dark' ? linkedinDark : linkedin}
                alt='linkedin'
              />
            </a>
            <a href='https://github.com/briceanu' className={styles.gitLink}>
              <Image
                src={resolvedTheme === 'dark' ? githubDark : github}
                alt='github'
              />
            </a>
            <a href='https://www.facebook.com/teodor.briceanu'>
              <Image
                src={resolvedTheme === 'dark' ? facebookDark : facebook}
                alt='facebok'
              />
            </a>
          </div>
        </div>
        <form className={styles.form}>
          <input
            name='name'
            type='text'
            id='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />

          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <textarea
            name='message'
            id='content'
            cols='30'
            rows='10'
            placeholder='Your message'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <button
            type='submit'
            className={styles.button}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Send message
          </button>
        </form>
        <footer className={styles.footer}>
          Copyright &copy; {new Date().getFullYear()} Briceanu Teodor{' '}
        </footer>
      </div>
      {/* <ToastContainer /> */}
    </section>
  );
};

export default Contact;
