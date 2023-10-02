import { useState } from 'react';
import { createPortal } from 'react-dom';
import Search from '../search/Search';
import Button from '../UI/Button';
import logoImg from './Logo.svg';
import burgerImg from './burger.png';

import styles from './Header.module.css';

const links = [
  { title: 'Discover', href: '#' },
  { title: 'creators', href: '#' },
  { title: 'Sell', href: '#' },
  { title: 'stats', href: '#' },
];

const Header = () => {
  const [isInfo, setIsInfo] = useState(false);

  const toggleInfo = () => {
    setIsInfo((state) => !state);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <a href="./">
              <img src={logoImg} alt="logo" />
              <span>DiveSea</span>
            </a>
          </div>
          <nav className={isInfo ? `${styles.info} ${styles['info-active']}` : `${styles.info}`}>
            <ul className={styles.menu}>
              {links.map((link) => (
                <li key={link.title}>
                  <a onClick={() => setIsInfo(false)} href={link.href}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.right}>
              <Search />
              <Button onClick={() => setIsInfo(false)} size="big">
                Connect Wallet
              </Button>
            </div>
          </nav>

          <div onClick={toggleInfo} className={styles.burger}>
            <img src={burgerImg} alt="burger menu" />
          </div>
        </div>
      </div>
      {isInfo
        ? createPortal(
            <div onClick={() => setIsInfo(false)} className="overlay"></div>,
            document.body
          )
        : null}
    </header>
  );
};

export default Header;
