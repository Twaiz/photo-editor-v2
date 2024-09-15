import styles from './HeaderNavigation.module.scss';

import IconEtc from '/public/svg/header/IconEtc';

const HeaderNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationList_item}>
          <a className={styles.navigationList_link} href="#">
            Label
          </a>
        </li>
        <li className={styles.navigationList_item}>
          <a className={styles.navigationList_link} href="#">
            Label
          </a>
        </li>
        <li className={styles.navigationList_item}>
          <a className={styles.navigationList_link} href="#">
            Label
          </a>
        </li>
        <li className={styles.navigationList_item}>
          <a className={styles.navigationList_link} href="#">
            Label
          </a>
        </li>
        <li className={styles.navigationList_item}>
          <a className={styles.navigationList_link} href="#">
            Label
          </a>
        </li>
        <li className={styles.navigationList_item}>
          <a className={styles.navigationList_link} href="#">
            Label
          </a>
        </li>
        <li className={styles.navigationList_item}>
          <a className={styles.navigationList_link} href="#">
            Label
          </a>
        </li>
        <li className={styles.navigationList_item}>
          <a className={styles.navigationList_link} href="#">
            Label
          </a>
        </li>
        <li className={styles.navigationList_item}>
          <a className={styles.navigationList_link} href="#">
            Label
          </a>
        </li>
        <li className={styles.navigationList_item}>
          <button className={styles.navigationList_button}>
            <IconEtc />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
