import React from 'react';
import Svg from './Svg';

import styles from './TabNavItem.module.css';

interface ITabNavItemProps {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabNavItem = ({ id, activeTab, setActiveTab, title }: ITabNavItemProps) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li
      className={activeTab === id ? `${styles.title} ${styles.active}` : styles.title}
      onClick={handleClick}
    >
      <Svg id={id} />
      {title}
    </li>
  );
};

export default TabNavItem;
