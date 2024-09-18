import styles from './ListImages.module.scss';

import ItemImage from './ItemImage/ItemImage';

const ListImages = () => {
  return (
    <ul className={styles.listImages}>
      <ItemImage />
      <ItemImage />
      <ItemImage />
      <ItemImage />
      <ItemImage />
    </ul>
  );
};

export default ListImages;
