import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import arrowImg from '../icons/arrow.png';

import styles from './Select.module.css';

interface ISelectProps {
  data: string[];
  children: React.ReactNode;
}

const Select = ({ data, children }: ISelectProps) => {
  const [value, setValue] = useState(data[0]);
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div onClick={() => setIsShow((state) => !state)} className={styles.select}>
        <div className={styles.value}>
          <div className={styles.child}>{children}</div>
          <p>{value}</p>
          <div className={styles.arrow}>
            <img src={arrowImg} alt="arrow" className={isShow ? styles['arrow-action'] : ''} />
          </div>
        </div>
        <ul className={isShow ? `${styles.options} ${styles['options-active']}` : styles.options}>
          {data.map((item) => (
            <li
              onClick={() => setValue(item)}
              key={item}
              className={item === value ? styles['item-active'] : ''}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {isShow
        ? createPortal(
            <div onClick={() => setIsShow(false)} className="overlay"></div>,
            document.body
          )
        : null}
    </>
  );
};

export default Select;
