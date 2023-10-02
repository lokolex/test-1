import Tabs from '../tabs/Tabs';
import Button from '../UI/Button';
import bgMainImg from './bg-main.jpg';
import photo from './photo.jpg';
import facebookImg from './icons/facebook.png';
import instagramImg from './icons/instagram.png';
import linkedinImg from './icons/linkedin.png';
import twitterImg from './icons/twitter.png';

import styles from './Profile.module.css';

const Profile = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.bg}>
          <img src={bgMainImg} alt="background" />

          <div className={styles.photo}>
            <img src={photo} alt="User" />
            <div className={styles.circle}></div>
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.left}>
            <div className={styles.title}>
              <div>
                <h3 className={styles.name}>Alex S.</h3>
                <p className={styles.nick}>@AlexStr1</p>
              </div>

              <Button size="middle">Follow +</Button>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.info}>
              <div className={styles['info-item']}>
                <h4>86 ETH</h4>
                <p>Total Sales</p>
              </div>
              <div className={styles['info-item']}>
                <h4>12K</h4>
                <p>Followers</p>
              </div>
              <div className={styles['info-item']}>
                <h4>587</h4>
                <p>Followings</p>
              </div>
            </div>

            <div className={styles.bio}>
              <h3>Bio</h3>
              <p>
                The Artist Who Transforms The intangible into Priceless Assets With Their incredible
                NFT Creations. From Stunning Visuals To Mind-Bending Concepts,
              </p>
            </div>

            <div className={`${styles.divider} ${styles['divider-m']}`}></div>

            <div className={styles.social}>
              <a href="#">
                <img src={instagramImg} alt="instagram" />
              </a>
              <a href="#">
                <img src={linkedinImg} alt="linkedin" />
              </a>
              <a href="#">
                <img src={facebookImg} alt="facebook" />
              </a>
              <a href="#">
                <img src={twitterImg} alt="twitter" />
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <Tabs />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
