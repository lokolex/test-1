import { useState } from 'react';
import searchImg from './Search.png';
import styles from './Search.module.css';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        onChange={handleChangeInput}
        type="text"
        className={styles.input}
        placeholder="Search Art Work / Creator"
      />
      <img src={searchImg} alt="search icon" className={styles.img} />
    </div>
  );
};

export default Search;
