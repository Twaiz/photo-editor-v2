import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.scss';

import Header from '@/components/Header/Header';

const AppLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
