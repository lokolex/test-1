import React, { useEffect, useState } from 'react';

import styles from './Activity.module.css';
import { useHttp } from '../../hooks/useHttp';
import { useInView } from 'react-intersection-observer';
import Select from '../tabs/select/Select';
import cartImg from './cart.png';
import chainImg from './chain.png';
import Card from '../UI/Card';
import CardActivity from '../tabs/cardActivity/CardActivity';
import { ClipLoader } from 'react-spinners';

export interface IActivity {
  id: number;
  img: string;
  title: string;
  user: string;
  floorPrice: number;
  price: string;
  quantity: string;
  traded: number;
  time: string;
}

interface IActivityProps {
  id: string;
  activeTab: string;
}

const sales = ['Sales', 'Sales1', 'Sales222'];
const chains = ['All Chains', 'All Chains1', 'All Chains222', 'ssssssssssss', 'adasdasdasd'];

const Activity = ({ activeTab, id }: IActivityProps) => {
  const [data, setData] = useState<IActivity[]>([]);
  const { isLoading, totalCount, request } = useHttp();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 2;
  const totalPageCount = Math.ceil(totalCount / limit);
  const { ref, inView } = useInView({ threshold: 1.0, delay: 500 });

  useEffect(() => {
    (async function () {
      const data = await request<IActivity[]>({
        url: `http://localhost:3001/activity?_page=${currentPage}&_limit=${limit}`,
      });
      if (data) {
        setData(data);
      }
    })();
    setCurrentPage((state) => state + 1);
  }, []);

  useEffect(() => {
    if (inView && currentPage <= totalPageCount) {
      (async function () {
        const data = await request<IActivity[]>({
          url: `http://localhost:3001/activity?_page=${currentPage}&_limit=${limit}`,
        });
        if (data) {
          setData((state) => [...state, ...data]);
        }
      })();
      setCurrentPage((state) => state + 1);
    } else {
      return;
    }
  }, [inView]);

  const content = (
    <div className={styles.content}>
      <div className={styles.upper}>
        <Select data={sales}>
          <img src={cartImg} alt="cart" />
        </Select>
        <Select data={chains}>
          <img src={chainImg} alt="chain" />
        </Select>
      </div>

      <div className={styles.activity}>
        {!!data?.length &&
          data.map((item) => (
            <Card key={item.id} size="large">
              <CardActivity {...item} />
            </Card>
          ))}
      </div>

      <div className={styles.loader}>
        <ClipLoader color="#ffa500" loading={isLoading} />
      </div>
      {currentPage <= totalPageCount ? (
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            width: '100%',
            height: '2px',
            zIndex: 13,
          }}
          ref={ref}
        ></div>
      ) : null}
    </div>
  );

  return activeTab === id ? content : null;
};

export default Activity;
