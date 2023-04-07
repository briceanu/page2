'use client';
import { useTheme } from 'next-themes';
import React from 'react';
import styles from '../styles/Home.module.scss';

const Button = () => {
  const { theme } = useTheme();

  return (
    <button
      id='#contact'
      className={`${styles.button} ${
        theme === 'light' ? ` ${styles.button_dark}` : ` ${styles.button_light}`
      }`}
    >
      Contact me
    </button>
  );
};

export default Button;
