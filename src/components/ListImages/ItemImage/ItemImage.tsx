import styles from './ItemImage.module.scss';

const ItemImage = () => {
  return (
    <li className={styles.listImages_item}>
      <img
        src="/public/png/listImages/img-portfolio (9).jpg"
        alt="name image"
        className={styles.listImages_img}
      />

      <div className={styles.infoImgContent}>
        <p className={styles.infoImgContent_nameImg}>Имя_картинки.png</p>
        <p className={styles.infoImgContent_sizeImg}>2.4MB</p>
        <a href="#" className={styles.infoImgContent_downloadImg}>
          Скачать
        </a>
      </div>
    </li>
  );
};

export default ItemImage;
