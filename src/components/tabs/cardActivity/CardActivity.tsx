import ratingImg from '../cardCollection/rating.png';
import arrowImg from '../icons/arrow.png';

import styles from './CardActivity.module.css';
import { IActivity } from '../../activity/Activity';

const CardActivity = (props: IActivity) => {
  const { img, title, user, floorPrice, price, quantity, traded, time } = props;

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img src={img} alt={title} />
          <div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.user}>
              <p>{user}</p>
              <div className={styles.circle}></div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.info}>
            <p>Sale</p>
            <div className={styles['info-price']}>
              <img src={ratingImg} alt="rating" />
              <span>{floorPrice}</span>
            </div>
            <p className={styles.subInfo}>{time}</p>
          </div>
          <div className={styles.select}>
            <img src={arrowImg} alt="arrow" />
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bottom}>
        <div className={styles.bottomItem}>
          <p className={styles.bottomTitle}>USD Price</p>
          <p className={styles.bottomData}>${price}</p>
        </div>
        <div className={styles.bottomItem}>
          <p className={styles.bottomTitle}>Quantity</p>
          <p className={styles.bottomData}>${quantity}</p>
        </div>
        <div className={styles.bottomItem}>
          <p className={styles.bottomTitle}>floor price</p>
          <div className={styles.dataWrap}>
            <img src={ratingImg} alt="rating" />
            <p className={styles.bottomData}>${floorPrice}</p>
          </div>
        </div>
        <div className={styles.bottomItem}>
          <p className={styles.bottomTitle}>traded</p>
          <div className={styles.dataWrap}>
            <img src={ratingImg} alt="rating" />
            <p className={styles.bottomData}>${traded}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardActivity;
