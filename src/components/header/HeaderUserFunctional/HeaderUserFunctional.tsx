import styles from './HeaderUserFunctional.module.scss';

import IconSearch from '/public/svg/header/IconSearch';
import IconNotification from '/public/svg/header/IconNotification';
import IconSetting from '/public/svg/header/IconSetting';
import IconInfo from '/public/svg/header/IconInfo';
import { FaRegCircleUser as IconEmptyUserAvatar } from 'react-icons/fa6';

const HeaderUserFunctional = () => {
  return (
    <div className={styles.userFunctional}>
      <button className={styles.userFunctional_button}>Button</button>
      <ul className={styles.userListAction}>
        <li className={styles.userListAction_item}>
          <button className={styles.userListAction_button}>
            <IconSearch />
          </button>
        </li>
        <li className={styles.userListAction_item}>
          <button className={styles.userListAction_button}>
            <IconEmptyUserAvatar size="18.5px" />
          </button>
        </li>
        <li className={styles.userListAction_item}>
          <button className={styles.userListAction_button}>
            <IconInfo />
          </button>
        </li>
        <li className={styles.userListAction_item}>
          <button className={styles.userListAction_button}>
            <IconNotification />
          </button>
        </li>
        <li className={styles.userListAction_item}>
          <button className={styles.userListAction_button}>
            <IconSetting />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderUserFunctional;
