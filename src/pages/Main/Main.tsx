import styles from './Main.module.scss';

import PreviewImage from '@/components/PreviewImage/PreviewImage';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <PreviewImage />
    </div>
  );
};

export default Main;
