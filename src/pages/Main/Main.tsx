import styles from './Main.module.scss';

import PreviewImage from '@/components/PreviewImage/PreviewImage';
import ListImages from '@/components/ListImages/ListImages';
import ImageToolkit from '@/components/ImageToolkit/ImageToolkit';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <PreviewImage />
      <ListImages />
      <ImageToolkit />
    </div>
  );
};

export default Main;
