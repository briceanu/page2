import { React, useEffect } from 'react';
import styles from '../styles/About.module.scss';
import Image from 'next/image';
import atDesk from '../public/atDesk.webp';
import { useTheme } from 'next-themes';
const About = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section
      id='about'
      className={`${styles.about_section} ${
        resolvedTheme === 'dark' ? styles.dark : styles.light
      }`}
    >
      <div className={styles.container}>
        <Image src={atDesk} alt='working at desk' className={styles.img} />
        <div
          className={styles.description}
          data-aos='fade-left'
          data-aos-delay='200'
        >
          <h1 className={styles.about}>About me</h1>
          <p>
            I am a self-taught full-stack developer with a keen
            <span className={styles.importent_words}> passion</span> for
            developing and maintaining software applications, designing and
            implementing user interfaces, developing and maintaining databases.
            I am constantly seeking opportunities to learn new concepts,
            technologies, and tools to create the best possible
            <span className={styles.important_words}> user experience. </span>
            Outside of
            <span className={styles.important_words}> coding, </span> I like to
            ride my bike and to cook.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
