'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import facebook from '../public/social_media/facebook.svg';
import facebookDark from '../public/social_media/facebookDark.svg';
import github from '../public/social_media/github.svg';
import githubDark from '../public/social_media/githubDark.svg';
import linkedin from '../public/social_media/linkedin.svg';
import linkedinDark from '../public/social_media/linkedinDark.svg';
import styles from '../styles/Home.module.scss';

const MediaContainer = () => {
  const { theme = 'dark' } = useTheme();
  const gitHubImage = theme === 'dark' ? githubDark : github;
  const linkedinImage = theme === 'dark' ? linkedinDark : linkedin;
  const facebookImage = theme === 'dark' ? facebookDark : facebook;

  return (
    <span className={styles.span}>
      <a href='https://www.facebook.com/teodor.briceanu' target='_blank'>
        <Image
          className={styles.social_img}
          src={facebookImage}
          width={40}
          height={40}
          alt={facebook}
        />
      </a>
      <a href='https://github.com/briceanu' target='_blank'>
        <Image
          className={styles.social_img}
          src={gitHubImage}
          width={40}
          height={40}
          alt={github}
        />
      </a>
      <a
        href='https://www.linkedin.com/in/teodor-briceanu-24b395242/'
        target='_blank'
      >
        <Image
          className={styles.social_img}
          src={linkedinImage}
          width={40}
          height={40}
          alt={linkedin}
        />
      </a>
    </span>
  );
};

export default MediaContainer;
