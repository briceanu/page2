import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.scss';
import burger from '../public/burger.svg';
import close from '../public/close.svg';
import { useTheme } from 'next-themes';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import { inter, lobster } from '../styles/fonts';

const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  const [navbar, setNavbar] = useState(false);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <nav className={styles.navbar}>
        <div
          className={`${styles.nav} ${
            theme === 'light' ? styles.dark : styles.light
          }`}
        >
          <div className={styles.logo}>
            <Link href='#home' scroll={false}>
              <h2 className={`${styles.text_logo} ${lobster.className}`}>TB</h2>
            </Link>
            <div
              className={styles.sun_moon_wrapper}
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}
            >
              {theme === 'light' ? (
                <FaSun
                  style={{
                    fill: 'rgb(255, 218, 8)',
                    width: '20px',
                    height: '20px',
                  }}
                />
              ) : (
                <BsFillMoonStarsFill
                  style={{
                    fill: 'rgb(87, 86, 79)',
                    width: '20px',
                    height: '20px',
                  }}
                />
              )}
            </div>
          </div>
          <div
            className={`${styles.links} ${
              navbar ? styles.show_links : styles.hide_links
            }`}
          >
            {/* <ul className={inter.className}    */}
            <ul>
              <li>
                <Link
                  href='#home'
                  scroll={false}
                  onClick={() => setNavbar(!navbar)}
                  className={`${inter.className} ${
                    theme === 'light' ? styles.dark : styles.light
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${inter.className} ${
                    theme === 'light' ? styles.dark : styles.light
                  }`}
                  href='#about'
                  scroll={false}
                  onClick={() => setNavbar(!navbar)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`${inter.className} ${
                    theme === 'light' ? styles.dark : styles.light
                  }`}
                  href='#tools'
                  scroll={false}
                  onClick={() => setNavbar(!navbar)}
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link
                  className={`${inter.className} ${
                    theme === 'light' ? styles.dark : styles.light
                  }`}
                  href='#projects'
                  scroll={false}
                  onClick={() => setNavbar(!navbar)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={`${inter.className} ${
                    theme === 'light' ? styles.dark : styles.light
                  }`}
                  href='#contact'
                  scroll={false}
                  onClick={() => setNavbar(!navbar)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.mobile_wrapper}`}>
            <button
              className={styles.toggle_button}
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <Image src={burger} width={30} height={30} alt='logo' />
              ) : (
                <Image src={close} width={30} height={30} alt='logo' />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
