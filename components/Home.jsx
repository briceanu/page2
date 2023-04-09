import React from 'react';
import styles from '../styles/Home.module.scss';
import { useTheme } from 'next-themes';
import TypeWriter from '../components/TypeWriter';
import teo from '../public/teo.jpeg';
import Image from 'next/image';
import MediaContainer from './MediaContainer';
import Button from './Button';
import { inter } from '../styles/fonts';

const Home = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section
      id='home'
      className={`${styles.home_section} ${
        resolvedTheme === 'dark' ? styles.dark : styles.light
      }   ${inter.className}`}
    >
      <div className={styles.text_social}>
        <div className={styles.home_intro}>
          <h2>Hi,</h2>
          <h2>I am Teodor Briceanu</h2>
          <h2>I am a full-stack developer</h2>
          <TypeWriter />
          <div className={styles.button_social_container}>
            <div className={styles.social_container}>
              <MediaContainer />
            </div>
            <Button />
          </div>
        </div>
      </div>
      <Image
        className={styles.teo_img}
        src={teo}
        width={300}
        height={300}
        alt={teo}
      />
    </section>
  );
};

export default Home;
