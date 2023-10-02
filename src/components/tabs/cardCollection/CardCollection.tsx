import Button from '../../UI/Button';
import ratingImg from './rating.png';
import { ICollection } from '../../collection/Collection';

import styles from './CardCollection.module.css';

const CardCollection = ({ img, title, subtitle, rating }: ICollection) => {
  return (
    <div className={styles.main}>
      <img src={img} alt={title} />

      <h3>{title}</h3>

      <div className={styles.bottom}>
        <div className={styles.left}>
          <p>{subtitle}</p>
          <div className={styles.rating}>
            <img src={ratingImg} alt="rating" />
            <span>{rating}</span>
          </div>
        </div>
        <Button size="small">PLACE BID</Button>
      </div>
    </div>
  );
};

export default CardCollection;
