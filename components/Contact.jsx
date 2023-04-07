import React from 'react';
import styles from '../styles/Contact.module.scss';
import { useTheme } from 'next-themes';

const Contact = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <section
      id='contact'
      className={`${styles.contact_section} ${
        resolvedTheme === 'dark' ? styles.dark : styles.light
      }`}
    >
      <h1 className={styles.hero_text}>contact contact contact</h1>
    </section>
  );
};

export default Contact;
