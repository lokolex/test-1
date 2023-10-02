import { useState } from 'react';
import TabNavItem from './tabNavItem/TabNavItem';
import Collection from '../collection/Collection';
import Activity from '../activity/Activity';

import styles from './Tabs.module.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('collection');
  return (
    <div className={styles.tabs}>
      <ul className={styles.nav}>
        <TabNavItem
          title="Collection"
          id="collection"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Activity"
          id="activity"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className={styles.outlet}>
        <Collection activeTab={activeTab} id="collection" />
        <Activity activeTab={activeTab} id="activity" />
      </div>
    </div>
  );
};

export default Tabs;
