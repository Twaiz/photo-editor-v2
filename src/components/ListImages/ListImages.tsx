import styles from './ListImages.module.scss';

import ItemImage from './ItemImage/ItemImage';

const ListImages = () => {
  return (
    <ul className={styles.listImages}>
      <ItemImage />
    </ul>
  );
};

export default ListImages;
