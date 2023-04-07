import React from 'react';
import styles from '../styles/Projects.module.scss';
import { useTheme } from 'next-themes';
const Projects = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  console.log(theme);
  return (
    <section id='projects' className={styles.projects_section}>
      <h1 className={styles.hero_text}>projects projects ptojexts</h1>
    </section>
  );
};

export default Projects;
