import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useHttp } from '../../hooks/useHttp';
import Card from '../UI/Card';
import CardCollection from '../tabs/cardCollection/CardCollection';
import { ClipLoader } from 'react-spinners';

import styles from './Collection.module.css';

interface ICollectionProps {
  id: string;
  activeTab: string;
}

export interface ICollection {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  rating: number;
}

const Collection = ({ activeTab, id }: ICollectionProps) => {
  const [data, setData] = useState<ICollection[]>([]);
  const { isLoading, totalCount, request } = useHttp();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;
  const totalPageCount = Math.ceil(totalCount / limit);
  const { ref, inView } = useInView({ threshold: 1.0, delay: 500 });

  useEffect(() => {
    (async function () {
      const data = await request<ICollection[]>({
        url: `http://localhost:3001/collection?_page=${currentPage}&_limit=${limit}`,
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
        const data = await request<ICollection[]>({
          url: `http://localhost:3001/collection?_page=${currentPage}&_limit=${limit}`,
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
    <div className={styles.collection}>
      {!!data.length &&
        data.map((item) => (
          <Card key={item.id} size="short">
            <CardCollection {...item} />
          </Card>
        ))}
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

export default Collection;
