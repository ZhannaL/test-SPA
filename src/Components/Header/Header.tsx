import earth from '../../assets/earth.svg';
import { Button } from '../../DesignSystem/Button/Button';
import styles from './header.module.scss';

const title = 'Discover the vast expanses of ';
const title_last_word = 'space';
const subtitle = 'Where the possibilities are ';
const subtitle_last_word = 'endless!';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.text}>
        <div className={styles.title}>
          {title}
          <span className={styles.titleLastWord}>{title_last_word}</span>
        </div>
        <div className={styles.subtitle}>
          {subtitle}
          <span className={styles.subtitleLastWord}>{subtitle_last_word}</span>
        </div>
        <Button> learn more</Button>
      </div>
      <div className={styles.earth}>
        <img src={earth} alt="earth" />
      </div>
    </header>
  );
};
