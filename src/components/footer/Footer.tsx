import { useEffect, useState } from 'react';
import logoWImg from './logo-white.png';
import instagramImg from './instagram.png';
import linkedinImg from './linkedin.png';
import facebookImg from './facebook.png';
import twitterImg from './twitter.png';

import styles from './Footer.module.css';

const getCurrentYear = (): string => {
  return new Date(Date.now()).getFullYear().toString();
};

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(getCurrentYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <a href="./">
              <img src={logoWImg} alt="logo" />
              <span>DiveSea</span>
            </a>
          </div>

          <nav>
            <ul className={styles.links}>
              <a href="#">
                <li>Privacy Policy</li>
              </a>
              <a href="#">
                <li>Term & Conditions</li>
              </a>
              <a href="#">
                <li>About Us</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
            </ul>
          </nav>

          <div className={styles.divider}></div>

          <div className={styles.copyright}>© {currentYear} EATLY All Rights Reserved.</div>

          <div className={styles.social}>
            <ul>
              <li>
                <a href="#">
                  <img src={instagramImg} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linkedinImg} alt="linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={facebookImg} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitterImg} alt="twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
