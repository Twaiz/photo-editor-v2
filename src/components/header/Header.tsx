import styles from './Header.module.scss';

import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import HeaderUserFunctional from './HeaderUserFunctional/HeaderUserFunctional';

import IconLogo from '/public/svg/header/IconLogo';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.projectInformation}>
        <div className={styles.projectInformation_logotip}>
          <IconLogo />
        </div>
        <h1 className={styles.projectInformation_appName}>App Name</h1>
      </div>

      <HeaderNavigation />

      <HeaderUserFunctional />
    </header>
  );
};

export default Header;
