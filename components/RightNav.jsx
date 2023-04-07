import React from 'react';
import Link from 'next/link';
import styles from '../styles/RightNav.module.scss';

const RightNav = ({ setNavbar, navbar }) => {
  return (
    <div>
      <div className={styles.hide_nav}>
        <Link href='#home' scroll={false} onClick={() => setNavbar(!navbar)}>
          Home
        </Link>
        <Link href='#about' scroll={false} onClick={() => setNavbar(!navbar)}>
          About
        </Link>
        <Link href='#tools' scroll={false} onClick={() => setNavbar(!navbar)}>
          Tools
        </Link>
        <Link
          href='#projects'
          scroll={false}
          onClick={() => setNavbar(!navbar)}
        >
          Projects
        </Link>
        <Link href='#contact' scroll={false} onClick={() => setNavbar(!navbar)}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default RightNav;
