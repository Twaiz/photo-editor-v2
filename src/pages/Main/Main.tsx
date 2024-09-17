import styles from './Main.module.scss';

import PreviewImage from '@/components/PreviewImage/PreviewImage';
import ListImages from '@/components/ListImages/ListImages';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <PreviewImage />
      <ListImages />
      <ListImages />
    </div>
  );
};

export default Main;
