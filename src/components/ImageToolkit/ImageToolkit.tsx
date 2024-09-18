import styles from './ImageToolkit.module.scss';

import Rotate from './Toolkits/Rotate/Rotate';
import ConvertFormat from './Toolkits/ConvertFormat/ConvertFormat';
import Scale from './Toolkits/Scale/Scale';
import Handler from './Toolkits/Handler/Handler';

const ImageToolkit = () => {
  return (
    <div className={styles.imageToolkit}>
      <div className={styles.toolkits}>
        <Rotate />
        <ConvertFormat />
        <Scale />
      </div>
      <Handler />
    </div>
  );
};

export default ImageToolkit;
