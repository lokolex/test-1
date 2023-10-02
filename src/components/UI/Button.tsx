import React from 'react';
import styles from './Button.module.css';

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  size: 'big' | 'middle' | 'small';
}

const Button = ({ children, size, ...props }: IButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[size]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
