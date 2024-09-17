import styles from './ConvertFormat.module.scss';

import ItemFormatToConvert from '@/ui/ItemFormatToConvert/ItemFormatToConvert';

const ConvertFormat = () => {
  return (
    <form className={styles.convertFormat}>
      <div className={styles.convertTo}>
        {/* // TODO --> сделать кастомный checkbox */}
        <input
          type="checkbox"
          name="convertTo"
          className={styles.convertTo_checkbox}
        />
        <h3 className={styles.convertTo_nameToolkit}>Convert to</h3>
      </div>
      <ul className={styles.formatsToConvert}>
        <ItemFormatToConvert format="png" />
        <ItemFormatToConvert format="jpg" />
        <ItemFormatToConvert format="jpeg" />
        <ItemFormatToConvert format="tiff" />
        <ItemFormatToConvert format="pdf" />
        <ItemFormatToConvert format="svc" />
      </ul>
    </form>
  );
};

export default ConvertFormat;
