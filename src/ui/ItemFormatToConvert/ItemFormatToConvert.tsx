import styles from './ItemFormatToConvert.module.scss';

interface IItemFormatToConvert {
  format: string;
}

const ItemFormatToConvert = ({ format }: IItemFormatToConvert) => {
  return (
    <li className={styles.formatsToConvert_item}>
      <label className={styles.formatsToConvert_label}>
        <input
          type="radio"
          name="convertFormat"
          value={format}
          className={styles.formatsToConvert_button}
        />
        <p className={styles.formatsToConvert_text}>{format}</p>
      </label>
    </li>
  );
};

export default ItemFormatToConvert;
