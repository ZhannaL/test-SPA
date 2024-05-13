import { Logo } from './NavigationItems/Logo';
import { Menu } from './NavigationItems/Menu';
import styles from './navigation.module.scss';

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Logo />
      <Menu />
    </div>
  );
};
