import styles from './Handler.module.scss';

import Button from '@/ui/Button/Button';

const Handler = () => {
  return (
    <div className={styles.handler}>
      <Button text="Upload" />
      <div className={styles.actionHandler}>
        <Button text="Process" />
        <Button text="Download" />
      </div>
    </div>
  );
};

export default Handler;
