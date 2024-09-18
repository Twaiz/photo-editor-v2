import { useState } from 'react';
import styles from './Scale.module.scss';

const Scale = () => {
  const [scale, setScale] = useState(0);

  return (
    <form className={styles.scale}>
      <h3 className={styles.scale_nameToolkit}>Scale</h3>
      <label className={styles.containerScale}>
        <input
          type="range"
          name="scale"
          className={styles.containerScale_rangeScale}
          min="0"
          max="100"
          value={scale}
          onChange={e => setScale(Number(e.target.value))}
        />
        {/* // TODO --> решить тут проблему с отображением current scale */}
        {scale !== 0 && (
          <span
            className={styles.containerScale_scale}
            style={{ left: `${scale}%` }}
          >
            {scale}%
          </span>
        )}
      </label>
      <div className={styles.diapazon}>
        <span className={styles.diapazon_minScale}>0</span>
        <span className={styles.diapazon_maxScale}>100</span>
      </div>
    </form>
  );
};

export default Scale;
