import styles from './ImageToolkit.module.scss';

import Rotate from './Toolkits/Rotate/Rotate';
import ConvertFormat from './Toolkits/ConvertFormat/ConvertFormat';
import Scale from './Toolkits/Scale/Scale';

const ImageToolkit = () => {
  return (
    <div className={styles.imageToolkit}>
      <div className={styles.toolkits}>
        <Rotate />
        <ConvertFormat />
        <Scale />
      </div>
    </div>
  );
};

export default ImageToolkit;
