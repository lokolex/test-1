import React from 'react';

import styles from './Card.module.css';

interface ICardProps {
  size: 'short' | 'large';
  children: React.ReactNode;
}

const Card = ({ size, children }: ICardProps) => {
  return <div className={size === 'short' ? styles.short : styles.large}>{children}</div>;
};

export default Card;
