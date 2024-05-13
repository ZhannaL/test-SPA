import styles from './menu.module.scss';

export const Menu = () => {
  const menuItems = (classname: string) => (
    <nav>
      <ul className={classname}>
        <li className={styles.menuItem}>
          <a aria-label="home" href="/#" className={styles.link}>
            <span className={styles.linkText}>Home</span>
          </a>
        </li>
        <li className={styles.menuItem}>
          <a aria-label="products" href="/#" className={styles.link}>
            <span className={styles.linkText}>Products</span>
          </a>
        </li>
        <li className={styles.menuItem}>
          <a
            aria-label="busket"
            href="/#"
            className={`${styles.busketIcon} ${styles.link}`}></a>
        </li>
      </ul>
    </nav>
  );

  return (
    <div className={styles.menu}>
      <input type="checkbox" id="menu" className={styles.input} />
      <label htmlFor="menu" className={styles.inputLabel}></label>
      {menuItems(styles.menuContent)}
      <div className={styles.drawer}>{menuItems(styles.drawerMenuContent)}</div>
    </div>
  );
};
