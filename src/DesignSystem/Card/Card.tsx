import { Button } from '../Button/Button';
import shadow from '../../assets/shadow.png';
import styles from './card.module.scss';

type Props = {
  title: string;
  subtitle: string;
  background: string;
  className?: string;
};

export const Card = ({ title, subtitle, background, className }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${shadow}), url(${background})`,
      }}
      className={`${styles.card} ${className}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <Button variant="outlined">learn more</Button>
    </div>
  );
};
