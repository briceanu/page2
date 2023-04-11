'use client';
import { useTheme } from 'next-themes';
import React from 'react';
import styles from '../styles/Home.module.scss';
import { useRouter } from 'next/router';

const Button = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const handleClick = () => {
    router.push('#contact');
  };
  return (
    <button
      // id='#contact'
      className={`${styles.button} ${
        theme === 'light' ? ` ${styles.button_dark}` : ` ${styles.button_light}`
      }`}
      onClick={handleClick}
    >
      Contact me
    </button>
  );
};

export default Button;
