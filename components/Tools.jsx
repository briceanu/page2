import React from 'react';
import styles from '../styles/Tools.module.scss';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { SliderDataFront } from './SliderDataFront';
import { sliderDataBack } from './sliderDataBack';
import { Miscellaneous } from './Miscellaneous';
import wrench from '../public/miscellaneous/wrench.svg';
import wrench2 from '../public/miscellaneous/wrench2.svg';
import code from '../public/front_end/code.svg';
import codeDark from '../public/front_end/codeDark.svg';
import library from '../public/back_end/library.svg';
import libraryDark from '../public/back_end/libraryDark.svg';
import { useInView } from 'react-intersection-observer';
import '@fontsource/cormorant-garamond';

const Tools = () => {
  const { resolvedTheme } = useTheme();
  const { ref: ImgRef, inView: myElementIsVisible } = useInView({
    threshold: 0,
  });
  return (
    <section
      ref={ImgRef}
      id='tools'
      className={`${styles.tools_section} ${
        resolvedTheme === 'dark' ? styles.dark : styles.light
      }`}
    >
      <div
        className={`${styles.container} ${
          myElementIsVisible && styles.container_animation
        } ${resolvedTheme === 'light' ? styles.dark : styles.light} `}
      >
        <Image
          src={resolvedTheme === 'light' ? libraryDark : library}
          alt='library'
          className={styles.logo}
        />
        <h1>Front-end</h1>
        {SliderDataFront.map((item) => (
          <div key={item.id} className={styles.wrapper}>
            <p>{item.name}</p>
            <Image
              src={item.image.default}
              alt={item.name}
              className={styles.tool_img}
            />
          </div>
        ))}
      </div>
      <div
        ref={ImgRef}
        className={`${styles.container} ${
          myElementIsVisible && styles.container_animation
        } ${resolvedTheme === 'light' ? styles.dark : styles.light} `}
      >
        <Image
          src={resolvedTheme === 'light' ? codeDark : code}
          alt='code'
          className={styles.logo}
        />
        <h1>Back-end</h1>
        {sliderDataBack.map((item) => (
          <div key={item.id} className={styles.wrapper}>
            <p>{item.name}</p>
            <Image
              className={styles.tool_img}
              src={item.image.default}
              alt={item.name}
            />
          </div>
        ))}
      </div>
      <div
        ref={ImgRef}
        className={`${styles.container} ${
          myElementIsVisible && styles.container_animation
        } ${resolvedTheme === 'light' ? styles.dark : styles.light} `}
      >
        <Image
          src={resolvedTheme === 'light' ? wrench2 : wrench}
          alt='wrench'
          className={styles.logo}
          width={300}
          height={300}
        />
        <h1>Miscellaneous</h1>
        {Miscellaneous.map((item) => (
          <div key={item.id} className={styles.wrapper}>
            <p>{item.name}</p>
            <Image
              className={styles.tool_img}
              src={item.image.default}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
