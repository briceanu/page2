import React from 'react';
import styles from '../styles/Projects.module.scss';
// import { useTheme } from 'next-themes';
import github from '../public/github.svg';
import Image from 'next/image';
const Projects = () => {
  // const { theme } = useTheme();

  return (
    <section id='projects' className={styles.projects_section}>
      <div className={styles.content}>
        <Image src={github} alt='github' className={styles.gitIcon} />
        <div className={styles.text_content}>
          <h2>Check out some of my projects!</h2>
          <p>
            I recommend checking out my github profile. There are always new and
            exciting projects coming up.
          </p>
          <a href='https://github.com/briceanu' target='_blank'>
            Click here to do that.
          </a>
        </div>
        <div className={styles.morfine}>
          <svg
            className={styles.firstBlob}
            viewBox='0 0 200 200'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='#BBEEEE'
              d='M37.9,-62C48.6,-52.2,56.4,-40.7,65.6,-27.8C74.8,-14.9,85.5,-0.5,86,14C86.5,28.6,76.8,43.4,65,55.4C53.2,67.5,39.2,76.8,23.6,82.3C8,87.7,-9.3,89.2,-22,82.2C-34.6,75.1,-42.6,59.5,-51.7,46.3C-60.9,33.1,-71.2,22.4,-74.1,10C-76.9,-2.4,-72.2,-16.6,-65.1,-28.7C-58,-40.9,-48.6,-50.9,-37.4,-60.5C-26.1,-70.1,-13.1,-79.3,0.3,-79.7C13.6,-80.2,27.3,-71.9,37.9,-62Z'
              transform='translate(100 100)'
            />
          </svg>
          <svg
            className={styles.secondBlob}
            viewBox='0 0 200 200'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='#BBEEEE'
              d='M37.6,-52.2C52.7,-40.9,71.5,-35.1,80.8,-22.5C90.1,-9.9,89.8,9.6,80.8,22.8C71.7,35.9,53.9,42.7,38.9,53C24,63.3,12,77.1,-3.6,82.1C-19.3,87.1,-38.5,83.3,-52,72.5C-65.5,61.8,-73.1,44,-74.3,27.2C-75.6,10.5,-70.3,-5.3,-65,-21.1C-59.8,-36.8,-54.7,-52.4,-43.8,-65.1C-33,-77.8,-16.5,-87.5,-2.6,-83.9C11.3,-80.3,22.6,-63.5,37.6,-52.2Z'
              transform='translate(100 100)'
            />
          </svg>
        </div>
      </div>
      <svg
        className={styles.wave}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#052142'
          fillOpacity='0.8'
          d='M0,64L12,101.3C24,139,48,213,72,202.7C96,192,120,96,144,64C168,32,192,64,216,74.7C240,85,264,75,288,112C312,149,336,235,360,256C384,277,408,235,432,192C456,149,480,107,504,90.7C528,75,552,85,576,101.3C600,117,624,139,648,133.3C672,128,696,96,720,112C744,128,768,192,792,208C816,224,840,192,864,154.7C888,117,912,75,936,69.3C960,64,984,96,1008,96C1032,96,1056,64,1080,69.3C1104,75,1128,117,1152,133.3C1176,149,1200,139,1224,160C1248,181,1272,235,1296,229.3C1320,224,1344,160,1368,149.3C1392,139,1416,181,1428,202.7L1440,224L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z'
        ></path>
      </svg>
    </section>
  );
};

export default Projects;
