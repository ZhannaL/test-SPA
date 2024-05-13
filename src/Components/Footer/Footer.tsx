import rocket from '../../assets/rocket.svg';

import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={rocket} alt="rocket" />
      <div className={styles.footerText}> Exciting space adventure! </div>
    </footer>
  );
};
