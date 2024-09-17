import styles from './PreviewImage.module.scss';

const PreviewImage = () => {
  return (
    <div className={styles.previewImage}>
      <img
        src="/public/png/previewImage/img-portfolio (9).jpg"
        alt="name image"
        className={styles.previewImage_img}
      />
    </div>
  );
};

export default PreviewImage;
